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

import getStatusByHours from "../../utils/getStatusByHours";

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

    const salesStatus = sales.reduce((salesStatus, sale) => {
      const saleStatus = getStatusByHours(sale.hours);

      if (saleStatus.isActiveNow) {
        salesStatus.push({ ...saleStatus, sale });
      } else {
        salesStatus.push(saleStatus);
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
