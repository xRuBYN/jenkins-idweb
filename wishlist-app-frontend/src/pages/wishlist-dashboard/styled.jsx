import styled from "styled-components"

import Padding from "../../components/common/Padding"
import classes from "../commonCss/dashboard.module.css"
import confetti90Src from "../../img/Confetti 90.png"

export const Gradient = styled.div.attrs({
  className: classes.gradient,
})`
  max-height: none;
  padding-bottom: 200px;
`

export const Wrapper = styled(Padding)`
  flex: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: -1;
`
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 96px;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const WishListInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 1.6rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 16px;
  }
`

export const StyledBorder = styled.div`
  border: 3px solid #fff;
  box-shadow: 0px 3px 10px #ffffff;
  border-radius: 20px;
  transform: matrix(1, -0.01, 0.01, 1, 0, 0);
`

export const WishListTitle = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  line-height: 1;
  margin: 0;
  position: relative;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`
export const Confetti90 = styled.img.attrs({
  src: confetti90Src,
})`
  position: absolute;
  top: -37px;
  left: -75px;
  width: 7rem;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: rotate(61deg);
    top: -57px;
    left: 200px;
  }
`

export const WishListDescription = styled.h2`
  font-weight: bold;
  font-size: 1.7rem;
  margin: 0;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`

export const StyledDate = styled.span`
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.025em;
  color: #fff;
  line-height: 1;
  text-shadow: 1px 4px 1px rgb(28 131 198 / 50%);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`

export const Items = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6rem;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transform: matrix(1, -0.01, 0.01, 1, 0, 0);
  position: relative;
  border: none;
  height: 10.5rem;
  padding: 0 4rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #2b81b1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
    padding: 0px 2rem;
    height: 8rem;
  }

  & div {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 30px;
      height: 30px;
    }
  }
`

export const ListIsEmpty = styled.p`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 5rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.black};
`
