import styled from "styled-components"

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-content: center;
  justify-content: center;
  width: 40rem;
  height: 20rem;
  background: #292929;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0 3.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 18rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 70%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    height: 16rem;
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
