import React from "react";

import FormSearch from "../../components/FormSearch";
import {
  Wrapper,
  Header,
  Section,
  Aside,
  Image,
  Title,
  Hour,
  Accordion,
  Item,
  Collapse,
  Card,
  Thumb,
  CardBody,
  Price,
  PromoPrice
} from "./styles";

const RestaurantMenu = () => {
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

          <Hour>
            Segunda à Sexta: <strong>11:30 às 15:00</strong>
          </Hour>
          <Hour>
            Sábados: <strong>11:30 às 22:00</strong>
          </Hour>
          <Hour>
            Domingos e Feriados: <strong>11:30 às 15:00</strong>
          </Hour>
        </div>
      </Header>

      <Section>
        <FormSearch bgColor="#E6E6E6" />

        <Accordion>
          <Item>
            <a href="#collapse-1">Almoços</a>

            <Collapse id="collapse-1">
              <Card>
                <Thumb className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </Thumb>

                <CardBody>
                  <h3>Nome do Prato</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>

                  <div>
                    <PromoPrice>R$19,00</PromoPrice>
                    <Price onPromo={true}>R$29,00</Price>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <Thumb className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </Thumb>

                <CardBody>
                  <h3>Nome do Prato</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>

                  <div>
                    {true ? <PromoPrice>R$19,00</PromoPrice> : null}
                    <Price onPromo={true}>R$29,00</Price>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <Thumb className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </Thumb>

                <CardBody>
                  <h3>Nome do Prato</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>

                  <div>
                    {true ? <PromoPrice>R$19,00</PromoPrice> : null}
                    <Price onPromo={true}>R$29,00</Price>
                  </div>
                </CardBody>
              </Card>
            </Collapse>
          </Item>

          <Item>
            <a href="#collapse-2">Bebidas</a>

            <Collapse id="collapse-2">
              <Card>
                <Thumb>
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </Thumb>

                <CardBody>
                  <h3>Nome do Prato</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>

                  <div>
                    {true ? <PromoPrice>R$19,00</PromoPrice> : null}
                    <Price onPromo={true}>R$29,00</Price>
                  </div>
                </CardBody>
              </Card>
            </Collapse>
          </Item>
        </Accordion>
      </Section>

      <Aside></Aside>
    </Wrapper>
  );
};

export default React.memo(RestaurantMenu);
