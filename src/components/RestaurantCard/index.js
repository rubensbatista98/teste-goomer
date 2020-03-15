import React, { useEffect, useCallback, useState } from "react";

import { LinkGoomer, Card, Thumb, Header, Status } from "./styles";

const RestaurantCard = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIfIsOpen = useCallback(() => {
    if (!restaurant?.hours) return { isOpenNow: false, timeToChange: null };

    const timeNow = new Date();
    const hoursStatus = [];

    const getDate = (date, hour, minutes) =>
      new Date(
        timeNow.getFullYear(),
        timeNow.getMonth(),
        date,
        hour,
        minutes,
        0
      );

    const hoursValidToday = restaurant.hours.filter(
      hour => hour.days.indexOf(timeNow.getDay() + 1) > -1
    );

    hoursValidToday.forEach(hour => {
      const { from, to, days } = hour;

      const openingHour = from.split(":");
      const closingHour = to.split(":");

      const openingTime = getDate(
        timeNow.getDate(),
        openingHour[0],
        openingHour[1]
      );

      const closingTime = getDate(
        openingHour[0] > closingHour[0]
          ? timeNow.getDate() + 1
          : timeNow.getDate(),
        closingHour[0],
        closingHour[1]
      );

      const isOpenNow =
        timeNow.getTime() >= openingTime.getTime() &&
        timeNow.getTime() < closingTime.getTime() &&
        days.indexOf(openingTime.getDay() + 1) > -1;

      let timeToChange = null;

      if (isOpenNow) timeToChange = closingTime.getTime() - timeNow.getTime();

      if (!isOpenNow) {
        const MILLISECONDS_IN_A_DAY = 86400000;
        const nowIsBeforeOpening = timeNow.getTime() < openingTime.getTime();
        const nowIsAfterClosing = timeNow.getTime() >= closingTime.getTime();

        if (nowIsBeforeOpening) {
          timeToChange = openingTime.getTime() - timeNow.getTime();
        }

        if (nowIsAfterClosing) {
          timeToChange = openingTime.getTime() + MILLISECONDS_IN_A_DAY;
        }
      }

      hoursStatus.push({ isOpenNow, timeToChange });
    });

    const openHour = hoursStatus.find(hour => hour.isOpenNow);

    if (openHour) return openHour;

    const orderedHourStatus = [...hoursStatus].sort(
      (a, b) => a.timeToChange - b.timeToChange
    );

    return orderedHourStatus[0];
  }, [restaurant]);

  useEffect(() => {
    function changeState() {
      const { isOpenNow, timeToChange } = getIfIsOpen();

      if (timeToChange != null) {
        setTimeout(changeState, timeToChange);
      }

      setIsOpen(isOpenNow);
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
