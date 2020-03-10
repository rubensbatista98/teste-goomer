import React from "react";

import { LinkGoomer, Card, Thumb, Header, Status } from "./styles";

const RestaurantCard = ({ isOpen, restaurant }) => {
  return (
    <LinkGoomer to={`/restaurante/${restaurant.id}`}>
      <Card>
        <Thumb>
          <img src={restaurant?.image} alt="Imagem do restaurante" />
        </Thumb>

        <Header>
          <h3>{restaurant?.name}</h3>
          <p>{restaurant?.address}</p>
        </Header>

        <Status isOpen={isOpen}>
          {isOpen ? (
            <>
              <span>Aberto</span>
              <span>agora</span>
            </>
          ) : (
            <span>Fechado</span>
          )}
        </Status>
      </Card>
    </LinkGoomer>
  );
};

export default React.memo(RestaurantCard);
