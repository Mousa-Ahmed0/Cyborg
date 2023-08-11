import { PrimaryButton } from '../../components/index'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome to Cyborg</h6>
            <h4 className='hero-title'><span>Browse</span> Our Pouplar Here</h4>
            <PrimaryButton>Browse Now</PrimaryButton>
            {/* <div className='main-button'>
                <a href="browse.html">Browse Now </a>
            </div> */}
        </div>
    </div>
  )
}

export default Hero