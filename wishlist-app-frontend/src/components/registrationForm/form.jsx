import React, { useEffect, useState } from "react"

import { Form } from "semantic-ui-react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import { useDispatch } from "react-redux"

import {
  StyledButton,
  StyledCreateAccount,
  StyledDiv,
  StyledDivInRow,
  StyledError,
  StyledInput,
  StyledLabel,
  StyledParagraph,
} from "./styled"
import { allValidationFunc, noInfoInInputs } from "./utils/allValidations"
import {
  isNotValidEmail,
  isNotValidPassword,
  doesPasswordsMatch,
} from "./utils/validation"
import { register } from "../../store/actions"
import { paths } from "../../constants/constants"

const CustomForm = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const dispatch = useDispatch()

  const [fullName, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmingPassword, setConfirmingPassword] = useState("")
  const [inputError, setInputError] = useState(false)

  useEffect(() => {
    if (allValidationFunc(email, password, confirmingPassword)) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }, [fullName, email, password, confirmingPassword])

  const handleRegisterButtonClick = async () => {
    dispatch(register(fullName, email, password, match, history))
  }

  return (
    <StyledDiv error={inputError}>
      <StyledCreateAccount>Create Your Goldwish Account</StyledCreateAccount>
      <Form id="data-registration-form">
        <StyledDivInRow>
          <StyledLabel errors={inputError}>Full Name</StyledLabel>
          <StyledInput
            onChange={event => setFullname(event.target.value)}
            type="text"
            id="fullname"
            required
          />
        </StyledDivInRow>
        <StyledDivInRow>
          <StyledLabel errors={inputError}>Email</StyledLabel>
          <StyledInput
            onChange={event => setEmail(event.target.value)}
            type="email"
            id="email"
            required
          />
        </StyledDivInRow>
        {isNotValidEmail(email) && (
          <StyledError>{isNotValidEmail(email)} </StyledError>
        )}
        <StyledDivInRow>
          <StyledLabel errors={inputError}>Password</StyledLabel>
          <StyledInput
            onChange={event => setPassword(event.target.value)}
            type="password"
            id="password"
            required
          />
        </StyledDivInRow>
        {isNotValidPassword(password) && (
          <StyledError> {isNotValidPassword(password)} </StyledError>
        )}
        <StyledDivInRow>
          <StyledLabel errors={inputError}>Confirm Password</StyledLabel>
          <StyledInput
            onChange={event => setConfirmingPassword(event.target.value)}
            type="password"
            id="password2"
            required
          />
        </StyledDivInRow>
        {doesPasswordsMatch(confirmingPassword, password) && (
          <StyledError>
            {doesPasswordsMatch(confirmingPassword, password)}
          </StyledError>
        )}
        <StyledButton
          id="data-registration-form-create-account-button"
          type="button"
          disabled={
            allValidationFunc(email, password, confirmingPassword) ||
            noInfoInInputs(fullName, email, password, confirmingPassword)
          }
          errors={inputError}
          onClick={handleRegisterButtonClick}
        >
          Create Account
        </StyledButton>
      </Form>
      <StyledParagraph>
        Have an account already? <Link to={paths.login}>Log In</Link>
      </StyledParagraph>
    </StyledDiv>
  )
}

export default CustomForm
