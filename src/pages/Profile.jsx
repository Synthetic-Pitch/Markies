import ProfileFooter from "../components/Profile/FOOTER/Profile-Footer";
import ProfileHeader from "../components/Profile/HEADER/Profile-Header";
import ProfileMain from "../components/Profile/MAIN/Profile-Main";

const Profile = () => {
  return (
    <div className="profile-page">
     <ProfileHeader/>
     <ProfileMain/>
     <ProfileFooter/>
    </div>
  )
};

export default Profile
