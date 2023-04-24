import React from 'react'
import { Link } from 'react-router-dom'

import BagsImg from '../img/men-bags.jpg'
import FootwearImg from '../img/men-footwear.jpg'
import HatsImg from '../img/men-hats.jpg'
import HoodiesImg from '../img/men-hoodies.jpg'
import JeansImg from '../img/men-jeans.jpg'
import OuterwearImg from '../img/men-outerwear.jpg'
import ShirtsImg from '../img/men-shirts.jpg'
import ShortsImg from '../img/men-shorts.jpg'
import SweatshirtsImg from '../img/men-sweatshirts.jpg'
import SwimwearImg from '../img/men-swimwear.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/swiper-bundle.min.css'

const Sectionone = () => {

  return ( 
    <div id="section-one">
      <h2>Departments</h2>
      <div className="img-slider">
      <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[ Navigation, Pagination, Scrollbar, A11y]}
      className="mySwiper"
      //slidesPerView={5}
      //spaceBetween={5}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        390: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        912: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 5
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: 5
        },
      }}
      >
      <SwiperSlide>
      <Link to="/bags">
        <div className="products">
         <img src={BagsImg} alt="bags" />
        <div className="product-dep">
          <p>Bags</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/footwear">
        <div className="products">
         <img src={FootwearImg} alt="shoes" />
        <div className="product-dep">
          <p>Footwear</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/hats">
        <div className="products">
        <img src={HatsImg} alt="hats" />
        <div className="product-dep">
          <p>Hats</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/hoodies">
        <div className="products">
        <img src={HoodiesImg} alt="hoodies" />
        <div className="product-dep">
          <p>Hoodies</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/jeans">
        <div className="products">
          <img src={JeansImg} alt="jeans" />
        <div className="product-dep">
          <p>Jeans</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/outerwear">
       <div className="products">
         <img src={OuterwearImg} alt="bags" />
        <div className="product-dep">
          <p>Outerwear</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/shirts">
       <div className="products">
         <img src={ShirtsImg} alt="shirts" />
        <div className="product-dep">
          <p>Shirts</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/shorts">
       <div className="products">
         <img src={ShortsImg} alt="shorts" />
        <div className="product-dep">
          <p>Shorts</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/sweatshirts">
       <div className="products">
          <img src={SweatshirtsImg} alt="Sweatshirts" />
        <div className="product-dep">
          <p>Sweatshirts</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/swimwear">
       <div className="products">
         <img src={SwimwearImg} alt="Swimwear" />
        <div className="product-dep">
          <p>Swimwear</p>
        </div>
        </div>
       </Link>
      </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
   );
}
 
export default Sectionone;