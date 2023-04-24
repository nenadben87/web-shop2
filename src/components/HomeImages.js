import MensOne from '../img/mens-1.jpg'
import WomensOne from '../img/womens-1.jpg'

import '../scss/HomeImages.scss'

import { Link } from 'react-router-dom';

const HomeImages = () => {
  return ( 
    <div className="home-images">
      <div className="left-img">
        <div className="mens-overlay">
          <Link to="/men">
            Men's Clothes
          </Link>
        </div>
        <img src={MensOne} alt=""/>
      </div>
      <div className="right-img">
        <div className="womens-overlay">
          <Link to="/women">
            Women's Clothes
          </Link>
        </div>
        <img src={WomensOne} alt="" />
      </div>
    </div>
   );
}
 
export default HomeImages;