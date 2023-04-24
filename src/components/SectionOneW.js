import React from 'react'
import { Link } from 'react-router-dom'

import BagsImgW from '../img/Combat Swan Drawstring Duffel-1.jpg'
import BodysuitImg from '../img/Racer Back Bodysuit-1.jpg'
import BottomsImg from '../img/High Waist Acid Washed Jean-1.jpg'
import DressesImg from '../img/Ruched Mini Dress-1.jpg'
import FootwearImg from '../img/Fashion Sneakers-1.jpg'
import HoodiesImg from '../img/Classic Fl Crop Hood Reversible Two Tone-1.jpg'
import JumpsuitsImg from '../img/Spaghetti Short Strap Jumpsuit-1.jpg'
import OuterwearImg from '../img/Boyfriend Denim Jacket-1.jpg'
import SweatersImg from '../img/Bebe Zip Front Sweater-1.jpg'
import TopsImg from '../img/Bebe Tee-1.jpg'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/swiper-bundle.min.css'

const SectionOneW = () => {
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
      <Link to="/bags-women">
        <div className="products">
         <img src={BagsImgW} alt="bags" />
        <div className="product-dep">
          <p>Bags</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/bodysuits">
        <div className="products">
         <img src={BodysuitImg} alt="shoes" />
        <div className="product-dep">
          <p>Bodysuits</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/bottoms">
        <div className="products">
        <img src={BottomsImg} alt="hats" />
        <div className="product-dep">
          <p>Bottoms</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/dresses">
        <div className="products">
        <img src={DressesImg} alt="hoodies" />
        <div className="product-dep">
          <p>Dresses</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/footwear-women">
        <div className="products">
          <img src={FootwearImg} alt="jeans" />
        <div className="product-dep">
          <p>Footwear</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/hoodies-women">
       <div className="products">
         <img src={HoodiesImg} alt="bags" />
        <div className="product-dep">
          <p>Hoodies</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/jumpsuits">
       <div className="products">
         <img src={JumpsuitsImg} alt="shirts" />
        <div className="product-dep">
          <p>Jumpsuits</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/outerwear-women">
       <div className="products">
         <img src={OuterwearImg} alt="shorts" />
        <div className="product-dep">
          <p>Outerwear</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/sweaters">
       <div className="products">
          <img src={SweatersImg} alt="Sweatshirts" />
        <div className="product-dep">
          <p>Sweaters</p>
        </div>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/tops">
       <div className="products">
         <img src={TopsImg} alt="Swimwear" />
        <div className="product-dep">
          <p>Tops</p>
        </div>
        </div>
       </Link>
      </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
   );
}
 
export default SectionOneW;