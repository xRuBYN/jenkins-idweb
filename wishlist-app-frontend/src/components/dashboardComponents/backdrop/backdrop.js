import React from "react"
import { StyledBackdrop } from "./styled"

const Backdrop = ({ show }) => (show ? <StyledBackdrop id="form-backdrop"/> : null)

export default Backdrop
