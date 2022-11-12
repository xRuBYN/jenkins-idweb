import axios from "axios"
import moment from "moment"
import { url } from "../../../../constants/constants"

export const sendWishlistRequest = args => {
  let id
  let title
  let type
  let date
  let description
  let privacy
  let email

  if (typeof args[0] === "number") {
    ;[id, title, type, date, description, privacy] = args
  } else {
    ;[title, type, date, description, privacy, email] = args
  }

  if (id) {
    const obj = { date, description, privacy, title, type }
    const token = localStorage.getItem("token")

    return new Promise((resolve, reject) => {
      axios
        .put(`${url.wishlistsUrl}/${id}`, obj, {
          headers: {
            token: `Bearer ${token}`,
          },
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
  const formattedDate = moment(date).format().substring(0, 10)

  const obj = { title, type, description, date: formattedDate, privacy }
  return new Promise((resolve, reject) => {
    axios
      .post(`${url.wishlistsUrl}/${email}/wishlist`, obj)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
