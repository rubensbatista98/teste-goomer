import React, { useState, useEffect, useCallback, useContext } from "react";
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
  Schedule,
  Error,
  NotFound
} from "./styles";

import api from "../../services/api";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  const [restaurants] = useContext(RestaurantsContext);

  const { id } = useParams();

  const filterDishsByName = useCallback(
    name => {
      if (name.length === 0) {
        setFilteredDishes([...menu]);
        return null;
      }

      const filtered = menu.filter(dish =>
        dish.name.toLowerCase().includes(name.toLowerCase().trim())
      );

      if (filtered.length === 0) {
        setNotFound(true);
        return null;
      }

      setFilteredDishes(filtered);
      setNotFound(false);
    },
    [menu]
  );

  useEffect(() => {
    const restaurant = restaurants.find(
      restaurant => restaurant.id === Number(id)
    );

    setRestaurant(restaurant);
  }, [restaurants, id]);

  useEffect(() => {
    async function loadMenu() {
      try {
        setError(false);

        const response = await api(`restaurants/${id}/menu`);

        setMenu(response);
        setFilteredDishes([...response]);
      } catch (e) {
        setError(true);
      }
    }

    loadMenu();
  }, [id]);

  if (error) return <Error>Desculpe, mas ocorreu um erro inesperado.</Error>;

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
        <FormSearch bgColor="#E6E6E6" filterByValue={filterDishsByName} />

        {notFound ? (
          <NotFound>O prato buscado não esta disponível no cardápio.</NotFound>
        ) : (
          <AccordionMenu menu={filteredDishes} />
        )}
      </Section>

      <Aside />
    </Wrapper>
  );
};

export default React.memo(RestaurantMenu);
