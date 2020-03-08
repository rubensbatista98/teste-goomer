import React from "react";

import Routes from "./Routes";
import GlobalStyle, { Container, TopBar } from "./styles/global";

function App() {
  return (
    <>
      <TopBar />

      <Container>
        <Routes />
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
