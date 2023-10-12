import { indexRoutes } from '../../utils/indexRoutes'
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
            <Btn path={indexRoutes['Home']} text="Home" />
            <Btn path={indexRoutes['Vanilla']} text="Vanilla Three JS" />
            <Btn path={indexRoutes['ReactTF']} text="react-three-fiber" />
        </HeaderContainer>
    )
}
