import React, { useEffect, useCallback, useState } from "react";

import { LinkGoomer, Card, Thumb, Header, Status } from "./styles";

import getStatusByHours from "../../utils/getStatusByHours";

const RestaurantCard = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIfIsOpen = useCallback(() => {
    if (!restaurant?.hours) return { isActiveNow: false, timeToChange: null };

    return getStatusByHours(restaurant.hours);
  }, [restaurant]);

  useEffect(() => {
    function changeState() {
      const { isActiveNow, timeToChange } = getIfIsOpen();

      if (timeToChange != null) {
        setTimeout(changeState, timeToChange);
      }

      setIsOpen(isActiveNow);
    }

    changeState();
  }, [getIfIsOpen]);

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
