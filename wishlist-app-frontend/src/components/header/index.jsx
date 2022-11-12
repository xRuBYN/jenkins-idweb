import React from "react"
import { useSelector } from "react-redux"

import { useHistory } from "react-router-dom"
import LogoSrc from "../../img/logo.png"

import { paths } from "../../constants/constants"
import MenuAndBurger from "./MenuAndBurger"
import {
  Column,
  DarkButton,
  FlexWrapper,
  LightButton,
  LogoImg,
  LogoText,
  NavMenu,
  Row,
  StyledLink,
  CursorPointer,
  ButtonWrapper,
} from "./styled"

const Header = () => {
  const history = useHistory()
  const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated)

  const renderNavLinks = () => {
    if (!isAuthenticated) {
      return (
        <>
          <StyledLink exact to={paths.landingPage} id="header-main-page-link">
            Main Page
          </StyledLink>
          <StyledLink exact to="/about-us" id="header-about-us-link">
            About us
          </StyledLink>
        </>
      )
    }
    return (
      <>
        <StyledLink exact to={paths.mainDashboard} id="header-dashboard-link">
          Dashboard
        </StyledLink>
        <StyledLink exact to="/about-us" id="header-about-us-link">
          About us
        </StyledLink>
      </>
    )
  }

  const renderButtons = () => {
    if (!isAuthenticated) {
      return (
        <ButtonWrapper>
          <LightButton
            onClick={() => history.push(paths.register)}
            variant="light"
            display={{ _: "none", lg: "block" }}
            id="header-register-button"
          >
            Register
          </LightButton>
          <DarkButton
            variant="dark"
            onClick={() => history.push(paths.login)}
            id="header-login-button"
          >
            Log In
          </DarkButton>
        </ButtonWrapper>
      )
    } else {
      return (
        <DarkButton
          variant="dark"
          id="header-logout-button"
          onClick={() => history.push(paths.login)}
        >
          Log out
        </DarkButton>
      )
    }
  }

  return (
    <Row id="header">
      <Column>
        <CursorPointer>
          <FlexWrapper
            onClick={() =>
              isAuthenticated
                ? history.push(paths.mainDashboard)
                : history.push(paths.landingPage)
            }
          >
            <LogoImg src={LogoSrc} id="header-logo" />
            <LogoText display={{ _: "none", lg: "flex" }} id="header-site-name">
              GoldWish
            </LogoText>
          </FlexWrapper>
        </CursorPointer>
      </Column>
      <Column>
        <NavMenu display={{ _: "none", lg: "block" }}>
          {renderNavLinks()}
        </NavMenu>
      </Column>
      <Column>
        <FlexWrapper>
          {renderButtons()}
          <MenuAndBurger />
        </FlexWrapper>
      </Column>
    </Row>
  )
}

export default Header
