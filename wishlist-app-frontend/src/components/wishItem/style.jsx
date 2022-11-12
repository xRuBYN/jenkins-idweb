import styled from "styled-components"

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 242px;
  position: relative;
  //hover bg color - #fbf5ee
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`
export const Header = styled.div`
  padding: 6px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`
export const EditButton = styled.img`
  width: 30px;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`
export const Priority = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: ${({ theme, priority }) =>
    priority === "must have"
      ? theme.colors.red
      : priority === "nice to have"
      ? theme.colors.gold
      : priority === "want to have"
      ? theme.colors.green
      : "#fff"};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);

    color: ${({ theme }) => theme.colors.white};
  }
`
export const DeleteButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  width: 30px;
  height: 30px;
  background: #f70f1c;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};

  :hover {
    filter: brightness(0.9);
  }
`
export const Title = styled.div`
  margin-top: 12px;
  margin-bottom: 18px;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`
export const Description = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.4;
  text-align: center;
  max-width: 13rem;
  margin-bottom: 60px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.4rem;
  }
`
export const Price = styled.div`
  /* margin-top: 44px; */
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.4rem;
  }
`
