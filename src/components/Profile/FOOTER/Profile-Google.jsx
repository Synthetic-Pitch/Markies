import "../Profile.css";
import G_ICON from "../../../assets/web-icon/icons8-google-50.png";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../Context/GlobalContext";

const ProfileGoogle = () => {

  const {servicesBtn,setServicesBtn} = useContext(MyContext);

  
  useEffect(()=>{
    console.log(servicesBtn)
  },[servicesBtn])

  const handleClick = () => {
    if(servicesBtn.googleBtn){
      setServicesBtn(prev=>({...prev,googleBtn:false}))
    }else{
      setServicesBtn(prev=>({...prev,googleBtn:true}))
    }
    
  }
  
  return (
    <div className="profile-footer-container">
      
      <div className="profile-footer-icon-container">
        <img src={G_ICON} alt="png" />
      </div>

      <div className="profile-footer-services-text">
        <span>connect to Google</span>
      </div>

      <div className="profile-footer-btn">
        <button onClick={handleClick}>
          <div className={servicesBtn.googleBtn ? "to-right": "to-left"}></div>
        </button>
      </div>
      
    </div>
  )
}

export default ProfileGoogle
