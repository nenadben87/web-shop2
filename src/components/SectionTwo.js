import React from 'react'
import { Link } from 'react-router-dom'

import BlackVest from '../img/men-outerwear-black-vest.jpg'
import GreenJacket from '../img/Fly High Chenille Patches Jacket-4.jpg'
import JeansSilver from '../img/Repair Denim Jean-1.jpg'
import HatChicagoBulls from '../img/9fifty Chicago Bulls Snapback Hat-1.jpg'
import EmersonSneakers from '../img/Emerson Sneakers-1.jpg'
import GreenShirt from '../img/Rib Trim Marled V-Neck T-Shirt-1.jpg'
import RedBag from '../img/Boxed Horseshoe-1.jpg'

const SectionTwo = () => {

  return ( 
    <div className="section-two">
      <div className="flex-one">
      <div className="image-1">
       <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/45">Buy Now</Link>
        </div>
       <img src={BlackVest} alt="black-vest" />
       </div>
       <div className="image-footer">
        <p>Shop Vest for Spring</p>
       </div>
      </div>

      <div className="image-2">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/47">Buy Now</Link>
        </div>
        <img src={GreenJacket} alt="green-jacket" />
       </div>
       <div className="image-footer">
        <p>New Jacket Arrivals</p>
       </div>
      </div>

    </div>
    <div className="flex-two">
      <div className="image-3">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/41">Buy Now</Link>
        </div>
        <img src={JeansSilver} alt="jeans-silver" />
       </div>
       <div className="image-footer">
        <p>Shop Jeans</p>
       </div>
      </div>

      <div className="image-4">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/22">Buy Now</Link>
        </div>
        <img src={HatChicagoBulls} alt="hat-chicago-bulls" />
       </div>
       <div className="image-footer">
        <p>Hat's New Collection</p>
       </div>
      </div>

      <div className="image-5">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/11">Buy Now</Link>
        </div>
        <img src={EmersonSneakers} alt="emerson-sneakers" />
       </div>
       <div className="image-footer">
        <p>The Latest in Shoes</p>
       </div>
      </div>

    </div>
    <div className="flex-three">
      <div className="image-6">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/56">Buy Now</Link>
        </div>
        <img src={GreenShirt} alt="beanie-ny" />
       </div>
       <div className="image-footer">
        <p>Shirts Trends</p>
       </div>
      </div>

      <div className="image-7">
      <div className="image-wrapper">
       <div className="image-overlay">
         <Link to="/products/7">Buy Now</Link>
        </div>
        <img src={RedBag} alt="red-bag" />
       </div>
       <div className="image-footer">
        <p>Sport's Bag</p>
       </div>
      </div>

    </div>
  </div>
   );
}
 
export default SectionTwo;