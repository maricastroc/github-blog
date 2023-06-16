import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme['blue-500']};
    }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    margin-bottom: 2.5rem;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`
