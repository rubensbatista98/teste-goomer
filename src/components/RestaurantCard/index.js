import React from "react";

import { Card, Thumb, Header, Status } from "./styles";

const RestaurantCard = ({ isOpen }) => {
  return (
    <Card>
      <Thumb>
        <img
          src="https://api.adorable.io/avatars/145/abott@adorable.png"
          alt="Imagem do restaurante"
        />
      </Thumb>

      <Header>
        <h3>Nome do Restaurante</h3>
        <p>Endereço do restaurante</p>
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
  );
};

export default React.memo(RestaurantCard);
