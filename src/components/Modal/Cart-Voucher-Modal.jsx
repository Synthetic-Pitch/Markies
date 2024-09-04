import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../Context/GlobalContext";
import { useNavigate } from 'react-router-dom';
import './Cart-Modal.css'

const CartVoucherModal = () => {
  const { CartModalVoucher, setCartModalVoucher, VoucherAvail, setDiscount,setFreeShipping } = useContext(MyContext);
  const ModalRef = useRef();
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (CartModalVoucher) {
      ModalRef.current.showModal();
    } else {
      ModalRef.current.close();
    }
  }, [CartModalVoucher]);
  
  const handleModalClose = () => {
    setCartModalVoucher(!CartModalVoucher);
  };
  
  const formatDiscount = (discount) => {
    const percentage = Math.round(discount * 100); // Round to the nearest whole number
    return `${percentage}%`; // Return as a percentage string without decimals
  };
  
  const handleClaimVoucher = () => {
    Navigate('/vouchers');
  };
  
  const handleUseVoucher = (discount, shipping) => {
    const percentage = Math.round(discount * 100);
    setDiscount(percentage); // Set the discount as an integer
    const ship = shipping
    
    if (ship) {
      setFreeShipping(true)
    } else {
      setFreeShipping(false)
    }
    
    setCartModalVoucher(!CartModalVoucher);
  };
  
  useEffect(() => {
    ModalRef.current.close();
  }, []);
  
  return (  
    <dialog className="cart-voucher-modal" ref={ModalRef}>
      { VoucherAvail.length === 0 ? 
        // eslint-disable-next-line react/no-unescaped-entities
        <div>You don't have vouchers to use</div> :
        <div className="cart-modal-container">
          { VoucherAvail.map((item, i) => (
            <div className="cart-container-item-map" key={i}>
              <div className="cart-container-map-img">
                <img src={item.source} alt="png" />
              </div>
              <div className="cart-container-map-info">
                <span>{formatDiscount(item.discount)}</span>
                <button 
                onClick={() => handleUseVoucher(item.discount,item.shipping)}>use</button>
              </div>
            </div>
          ))}
        </div>
      }
      
      <button className="cart-modal-close" onClick={handleModalClose}>Close</button>
      {VoucherAvail.length === 0 && <button className="cart-modal-claim-voucher" onClick={handleClaimVoucher}>Claim Voucher</button>}
    </dialog>
  );
};

export default CartVoucherModal;
