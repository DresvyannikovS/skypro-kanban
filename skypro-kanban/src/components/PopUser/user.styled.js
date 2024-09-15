import styled from "styled-components";

export const Div = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${props => props.theme === "light" ? '#FFFFFF' : 'rgb(32, 34, 41)'};
  box-shadow: 0px 10px 39px 0px ${props => props.theme === "light" ? 'rgba(26, 56, 101, 0.21)' : 'rgba(148, 166, 190, 0.4)'};
  padding: 34px;
  text-align: center;
  z-index: 2;`

  export const P = styled.p`
  color: ${props => props.theme === "light" ? '#000;' : 'blue'};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;`