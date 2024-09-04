import './Hero.css'
import food1 from '../../assets/product-images/Home/Yoshinoya-Style Gyudon.png'
import food2 from '../../assets/product-images/Home/Soy Sauce Chicken and Noodles.png'
import food3 from '../../assets/product-images/Home/City guide_ Tokyo.png'
const Hero1 = () => {
  return (
    <div className='hero-1'>
     
      <div className='hero-food1'>
       <img src={food2} alt="f2" />
      </div>
      
      <div className='hero-food2'>
       <img src={food1} alt="f1" />
      </div>
      
      <div className='hero-food3'>
        <img src={food3} alt="f3" />
      </div>
      <span>SAVOUR</span>
    </div>
  )
}

export default Hero1
