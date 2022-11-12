import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const StyledLink = styled(NavLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`
