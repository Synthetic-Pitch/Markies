import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import VoucherArray from '../assets/Vouchers';
// Create a context
const MyContext = createContext();

// Create a provider component
const GlobalContext = ({ children }) => {
  const [slider, setSlider] = useState(false);
  const [UserInput, setUserInput] = useState("");
  const [Order, setOrder] = useState([]);
  const [CartModalPayment, setCartModalPayment] = useState(false);
  const [CartModalVoucher, setCartModalVoucher] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [VoucherToUse, setVoucherToUse] = useState(VoucherArray);
  const [VoucherAvail,setVoucherAvail] = useState([]);
  const [Discount,setDiscount] = useState();
  const [FreeShipping,setFreeShipping] = useState(false);
  const [Fee,setFree] = useState(59);
  const [ProfileImg,setProfileImg] = useState("");
  const [userName,setUserName] = useState("");
  
  return (
    <MyContext.Provider value={{ slider, setSlider, UserInput, setUserInput, Order, setOrder, CartModalPayment, setCartModalPayment, paymentMethod, setPaymentMethod, CartModalVoucher, setCartModalVoucher, VoucherToUse, setVoucherToUse,VoucherAvail,setVoucherAvail,Discount,setDiscount,FreeShipping,setFreeShipping,Fee,setFree,ProfileImg,setProfileImg,userName,setUserName}}>
      {children}
    </MyContext.Provider>
  );
};

// Define prop types
GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, GlobalContext };
