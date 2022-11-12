import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import WishListItem from "../../components/wishItem"
import AddWishItemForm from "../../components/addWishItemForm"
import {
  addWishItemAction,
  getWishesByWishlistID,
  deleteWishByID,
  setDisplayAddWishItemForm,
  getWishListById,
} from "../../store/actions"

import {
  Gradient,
  Wrapper,
  StyledHeader,
  WishListInfo,
  WishListTitle,
  WishListDescription,
  StyledDate,
  StyledButton,
  Confetti90,
  StyledBorder,
  Items,
  ListIsEmpty,
} from "./styled"

const WishListDashboard = () => {
  const dispatch = useDispatch()

  // ****************** WishList Data ******************
  const wishListID = useSelector(state => state.wishlistDashboard.wishListID)
  const wishItems = useSelector(state => state.wishlistDashboard.wishItems)
  const wishListData = useSelector(
    state => state.wishlistDashboard.wishListData
  )

  // ****************** Add Wish Form ******************
  const isOpen = useSelector(state => state.wishlistDashboard.form.isOpen)
  const wishlistNameError = useSelector(
    state => state.wishlistDashboard.form.wishlistNameError
  )
  const priceError = useSelector(
    state => state.wishlistDashboard.form.priceError
  )

  const error = wishlistNameError || priceError
  const formItem = useSelector(state => state.wishlistDashboard.form)
  const toggleModal = () => {
    dispatch(setDisplayAddWishItemForm(!isOpen))
  }

  // ****************** WishList Items ******************
  useEffect(() => {
    dispatch(getWishesByWishlistID(wishListID))
    dispatch(getWishListById(wishListID))
  }, [])

  const addWishItem = () => {
    const item = {
      title: formItem.wishlistName,
      description: formItem.description,
      image: "no image, sorry",
      link: formItem.link,
      price: formItem.price,
      currency: formItem.currency,
      priority: formItem.priority,
    }

    if (!error) dispatch(addWishItemAction(wishListID, item))
  }

  const handleDeleteClick = id => {
    dispatch(deleteWishByID(id, wishListID))
  }
  return (
    <Gradient id="wishlist-dashboard-gradient">
      <Wrapper id="wishlist-dashboard-wrapper">
        <AddWishItemForm
          toggleModal={toggleModal}
          isOpen={isOpen}
          addWishItem={addWishItem}
          error={error}
        />
        <StyledHeader id="wishlist-dashboard-styled-header">
          <StyledBorder>
            <WishListInfo id="wishlist-dashboard-wishlist-info">
              <WishListTitle id="wishlist-dashboard-wishlist-title">
                <Confetti90 />
                {wishListData?.title}
              </WishListTitle>
              <WishListDescription id="wishlist-dashboard-wishlist-description">
                {wishListData?.description}
              </WishListDescription>
              <StyledDate id="wishlist-dashboard-date">
                {wishListData?.date}
              </StyledDate>
            </WishListInfo>
          </StyledBorder>
          <StyledButton
            id="wishlist-dashboard-add-new-wish-button"
            onClick={toggleModal}
          >
            <span>
              Add new <br /> wish
            </span>
            <div>+</div>
          </StyledButton>
        </StyledHeader>

        {!wishItems.length && <ListIsEmpty>You don't have any items yet</ListIsEmpty>}

        <Items id="wishlist-dashboard-items">
          {wishItems.map(item => (
            <WishListItem
              key={item?.id}
              item={item}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </Items>
      </Wrapper>
    </Gradient>
  )
}

export default WishListDashboard
