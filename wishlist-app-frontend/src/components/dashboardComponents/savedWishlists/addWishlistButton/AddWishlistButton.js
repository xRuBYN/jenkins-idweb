import React from "react"
import { useDispatch } from "react-redux"
import { setDisplayAddWishlistForm } from "../../../../store/actions"
import { AddWishlistButton } from "../../../../pages/main-dashboard/styled"

const AddWishlistButtonComponent = ({ savedWishlists }) => {
  const dispatch = useDispatch()

  return (
    <AddWishlistButton
      savedWishlists={savedWishlists}
      id="dashboard-add-wishlist-button"
      onClick={() => dispatch(setDisplayAddWishlistForm(true))}
    >
      ADD WISHLIST
    </AddWishlistButton>
  )
}

export default AddWishlistButtonComponent
