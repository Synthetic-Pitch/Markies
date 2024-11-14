import CartFooter from "../Footer/Cart-Footer";
import CartOrderContainer from "./Cart-Order-Container";
import "./Cart.css";
import CartPng from "../../assets/web-icon/cart 29.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../Context/GlobalContext";

const CartCom = () => {
  const { Order } = useContext(MyContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/mainMenu");
  };

  return (
    <div className="cart-com">
      <div onClick={handleNavigate} className="cart-heading">
        <img src={CartPng} alt="cart" />
        <span>{Order.length > 0 ? "Add more" : "Add food"}</span>
      </div>
      {Order.length === 0 && <div>No food selected yet</div>}
      <div className="cart-map-items">
        {Order.map((item, index) => (
          <CartOrderContainer key={index} item={item} />
        ))}
      </div>
      {Order.length > 0 && <CartFooter />}
    </div>
  );
};

export default CartCom;
