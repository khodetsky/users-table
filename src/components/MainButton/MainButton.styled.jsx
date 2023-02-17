import styled from "styled-components";

export const Button = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    width: 250px;
    height: 38px;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    background-color: #7B61FF;

    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #7F56D9;
    };
`