import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FormSearch from "../../components/FormSearch";
import AccordionMenu from "../../components/AccordionMenu";
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
  const [menu, setMenu] = useState([]);

  const { id } = useParams();

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
          <img
            src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
            alt="Imagem do Restaurante"
          />
        </Image>

        <div>
          <Title>Nome do Restaurante</Title>

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
