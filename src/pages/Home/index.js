import React from "react";

import FormSearch from "../../components/FormSearch";
import RestaurantList from "../../components/RestaurantList";

import { Title } from "./styles";

const Home = () => {
  return (
    <>
      <header>
        <Title>Bem-vindo ao Lista Rango</Title>

        <FormSearch />
      </header>

      <section>
        <RestaurantList />
      </section>
    </>
  );
};

export default React.memo(Home);
