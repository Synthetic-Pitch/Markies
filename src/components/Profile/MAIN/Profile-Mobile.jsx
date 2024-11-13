import { useContext, useEffect, useState } from "react";
import "../Profile.css";
import { MyContext } from "../../../Context/GlobalContext";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ProfileMobile = () => {
  const { UserInfo, setUserInfo,isDisable } = useContext(MyContext);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const mobileUpdate = UserInfo.mobile.length === 11;
  
  const handleNumber = (e) => {
    const number = e.target.value;
    
    const cleanedNumber = number.replace(/\D/g, '');
    if (cleanedNumber.length > 11) {
      return;
    }
    setUserInfo(prev=>({...prev,mobile:cleanedNumber}));
  };
  

  const handleFocus = () => {
    setTooltipVisible(false); 
  };

  const handleBlur = () => {
    if (!mobileUpdate) {
      setTooltipVisible(true);
    }
  };
  
  useEffect(()=>{
    if(UserInfo.mobile.length===11){
      setUserInfo(prev=>({...prev,update:{...prev.update,updateMobile:true}}))
    }else{
      setUserInfo(prev=>({...prev,update:{...prev.update,updateMobile:false}}))
    }
  },[UserInfo.mobile])
 
  
  return (
    <div className="profile-main-child">
      <input
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={UserInfo.mobile}
        onChange={handleNumber}
        placeholder="mobile number"
        type="text"
        data-tooltip-id="my-tooltip" // ID linking to the tooltip
        data-tooltip-content="Must be 11 digits"
        disabled={isDisable}
      />

      <ReactTooltip
        id="my-tooltip"
        effect="solid"
        place="top"
        arrow={true}
        isOpen={tooltipVisible}
      />
      <hr />
    </div>
  );
};

export default ProfileMobile;
