import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
//{} because we export cartcontext
import { useEffect, useState } from "react";

const App = () => {
  // for local storage of cart
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
    //to understand we have to see the video of localstorage
    setCart(JSON.parse(cart));
    //when we refresh we pass previously stored data in the cart and usestate will sync other data accordingly throughout this system
  }, []);

  //after geting item from product in cart now store in local storage
  useEffect(() => { 
    window.localStorage.setItem('cart',JSON.stringify(cart));
    //WE CA ONLY STORE STRING IN LOCAL STORE ,THATS WHY COVERT WITH JSON.
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          {/* this is created in components/navigation */}

          <Routes>
            {/* in new version of react-router-dom there is no shitch ....use routes and no use of exact */}
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:_id" element={<SingleProduct />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};
/* <Route path="/" component={Home}></Route><Route path="/about" component={About}></Route> */

export default App;
