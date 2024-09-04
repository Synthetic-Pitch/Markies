import ProfileCom from "../components/Profile/Profile-com"
import ProfileComAdress from "../components/Profile/Profile-com-Adress"
import ProfileGoogle from "../components/Profile/Profile-Google"


const Profile = () => {
  return (
    <div className="profile-page">
     <ProfileCom/>
     <ProfileComAdress/>
     <ProfileGoogle/>
    </div>
  )
}

export default Profile
