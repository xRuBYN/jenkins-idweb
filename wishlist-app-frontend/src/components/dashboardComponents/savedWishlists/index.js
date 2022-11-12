import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  StyledWrapper,
  StyledContainer,
  StyledWishlistTitle,
  StyledWishlistDescription,
  StyledWishlistDate,
  StyledDates,
  StyledDaysLeft,
  StyledImage,
} from "./styled"

import { daysLeft } from "./utils/daysLeft"
import { getWishlistCreator } from "../../../store/actions"
import { ConfettiMinus90 } from "../form/styled"
import ConfettiMinus from "../../../img/Confetti 90.png"
import edit from "../../../img/edit.svg"
import AddWishlistButtonComponent from "./addWishlistButton/AddWishlistButton"

const SavedWishlists = ({ handleGoToWishListDashboard }) => {
  const wishlists = useSelector(state => state?.mainDashboard?.wishlists)
  const dispatch = useDispatch()

  return (
    <StyledWrapper>
      {wishlists.map(el => (
        <StyledContainer key={el.id} id={`wishlist-container-${el.id}`}>
          <StyledImage
            src={edit}
            alt="Edit"
            onClick={() => {
              dispatch(getWishlistCreator(el.id, true))
            }}
          />
          <div onClick={() => handleGoToWishListDashboard(el.id)}>
            <StyledWishlistTitle>{el.title}</StyledWishlistTitle>
            <StyledWishlistDescription>
              {el.description}
            </StyledWishlistDescription>
            <StyledDates>
              <StyledWishlistDate>{el.date}</StyledWishlistDate>
              <StyledDaysLeft>{daysLeft(el.date)}</StyledDaysLeft>
            </StyledDates>
          </div>
          <ConfettiMinus90 src={ConfettiMinus} savedWishlists />
        </StyledContainer>
      ))}
      <AddWishlistButtonComponent savedWishlists />
    </StyledWrapper>
  )
}

export default SavedWishlists
