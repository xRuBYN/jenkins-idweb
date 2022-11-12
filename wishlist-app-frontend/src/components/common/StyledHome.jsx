import styled from "styled-components"
import { flexbox } from "styled-system"
import Padding from "./Padding"

export const StyledHome = styled(Padding)`
  background: ${({ theme }) => theme.colors.homeGradient};
  flex: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: space-evenly;
  }

  &&& {
    ${flexbox}
  }
`
