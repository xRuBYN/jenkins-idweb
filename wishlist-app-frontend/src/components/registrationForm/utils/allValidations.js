import {
  doesPasswordsMatch,
  isNotValidEmail,
  isNotValidPassword,
} from "../../common/utils/validation"

export const allValidationFunc = (email, password, confirmingPassword) =>
  isNotValidPassword(password) ||
  isNotValidEmail(email) ||
  doesPasswordsMatch(password, confirmingPassword)

export const noInfoInInputs = (fullName, email, password, confirmingPassword) =>
  !fullName || !email || !password || !confirmingPassword
