import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset general */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos generales para el body */
  body {
    font-family: 'Nunito', sans-serif; /* Fuente principal */
    color: #e1e5f2; /* Texto claro */
    background-color: #022b3a; /* Fondo oscuro general */
    min-height: 100vh; /* Asegura que cubre toda la pantalla */
    display: block; /* Cambiar a block para evitar interferencias */
    overflow-x: hidden; /* Evita scroll horizontal */
  }

  /* Ajustes para elementos comunes */
  input, button, textarea {
    font-family: inherit; /* Mantiene la misma fuente */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
