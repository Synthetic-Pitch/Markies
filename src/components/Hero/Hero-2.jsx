import './Hero.css'
import Food1 from '../../assets/product-images/Home/Rectangle 43.png'
import Food2 from '../../assets/product-images/Home/Rectangle 44.png'

const Hero2 = () => {
  return (
    <div className="hero-2">
      <div className='hero2-food1'>
        <img src={Food1} alt="w" />
      </div>
      <div className='hero2-food2'>
        <img src={Food2} alt="s" />
      </div>

      <h2 className='hero2-food1-name'>
        Gound Pork Grilled Steak
      </h2>
      <div className='hero2-food1-price'>
       <h4>527</h4>
      </div>

      <h2 className='hero2-food2-name'>
        Roasted Duck
      </h2>
      <div className='hero2-food2-price'>
       <h4>723</h4>
      </div>
    </div>
  ) 
}

export default Hero2
