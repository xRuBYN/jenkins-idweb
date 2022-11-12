import React, { useState, useRef } from "react"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
import { useOnClickOutside } from "../../hooks"

const MenuAndBurger = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  // this statement disables scroll if menu is open
  if (open) {
    document.body.style.overflowY = "hidden"
    document.body.style.maxHeight = "100vh"
  } else {
    document.body.style.overflowY = "auto"
    document.body.style.maxHeight = "none"
  }

  // opens menu
  const handleBurgerClick = () => setOpen(!open)

  return (
    <div ref={node}>
      <Burger open={open} handleBurgerClick={handleBurgerClick} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

export default MenuAndBurger
