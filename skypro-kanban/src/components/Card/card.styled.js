import styled from "styled-components";

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${ props => props.$theme === "light" ? '#FFFFFF' : 'rgb(32, 32, 44)'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;`

  export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${ props => props.$theme === "light" ? '#000000' : 'white'};
  margin-bottom: 10px;`