import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeAddNewWishForm } from "../../store/actions"

import {
  StyledModal,
  ModalTitle,
  Inputs,
  Row,
  Label,
  Input,
  TextArea,
  StyledSelect,
  Button,
  Exit,
} from "./styled"

const AddWishItemForm = ({ toggleModal, isOpen, addWishItem, error }) => {
  const dispatch = useDispatch()

  const wishlistName = useSelector(
    state => state.wishlistDashboard.form.wishlistName
  )

  const link = useSelector(state => state.wishlistDashboard.form.link)
  const price = useSelector(state => state.wishlistDashboard.form.price)
  const currency = useSelector(state => state.wishlistDashboard.form.currency)
  const description = useSelector(
    state => state.wishlistDashboard.form.description
  )
  const priority = useSelector(state => state.wishlistDashboard.form.priority)
  const handleChange = (e, inputName) => {
    dispatch(
      changeAddNewWishForm({
        inputName,
        value: e.target.value,
      })
    )
  }
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <ModalTitle id="wishlist-dashboard-modal-title">Add New Wish</ModalTitle>
      <Exit onClick={toggleModal} id="wishlist-dashboard-modal-exit">
        &#10006;
      </Exit>
      <Inputs id="wishlist-dashboard-modal-inputs">
        <Row>
          <Label id="wishlist-dashboard-modal-label-wish-name">Wish Name</Label>
          <Input
            value={wishlistName}
            onChange={e => handleChange(e, "wishlistName")}
            id="wishlist-dashboard-modal-input-wish-name"
            required
          />
        </Row>
        <Row>
          <Label id="wishlist-dashboard-modal-label-link">Link</Label>
          <Input
            id="wishlist-dashboard-modal-input-link"
            value={link}
            onChange={e => handleChange(e, "link")}
          />
        </Row>
        <Row>
          <Label id="wishlist-dashboard-modal-label-price">Price</Label>

          <Input
            id="wishlist-dashboard-modal-input-price"
            type="number"
            value={price}
            onChange={e => handleChange(e, "price")}
          />
        </Row>
        <Row>
          <Label id="wishlist-dashboard-modal-label-currency">Currency</Label>
          <StyledSelect
            id="wishlist-dashboard-modal-input-currency"
            value={currency}
            onChange={e => handleChange(e, "currency")}
          >
            <option>MDL</option>
            <option>EUR</option>
            <option>USD</option>
          </StyledSelect>
        </Row>
        <Row>
          <Label id="wishlist-dashboard-modal-label-description">
            Description
          </Label>
          <TextArea
            id="wishlist-dashboard-modal-input-description"
            value={description}
            onChange={e => handleChange(e, "description")}
          />
        </Row>
        <Row>
          <Label id="wishlist-dashboard-modal-label-priority">Priority</Label>
          <StyledSelect
            id="wishlist-dashboard-modal-input-priority"
            value={priority}
            onChange={e => handleChange(e, "priority")}
          >
            <option>Must Have</option>
            <option>Nice to Have</option>
            <option>Want to Have</option>
          </StyledSelect>
        </Row>
      </Inputs>
      <Button error={error} onClick={addWishItem}>
        Add Wish
      </Button>
    </StyledModal>
  )
}

export default AddWishItemForm
