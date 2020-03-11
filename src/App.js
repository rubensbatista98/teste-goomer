import React from "react";

import Routes from "./Routes";
import { RestaurantsProvider } from "./contexts/RestaurantsContext";
import GlobalStyle, { Container, TopBar } from "./styles/global";

function App() {
  return (
    <>
      <TopBar />

      <Container>
        <RestaurantsProvider>
          <Routes />
        </RestaurantsProvider>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
