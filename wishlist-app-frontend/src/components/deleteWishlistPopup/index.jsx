import React from "react"
import { StyledModal, Title, StyledButton, ButtonsWrapper } from "./styled"

const PopUpDeleteWishlist = ({ isOpen, toggleModal, handleDelete }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <Title>Are you sure you want to delete this wishlist?</Title>
      <ButtonsWrapper>
        <StyledButton onClick={handleDelete}>Continue</StyledButton>
        <StyledButton backgroundColor="grey" onClick={toggleModal}>
          Cancel
        </StyledButton>
      </ButtonsWrapper>
    </StyledModal>
  )
}
export default PopUpDeleteWishlist
