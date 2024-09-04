import PropTypes from 'prop-types';
import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Context/GlobalContext';

const CartOrderContainer = ({ item }) => {
  const { Order, setOrder } = useContext(MyContext);
  const [count, setCount] = useState(item.quantity);

  const updateCartItem = () => {
    setOrder(prevCart =>
      prevCart.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: count } : cartItem
      )
    );
  };
  
  const handleAdd = () => {
    if (count < 20) {
      setCount(prev => prev + 1);
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };  
  
  const handleRemoveItem = () => {
    setOrder(prevCart => prevCart.filter(cartItem => cartItem.name !== item.name));
  };

  useEffect(() => {
    updateCartItem();
  }, [count]);

  useEffect(() => {
    console.log("Order updated", Order);
  }, [Order]);

  return (
    <div className="cart-container">
      <div className="cart-quantity">
        <span onClick={handleAdd} className="cart-btn">+</span>
        <span className="cart-quantity">{count}</span>
        <span onClick={handleMinus} className="cart-btn">&#8722;</span>
      </div>

      <div className="cart-product-image">
        <div>
          <img src={item.source} alt="source-image" />
        </div>
      </div>
      
      <div className="cart-product-info">
        <div className="cart-info-con1">
          <button onClick={handleRemoveItem}>X</button>
        </div>
        <div className="cart-info-con2">
          <div>
            {item.name}
          </div>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  );
};

CartOrderContainer.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartOrderContainer;
