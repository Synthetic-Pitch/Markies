import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import VoucherArray from '../assets/Vouchers';

export const MyContext = createContext();

export const GlobalContext = ({ children }) => {
  
  const [slider, setSlider] = useState(false);
  const [UserInput, setUserInput] = useState("");
  const [Order, setOrder] = useState([]);
  const [CartModalPayment, setCartModalPayment] = useState(false);
  const [CartModalVoucher, setCartModalVoucher] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [VoucherToUse, setVoucherToUse] = useState(VoucherArray);
  const [VoucherAvail, setVoucherAvail] = useState([]);
  const [Discount, setDiscount] = useState();
  const [FreeShipping, setFreeShipping] = useState(false);
  const [Fee, setFree] = useState(59);
  const [ProfileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("");
  const [isDisable,setIsDisable] = useState(false);
  const [UserInfo, setUserInfo] = useState({
    name:"",
    address:"",
    mobile:"",
    update: {
      updateName: false,
      updateMobile: false,
      updateAddress: false,
      updateBday: false
    }
  });
  const [servicesBtn,setServicesBtn] = useState({
    googleBtn : false,
    notificationBtn : false,
    messagesBtn : false,
    helpCenterBtn : false
  }); 
  const [chatBox,setChatBox] = useState([{
    text:"",
    sender: UserInfo.name || "guess",
    id:'first_render'
  }]);

  return (
    <MyContext.Provider value={{ slider, setSlider, UserInput, setUserInput, Order, setOrder, CartModalPayment, setCartModalPayment, paymentMethod, setPaymentMethod, CartModalVoucher, setCartModalVoucher, VoucherToUse, setVoucherToUse, VoucherAvail, setVoucherAvail, Discount, setDiscount, FreeShipping, setFreeShipping, Fee, setFree, ProfileImg, setProfileImg, userName, setUserName, UserInfo, setUserInfo,isDisable,setIsDisable,servicesBtn,setServicesBtn,chatBox,setChatBox }}>
      {children}
    </MyContext.Provider>
  );
};

// Define prop types
GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};


