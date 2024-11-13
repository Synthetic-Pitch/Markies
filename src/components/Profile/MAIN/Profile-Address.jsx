import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../../Context/GlobalContext"
import "../Profile.css"
import { Tooltip as ReactTooltip } from "react-tooltip";

const ProfileAddress = () => {
  const { UserInfo, setUserInfo, isDisable } = useContext(MyContext)
  const [Tooltip, setTooltip] = useState(false)

  const handleAddress = (e) => {
    const address = e.target.value
    setUserInfo(prev => ({ ...prev, address: address }))
  };
  
  useEffect(() => {
    const haba = UserInfo.address.length

    if (haba === 0) {
      setTooltip(false)
      setUserInfo(prev => ({ ...prev, update: { ...prev.update, updateAddress: false } }))
    } else if (haba > 0 && haba < 7) {
      setTooltip(true);
      setUserInfo(prev => ({ ...prev, update: { ...prev.update, updateAddress: false } }))
    } else {
      setTooltip(false)
      setUserInfo(prev => ({ ...prev, update: { ...prev.update, updateAddress: true } }))
    }
  }, [UserInfo.address]);
  
  
  return (
    <div className="profile-main-child">
      <input
        disabled={isDisable}
        value={UserInfo.address}
        onChange={handleAddress}
        placeholder="address" type="text"
        data-tooltip-id="address"
        data-tooltip-content="Enter a valid address" />

      <hr />

      <ReactTooltip
        isOpen={Tooltip}
        id="address"
      />
    </div>
  )
}

export default ProfileAddress
