import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useHistory } from "react-router"
import NoWishlistsParagraph from "./noWishlists/noWishlists"
import classes from "../commonCss/dashboard.module.css"
import { Container } from "./styled"
import WishlistForm from "../../components/dashboardComponents/form/wishlistForm"
import Backdrop from "../../components/dashboardComponents/backdrop/backdrop"
import { displayWishlists, goToWishListDashboard } from "../../store/actions"
import { paths } from "../../constants/constants"
import SavedWishlists from "../../components/dashboardComponents/savedWishlists"
import { Aligner } from "./noWishlists/styled"
import EditWishlistForm from "../../components/dashboardComponents/editWishlistForm/editWishlist"
import AddWishlistButtonComponent from "../../components/dashboardComponents/savedWishlists/addWishlistButton/AddWishlistButton"

const Dashboard = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated)
  !isAuthenticated && history.push(paths.landingPage)

  const savedWishlists = useSelector(state => state?.mainDashboard?.wishlists)
  const isFormDisplayed = useSelector(
    state => state?.mainDashboard?.displayAddWishlistForm
  )
  const isEditFormDisplayed = useSelector(
    state => state?.mainDashboard?.displayEditWishlistForm
  )

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(displayWishlists())
    }
    fetchData()
  }, [])

  let formContent
  let notFormContent

  const handleGoToWishListDashboard = wishListID => {
    dispatch(goToWishListDashboard(wishListID))
    history.push(paths.wishListDashboard)
  }

  if (isFormDisplayed) {
    formContent = (
      <>
        <Backdrop show />
        <WishlistForm />
      </>
    )
    notFormContent = null
  } else if (isEditFormDisplayed) {
    formContent = (
      <>
        <Backdrop show />
        <EditWishlistForm />
      </>
    )
    notFormContent = null
  } else if (savedWishlists.length) {
    notFormContent = (
      <>
        <SavedWishlists
          handleGoToWishListDashboard={handleGoToWishListDashboard}
        />
      </>
    )
    formContent = null
  } else {
    notFormContent = (
      <>
        <NoWishlistsParagraph />
        <AddWishlistButtonComponent />
      </>
    )
    formContent = null
  }

  return (
    <div className={classes.gradient}>
      <Aligner>
        <Container>
          {notFormContent}
          {formContent}
        </Container>
      </Aligner>
    </div>
  )
}

export default Dashboard
