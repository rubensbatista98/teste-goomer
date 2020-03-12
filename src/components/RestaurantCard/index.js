import React, { useEffect, useCallback, useState } from "react";

import { LinkGoomer, Card, Thumb, Header, Status } from "./styles";

const RestaurantCard = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIfIsOpen = useCallback(() => {
    if (!restaurant?.hours) return false;

    const timeNow = new Date();

    const getDate = (date, hour, minute) =>
      new Date(
        timeNow.getFullYear(),
        timeNow.getMonth(),
        date,
        hour,
        minute,
        0
      );

    return restaurant.hours.some(hour => {
      const { from, to } = hour;

      const openingHour = from.split(":");
      const closingHour = to.split(":");

      const openingTime = getDate(
        timeNow.getDate(),
        openingHour[0],
        openingHour[1]
      );

      const closeTime = getDate(
        openingHour[0] > closingHour[0]
          ? timeNow.getDate() + 1
          : timeNow.getDate(),
        closingHour[0],
        closingHour[1]
      );

      const isOpenNow =
        timeNow.getTime() >= openingTime.getTime() &&
        timeNow.getTime() <= closeTime.getTime();

      return isOpenNow;
    });
  }, [restaurant]);

  useEffect(() => {
    const isOpened = getIfIsOpen();

    setIsOpen(isOpened);
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
