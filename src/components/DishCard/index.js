import React, { useState, useEffect, useCallback } from "react";
import { MdPersonOutline } from "react-icons/md";

import {
  Card,
  Thumb,
  CardBody,
  Title,
  Description,
  Price,
  Promo
} from "./styles";

const DishCard = ({ dish }) => {
  const [promoIsActive, setPromoIsActive] = useState(false);
  const [promo, setPromo] = useState({});

  const convertToCurrency = useCallback(price => {
    return price.toLocaleString("PT-BR", {
      style: "currency",
      currency: "BRL"
    });
  }, []);

  const getIfPromoIsActive = useCallback(() => {
    if (!dish?.sales) return { isActiveNow: false, timeToChange: null };

    const { sales } = dish;

    const MILLISECONDS_IN_A_DAY = 86400000;
    const timeNow = new Date(2020, 2, 17, 20, 30, 0);
    const status = [];

    const getDate = (date, hour, minutes) =>
      new Date(
        timeNow.getFullYear(),
        timeNow.getMonth(),
        date,
        hour,
        minutes,
        0
      );

    const salesStatus = sales.reduce((salesStatus, sale) => {
      const salesValidToday = sale.hours.filter(hour => {
        return hour.days.indexOf(timeNow.getDay() + 1) > -1;
      });

      if (salesValidToday.length === 0) {
        salesStatus.push({
          isActiveNow: false,
          timeToChange: MILLISECONDS_IN_A_DAY
        });
      }

      if (salesValidToday.length > 0) {
        salesValidToday.forEach(hour => {
          const { from, to, days } = hour;

          const startingHour = from.split(":");
          const endingHour = to.split(":");

          const startingTime = getDate(
            timeNow.getDate(),
            startingHour[0],
            startingHour[1]
          );

          const endingTime = getDate(
            startingHour[0] > endingHour[0]
              ? timeNow.getDate() + 1
              : timeNow.getDate(),
            endingHour[0],
            endingHour[1]
          );

          const isActiveNow =
            timeNow.getTime() >= startingTime.getTime() &&
            timeNow.getTime() < endingTime.getTime() &&
            days.indexOf(startingTime.getDay() + 1) > -1;

          let timeToChange = null;

          if (isActiveNow) {
            timeToChange = endingTime.getTime() - timeNow.getTime();
          }

          if (!isActiveNow) {
            const nowIsBeforeStarting =
              timeNow.getTime() < startingTime.getTime();

            const nowIsAfterEnding = timeNow.getTime() >= endingTime.getTime();

            if (nowIsBeforeStarting) {
              timeToChange = startingTime.getTime() - timeNow.getTime();
            }

            if (nowIsAfterEnding) {
              const tomorrowTime = getDate(
                timeNow.getDate() + 1,
                startingHour[0],
                startingHour[1]
              );

              timeToChange = tomorrowTime.getTime() - timeNow.getTime();
            }
          }

          status.push({ isActiveNow, timeToChange });
        });

        const activeStatus = status.find(hour => hour.isActiveNow);

        if (activeStatus) {
          salesStatus.push({ ...activeStatus, sale });
        } else {
          const orderedStatusByTime = [...status].sort(
            (a, b) => a.timeToChange - b.timeToChange
          );

          salesStatus.push(orderedStatusByTime[0]);
        }
      }

      return salesStatus;
    }, []);

    const activeSale = salesStatus.find(saleStatus => saleStatus.isActiveNow);

    if (activeSale) return activeSale;

    const closestSale = salesStatus.reduce((closest, sale) => {
      if (closest.timeToChange > sale.timeTochange) {
        closest = [...sale];
      }

      return closest;
    });

    return closestSale;
  }, [dish]);

  useEffect(() => {
    function changeState() {
      const { isActiveNow, timeToChange, sale } = getIfPromoIsActive();

      if (timeToChange != null) {
        setTimeout(changeState, timeToChange);
      }

      if (isActiveNow) {
        setPromo(sale);
      }

      setPromoIsActive(isActiveNow);
    }

    changeState();
  }, [getIfPromoIsActive]);
  return (
    <Card>
      <Thumb>
        <img
          src={
            !dish.image
              ? "https://source.unsplash.com/1600x900/?doughnut"
              : dish.image
          }
          alt={dish.name}
        />
      </Thumb>

      <CardBody>
        <Title>{dish.name}</Title>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Description>

        <div>
          {promoIsActive && <Price>{convertToCurrency(promo.price)}</Price>}

          {!!dish.price && (
            <Price promoIsActive={promoIsActive}>
              {convertToCurrency(dish.price)}
            </Price>
          )}
        </div>

        {promoIsActive && (
          <Promo>
            <MdPersonOutline />
            <p>{promo.description}</p>
          </Promo>
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(DishCard);
