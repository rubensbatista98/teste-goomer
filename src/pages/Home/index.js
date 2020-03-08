import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <h1>Bem-vindo ao Lista Rango</h1>

        <form>
          <label htmlFor="search">Buscar estabelecimento</label>
          <input type="text" id="search" />
          <button type="submit">Buscar</button>
        </form>
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
