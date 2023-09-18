import { HeaderContainer, StyledLink } from './stylesHeader'

export const Header = () => {
    const Btn = (props: { text: string; path: string }) => {
        const { text, path } = props
        return (
            <StyledLink to={path} className="header-button">
                {text}
            </StyledLink>
        )
    }

    return (
        <HeaderContainer>
            <Btn path="/" text="Home" />
            <Btn path="/frame" text="3D View" />
        </HeaderContainer>
    )
}
