import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const BASE_URL = "http://localhost:8002";

const CitiesContext = createContext();
// eslint-disable-next-line react/prop-types

const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "currentCity":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "deleteCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      return "No action found";
  }
}
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initalState,
  );

  useEffect(() => {
    dispatch({ type: "loading", loading: true });
    fetch(`${BASE_URL}/cities`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "cities/loaded", payload: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(dispatch({ type: "loading", payload: false }));
  }, []);

  const getCity = useCallback(
    (id) => {
      function getCity(id) {
        if (Number(id) === currentCity.id) return;
        dispatch({ type: "loading", loading: true });
        fetch(`${BASE_URL}/cities/${id}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: "currentCity", payload: data });
          })
          .finally(dispatch({ type: "loading", payload: false }));
      }
    },
    [currentCity.id],
  );

  function createCity(newCity) {
    dispatch({ type: "loading", payload: true });
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
        dispatch({ type: "city/created", payload: newCity });
      })
      .catch((err) => alert(err.message))
      .finally(dispatch({ type: "loading", payload: false }));
  }

  function deleteCity(id) {
    dispatch({ type: "loading", payload: true });
    fetch(`${BASE_URL}/cities/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        dispatch({ type: "deleteCity", payload: id });
      })
      .catch((e) => alert("There was an error deleting city"))
      .finally(dispatch({ type: "loading", paylaod: false }));
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
