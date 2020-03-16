import React from "react";

import { Card, Thumb, CardBody, Price, PromoPrice } from "./styles";

const DishCard = () => {
  return (
    <Card>
      <Thumb>
        <img
          src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
          alt=""
        />
      </Thumb>

      <CardBody>
        <h3>Nome do Prato</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

        <div>
          {true ? <PromoPrice>R$19,00</PromoPrice> : null}
          <Price onPromo={true}>R$29,00</Price>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(DishCard);
