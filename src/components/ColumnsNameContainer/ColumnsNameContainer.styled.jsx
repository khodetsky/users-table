import styled from "styled-components";

export const ContainerTitle = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #FFFFFF;
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

    background-color: #504f4f;
`

export const SelectedList = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`