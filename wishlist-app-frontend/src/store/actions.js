import axios from "axios"
import { paths, url } from "../constants/constants"
import {
  AUTHENTICATE,
  SET_REGISTRATION_ERROR,
  SET_DISPLAY_ADD_WISHLIST_FORM,
  LOGOUT,
  SET_DISPLAY_EDIT_WISHLIST_FORM,
  SET_DISPLAY_WISHLISTS,
  DISPLAY_PARTICULAR_WISHLIST,
  SET_DISPLAY_ADD_WISH_ITEM_FORM,
  CHANGE_FORM,
  ADD_WISH_ITEM,
  GET_ALL_WISHES_BY_WISHLIST_ID,
  DISPLAY_DELETE_POPUP,
  GO_TO_WISHLIST_DASHBOARD,
  SET_WISHLIST_DATA,
} from "./types"
import { sendWishlistRequest } from "../components/dashboardComponents/form/utils/sendWishlistRequest"

export const logout = () => {
  localStorage.removeItem("token")
  return {
    type: LOGOUT,
  }
}

export const authenticate = (
  email,
  password,
  setAuthError,
  setDisplayLoader,
  history
) => {
  return dispatch => {
    const obj = { email, password }
    axios
      .post(url.loginUrl, obj)
      .then(res => {
        dispatch({
          type: AUTHENTICATE,
          token: res.data?.token,
        })
        localStorage.setItem("token", res.data?.token)
        setAuthError && setAuthError(false)
        history && history.push(paths.mainDashboard)
      })
      .catch(err => {
        console.error("Auth error: ", err)
        setDisplayLoader && setDisplayLoader(false)
        setAuthError && setAuthError(true)
      })
  }
}

export const register = (fullName, email, password, match, history) => {
  return dispatch => {
    const obj = { fullName, email, password }
    axios
      .post(url.registerUrl, obj)
      .then(() => {
        dispatch(authenticate(email, password))
        history.push(`${match.url}${paths.success}`)
      })
      .catch(error => {
        dispatch({ type: SET_REGISTRATION_ERROR, error })
        history.push(`${match.url}${paths.error}`)
      })
  }
}

export const displayWishlists = () => {
  return dispatch => {
    const token = localStorage.getItem("token")
    axios
      .get(url.wishlistsUrl, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then(({ data = [] }) => {
        const wishlists = data
        dispatch({
          type: SET_DISPLAY_WISHLISTS,
          wishlists,
        })
      })
  }
}

export const loadWishlist = id => async dispatch => {
  const token = localStorage.getItem("token")
  const response = await axios.get(`${url.wishlistsUrl}/wishlist/${id}`, {
    headers: {
      token: `Bearer ${token}`,
    },
  })

  const identifier = { id }
  const result = { ...identifier, ...response.data }

  dispatch({
    type: DISPLAY_PARTICULAR_WISHLIST,
    wishlist: result,
  })
}

export const setDisplayEditWishlistForm = bool => dispatch => {
  return dispatch({
    type: SET_DISPLAY_EDIT_WISHLIST_FORM,
    bool,
  })
}

export const getWishlistCreator = (id, bool) => {
  return async dispatch => {
    await dispatch(loadWishlist(id))
    await dispatch(setDisplayEditWishlistForm(bool))
  }
}

export const getUpdatedWishlistsCreator = requestArguments => {
  return async dispatch => {
    await sendWishlistRequest(requestArguments).then(res => {
      dispatch(displayWishlists())
    })
  }
}

export const setDisplayAddWishlistForm = bool => ({
  type: SET_DISPLAY_ADD_WISHLIST_FORM,
  bool,
})

export const setDisplayDeletePopup = bool => ({
  type: DISPLAY_DELETE_POPUP,
  bool,
})

export const deleteWishListByID = id => {
  return dispatch => {
    axios
      .delete(`${url.wishlistsUrl}/${id}`)
      .then(res => {
        dispatch(setDisplayEditWishlistForm(false))
        dispatch(setDisplayDeletePopup(false))
        dispatch(displayWishlists())
      })
      .catch(err => {
        console.log("deleteWishListByID", err)
      })
  }
}

export const getWishListById = wishListID => {
  return dispatch => {
    axios
      .get(`${url.wishlistsUrl}/wishlist/${wishListID}`)
      .then(res => {
        dispatch({
          type: SET_WISHLIST_DATA,
          payload: res.data,
        })
      })
      .catch(err => {
        console.log("getWishListById", err)
      })
  }
}

export const goToWishListDashboard = wishListID => ({
  type: GO_TO_WISHLIST_DASHBOARD,
  payload: wishListID,
})

export const changeAddNewWishForm = payload => {
  return {
    type: CHANGE_FORM,
    payload,
  }
}

export const setDisplayAddWishItemForm = bool => {
  return {
    type: SET_DISPLAY_ADD_WISH_ITEM_FORM,
    payload: bool,
  }
}

export const addWishItemAction = (wishListID, item) => {
  return dispatch => {
    axios
      .post(url.wishesByID(wishListID), item)
      .then(res => {
        dispatch(getWishesByWishlistID(wishListID))
        dispatch(setDisplayAddWishItemForm(false))
      })
      .catch(err => {
        console.log("addWishItemAction", err)
      })
  }
}

export const getWishesByWishlistID = wishListID => {
  return dispatch => {
    axios
      .get(url.wishesByWishListIDUrl(wishListID))
      .then(res => {
        dispatch({
          type: GET_ALL_WISHES_BY_WISHLIST_ID,
          payload: res.data,
        })
      })
      .catch(err => {
        console.log("getWishesByWishlistID", err)
        if (err?.response?.status === 400)
          dispatch({
            type: GET_ALL_WISHES_BY_WISHLIST_ID,
            payload: [],
          })
      })
  }
}

export const deleteWishByID = (wishID, wishListID) => {
  return dispatch => {
    axios
      .delete(url.wishesByID(wishID))
      .then(res => {
        console.log("delete ok")
        dispatch(getWishesByWishlistID(wishListID))
      })
      .catch(err => {
        console.log("deleteWishByID", err)
      })
  }
}
