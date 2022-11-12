import styled from "styled-components"

export const Text = styled.h1`
  font-weight: 900;
  font-size: 3.7rem;
  line-height: 5rem;
  margin-bottom: 12px;
  margin-top: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
    line-height: 2rem;
  }
`
