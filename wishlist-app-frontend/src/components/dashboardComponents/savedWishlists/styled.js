import styled from "styled-components"

export const StyledWrapper = styled.div`
  margin: 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  width: 84vw;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    gap: 4rem;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 95%;
    margin: 1rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 95%;
    margin: 1rem;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100vw;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`

export const StyledContainer = styled.div`
  position: relative;
  width: 23%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  border-radius: 10px;
  word-break: normal;
  white-space: normal;
  padding: 1rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    width: 23%;
    border-radius: 15px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 40%;
    border-radius: 5px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 45%;
    border-radius: 5px;
    height: ${props => (props.wishlist ? "0;" : "5rem auto 1rem auto;")};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40%;
    margin: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
    border-radius: 5px;
    height: ${props => (props.wishlist ? "0;" : "5rem auto 1rem auto;")};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xss}) {
    width: 80%;
    border-radius: 5px;
    height: ${props => (props.wishlist ? "0;" : "5rem auto 1rem auto;")};
    margin-bottom: 0;
  }
`

export const StyledWishlistTitle = styled.p`
  max-width: 80%;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  hyphens: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    width: 80%;
    font-size: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    margin: 0;
  }
`

export const StyledWishlistDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;
`

export const StyledWishlistDate = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 4px 4px 1px rgb(57, 171, 235, 0.5);
`

export const StyledDates = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledDaysLeft = styled.p`
  margin: 0 0 0 5px;
  color: #f4654f;
  font-size: 0.8rem;
  align-self: flex-start;
  font-weight: bold;
`

export const StyledImage = styled.img`
  width: 40px;
  position: absolute;
  top: 15px;
  right: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}) {
    width: 48px;
  }
`
