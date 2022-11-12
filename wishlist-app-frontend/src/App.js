import React from "react"
import { ModalProvider } from "styled-react-modal"

import styled, { ThemeProvider } from "styled-components"

import { Route, Switch } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./pages/home/Home"
import Registration from "./pages/registration/Registration"
import Dashboard from "./pages/main-dashboard"

import { GlobalStyles } from "./globalStyles"
import theme from "./theme"

import { paths } from "./constants/constants"
import Login from "./pages/login/Login"
import PageNotFound404 from "./components/404"
import WishListDashboard from "./pages/wishlist-dashboard"

const Page = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles />
        <Page>
          <Header />
          <Switch>
            <Route
              exact
              path="/wishlist-dashboard"
              component={WishListDashboard}
            />
            <Route exact path={paths.landingPage} component={Home} />
            <Route path={paths.register} component={Registration} />
            <Route path={paths.login} component={Login} />
            <Route path={paths.mainDashboard} component={Dashboard} />
            <Route
              path={paths.wishListDashboard}
              component={WishListDashboard}
            />
            <Route path="/" component={PageNotFound404} />
          </Switch>
          <Footer />
        </Page>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App
