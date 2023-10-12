import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    width: 100%;
    height: 7vh;
    background-color: #23252b;
`

export const StyledLink = styled(Link)`
    display: inline-block;
    padding: 10px 25px;
    margin-right: 12px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
        background-color: #555;
    }
`
