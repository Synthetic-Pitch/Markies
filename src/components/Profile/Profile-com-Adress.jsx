import "./Profile.css"

const ProfileComAdress = () => {
  return (
    <div className="profile-com-adress">
      <div className="profile-com-adress-container">
        <div className="profile-com-adress-firstname">
          <input type="text" placeholder="firstname" />
          <hr />
        </div>
        <div className="profile-com-adress-Surename">
          <input type="text" placeholder="surename" />
          <hr />
        </div>
        <div className="profile-com-adress-Surename">
          <input type="text" placeholder="email" />
          <hr />
        </div>
        <div className="profile-com-adress-Surename">
          <input type="text" placeholder="address" />
          <hr />
        </div>
        
      </div>
    </div>
  )
}

export default ProfileComAdress;