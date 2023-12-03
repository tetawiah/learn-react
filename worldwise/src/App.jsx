import {BrowserRouter,Routes,Route} from "react-router-dom";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
export default function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}> </Route>
                <Route path="/product" element={<Product/>}> </Route>
                <Route path="/pricing" element={<Pricing/>}> </Route>
            </Routes>
        </BrowserRouter>

    </div>

}