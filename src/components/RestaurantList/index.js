import React from "react";

import RestaurantCard from "../RestaurantCard";

import { List, Item } from "./styles";

const RestaurantList = () => {
  return (
    <List>
      <Item>
        <RestaurantCard isOpen={true} />
      </Item>

      <Item>
        <RestaurantCard isOpen={false} />
      </Item>

      <Item>
        <RestaurantCard isOpen={true} />
      </Item>

      <Item>
        <RestaurantCard isOpen={true} />
      </Item>
    </List>
  );
};

export default React.memo(RestaurantList);
