import { useContext } from "react";
import notifIcon from "../../../assets/web-icon/notification.png";
import { MyContext } from "../../../Context/GlobalContext";

const ProfileNotif = () => {
  const {servicesBtn,setServicesBtn} =useContext(MyContext);

  const handleClick = () => {
    if(servicesBtn.notificationBtn){
      setServicesBtn(prev=>({...prev,notificationBtn:false}))
    }else{
      setServicesBtn(prev=>({...prev,notificationBtn:true}))
    }
  }

  return (
  <div className="profile-footer-container">
    <div className="profile-footer-icon-container">
      <img src={notifIcon} alt="png" />
    </div>
    
    <div className="profile-footer-services-text">
        <span>notification</span>
    </div>
    
    <div className="profile-footer-btn">
        <button onClick={handleClick}>
          <div className={servicesBtn.notificationBtn ? "to-right": "to-left"}></div>
        </button>
      </div>

  </div>
  )
}

export default ProfileNotif;