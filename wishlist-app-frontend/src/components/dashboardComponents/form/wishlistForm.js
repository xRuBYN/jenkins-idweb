import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Select } from "semantic-ui-react"
import jwt_decode from "jwt-decode"
import {
  StyledButton,
  StyledDiv,
  StyledDivInRow,
  StyledLabel,
  StyledCreateAccount,
  StyledInput,
} from "../../registrationForm/styled"
import {
  Confetti90,
  ConfettiMinus90,
  Exit,
  DatePick,
  StyledForm,
  StyledTextarea,
  Wrapper,
} from "./styled"
import confetti90 from "../../../img/Confetti 90.png"
import confettiMinus90 from "../../../img/Confetti -90.png"
import { fieldsPopulatedValidation } from "./utils/fieldsPopulatedValidation"
import { typesOfWishlists, privacyTypes } from "./utils/const"
import {
  deleteWishListByID,
  getUpdatedWishlistsCreator,
  setDisplayAddWishlistForm,
  setDisplayDeletePopup,
  setDisplayEditWishlistForm,
} from "../../../store/actions"
import PopUpDeleteWishlist from "../../deleteWishlistPopup"

const WishlistForm = ({ edit }) => {
  const dispatch = useDispatch()
  const displayDeletePopup = useSelector(
    state => state?.mainDashboard?.displayDeletePopup
  )
  const toggleModal = () => {
    dispatch(setDisplayDeletePopup(!displayDeletePopup))
  }

  const wishlistToEditId = useSelector(
    state => state?.mainDashboard?.wishlist?.id
  )
  const wishlistTitleToEdit = useSelector(
    state => state?.mainDashboard?.wishlist?.title
  )
  const wishlistTypeToEdit = useSelector(
    state => state?.mainDashboard?.wishlist?.type
  )
  const wishlistDescriptionToEdit = useSelector(
    state => state?.mainDashboard?.wishlist?.description
  )
  const wishlistDateToEdit = useSelector(
    state => state?.mainDashboard?.wishlist?.date
  )
  const wishlistPrivacyToEdit = useSelector(
    state => state?.mainDashboard?.wishlist?.privacy
  )

  const [title, setTitle] = useState("")
  const [type, setType] = useState(typesOfWishlists[0].text)
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(new Date())
  const [privacy, setPrivacy] = useState(privacyTypes[0].text)

  const [editedTitle, setEditedTitle] = useState(wishlistTitleToEdit)
  const [editedType, setEditedType] = useState(wishlistTypeToEdit)
  const [editedDescription, setEditedDescription] = useState(
    wishlistDescriptionToEdit
  )
  const [editedDate, setEditedDate] = useState(wishlistDateToEdit)
  const [editedPrivacy, setEditedPrivacy] = useState(wishlistPrivacyToEdit)

  const userEmail = useSelector(state => jwt_decode(state?.auth?.token)?.sub)

  const closeWishlist = () => {
    dispatch(setDisplayAddWishlistForm(false))
    dispatch(setDisplayEditWishlistForm(false))
  }

  const handleDeleteWishList = () => {
    dispatch(deleteWishListByID(wishlistToEditId))
  }

  let wishlistTitle
  let saveWishlistButtonText
  let deleteButton

  edit
    ? (wishlistTitle = "Edit Wishlist")
    : (wishlistTitle = "Add New Wishlist")

  edit
    ? (saveWishlistButtonText = "Save Changes")
    : (saveWishlistButtonText = "Save Wishlist")

  edit
    ? (deleteButton = (
        <StyledButton
          color="delete"
          onClick={() => dispatch(setDisplayDeletePopup(true))}
        >
          Delete Wishlist
        </StyledButton>
      ))
    : (deleteButton = null)

  let titleHandler
  let typeHandler
  let descriptionHandler
  let dateHandler
  let privacyHandler

  let defaultTitle
  let defaultType
  let defaultDescription
  let defaultDate
  let defaultPrivacy
  let requestArguments
  let validationArguments

  if (edit) {
    titleHandler = event => setEditedTitle(event.target.value)
    typeHandler = (event, data) => setEditedType(data.value)
    descriptionHandler = event => setEditedDescription(event.target.value)
    dateHandler = (event, data) => setEditedDate(data.value)
    privacyHandler = (event, data) => setEditedPrivacy(data.value)

    defaultTitle = editedTitle
    defaultType = wishlistTypeToEdit
    defaultDescription = editedDescription
    defaultDate = wishlistDateToEdit
    wishlistPrivacyToEdit === "PUBLIC"
      ? (defaultPrivacy = privacyTypes[1].value)
      : (defaultPrivacy = privacyTypes[0].value)
    requestArguments = [
      wishlistToEditId,
      editedTitle,
      editedType,
      editedDate,
      editedDescription,
      editedPrivacy,
    ]
    validationArguments = [editedTitle, editedDescription]
  } else {
    titleHandler = event => setTitle(event.target.value)
    typeHandler = (event, data) => setType(data.value)
    descriptionHandler = event => setDescription(event.target.value)
    dateHandler = (event, data) => setDate(data.value)
    privacyHandler = (event, data) => setPrivacy(data.value)

    defaultTitle = title
    defaultType = typesOfWishlists[0].value
    defaultDescription = description
    defaultDate = date
    defaultPrivacy = privacyTypes[0].value
    requestArguments = [title, type, date, description, privacy, userEmail]
    validationArguments = [title, description]
  }

  return (
    <StyledDiv wishlist="true">
      <PopUpDeleteWishlist
        isOpen={displayDeletePopup}
        toggleModal={toggleModal}
        handleDelete={handleDeleteWishList}
        id="main-dashboard-form-popup"
      />
      <Wrapper wishlist>
        <Exit id="close-wishlist-form" onClick={closeWishlist}>
          &#10006;
        </Exit>
        <StyledCreateAccount id="wishlist-form-label">
          {wishlistTitle}
        </StyledCreateAccount>
        <StyledForm autoComplete="off" id="data-wishlist-form">
          <Confetti90 src={confetti90} />
          <ConfettiMinus90 src={confettiMinus90} />
          <StyledDivInRow wishlist="true">
            <StyledLabel wishlist="true" id="main-dashboard-form-label-title">
              Title
            </StyledLabel>
            <StyledInput
              wishlist="true"
              type="text"
              required
              onChange={event => titleHandler(event)}
              id="data-wishlist-form-title"
              value={defaultTitle}
            />
          </StyledDivInRow>
          <StyledDivInRow wishlist="true">
            <StyledLabel wishlist="true" id="main-dashboard-form-label-type">
              Type
            </StyledLabel>
            <Select
              defaultValue={defaultType}
              options={typesOfWishlists}
              onChange={(event, data) => typeHandler(event, data)}
              id="data-wishlist-form-type"
            />
          </StyledDivInRow>
          <StyledDivInRow wishlist="true">
            <StyledLabel wishlist="true" id="main-dashboard-form-label-date">
              Date
            </StyledLabel>
            <DatePick
              placeholder={defaultDate}
              datePickerOnly="true"
              minDate={new Date()}
              autoComplete="off"
              onChange={(event, data) => dateHandler(event, data)}
              id="data-wishlist-form-date"
            />
          </StyledDivInRow>
          <StyledDivInRow wishlist="true">
            <StyledLabel
              wishlist="true"
              id="main-dashboard-form-label-description"
            >
              Description
            </StyledLabel>
            <StyledTextarea
              required
              rows="3"
              value={defaultDescription}
              onChange={event => descriptionHandler(event)}
              id="data-wishlist-form-description"
            />
          </StyledDivInRow>
          <StyledDivInRow wishlist="true">
            <StyledLabel wishlist="true" id="main-dashboard-form-label-privacy">
              Privacy
            </StyledLabel>
            <Select
              options={privacyTypes}
              defaultValue={defaultPrivacy}
              onChange={(event, data) => privacyHandler(event, data)}
              id="data-wishlist-form-privacy"
            />
          </StyledDivInRow>
          <StyledButton
            id="data-wishlist-form-save-button"
            disabled={fieldsPopulatedValidation(validationArguments)}
            onClick={() => {
              dispatch(getUpdatedWishlistsCreator(requestArguments))
              closeWishlist()
              const timeout = setTimeout(() => closeWishlist(), 2000)
              return () => {
                clearTimeout(timeout)
              }
            }}
          >
            {saveWishlistButtonText}
          </StyledButton>
          {deleteButton}
        </StyledForm>
      </Wrapper>
    </StyledDiv>
  )
}

export default WishlistForm
