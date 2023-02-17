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
    background: #7e7e7e;
    color: #FFFFFF;
`

export const IconContainer = styled.svg`
    width: 12px;
    height: 12px;
    cursor: pointer;
`

export const Icon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 12px;
    height: 12px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ${IconContainer}:hover &, ${IconContainer}:focus & {
        fill: #38bddb;

    };
`