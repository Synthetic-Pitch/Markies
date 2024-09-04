import './Footer.css'
import IG from '../../assets/web-icon/IG.png'
import FB from '../../assets/web-icon/FB.png'
import Twitter from '../../assets/web-icon/Twitter.png'

const MainMenuFooter = () => {
  return (
    <div className='main-menu-footer'>
      <div className="branches">
        <div className="branches-container">
          <h2>BRANCHES</h2>
          <ul>
            <li>SM MARIKINA</li>
            <li>SM NORTH</li>
            <li>SM CAVITE</li>
            <li>SM GALERA</li>
            <li>AYALA MALL</li>
          </ul>
        </div>
      </div>
      
      <div className="contactUs">
        <div className="contactUs-container">
          <h2>Contact Us</h2>
          <div className='contact-numbers'>
            <div>
              09707331334
            </div>
            <div>
             2323-232-231
            </div>
          </div>
          <div className='contact-icons'>
            <img src={IG} alt="png" />
            <img src={FB} alt="png" />
            <img src={Twitter} alt="png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenuFooter
