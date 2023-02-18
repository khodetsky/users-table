import styled from "styled-components";

export const FilterContainer = styled.div`
  align-self: flex-start;
`

export const FilterInput = styled.input`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.25;  
  box-sizing: border-box;
  width: 250px;
  color: black;
  border: none;
  background-color: #238ee3;
  border-radius: 8px;
  padding: 7px 15px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &::placeholder {
    color: black;
  }
`