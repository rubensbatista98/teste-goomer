import React, { useState, useEffect, useContext, useCallback } from "react";

import FormSearch from "../../components/FormSearch";
import RestaurantList from "../../components/RestaurantsList";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";

import { Title, Error, NotFound } from "./styles";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [restaurantsFromContext, , error] = useContext(RestaurantsContext);

  const filterRestaurantsByName = useCallback(
    name => {
      const filtered = restaurantsFromContext.filter(restaurant =>
        restaurant.name.toLowerCase().includes(name.toLowerCase().trim())
      );

      if (filtered?.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setRestaurants(filtered);
      }
    },
    [restaurantsFromContext]
  );

  useEffect(() => {
    setRestaurants(restaurantsFromContext);
  }, [restaurantsFromContext]);

  if (error) return <Error>Desculpe, mas ocorreu um erro inesperado.</Error>;

  return (
    <>
      <header>
        <Title>Bem-vindo ao Lista Rango</Title>

        <FormSearch
          filterByValue={filterRestaurantsByName}
          labelContent="estabelecimento"
        />
      </header>

      <section>
        {notFound ? (
          <NotFound>Estabelecimento não encontrado.</NotFound>
        ) : (
          <RestaurantList restaurants={restaurants} />
        )}
      </section>
    </>
  );
};

export default React.memo(Home);
