import styled from "styled-components"
import { NavLink } from "react-router-dom"

import { color, flexbox, layout, space } from "styled-system"
import { Button } from "../common/Button"
import Padding from "../common/Padding"

export const Row = styled(Padding)`
  width: 100%;
  height: 9.7vh !important;

  background-color: #fafafa;
  align-items: center;
  justify-content: space-between;
  height: inherit;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  z-index: 5;
  position: relative;

  ${flexbox}
  ${space}
  ${color}
`

export const Column = styled.div`
  min-width: fit-content;
`
export const Wrapper = styled.header``

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  padding-right: 9px;
  margin-top: 3px;
`

export const LogoText = styled.h1`
  font-weight: 800;
  font-size: 36px;
  margin: 0;

  ${layout}
`

export const StyledLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  color: #292929;
  transition: color 0.2s, border 0.2s;
  text-decoration: none;

  &:first-child {
    margin-right: 1rem;
  }

  &.active {
    font-weight: 700;
    border-bottom: 1px solid #292929;
    padding-bottom: 3px;

    &:hover {
      border-bottom: 1px solid #ffc062;
    }
  }

  &:hover {
    color: #ffc062;
  }
`
export const NavMenu = styled.ul`
  list-style-type: none;
  padding-top: 3px;
  padding-left: 0px;
  white-space: nowrap;
  text-align: center;
  ${layout}
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LightButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
`
export const DarkButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
  }
`

export const CursorPointer = styled.div`
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
