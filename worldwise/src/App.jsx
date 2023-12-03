import {BrowserRouter,Routes,Route} from "react-router-dom";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}> </Route>
                <Route path="/product" element={<Product/>}> </Route>
                <Route path="/pricing" element={<Pricing/>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
            </Routes>
        </BrowserRouter>
    )

}