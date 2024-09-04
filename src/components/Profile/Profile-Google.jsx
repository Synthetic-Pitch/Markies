import GoogleIcon from "../../assets/web-icon/google.png"
import "./Profile.css";
import { useGoogleLogin } from '@react-oauth/google';

const ProfileGoogle = () => {
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    }
  });
  
  return (
    <div className="profile-com-google">
       
      <div className="profile-com-google-">
        <div>
          connect to Google
        </div>
        <button onClick={() => login()} className="google-login-button">
          <img src={GoogleIcon} alt="" />
        </button>
      </div>
       
    </div>
  );
}

export default ProfileGoogle;
