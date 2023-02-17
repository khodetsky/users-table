import { SectionContainer, SectionStyled } from "./Section.styled";

export const Section = ({children}) => {

    return (
        <SectionStyled>
            <SectionContainer>{children}</SectionContainer>
        </SectionStyled>
    )
}