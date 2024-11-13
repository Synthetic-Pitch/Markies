import { useState,useContext, useEffect } from 'react';
import "../Profile.css";
import calender from '../../../assets/web-icon/calendar.png';
import ProfileBdayModal from '../../Modal/Profile-Bday-Modal';
import { MyContext } from '../../../Context/GlobalContext';

const ProfileBirthday = () => {

  const [isOpen,setIsOpen]=useState(false);
  const {UserInfo,setUserInfo, isDisable}=useContext(MyContext);
  const [renderBday,setRenderBday] = useState(false);
 


  useEffect(()=>{
    if(UserInfo.userBday){
      setRenderBday(true)
    }
  },[UserInfo])

  useEffect(()=>{
    if(UserInfo?.userBday){
      setUserInfo(prev=>({...prev,update:{...prev.update,updateBday:true}}))
    } else{
      setUserInfo(prev=>({...prev,update:{...prev.update,updateBday:false}}))
    }
  },[UserInfo?.userBday,setUserInfo])

  const openModal = () => {
    if(isDisable){
      return;
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="profile-main-child">
      <div className='profile-bday-openModal'>
        
        {
          !renderBday && 
          <button type="button" onClick={openModal}>
            <div>
            <img src={calender} alt="caldr" />
            </div>
            <span>Birthday</span>
          </button>
        }
          
        {
          renderBday && 
          <div onClick={openModal} className='profile-main-bday-display'>
            <span className={isDisable? "🙂" :"☹" }>{UserInfo.userBday?.month}</span>
            <span className={isDisable? "🙂" :"☹" }>{UserInfo.userBday?.day}</span>
            <span className={isDisable? "🙂" :"☹" }>{UserInfo.userBday?.year}</span>
          </div>
        }

        {isOpen && <ProfileBdayModal openModal ={openModal} closeModal={closeModal} isOpen={isOpen}/>}
      </div>
    </div>
  );
};

export default ProfileBirthday;