import styled from "styled-components"
import Padding from "../common/Padding"

export const Wrapper = styled(Padding)`
  position: relative;
  width: 100vw;
  background-color: #fafafa;
  box-shadow: -2px -3px 4px rgba(0, 0, 0, 0.25);
  height: 9.7vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 12px;
  }
`
export const Email = styled.div`
  & span:nth-child(2) {
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & span:first-child {
      display: none;
    }
    & span:nth-child(2) {
      font-weight: 600;
    }
  }
`

export const Link = ({ className, src, imgSrc, text }) => (
  <a href={src} className={className}>
    <img src={imgSrc} alt="" />
    <span>{text}</span>
  </a>
)
export const SocialLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    width: 48px;
    height: 48px;
    margin-right: 0.6rem;
  }

  &:hover > img {
    filter: invert(100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    span {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > img {
      width: 40px;
      height: 40px;
    }
  }
  color: ${({ theme }) => theme.colors.black};

  text-decoration: none;
`
