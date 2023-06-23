import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* spacings */
    --spacing-1: 8px;
    --spacing-2: 16px;
    --spacing-3: 24px;
    --spacing-4: 32px;
    --spacing-5: 40px;
    --spacing-6: 48px;
    --spacing-7: 56px;
    --spacing-8: 64px;

    /* colors */
    --light-gray: #F7F8FA;
    --white: #FFF;
    --selected-lik: rgb(237, 53, 75);
    --black: #000;
}
`;
