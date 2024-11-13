import { useContext, useState, useRef, useEffect } from "react";
import "../Profile.css";
import { MyContext } from "../../../Context/GlobalContext";
import { Tooltip as ReactTooltip } from "react-tooltip"; 

const ProfileName = () => {

  const { UserInfo, setUserInfo,isDisable } = useContext(MyContext);
  const [Tooltip, setTooltip] = useState(false);
  const tooltipTimeoutRef = useRef(null); 
  
  const handleChange = (e) => {
    const name = e.target.value;
    const spaceCount = (name.match(/\s/g) || []).length;

    const hasNumbers = /\d/.test(name); //bolean return true or false

    if (hasNumbers) {
      setTooltip(true);
      clearTimeout(tooltipTimeoutRef.current);
      tooltipTimeoutRef.current = setTimeout(() => {
        setTooltip(false); 
      }, 2000);
    } else {
      if (spaceCount <= 2) {
        setUserInfo(prev => ({ ...prev, name: name }));
        setTooltip(false);
        setUserInfo(prev=>({...prev,update:{...prev.update,updateName:true}}));
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current);
          tooltipTimeoutRef.current = null; 
        }
      } else {
        setTooltip(true);
        clearTimeout(tooltipTimeoutRef.current);
        tooltipTimeoutRef.current = setTimeout(() => {
          setTooltip(false); 
        }, 2000);
      }
    }
  };
  
  useEffect(() => {
    return () => {
      clearTimeout(tooltipTimeoutRef.current);
    };
  }, []);

  return (
    <div className="profile-main-child">     
      <input 
        disabled={isDisable}
        onChange={handleChange}
        value={UserInfo?.name || ""}
        placeholder="complete name" 
        type="text" 
        data-tooltip-id={"my-tooltip-name"}
        data-tooltip-content="2 spaces and letters only"
      />
      <hr />
      <ReactTooltip  
        id="my-tooltip-name"
        effect="solid"
        place="top"
        arrow={true}
        isOpen={Tooltip} 
      />
    </div>
  );
};

export default ProfileName;
