import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { paths } from "../../../constants/constants"

import success from "../../../img/check.png"
import { StyledRegistration, StyledImage } from "../styledErrorSuccess"

const Success = () => {
  const history = useHistory()

  useEffect(() => {
    const timeout = setTimeout(() => history.push(paths.mainDashboard), 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <StyledRegistration id="success-registration-message">
      <StyledImage src={success} id="congrats-image" />
      <span id="congrats-text">
        Congratulations, <br /> Your registration was successful!
      </span>
    </StyledRegistration>
  )
}

export default Success
