import { createGlobalStyle } from "styled-components";

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
