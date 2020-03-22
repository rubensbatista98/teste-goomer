import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext
} from "react";
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
  const [schedules, setSchedules] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  const [restaurants] = useContext(RestaurantsContext);

  const { id } = useParams();

  const daysOfWeek = useMemo(
    () => [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ],
    []
  );

  const handleSchedules = useCallback(
    (hours = []) => {
      const schedules = hours.reduce((schedulesAcc, hour) => {
        const daysLength = hour.days.length;
        let days = "";
        let operatingHour = "";

        if (daysLength === 1) {
          days = `${daysOfWeek[hour.days[0] - 1]}s`;
          operatingHour = `${hour.from} às ${hour.to}`;
        }

        if (daysLength === 2) {
          days = `${daysOfWeek[hour.days[0] - 1]}s e ${
            daysOfWeek[hour.days[1] - 1]
          }s`;

          operatingHour = `${hour.from} às ${hour.to}`;
        }

        if (daysLength === 3) {
          days = `${daysOfWeek[hour.days[0] - 1]}, ${
            daysOfWeek[hour.days[1] - 1]
          } e ${daysOfWeek[hour.days[2] - 1]}`;

          operatingHour = `${hour.from} às ${hour.to}`;
        }

        if (daysLength > 3) {
          days = `${daysOfWeek[hour.days[0] - 1]} à ${
            daysOfWeek[hour.days[daysLength - 1] - 1]
          }`;

          operatingHour = `${hour.from} às ${hour.to}`;
        }
        schedulesAcc.push({ days, hour: operatingHour });
        return schedulesAcc;
      }, []);

      return schedules;
    },
    [daysOfWeek]
  );

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
    const schedules = handleSchedules(restaurant?.hours);

    setSchedules(schedules);
  }, [restaurant, handleSchedules]);

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

          {schedules.map((schedule, index) => (
            <Schedule key={index}>
              {`${schedule.days}: `}
              <strong>{schedule.hour}</strong>
            </Schedule>
          ))}
        </div>
      </Header>

      <Section>
        <FormSearch
          bgColor="#E6E6E6"
          filterByValue={filterDishsByName}
          labelContent="no cardápio"
        />

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
