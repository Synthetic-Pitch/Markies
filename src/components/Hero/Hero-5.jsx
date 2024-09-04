import './Hero.css'
import Food1 from '../../assets/product-images/Home/Shrimp and Broccoli.png'
import shrimp from '../../assets/product-images/Home/shrimp.png'
import brocoli from '../../assets/product-images/Home/Premium Photo _ Fresh broccoli .png'
const Hero5 = () => {
  return (
    <div className='hero-5'>
      <img className='shrimp-brocoli' src={Food1} alt="s" />
      <p>SHRIMP AND BROCOLI</p>
      <img className='shrimp1' src={shrimp} alt="shrimp" />
      <img className='brocoli1' src={brocoli} alt="brcoli" />
      <img className='brocoli2' src={brocoli} alt="brocoli2" />
      <img className='shrimp2' src={shrimp} alt="shrimp" />
    </div>
  )
}

export default Hero5
