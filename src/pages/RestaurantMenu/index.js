import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import FormSearch from "../../components/FormSearch";
import AccordionMenu from "../../components/AccordionMenu";
import { RestaurantsContext } from "../../contexts/RestaurantsContext";
import {
  Wrapper,
  Header,
  Section,
  Aside,
  Image,
  Title,
  Schedule
} from "./styles";

import api from "../../services/api";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [restaurants] = useContext(RestaurantsContext);

  const { id } = useParams();

  useEffect(() => {
    const restaurant = restaurants.find(
      restaurant => restaurant.id === Number(id)
    );

    setRestaurant(restaurant);
  }, [restaurants, id]);

  useEffect(() => {
    async function loadMenu() {
      const response = await api(`restaurants/${id}/menu`);

      setMenu(response);
    }

    loadMenu();
  }, [id]);
  return (
    <Wrapper>
      <Header>
        <Image>
          <img src={restaurant?.image} alt="Imagem do Restaurante" />
        </Image>

        <div>
          <Title>{restaurant?.name?.toUpperCase()}</Title>

          <Schedule>
            Segunda à Sexta: <strong>11:30 às 15:00</strong>
          </Schedule>
          <Schedule>
            Sábados: <strong>11:30 às 22:00</strong>
          </Schedule>
          <Schedule>
            Domingos e Feriados: <strong>11:30 às 15:00</strong>
          </Schedule>
        </div>
      </Header>

      <Section>
        <FormSearch bgColor="#E6E6E6" />

        <AccordionMenu menu={menu} />
      </Section>

      <Aside />
    </Wrapper>
  );
};

export default React.memo(RestaurantMenu);
