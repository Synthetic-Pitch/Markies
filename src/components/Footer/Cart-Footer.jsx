import { useContext, useState, useEffect } from 'react';
import './Footer.css';
import { MyContext } from '../../Context/GlobalContext';
import CartModal from '../Modal/Cart-Modal';
import CartVoucherModal from '../Modal/Cart-Voucher-Modal';

const CartFooter = () => {
  const { Order, CartModalPayment, setCartModalPayment, paymentMethod, CartModalVoucher, setCartModalVoucher, Discount, FreeShipping,Fee,setFree } = useContext(MyContext);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [Change, setChange] = useState(false);
  const [percent, setPercent] = useState('');

  // Calculate the subtotal and update the state
  useEffect(()=>{
    if(!FreeShipping){
      setFree(59)
    }else setFree(0)
  },[FreeShipping,setFree])
  
  useEffect(() => {
    const newSubtotal = Order.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal + Fee )
    
  }, [Order,Fee]);

  
  // Apply discount and update the total whenever Discount or subtotal changes
  useEffect(() => {
    let newTotal = subtotal;
    if (Discount) {
      const discountAmount = (Discount / 100) * subtotal;
      newTotal = subtotal - discountAmount;
      setPercent(`${Discount}%`);
    }
    setTotal(Math.round(newTotal)); // Rounding the total to the nearest integer
  }, [Discount, subtotal]);
  
  // Handle payment method modal
  useEffect(() => {
    if (paymentMethod !== "") {
      setChange(true);
    }
  }, [paymentMethod]);

  const handlePaymentModal = () => {
    setCartModalPayment(!CartModalPayment);
  };

  const handleVoucherModal = () => {
    setCartModalVoucher(!CartModalVoucher);
  };
  
  const handleCheckout = () => {
    if (paymentMethod !== "") {
      alert("Order success!");
    }
  };
  
  return (
    <div className="cart-footer">
      <div className="footer-container-info">
        <span>Subtotal: &#x20B1; {total}</span>
        <div className="cart-container-info">
          <div>
            Payment Method: 
            <button onClick={handlePaymentModal}>
              {Change ? "Change" : "Choose"}: {paymentMethod}
            </button> 
          </div> 
          <div>
            Voucher: 
            <button onClick={handleVoucherModal}> 
              {Discount ? percent + ' discounted' : 'Use Voucher'}
            </button>
          </div>
          <div>Shipping Fee: {FreeShipping? "Free shipping": "59"}</div>
        </div>
      </div> 
      <div onClick={handleCheckout} className="cart-checkout">CHECK OUT</div>
      <CartModal/>
      <CartVoucherModal/>
    </div>
  );
}

export default CartFooter;