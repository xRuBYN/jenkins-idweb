import styled from "styled-components"
import { Form } from "semantic-ui-react"

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  max-width: 100%;
  margin: ${props => (props.wishlist ? "0;" : "5rem auto 1rem auto;")};
  padding: 2.5rem 2rem;
  width: ${props => (props.wishlist ? "30rem;" : "40rem;")};
  background: #292929;
  border-radius: 10px;
  position: static;
  z-index: 2;
  overflow: ${props => (props.wishlist ? "" : "hidden;")};

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) and (max-height: ${({ theme }) =>
      theme.heightBreakpoints.tablet}) {
    max-height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
    padding: 2rem;
    flex-wrap: nowrap;
    max-height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    width: 90%;
    padding: 2rem;
    flex-wrap: nowrap;
    max-height: 100%;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.hs}) and (max-height: ${({ theme }) =>
      theme.heightBreakpoints.iphoneUpTo8}) {
    width: 90%;
    padding: 2rem;
    flex-wrap: nowrap;
  }
`

const handleColorType = color => {
  switch (color) {
    case "delete":
      return "#f56342"
    default:
      return "#FF9F2B"
  }
}

export const StyledCreateAccount = styled.h2`
  margin: 0 1rem 2rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xss}) {
    font-size: 1.5rem;
  }
`

export const StyledLabel = styled.label`
  width: 9rem;
  height: 1.375rem;
  top: 3.9rem;
  left: 3rem;

  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.375rem;

  color: ${({ theme }) => theme.colors.white};
  margin-right: ${props => (props.wishlist ? "1rem;" : "0;")};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    margin: 0.2rem;
    font-size: 1.2rem;
  }
`

export const StyledInput = styled(Form.Input)`
  margin: ${props =>
    props.wishlist ? "0 !important;" : "0 auto 0.8rem auto !important;"};
  width: ${props =>
    props.wishlist ? "14rem !important;" : "26rem !important;"};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top:  ${props => props.wishlist ? "" :  "0.5rem !important;"}
    width: ${props => props.wishlist ? "100% !important;" :  "23rem !important;"}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    width: 21rem !important;
    height: 30px !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xss}) {
    width: 18rem !important;
  }
`

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.875;
  background-color: ${({ color }) => handleColorType(color)};
  padding: 0.1rem;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 2.5rem;
  border-radius: 10px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;

  :disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    margin-top: 1.2rem;
    width: 105%;
    font-size: 2rem;
  }
`

export const StyledParagraph = styled.p`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    font-size: 1.2rem;
    line-height: 1.1rem;
    margin-top: 1rem;
  }
`

export const StyledError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
  margin: 0.2rem auto 0.7rem auto !important;
`

export const StyledDivInRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.wishlist ? "1rem;" : "0;")};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`
