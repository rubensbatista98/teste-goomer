import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./settings";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    body{
        min-height: 100vh;
        font-size: 1rem;
    }

    body, input, button{
        font-family: "Montserrat", sans-serif;
    }
`;

export const Container = styled.div`
  width: calc(100% - 20px);
  max-width: 1215px;
  margin: 0 auto;
`;

export const TopBar = styled.div`
  width: 100vw;
  height: 62px;
  background-color: ${colors.secondary};
  margin-bottom: 35px;

  box-shadow: 0 4px 8px ${colors.shadow};
`;
