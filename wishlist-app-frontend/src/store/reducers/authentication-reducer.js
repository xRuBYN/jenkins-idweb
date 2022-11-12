import jwt_decode from "jwt-decode"

import { AUTHENTICATE, SET_REGISTRATION_ERROR, LOGOUT } from "../types"

const isTokenValid = () => {
  const token = localStorage.getItem("token")
  const decodedTokenExpTime = new Date(0).setUTCSeconds(jwt_decode(token).exp)
  const dateNow = new Date().getTime()

  return dateNow < decodedTokenExpTime
}

const initialState = {
  registrationError: "",
  email: "",
  isAuthenticated: !!(localStorage.getItem("token") && isTokenValid()),
  token: localStorage.getItem("token"),
}

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION_ERROR: {
      return {
        ...state,
        registrationError: action.error,
      }
    }

    case AUTHENTICATE: {
      localStorage.setItem("token", action.token)
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      }
    }

    default:
      return state
  }
}

export default authenticationReducer
