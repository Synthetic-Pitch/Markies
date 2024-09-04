import './Pages.css'
import Hero1 from "../components/Hero/Hero-1"
import Hero2 from '../components/Hero/Hero-2'
import Hero3 from '../components/Hero/Hero-3'
import Hero4 from '../components/Hero/Hero-4'
import Hero5 from '../components/Hero/Hero-5'


const Home = () => {
  return (
    <div className="home">
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
    </div>
  )
}

export default Home
