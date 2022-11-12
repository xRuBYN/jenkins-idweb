import React from "react"
import { bool, func } from "prop-types"
import { StyledBurger } from "./styled"

const Burger = ({ open, handleBurgerClick }) => {
  return (
    <StyledBurger open={open} onClick={handleBurgerClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  handleBurgerClick: func.isRequired,
}

export default Burger
