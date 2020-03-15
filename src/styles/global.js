import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./settings";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline-color: ${colors.fourth}
    }


    body{
        min-height: 100vh;
        font-size: 1rem;
        color: ${colors.primary}
    }

    body, input, button{
        font-family: "Montserrat", sans-serif;
    }
`;

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 1225px;
  margin: 0 auto;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 62px;
  background-color: ${colors.secondary};
  margin-bottom: 35px;

  box-shadow: 0 4px 8px ${colors.shadow};
`;
