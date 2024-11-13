import { useContext, useEffect, useState } from "react";
import "../Profile.css";
import exchange from  "../../../assets/web-icon/exchange.png"
import { MyContext } from "../../../Context/GlobalContext";

const ProfileHeader = () => { 

  const {ProfileImg,setProfileImg,userName,setUserName} = useContext(MyContext)
  
  const [nameCheck,setNameCheck] = useState(false);

  useEffect(()=>{
    if(userName === ""){
      setNameCheck(true)
    }
  },[userName])

  const handleInsertImg = () => {
    document.getElementById("fileInput").click(); 
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImg(e.target.result); // Set the image source to the selected file
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  
  const handleUserName = (e) => {
    const name = e.target.value;
    setUserName(name); 
  };
  
  return (
    <div className="profile-header">
      
      <div className="profile-container-img">
        <div className="profile-con1">
          <div className="profile-exchange" onClick={handleInsertImg}>
            <img src={exchange} alt="" />
          </div>
          <div className="profile-user-photo">
            {ProfileImg ? <img 
              
              src={ProfileImg || "default-placeholder.png"}  
            /> : <span onClick={handleInsertImg} >Upload</span>}
            
          </div>
        </div>
        <div className="profile-con2">
          <div className="profile-con2-container">
            
            {
              nameCheck ? //false
              <div className="profile-con2-container-two">
                <input onChange={handleUserName} type="text" placeholder="enter name" />
                <hr />
              </div>
              : <div className="profile-con2-container-name">{userName}</div>
            }
            <div className="profile-con2-container-user">user</div>
            
          </div>
          
        </div>
      </div>
           
      {/* Hidden file input */}
      <input 
        type="file" 
        id="fileInput" 
        style={{ display: "none" }} 
        accept="image/*" 
        onChange={handleImageChange} 
      />
    
      
    </div>
  );
};

export default ProfileHeader;



