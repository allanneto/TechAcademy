import { createGlobalStyle } from "styled-components";

// O createGlobalStyle permite que possa ser criado configurações globais para a aplicação, onde serão aplicadas em todos os componentes do projeto.

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  html, body, #root {
    min-height: 100%;
  }
