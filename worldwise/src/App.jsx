import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import CityList from "./components/CityList.jsx";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:8002";
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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
