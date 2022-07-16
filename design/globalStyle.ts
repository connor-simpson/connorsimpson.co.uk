import { createGlobalStyle } from "styled-components"
import { cssReset } from "./reset"

export const GlobalStyle = createGlobalStyle`
    ${cssReset}

    body {
        background-color: #FAEACB;
    }
`