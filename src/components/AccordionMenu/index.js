import React from "react";

import DishCard from "../DishCard";

import { Accordion, Item, Collapse } from "./styles";

const AccordionMenu = () => {
  return (
    <Accordion>
      <Item>
        <a href="#collapse-1">Almoços</a>

        <Collapse id="collapse-1">
          <DishCard />
          <DishCard />
          <DishCard />
        </Collapse>
      </Item>

      <Item>
        <a href="#collapse-2">Bebidas</a>

        <Collapse id="collapse-2">
          <DishCard />
        </Collapse>
      </Item>
    </Accordion>
  );
};

export default React.memo(AccordionMenu);
