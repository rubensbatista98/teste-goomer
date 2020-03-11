import React, { useState, useEffect, createContext } from "react";

import api from "../../services/api";

const RestaurantsContext = createContext();

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        setError(false);

        const data = await api("restaurants");

        setRestaurants(() => [...data]);
      } catch (error) {
        setError(true);
      }
    }

    loadRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={[restaurants, setRestaurants, error]}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export { RestaurantsContext, RestaurantsProvider };
