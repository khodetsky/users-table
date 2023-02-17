import { Button } from "./MainButton.styled";

export const MainButton = ({clickOnBtn, children}) => {

    return (
        <Button type='button' onClick={clickOnBtn}>{children}</Button>
    )
}