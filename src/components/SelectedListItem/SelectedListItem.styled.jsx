import styled from "styled-components";

export const Container = styled.button`
    border: none;
    border-radius: 10px;
    width: 210px;
    padding: 5px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    // background: #7e7e7e;
    background-color: rgb(235 42 42);
    color: black;
    // color: #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const IconContainer = styled.svg`
    width: 12px;
    height: 12px;
    cursor: pointer;
`

export const Icon = styled('use')`
    stroke: none;
    fill: black;
    width: 12px;
    height: 12px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ${IconContainer}:hover &, ${IconContainer}:focus & {
        fill: #238ee3;
    };
`