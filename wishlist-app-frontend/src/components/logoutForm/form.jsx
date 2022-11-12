import React from "react"

import { Form, Grid } from "semantic-ui-react"
import { Wrapper, StyledButton, StyledCreateAccount, StyledDiv } from "./styled"

const LogoutForm = ({ logout, userFullName }) => {
  return (
    <StyledDiv>
      <StyledCreateAccount>
        Hello {userFullName || "dear user"}
      </StyledCreateAccount>
      <StyledButton type="submit" onClick={() => logout()}>
        Logout
      </StyledButton>
    </StyledDiv>
  )
}

export default LogoutForm
