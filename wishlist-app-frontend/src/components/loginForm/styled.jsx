import styled from "styled-components"
import { Form } from "semantic-ui-react"

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-content: center;
  justify-content: center;
  width: 40rem;
  background: #292929;
  border-radius: 10px;
  margin: 0 auto;
  padding: 3.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`

export const StyledLabel = styled.label`
  width: 7rem;
  height: 1.375rem;
  top: 3.9rem;
  left: 3rem;

  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.375rem;

  color: #ffffff;
  margin-right: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    font-size: 1rem;
  }
`

export const StyledInput = styled(Form.Input)`
  margin: 0 auto !important;
  width: 26rem !important;

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    width: 10rem !important;
  }
`

export const StyledButton = styled.button`
  color: #fafafa;
  line-height: 1.875;
  background-color: ${props =>
    props.authError
      ? props.theme.colors.red
      : props.userIsAuthenticated
      ? props.theme.colors.green
      : props.theme.colors.gold};
  padding: 0.1rem;
  width: 100%;
  margin-top: 1rem;
  font-size: 2.5rem;
  border-radius: 10px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    font-size: 2rem;
  }
`

export const StyledCreateAccount = styled.h2`
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`

export const StyledParagraph = styled.p`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.25rem;
  color: white;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 376px) {
    font-size: 1.2rem;
    line-height: 1.3rem;
    margin-top: 1rem;
  }
`

export const StyledError = styled.p`
  color: #1b1212;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`
export const RowInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.login ? "1rem;" : "0;")};

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    .rowInput {
      flex-direction: column;
    }
  }
`
