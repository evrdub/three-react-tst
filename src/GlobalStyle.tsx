import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Helvetica;
        font-size: 2vh;
        color: #fff;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        /* background-color: #1c1c1c; */
        background-color: #f0f0f0;
        height: 100%;
    }
`
