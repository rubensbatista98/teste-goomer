import React from "react";

const RestaurantMenu = () => {
  return (
    <header>
      <div>
        <img
          src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
          alt="Imagem do Restaurante"
        />
      </div>

      <h1>Nome do Restaurante</h1>

      <p>Segunda à Sexta: 11:30 às 15:00</p>
      <p>Sábados: 11:30 às 22:00</p>
      <p>Sábados: 11:30 às 22:00</p>

      <section>
        <div>Formulario</div>

        <ul className="accordion">
          <li className="item">
            <a href="#collapse-1">Almoços</a>

            <div className="collapse" id="collapse-1">
              <div className="card">
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </div>

                <h3 className="title">Nome do Prato</h3>

                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>

                <span className="price-sale">R$19,00</span>
                <span className="price">R$29,00</span>
              </div>

              <div className="card">
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </div>

                <h3 className="title">Nome do Prato</h3>

                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>

                <span className="price-sale">R$19,00</span>
                <span className="price">R$29,00</span>
              </div>
            </div>
          </li>

          <li className="item">
            <a href="#collapse-2">Bebidas</a>

            <div className="collapse" id="collapse-2">
              <div className="card">
                <div className="thumb">
                  <img
                    src="https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
                    alt=""
                  />
                </div>

                <h3 className="title">Nome do Prato</h3>

                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>

                <span className="price-sale">R$19,00</span>
                <span className="price">R$29,00</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default RestaurantMenu;
