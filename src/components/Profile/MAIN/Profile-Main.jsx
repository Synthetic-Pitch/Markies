import { useContext, useEffect, useRef, useState } from 'react';
import '../Profile.css'
import ProfileAddress from './Profile-Address';
import ProfileBirthday from './Profile-Birthday';
import ProfileMobile from './Profile-Mobile';
import ProfileName from './Profile-Name';
import { MyContext } from '../../../Context/GlobalContext';



const ProfileMain = () => {
  
  const { UserInfo,isDisable,setIsDisable } = useContext(MyContext);
  const [save,setSaved] = useState("");
  const Allconditions = UserInfo.update.updateName && UserInfo.update.updateMobile && UserInfo.update.updateAddress && UserInfo.update.updateBday
  const modalRef = useRef(null);
  const alertModal = useRef(null);

  useEffect(()=>{
    console.log(UserInfo)
  },[UserInfo])
  
  useEffect(()=>{
    if(isDisable){
      setSaved("EDIT")
    }else setSaved("SAVE")

  },[isDisable])


  const handleSave =()=>{
    
    if(Allconditions){
      setIsDisable(!isDisable)  //Disable all inputs
      setSaved("EDIT")
      modalRef.current.showModal();
      setTimeout(() => {
        modalRef.current.close();
      }, 1000);
    }else {
      alertModal.current.showModal();
      setTimeout(()=>{
        alertModal.current.close();
      },1200)
    }
  }
  
  return (
    <div className='profile-main'>
      <div className='profile-main-container'>
        <ProfileName/>
        <ProfileMobile/>
        <ProfileAddress/>
        <ProfileBirthday/>
      </div>
      
      <hr className='profile-main-hr'/>
      <button onClick={handleSave} className='profile-main-button'>{save}</button>

      <dialog  
        ref={modalRef} className='profile-main-saved-modal'>    
        <h4>saved</h4>
      </dialog>
    
      <dialog className='profile-main-saved-modal' ref={alertModal}>
        <h4>please fill up correctly</h4>
      </dialog>

    </div>
  )
}

export default ProfileMain;
