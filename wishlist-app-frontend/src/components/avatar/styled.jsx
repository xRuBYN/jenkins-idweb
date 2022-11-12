import styled from "styled-components"

export const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100px;
  }
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 1.72rem;
  line-height: 1;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`
