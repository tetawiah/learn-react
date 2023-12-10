import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8002";

const CitiesContext = createContext();
// eslint-disable-next-line react/prop-types
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  function getCity(id) {
    setIsLoading(true);
    fetch(`${BASE_URL}/cities/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCity(data);
        setIsLoading(false);
      });
  }

  function createCity(newCity) {
    setIsLoading(true);
    fetch(`${BASE_URL}/cities`, {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setCities((cities) => [...cities, newCity]);
        setIsLoading(false);
      });
  }

  function deleteCity(id) {
    setIsLoading(true);
    fetch(`${BASE_URL}/cities/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCities((cities) => cities.filter((city) => city.id !== id));
      })
      .catch((e) => alert("There was an error deleting city"))
      .finally(setIsLoading(false));
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities is being used outside the provider");
  return context;
}

export { CitiesProvider, useCities };
