import { createGlobalStyles } from "solid-styled-components";

export const NarrowWidth = 600;

export const GlobalStyles = createGlobalStyles`
  :root {
    --page-background: hsl(0, 0%, 95%);
    --page-color: hsl(0, 0%, 0%);

    --option-background: hsl(0, 0%, 98%);
    --option-divider-color: hsl(0, 0%, 90%);

    --outline-color: hsl(100, 80%, 20%);
    --outline-color--invalid: hsl(0, 100%, 50%);

    --input-background: white;
    --input-background--active: hsl(46, 71%, 93%);
    --input-background--active--invalid: hsl(0, 100%, 93%);
    --input-border: solid 1px hsl(0, 0%, 80%);
    --input-color: hsl(0, 0%, 0%);
    --input-color--active: hsl(0, 0%, 0%);
    --input-placeholder-color: hsl(0, 0%, 50%);
    --input-hint-color: hsl(0, 0%, 40%);
    --input-error-color: hsl(0, 70%, 40%);

    @media (prefers-color-scheme: dark) {
      --page-background: hsl(0, 0%, 0%);
      --page-color: hsl(0, 0%, 80%);

      --option-background: hsl(0, 0%, 10%);
      --option-divider-color: hsl(0, 0%, 20%);

      --outline-color: hsl(100, 80%, 20%);
      --outline-color--invalid: hsl(0, 100%, 50%);

      --input-background: hsl(0, 0%, 30%);
      --input-background--active: hsl(42, 19%, 63%);
      --input-background--active--invalid: hsl(0, 100%, 93%);
      --input-border: solid 1px hsl(0, 0%, 40%);
      --input-color: hsl(0, 0%, 80%);
      --input-color--active: hsl(0, 0%, 20%);
      --input-placeholder-color: hsl(0, 0%, 70%);
      --input-hint-color: hsl(0, 0%, 40%);
      --input-error-color: hsl(0, 70%, 70%);

    }
  }


  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: var(--page-background);
    color: var(--page-color);
  }

  body {
    font-family: "Open Sans", system-ui, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", system-ui, sans-serif;
    font-weight: 300;
  }
`;
