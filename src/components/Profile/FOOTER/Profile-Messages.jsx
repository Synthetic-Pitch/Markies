import "../Profile.css";
import messageIcon from '../../../assets/web-icon/envelop.png';
import Arrow from '../../../assets/web-icon/arrow.png';
import { useContext } from "react";
import { MyContext } from "../../../Context/GlobalContext";
import MessageModal from "../../Modal/Message Modal/Message-Modal";


const ProfileMessages = () => {
  const {servicesBtn,setServicesBtn} = useContext(MyContext)

  const handleClick = () => {
    if(servicesBtn.messagesBtn){
      setServicesBtn(prev=>({...prev,messagesBtn:false}))
    }else{
      setServicesBtn(prev=>({...prev,messagesBtn:true}))
    }
    
  }

  return (
    <div className="profile-footer-container">
      <div className="profile-footer-icon-container">
        <img src={messageIcon} alt="png" />
      </div>
      
      <div className="profile-footer-services-text">
        <span>messages</span>
      </div>
      
      <div className="profile-footer-btn">
        <button onClick={handleClick} className="profile-footer-btn-arrow">
          <img src={Arrow} alt="arw" />
        </button>
      </div>
      <MessageModal/>
    </div>
  )
};

export default ProfileMessages;
