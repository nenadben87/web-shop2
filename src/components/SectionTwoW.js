import React from 'react'
import { Link } from 'react-router-dom'

import BlackTrackSuit from '../img/Iconic T7 Gen Puma Track Jacket-1.jpg'
import PinkHoodie from '../img/Lucky Rhinestone Hoodie-1.jpg'
import JeansWaist from '../img/High Waist Rip Off Skinny Jean-1.jpg'
import YellowShirt from '../img/Cecillia Strappy Tank-1.jpg'
import PinkSneakers from '../img/Bb 4000 Ll Sneakers-1.jpg'
import WrapDress from '../img/Cami Wrap Dress WRuffle-1.jpg'
import WhiteBag from '../img/Puma Evercat Up & Comer Tote-1.jpg'

const SectionTwoW = () => {
  return ( 
    <div className="section-two">
    <div className="flex-one">
    <div className="image-1">
     <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/96">Buy Now</Link>
      </div>
     <img src={BlackTrackSuit} alt="black-vest" />
     </div>
     <div className="image-footer">
      <p>Shop Track Suit for Spring</p>
     </div>
    </div>

    <div className="image-2">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/92">Buy Now</Link>
      </div>
      <img src={PinkHoodie} alt="green-jacket" />
     </div>
     <div className="image-footer">
      <p>New Hoodie Arrivals</p>
     </div>
    </div>

  </div>
  <div className="flex-two">
    <div className="image-3">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/86">Buy Now</Link>
      </div>
      <img src={JeansWaist} alt="jeans-silver" />
     </div>
     <div className="image-footer">
      <p>Shop Jeans</p>
     </div>
    </div>

    <div className="image-4">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/100">Buy Now</Link>
      </div>
      <img src={YellowShirt} alt="hat-chicago-bulls" />
     </div>
     <div className="image-footer">
      <p>Top's New Collection</p>
     </div>
    </div>

    <div className="image-5">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/90">Buy Now</Link>
      </div>
      <img src={PinkSneakers} alt="emerson-sneakers" />
     </div>
     <div className="image-footer">
      <p>The Latest in Shoes</p>
     </div>
    </div>

  </div>
  <div className="flex-three">
    <div className="image-6">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/88">Buy Now</Link>
      </div>
      <img src={WrapDress} alt="beanie-ny" />
     </div>
     <div className="image-footer">
      <p>Dress Summer Trends</p>
     </div>
    </div>

    <div className="image-7">
    <div className="image-wrapper">
     <div className="image-overlay women">
       <Link to="/products/82">Buy Now</Link>
      </div>
      <img src={WhiteBag} alt="red-bag" />
     </div>
     <div className="image-footer">
      <p>Sport's Bag</p>
     </div>
    </div>

  </div>
</div>
   );
}
 
export default SectionTwoW;