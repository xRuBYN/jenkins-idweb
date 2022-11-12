import React, { useEffect, useState } from "react"
import PulseLoader from "react-spinners/PulseLoader"

import { Form, Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { paths } from "../../constants/constants"

import {
  StyledButton,
  StyledCreateAccount,
  StyledDiv,
  StyledInput,
  StyledLabel,
  StyledParagraph,
  RowInput,
} from "./styled"
import { allValidationFunc, noInfoInInputs } from "./utils/allValidations"

const LoginForm = ({
  sendLoginRequest,
  setEmail,
  setPassword,
  email,
  password,
  authError,
  userIsAuthenticated,
  displayLoader,
  setDisplayLoader,
}) => {
  const [inputError, setInputError] = useState(false)
  useEffect(() => {
    if (allValidationFunc(email, password)) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }, [email, password])

  const renderSmartButton = () => {
    if (authError) {
      return "Error"
    }
    if (userIsAuthenticated) {
      return "Success"
    }
    if (!displayLoader) {
      return "Log In"
    }
    if (displayLoader) {
      return (
        <PulseLoader color="black" loading={!userIsAuthenticated} size={15} />
      )
    }
  }

  return (
    <StyledDiv errors={inputError} id="login">
      <StyledCreateAccount id="login-title">
        Log In to Your GoldWish Account
      </StyledCreateAccount>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <Form autoComplete="on">
              <RowInput login>
                <StyledLabel errors={inputError} id="login-email-label">
                  Email
                </StyledLabel>
                <StyledInput
                  onChange={event => setEmail(event.target.value)}
                  type="email"
                  required
                  autoComplete="on"
                  id="login-email-form"
                />
              </RowInput>
              <RowInput>
                <StyledLabel errors={inputError} id="login-password-label">
                  Password
                </StyledLabel>
                <StyledInput
                  onChange={event => setPassword(event.target.value)}
                  type="password"
                  required
                  autoComplete="on"
                  id="login-password-form"
                />
              </RowInput>

              <StyledButton
                id="login-submit-button"
                type="submit"
                disabled={
                  allValidationFunc(email, password) ||
                  noInfoInInputs(email, password)
                }
                errors={inputError}
                onClick={() => {
                  sendLoginRequest()
                  setDisplayLoader(true)
                }}
                userIsAuthenticated={userIsAuthenticated}
                authError={authError}
              >
                {renderSmartButton()}
              </StyledButton>
            </Form>
            <StyledParagraph
              errors={inputError}
              id="login-dont-have-account-label"
            >
              Dont’ have the account yet?{" "}
              <Link to={paths.register}>Register now</Link>
            </StyledParagraph>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledDiv>
  )
}

export default LoginForm
