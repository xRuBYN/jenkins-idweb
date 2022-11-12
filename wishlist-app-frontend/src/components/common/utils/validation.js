export function isNotValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(email).toLowerCase()) && email) {
    return "Please, provide a valid email address"
  }
}

export function isNotValidPassword(password) {
  const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$/
  // const re = /^\w*$/
  if (!re.test(password) && password) {
    return "The password should be 6 digits or longer, contain a number, a lower case and an upper case letter"
  }
}

export function doesPasswordsMatch(password, password2) {
  if (password !== password2 && password) {
    return "Passwords should match"
  }
}
