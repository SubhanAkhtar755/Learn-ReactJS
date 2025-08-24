import {BrowserRouter , Routes , Route} from "react-router-dom"
import Shop from "../pages/shop"
import HomePage from "../pages/home"
const Routers = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/Shop" exact element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;