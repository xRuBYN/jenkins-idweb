import React from "react"
import {
  Item,
  Header,
  Body,
  EditButton,
  Priority,
  DeleteButton,
  Title,
  Description,
  Price,
} from "./style"
import editButtonSrc from "../../img/editButton.png"

const WishListItem = ({ item, handleDeleteClick }) => {
  const id = item?.id
  const title = item?.title
  const description = item?.description
  const image = item?.image
  const price = item?.price
  const priority = item?.priority?.toLowerCase()
  const currency = item?.currency?.toUpperCase()
  const link = item?.link
  return (
    <Item id="wishlist-item-wrapper">
      <Header id="wishlist-item-header">
        <EditButton id="wishlist-item-edit-button" src={editButtonSrc} />
        <Priority id="wishlist-item-priority" href={link} priority={priority}>
          {priority}
        </Priority>
        <DeleteButton
          id="wishlist-item-delete-button"
          onClick={() => handleDeleteClick(id)}
        >
          ✖
        </DeleteButton>
      </Header>
      <Body id="wishlist-item-body">
        <Title id="wishlist-item-title">{title}</Title>
        <Description id="wishlist-item-description">{description}</Description>
        <Price id="wishlist-item-price">
          {price} {currency}
        </Price>
      </Body>
    </Item>
  )
}

export default WishListItem
