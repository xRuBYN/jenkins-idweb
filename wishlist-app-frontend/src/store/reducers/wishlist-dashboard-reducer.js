import {
  ADD_WISH_ITEM,
  CHANGE_FORM,
  // DELETE_ITEM_BY_ID,
  GET_ALL_WISHES_BY_WISHLIST_ID,
  SET_DISPLAY_ADD_WISH_ITEM_FORM,
  GO_TO_WISHLIST_DASHBOARD,
  SET_WISHLIST_DATA,
} from "../types"

const initialState = {
  wishListID: null,
  wishListData: {},
  wishItems: [],
  form: {
    wishlistName: "",
    link: "",
    price: "0.00",
    currency: "MDL",
    description: "",
    priority: "Must Have",
    wishlistNameError: true,
    priceError: false,
    isOpen: false,
  },
}

const wishlistDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM: {
      const { payload } = action
      let { wishlistNameError } = state.form
      let { priceError } = state.form
      if (payload.inputName === "wishlistName") {
        if (payload.value?.length <= 2) wishlistNameError = true
        else wishlistNameError = false
      }
      if (payload.inputName === "price") {
        if (
          payload.value >= 1000000 ||
          payload.value < 0 ||
          payload.value === ""
        )
          priceError = true
        else priceError = false
      }
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.inputName]: action.payload.value,
          wishlistNameError,
          priceError,
        },
      }
    }

    case ADD_WISH_ITEM: {
      return {
        ...state,
        form: { ...initialState.form },
      }
    }

    case GET_ALL_WISHES_BY_WISHLIST_ID: {
      return {
        ...state,
        wishItems: action.payload,
      }
    }

    case SET_DISPLAY_ADD_WISH_ITEM_FORM: {
      return {
        ...state,
        form: { ...initialState.form, isOpen: action.payload },
      }
    }
    case GO_TO_WISHLIST_DASHBOARD: {
      return {
        ...state,
        wishListID: action.payload,
      }
    }
    case SET_WISHLIST_DATA: {
      return {
        ...state,
        wishListData: action.payload,
      }
    }

    default:
      return state
  }
}

export default wishlistDashboardReducer
