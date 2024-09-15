import styled from "styled-components";

export const Main = styled.button`
  width: 100%;
  background-color:  ${ props => props.$theme === "light" ? 'rgb(234, 238, 246)' : 'rgb(21, 20, 25)'};`