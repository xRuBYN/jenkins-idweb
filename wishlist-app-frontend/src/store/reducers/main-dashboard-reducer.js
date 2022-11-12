import {
  ADD_WISHLIST,
  SET_DISPLAY_ADD_WISHLIST_FORM,
  SET_DISPLAY_EDIT_WISHLIST_FORM,
  SET_DISPLAY_WISHLISTS,
  DISPLAY_PARTICULAR_WISHLIST,
  DISPLAY_DELETE_POPUP,
} from "../types"

const initialState = {
  wishlists: [],
  wishlist: {},
  displayAddWishlistForm: false,
  displayEditWishlistForm: false,
  displayDeletePopup: false,
}

const mainDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISHLIST: {
      return {
        ...state,
        wishlists: [...state.wishlists, action.wishlist],
      }
    }
    case SET_DISPLAY_ADD_WISHLIST_FORM: {
      return {
        ...state,
        displayAddWishlistForm: action.bool,
      }
    }
    case SET_DISPLAY_EDIT_WISHLIST_FORM: {
      return {
        ...state,
        displayEditWishlistForm: action.bool,
        editWishlist: action.id,
      }
    }
    case SET_DISPLAY_WISHLISTS: {
      return {
        ...state,
        wishlists: action.wishlists,
      }
    }
    case DISPLAY_PARTICULAR_WISHLIST: {
      return {
        ...state,
        wishlist: action.wishlist,
      }
    }
    case DISPLAY_DELETE_POPUP: {
      return {
        ...state,
        displayDeletePopup: action.bool,
      }
    }
    default:
      return state
  }
}

export default mainDashboardReducer
