import React, { useState, useEffect, useContext } from "react";

import FormSearch from "../../components/FormSearch";
import RestaurantList from "../../components/RestaurantsList";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";

import { Title, Error } from "./styles";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsFromContext, , error] = useContext(RestaurantsContext);

  useEffect(() => {
    setRestaurants(restaurantsFromContext);
  }, [restaurantsFromContext]);

  if (error) return <Error>Desculpe, mas ocorreu um erro inesperado.</Error>;

  return (
    <>
      <header>
        <Title>Bem-vindo ao Lista Rango</Title>

        <FormSearch />
      </header>

      <section>
        <RestaurantList restaurants={restaurants} />
      </section>
    </>
  );
};

export default React.memo(Home);
