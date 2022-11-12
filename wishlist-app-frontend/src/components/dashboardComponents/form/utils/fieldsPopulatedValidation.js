export const fieldsPopulatedValidation = args => {
  let title
  let description
  ;[title, description] = args

  const regex = /^[^-\s]/

  return !regex.test(title) || !regex.test(description)
}
