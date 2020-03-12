import React from "react";

import RestaurantCard from "../RestaurantCard";

import { List, Item } from "./styles";

const RestaurantList = ({ restaurants }) => {
  return (
    <List>
      {restaurants.map(restaurant => (
        <Item key={restaurant?.id}>
          <RestaurantCard restaurant={restaurant} />
        </Item>
      ))}
    </List>
  );
};

export default React.memo(RestaurantList);
