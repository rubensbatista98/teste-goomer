import React, { useCallback } from "react";

import { Card, Thumb, CardBody, Title, Description, Price } from "./styles";

const DishCard = ({ dish }) => {
  const convertToCurrency = useCallback(price => {
    return price.toLocaleString("PT-BR", {
      style: "currency",
      currency: "BRL"
    });
  }, []);

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
          {!!dish?.sales && (
            <Price>{convertToCurrency(dish.sales[0].price)}</Price>
          )}

          {!!dish.price && (
            <Price isPromoActive={!!dish?.sales}>
              {convertToCurrency(dish.price)}
            </Price>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(DishCard);
