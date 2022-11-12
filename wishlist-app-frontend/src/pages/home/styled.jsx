import styled from "styled-components"
import { Button } from "../../components/common/Button"

export const Wrapper = styled.div`
  width: 20rem;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;

    width: 100%;
  }
`

export const HomeH1 = styled.h1`
  font-weight: 900;
  font-size: 3.7rem;
  line-height: 78px;
  margin-bottom: 12px;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 36px;
    text-align: center;
  }
`

export const HomeH2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0;
`
export const AddWishesButton = styled(Button)`
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 4rem;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  margin-top: 10px;

  &:hover {
    background: #445b90;
  }
`
export const HomeImg = styled.img`
  width: 27rem;
  height: 27rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 90vw;
    height: 88vw;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 35rem;
    height: 35rem;
  }
`
