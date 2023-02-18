import styled from "styled-components";

export const ContainerTitle = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: black;
    margin-bottom: 20px;
`

export const Container = styled.div`
    width: 250px;
    height: 390px;
    border-radius: 12px;
    margin: 20px 0;
    padding: 10px;

    display: flex;
    align-items: center;
    flex-direction: column;

    // background-color: #504f4f;
    background-color: rgb(249 109 15);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

export const SelectedList = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`