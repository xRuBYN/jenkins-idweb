import {
  isNotValidEmail,
  isNotValidPassword,
} from "../../common/utils/validation"

export const allValidationFunc = (email, password) =>
  isNotValidPassword(password) || isNotValidEmail(email)

export const noInfoInInputs = (email, password) => !email || !password
