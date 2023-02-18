import styled from "styled-components";

export const Button = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 18px;
    width: 250px;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    // background-color: #7B61FF;
    background: radial-gradient(circle, rgba(6,15,244,1) 0%, rgba(83,159,219,1) 97%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    cursor: pointer;
    border: none;
    border-radius: 8px;
    // box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: black;
    };
`