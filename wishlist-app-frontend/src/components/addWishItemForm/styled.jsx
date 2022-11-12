import styled from "styled-components"
import Modal from "styled-react-modal"
import dropDownArrow from "../../img/dropDownArrow.png"

export const StyledModal = Modal.styled`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.colors.black};
padding: 40px 45px 57px;
border-radius: 15px;
margin: 0 ${({ theme }) => theme.space[5]};
position: relative;

@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  margin-top: 60vh !important;
}

@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
  padding: 32px;
}
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

export const Column = styled.div``
export const Label = styled.span`
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  width: 40%;

  &#wishlist-dashboard-modal-label-wish-name,
  &#wishlist-dashboard-modal-label-price {
    ::after {
      content: " *";
      color: red;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    font-size: 1.4rem;
  }
`
export const Input = styled.input.attrs({
  autoComplete: "off",
})`
  border-radius: 10px;
  border: none;
  height: 3rem;
  padding: 13px 20px;
  font-size: 20px;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const StyledSelect = styled.select`
  border-radius: 10px;
  border: none;
  height: 3rem;
  font-size: 20px;
  width: 50%;
  padding: 0 20px;
  appearance: none;
  background-image: url(${dropDownArrow});
  background-repeat: no-repeat;
  background-position-x: 94%;
  background-size: 30px;
  background-position-y: 6px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`
export const TextArea = styled.textarea`
  border-radius: 10px;
  border: none;
  width: 50%;
  padding: 13px 20px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const ModalTitle = styled.h1`
  max-width: 700px;
  line-height: 1.5;
  text-align: center;
  color: white;
  margin-bottom: 42px;
  font-size: 2.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`

export const Button = styled.button`
  cursor: ${({ error }) => (error ? "not-allowed" : "pointer")};
  background-color: ${({ error, theme }) =>
    error ? theme.colors.grey : theme.colors.gold};
  text-align: center;
  font-size: 3rem;
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  width: 100%;
  margin-top: 43px;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.4rem;
  }
`
export const Exit = styled.div`
  position: absolute;
  top: 16px;
  right: 6px;
  color: white;
  font-size: 40px;
  height: 40px;
  cursor: pointer;
  width: 40px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 34px;
    top: 14px;
    right: 0;
  }
`
