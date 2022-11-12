import React from "react"
import { useSelector } from "react-redux"
import { bool } from "prop-types"
import { StyledMenu, StyledLink } from "./styled"

const Menu = ({ open, setOpen }) => {
  const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated)
  return (
    <StyledMenu open={open}>
      {isAuthenticated ? null : (
        <StyledLink exact to="/register" onClick={() => setOpen(false)}>
          Register
        </StyledLink>
      )}
      <StyledLink exact to="/about-us" onClick={() => setOpen(false)}>
        About us
      </StyledLink>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
