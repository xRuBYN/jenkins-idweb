import styled from "styled-components"
import SemanticDatepicker from "react-semantic-ui-datepickers"
import { Form, TextArea } from "semantic-ui-react"

export const DatePick = styled(SemanticDatepicker)`
  width: 196px !important;
`

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: (
      ${props => (props.wishlist ? "30rem !important;" : "23rem !important;")}
    );
  }
`

export const Confetti90 = styled.img`
  width: 30%;
  position: absolute;
  top: -32.5%;
  left: -20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: -20%;
    left: -40%;
  }
`
export const Exit = styled.div`
  position: absolute;
  top: -30px;
  right: -62px;
  color: white;
  font-size: 40px;
  height: 40px;
  cursor: pointer;
  width: 40px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 34px;
    top: 14px;
    right: -20%;
  }
`

export const ConfettiMinus90 = styled.img`
  width: ${props => (props.savedWishlists ? "25%;" : "30%;")};
  position: absolute;
  bottom: ${props => (props.savedWishlists ? "-5%;" : "-15%;")};
  right: ${props => (props.savedWishlists ? "-10%;" : "-20%;")};
  transform: ${props => (props.savedWishlists ? "rotate(-70deg);" : "0;")};
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    bottom: ${props => (props.savedWishlists ? "-20%;" : "-15%;")};
    right: ${props => (props.savedWishlists ? "-10%;" : "-20%;")};
  }
`

export const StyledTextarea = styled(TextArea)`
  width: 14rem !important;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
`
