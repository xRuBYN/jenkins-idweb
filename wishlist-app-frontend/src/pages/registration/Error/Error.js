import React, { useEffect } from "react"
import { useHistory } from "react-router"
import { StyledRegistration, StyledImage } from "../styledErrorSuccess"
import error from "../../../img/close.png"
import { paths } from "../../../constants/constants"

const Error = () => {
  const history = useHistory()

  useEffect(() => {
    const timeout = setTimeout(() => history.push(paths.register), 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <StyledRegistration id="error-registration-message">
      <StyledImage src={error} />
      Your registration failed. User already exists
    </StyledRegistration>
  )
}

export default Error
