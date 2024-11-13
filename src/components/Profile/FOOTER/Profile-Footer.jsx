import ProfileGoogle from "./Profile-Google";

import "../Profile.css"
import ProfileNotif from "./Profile-Notif";
import ProfileMessages from "./Profile-Messages";
import ProfileHelpCenter from "./Profile-HelpCenter";

const ProfileFooter = () => {
  
  return (
    <div className="profile-footer">
      <ProfileGoogle/>
      <ProfileNotif/>
      <ProfileMessages/>
      <ProfileHelpCenter/>
    </div>
  )
}

export default ProfileFooter