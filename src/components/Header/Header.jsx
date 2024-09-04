import './Header.css'
import menuIcon from '../../assets/web-icon/menu-icon.png'
import searchIcon from '../../assets/web-icon/search.png'
import profileIcon from '../../assets/web-icon/user.png'
import Slider from '../Slider/Slider'
import { MyContext } from '../../Context/GlobalContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'




const Header = () => {
  const {setSlider,slider,setUserInput,ProfileImg} = useContext (MyContext)
  const navigate = useNavigate()

  const  handleslider =()=>{
    setSlider(!slider)
  }
  const handleProfile=()=>{
    navigate('/profile')
  }

  return (
    <>  
      <div className="header">
        <div className='menu'>
          <img onClick={handleslider} src={menuIcon} alt="" />
        </div>
        
        <div className='inputed'>
          <div>
            <img src={searchIcon} alt="" />
          </div>
          <input 
          onChange={(e)=>{setUserInput(e.target.value)}}
          placeholder='search' 
          type="text" />
        </div>
        
        <div className='profile'>
          <img onClick={handleProfile} src={ProfileImg? ProfileImg: profileIcon} alt="profile" />
        </div>  
      </div>

      <Slider/>
    </>
  )
}

export default Header
