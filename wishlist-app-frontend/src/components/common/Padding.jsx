import styled from "styled-components"

const Padding = styled.div`
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: ${({ theme }) => theme.space[15]};
    padding-right: ${({ theme }) => theme.space[15]};
  }
`
export default Padding
