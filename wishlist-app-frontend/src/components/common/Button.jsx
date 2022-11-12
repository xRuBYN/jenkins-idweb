import styled from "styled-components"
import { space, layout } from "styled-system"

export const Button = styled.button`
  ${space}
  ${layout}

  width: 92px;
  height: 36px;
  border: 2px solid #000000;

  transition: all 0.3s;

  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`
