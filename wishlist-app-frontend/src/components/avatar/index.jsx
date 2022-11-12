import React from "react"
import { StyledAvatar, Image, Text } from "./styled"

const Avatar = ({ children, imgSrc }) => {
  return (
    <StyledAvatar id="styledavatar">
      <Image src={imgSrc} />
      <Text>{children}</Text>
    </StyledAvatar>
  )
}

export default Avatar
