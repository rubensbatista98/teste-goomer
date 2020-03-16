import React, { useCallback } from "react";

import DishCard from "../DishCard";

import { Accordion, Item, Collapse, Button } from "./styles";

const AccordionMenu = () => {
  const handleBtnClick = useCallback(event => {
    event.preventDefault();

    const collapseId = event.currentTarget.getAttribute("href");

    if (collapseId) {
      event.currentTarget.classList.toggle("-open");
      document.querySelector(`${collapseId}`).classList.toggle("-open");
    }
  }, []);

  return (
    <Accordion>
      <Item>
        <Button href="#collapse-1" onClick={handleBtnClick}>
          Almoços
        </Button>

        <Collapse id="collapse-1">
          <DishCard />
          <DishCard />
          <DishCard />
        </Collapse>
      </Item>

      <Item>
        <Button href="#collapse-2" onClick={handleBtnClick}>
          Bebidas
        </Button>

        <Collapse id="collapse-2">
          <DishCard />
        </Collapse>
      </Item>
    </Accordion>
  );
};

export default React.memo(AccordionMenu);
