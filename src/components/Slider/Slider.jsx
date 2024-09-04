import './Slider.css'
import { MyContext } from '../../Context/GlobalContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  const {slider}=useContext(MyContext)
  
  return (
    <div className={slider? "slider" : "none"}>
      <ul>
        <Link to={'/home'}>
          <li className='home-slider'>Home</li>
        </Link>
        
        <Link to={'/mainMenu'}>
          <li className='main-menu-slider'>Main Menu</li>
        </Link>
        
        <Link to={'./desert'} className='desert-slider'>
          <li className='desert-slider '>Desert</li>
        </Link>

        <Link to={'./beverages'} className='beverages-slider'>
          <li>Beverages</li>
        </Link>
        
        <Link to={'./cart'} className='cart-slider'>
          <li>Cart</li>
        </Link>

        <Link to={'./vouchers'} className='vouchers-slider'>
          <li>Vouchers</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Slider
