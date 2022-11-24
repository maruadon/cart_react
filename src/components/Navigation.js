import { Link } from "react-router-dom";
 import { useContext } from "react";
import { CartContext } from "../CartContext";
const Navigation = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "4px 12px",
    borderRadius: "50px",
  }
  const {cart} = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 35 }} src="/images/pizza1.jpg" alt="logo" />
        </Link>
        <ul className="flex item-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>{cart.totalItems}</span>
                <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navigation;
