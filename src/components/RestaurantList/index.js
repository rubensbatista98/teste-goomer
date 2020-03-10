import React, { useState, useEffect } from "react";

import RestaurantCard from "../RestaurantCard";
import api from "../../services/api";

import { List, Item, Error } from "./styles";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        setError(false);

        const data = await api("restaurants");

        setRestaurants(() => [...data]);
      } catch (error) {
        setError(true);
      }
    }

    loadRestaurants();
  }, []);

  if (error) return <Error>Desculpe, mas ocorreu um erro inesperado.</Error>;

  return (
    <List>
      {restaurants.map(restaurant => (
        <Item key={restaurant?.id}>
          <RestaurantCard isOpen={true} restaurant={restaurant} />
        </Item>
      ))}
    </List>
  );
};

export default React.memo(RestaurantList);
