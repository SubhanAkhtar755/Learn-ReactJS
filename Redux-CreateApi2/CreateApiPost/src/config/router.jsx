import {BrowserRouter , Routes , Route} from "react-router-dom"
import Shop from "../pages/shop"
import HomePage from "../pages/home"
import ShopA from "../pages/AddProduct"
const Routers = ()=>{
   
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/Shop" exact element={<Shop />} />
                <Route path="/A" exact element={<ShopA />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;