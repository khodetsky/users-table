import styled, {keyframes} from "styled-components";

const openModalOpacity = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2);

    animation: ${openModalOpacity} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;

    .body.& {
        overflow: hidden;
    }
`

export const ModalStyled = styled.div`
  padding: 30px;
  background-color: #7e7e7e;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
  border-radius: 20px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 3;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: ${openModalOpacity} 250ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
`

export const SelectContainer = styled.div`
  display: flex;
  gap: 40px;
`

export const ButtonContainer = styled.div`
  align-self: flex-end;
`