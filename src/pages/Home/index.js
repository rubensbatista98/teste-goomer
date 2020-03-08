import React from "react";

import FormSearch from "../../components/FormSearch";

import { Title } from "./styles";

const Home = () => {
  return (
    <>
      <header>
        <Title>Bem-vindo ao Lista Rango</Title>

        <FormSearch />
      </header>

      <section>
        <ul>
          <li>
            <div>
              <img
                src="https://api.adorable.io/avatars/145/abott@adorable.png"
                alt="Imagem do restaurante"
              />

              <h3>Nome do restaurante</h3>
              <p>Endereço do restaurante</p>

              <span>Aberto agora</span>
            </div>
          </li>

          <li>
            <div>
              <img
                src="https://api.adorable.io/avatars/145/abott@adorable.png"
                alt="Imagem do restaurante"
              />

              <h3>Nome do restaurante</h3>
              <p>Endereço do restaurante</p>

              <span>Aberto agora</span>
            </div>
          </li>

          <li>
            <div>
              <img
                src="https://api.adorable.io/avatars/145/abott@adorable.png"
                alt="Imagem do restaurante"
              />

              <h3>Nome do restaurante</h3>
              <p>Endereço do restaurante</p>

              <span>Aberto agora</span>
            </div>
          </li>

          <li>
            <div>
              <img
                src="https://api.adorable.io/avatars/145/abott@adorable.png"
                alt="Imagem do restaurante"
              />

              <h3>Nome do restaurante</h3>
              <p>Endereço do restaurante</p>

              <span>Aberto agora</span>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
