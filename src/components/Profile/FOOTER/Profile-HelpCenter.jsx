import "../Profile.css"
import messagesCenter from '../../../assets/web-icon/messages.png'
import Arrow from '../../../assets/web-icon/arrow.png'
import { useContext } from "react";
import { MyContext } from "../../../Context/GlobalContext";


const ProfileHelpCenter = () => {

  const {servicesBtn,setServicesBtn} = useContext(MyContext);

  const handleClick = () => {
    if(servicesBtn.helpCenterBtn){
      setServicesBtn(prev=>({...prev,helpCenterBtn:false}))
    }else{
      setServicesBtn(prev=>({...prev,helpCenterBtn:true}))
    }
  }
  
  return (
   <div className="profile-footer-container">
      <div className="profile-footer-icon-container">
        <img src={messagesCenter} alt="png" />
      </div>

      <div className="profile-footer-services-text">
        <span>help center</span>
      </div>
      
      <div className="profile-footer-btn">
        <button onClick={handleClick} className="profile-footer-btn-arrow">
          <img src={Arrow} alt="arw" />
        </button>
      </div>
   </div>
  )
};

export default ProfileHelpCenter
