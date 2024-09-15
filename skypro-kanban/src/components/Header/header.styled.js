import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${ props => props.$theme === "light" ? 'white' : 'rgb(32, 32, 44)'};`

export const Block  = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
  `

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  `

  export const ButtonMain = styled.button`
   width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
  `

  export const User = styled.a`
    height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.$theme === "light" ? 'blue' : 'white'};`