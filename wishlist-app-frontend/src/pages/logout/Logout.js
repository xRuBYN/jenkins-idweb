import React from "react"
import { useDispatch, useSelector } from "react-redux"
import jwt_decode from "jwt-decode"

import LogoutForm from "../../components/logoutForm/form"
import { logout } from "../../store/actions"

export default function Logout() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }
  const userFullName = useSelector(state =>
    state?.auth?.token ? jwt_decode(state.auth.token)?.fullName : null
  )

  return (
    <>
      <LogoutForm logout={handleClick} userFullName={userFullName} />
    </>
  )
}
