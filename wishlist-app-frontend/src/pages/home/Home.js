import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { HomeH1, HomeH2, AddWishesButton, HomeImg, Wrapper } from "./styled"
import { StyledHome } from "../../components/common/StyledHome"

import HomeImgSrc from "../../img/HomeImg.png"
import { paths } from "../../constants/constants"

const Home = () => {
  const history = useHistory()
  const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated)
  // if user is authenticated, redirect to mainDashboard
  isAuthenticated && history.push(paths.mainDashboard)
  return (
    <StyledHome>
      <Wrapper>
        <HomeH1 id="main-wish-and-get-it-label">WISH & GET IT</HomeH1>
        <HomeH2 id="main-explicative-label">
          Write a list of gifts you would want to receive and share it with your
          friends and relatives
        </HomeH2>
        <AddWishesButton
          onClick={() => history.push(paths.login)}
          id="main-add-wishes-button"
        >
          add wishes now
        </AddWishesButton>
      </Wrapper>
      <HomeImg src={HomeImgSrc} alt="HomeImg" />
    </StyledHome>
  )
}

export default Home
