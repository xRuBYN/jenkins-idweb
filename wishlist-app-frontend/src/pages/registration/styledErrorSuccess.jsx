import styled from "styled-components"

export const StyledImage = styled.img`
  width: 20%;
  margin: 0 auto 2rem;
`

export const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 12.5rem auto 0;
  color: rgba(40, 38, 38, 0.82);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  font-weight: 600;
  text-align: center;
  width: 40rem;
  border-radius: 10px;
  font-size: 1.75rem;
  line-height: 2rem;
  box-shadow: 10px 13px 0px -7px rgba(142, 142, 142, 0.75);

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    margin-top: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    margin-top: 25rem;
    width: 60rem;
    font-size: 3rem;
    line-height: 4rem;
    border-radius: 25px;
    padding: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: 28rem;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.xl}) and (max-height: ${({ theme }) =>
      theme.heightBreakpoints.tablet}) {
    margin-top: 20rem;
    max-height: 60vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
    margin: 12rem auto 0;
    padding: 2rem;
    flex-wrap: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hs}) {
    width: 90%;
    max-height: 100%;
    margin: 15rem auto 0;
    padding: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.sm}) and (max-height: ${({ theme }) =>
      theme.heightBreakpoints.iphoneUpTo8}) {
    margin: 10rem auto 0;
  }
`
