import React from "react";

import { List, Item } from "./styles";

const RestaurantList = () => {
  return (
    <List>
      <Item>
        <div>
          <img
            src="https://api.adorable.io/avatars/145/abott@adorable.png"
            alt="Imagem do restaurante"
          />

          <h3>Nome do restaurante</h3>
          <p>Endereço do restaurante</p>

          <span>Aberto agora</span>
        </div>
      </Item>

      <Item>
        <div>
          <img
            src="https://api.adorable.io/avatars/145/abott@adorable.png"
            alt="Imagem do restaurante"
          />

          <h3>Nome do restaurante</h3>
          <p>Endereço do restaurante</p>

          <span>Aberto agora</span>
        </div>
      </Item>

      <Item>
        <div>
          <img
            src="https://api.adorable.io/avatars/145/abott@adorable.png"
            alt="Imagem do restaurante"
          />

          <h3>Nome do restaurante</h3>
          <p>Endereço do restaurante</p>

          <span>Aberto agora</span>
        </div>
      </Item>

      <Item>
        <div>
          <img
            src="https://api.adorable.io/avatars/145/abott@adorable.png"
            alt="Imagem do restaurante"
          />

          <h3>Nome do restaurante</h3>
          <p>Endereço do restaurante</p>

          <span>Aberto agora</span>
        </div>
      </Item>
    </List>
  );
};

export default React.memo(RestaurantList);
