import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Cart from "./pages/Cart"

  
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
}
 from "react-router-dom";


const App = () => {
return <>
<Router>
    <Routes>
      <Route path="/" element = {<Home/>}
     ></Route>
     <Route path="/register" element = {<Register/>}></Route>
     <Route path="/signin" element = {<Login/>}></Route>
     <Route path="/cart" element = {<Cart/>}></Route>

    </Routes>
  </Router>
</>;

};

export default App;