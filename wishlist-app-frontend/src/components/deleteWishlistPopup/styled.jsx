import styled from "styled-components"
import Modal from "styled-react-modal"
import { color } from "styled-system"

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.black};
  padding: 60px 40px 42px;
  border-radius: 15px;
  margin: 0 ${({ theme }) => theme.space[5]};
  max-height: 68%;  
`

export const Title = styled.h1`
  max-width: 700px;
  line-height: 1.5;
  text-align: center;
  color: white;
  margin-bottom: 160px;
  font-size: 2.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 14px;
  }
`

export const StyledButton = styled.button`
  flex: 1;

  border: none;
  font-weight: bold;
  transition: all 0.3s;
  border-radius: 10px;
  cursor: pointer;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: ${({ theme }) => theme.colors.gold};
  color: #fff;

  font-size: 2.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
  ${color}
`
