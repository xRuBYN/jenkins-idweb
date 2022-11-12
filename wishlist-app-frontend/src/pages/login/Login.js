import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { authenticate } from "../../store/actions"

import LoginForm from "../../components/loginForm/form"
import classes from "./index.module.css"
import Logout from "../logout/Logout"
import { url } from "../../constants/constants"

axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url)
    const allowedOrigins = [url.baseUrl]
    const token = localStorage.getItem("token")
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState(false)
  const [displayLoader, setDisplayLoader] = useState(false)

  const userIsAuthenticated = useSelector(state => state?.auth?.isAuthenticated)

  useEffect(() => {
    const timeout = setTimeout(() => setAuthError(false), 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [authError])

  const sendLoginRequest = () => {
    dispatch(
      authenticate(email, password, setAuthError, setDisplayLoader, history)
    )
  }

  return (
    <div className={classes.gradient}>
      {userIsAuthenticated ? (
        <Logout />
      ) : (
        <LoginForm
          sendLoginRequest={sendLoginRequest}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
          authError={authError}
          userIsAuthenticated={userIsAuthenticated}
          displayLoader={displayLoader}
          setDisplayLoader={setDisplayLoader}
        />
      )}
    </div>
  )
}
export default Login
