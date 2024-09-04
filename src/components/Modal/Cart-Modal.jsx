/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react"
import { MyContext } from "../../Context/GlobalContext"
import './Cart-Modal.css'
import Gcash from '../../assets/web-icon/gcash.png'
import Paypal from '../../assets/web-icon/paypal.png'
import Visa from '../../assets/web-icon/visa.png'
import Amazon from '../../assets/web-icon/amazon.png'
import Cod from '../../assets/web-icon/cod.png'
const CartModal = () => {

  const modalRef = useRef()
  const {CartModalPayment, setCartModalPayment,setPaymentMethod} = useContext(MyContext)
  
  useEffect(()=>{
    if(CartModalPayment){
      modalRef.current.showModal();
    }else  modalRef.current.close();
  },[CartModalPayment])
  
  const handlePaymentMethod = (method)=>{
    setPaymentMethod(method)
    setCartModalPayment(!CartModalPayment)
  }
  
  return (
    <dialog className="cart-payment-modal" ref={modalRef}>
      <div className="cart-container-payment">        
        <img className="modal-gcash" src={Gcash} alt="png" />
        <div onClick={()=>{handlePaymentMethod("Gcash")}}>Gcash</div>
        <img className="modal-paypal" src={Paypal} alt="png" />
        <div onClick={()=>{handlePaymentMethod("Paypal")}}>Paypal</div>
        <img className="modal-visa" src={Visa} alt="png" />
        <div onClick={()=>{handlePaymentMethod("Visa")}}>Visa</div>
        <img className="modal-amazon" src={Amazon} alt="png" />
        <div onClick={()=>{handlePaymentMethod("Amazon")}}>Amazon</div>
        <img className="modal-cod" src={Cod} alt="png" />
        <div onClick={()=>{handlePaymentMethod("Cash on Delievery")}}>Cash on delievery</div>
      </div>
    </dialog>
  )
}

export default CartModal
