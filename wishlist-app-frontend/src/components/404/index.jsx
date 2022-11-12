import React from "react"
import { StyledHome } from "../common/StyledHome"
import { Text } from "./styled"

export default function PageNotFound404() {
  return (
    <StyledHome justifyContent="center" flexDirection="column">
      <Text id="page-not-found-title">Oops...😱</Text>
      <Text id="page-not-found-subtitle-title">404 Page Not found</Text>
    </StyledHome>
  )
}
