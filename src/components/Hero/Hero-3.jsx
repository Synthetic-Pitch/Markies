import './Hero.css'
import food1 from '../../assets/product-images/Home/Rectangle 12.png'
import food2 from '../../assets/product-images/Home/Rectangle 13.png'
const Hero3 = () => {
  return (
    <div className="hero-3">
      <div className="hero3-container">

        <div className="hero-3-food1">
          <span>&#8369;72</span>
          <img src={food1} alt="s" />
          <p>Salted Turtle nacho</p>
          <button>Order now</button>
        </div>
        
        <div className="hero-3-food2">
          <span>&#8369;45</span>
          <img src={food2} alt="s" />
          <p>Goey Cheese Stick</p>
          <button>Order now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero3
