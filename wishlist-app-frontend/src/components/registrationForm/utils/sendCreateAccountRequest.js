import axios from "axios"
import { url } from "../../../constants/constants"

export const sendCreateAccountRequest = (fullName, email, password) => {
  let errResponse = null

  const obj = { fullName, email, password }
  axios
    .post(url.registerUrl, obj)
    .then(response => {
      if (response.status >= 400) errResponse = error.message
    })
    .catch(error => {
      if (error.response) {
        // Request made and server responded
        errResponse = error.response.data.message
      } else if (error.request) {
        // The request was made but no response was received
        errResponse = error.request
      } else {
        errResponse = error.message
      }
      return errResponse
    })
  return errResponse
}
