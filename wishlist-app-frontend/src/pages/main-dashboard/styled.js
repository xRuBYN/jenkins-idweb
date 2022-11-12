import styled from "styled-components"
import { AddWishesButton } from "../home/styled"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AddWishlistButton = styled(AddWishesButton)`
  width: ${props => (props.savedWishlists ? "20%;" : "30%;")};
  height: ${props => (props.savedWishlists ? "45%;" : "auto;")};
  padding: ${props => (props.savedWishlists ? "0;" : "1.5rem;")};
  margin: ${props => (props.savedWishlists ? "0;" : "4rem auto 0 auto;")};
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    width: 70%;
  }
`
