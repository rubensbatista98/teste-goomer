import React, { useCallback, useMemo } from "react";

import DishCard from "../DishCard";

import { Accordion, Item, Collapse, Button } from "./styles";

const AccordionMenu = ({ menu }) => {
  const menuGroups = useMemo(() => {
    if (menu.length === 0) return null;

    const groups = menu.reduce((groupsAccumulator, dish) => {
      const dishGroup = dish.group.toUpperCase().replace(/\s/g, "_");

      if (groupsAccumulator[dishGroup]) {
        groupsAccumulator[dishGroup].push({ ...dish });
        return groupsAccumulator;
      }

      groupsAccumulator[dishGroup] = [{ ...dish }];
      return groupsAccumulator;
    }, {});

    return groups;
  }, [menu]);

  const handleBtnClick = useCallback(event => {
    event.preventDefault();

    const buttonElement = event.currentTarget;
    const collapseId = buttonElement.getAttribute("href");
    const collapseElement = document.querySelector(`${collapseId}`);

    if (collapseElement) {
      buttonElement.classList.toggle("-open");
      collapseElement.classList.toggle("-open");
    }
  }, []);

  if (!menuGroups) return null;

  return (
    <Accordion>
      {Object.keys(menuGroups).map(group => (
        <Item key={group}>
          <Button href={`#${group}`} onClick={handleBtnClick}>
            {group.replace(/_/g, " ")}
          </Button>

          <Collapse id={group}>
            {menuGroups[group].map(dish => (
              <DishCard key={dish.name} dish={dish} />
            ))}
          </Collapse>
        </Item>
      ))}
    </Accordion>
  );
};

export default React.memo(AccordionMenu);
