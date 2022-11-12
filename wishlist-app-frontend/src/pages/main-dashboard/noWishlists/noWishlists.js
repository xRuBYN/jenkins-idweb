import React from "react"
import { useSelector } from "react-redux"
import { StyledParagraph } from "./styled"

const NoWishlistsParagraph = () => {
  const wishlists = useSelector(state => state?.mainDashboard?.wishlists)

  return !wishlists.length ? (
    <StyledParagraph>
      Currently you don't have any saved wishlists
    </StyledParagraph>
  ) : null
}

export default NoWishlistsParagraph
