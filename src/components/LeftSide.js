import React from "react";

import '../scss/ProductDetails.scss'

const LeftSide = (props) => {
  const product = props.product

  const imageOne = React.useRef(null)
  const imageTwo = React.useRef(null)
  const imageThree = React.useRef(null)
  const imageFour = React.useRef(null)
  const imageFive = React.useRef(null)

  const mainImage = React.useRef(null)

setTimeout(() => {
  if(imageOne.current){
    imageOne.current.classList.add('active')
  }
})

function showOne(){
  imageOne.current.classList.add('active')
  imageTwo.current.classList.remove('active')
  if(imageThree.current){
    imageThree.current.classList.remove('active')
  }
  if(imageFour.current){
    imageFour.current.classList.remove('active')
  }
  if(imageFive.current){
    imageFive.current.classList.remove('active')
  }
}

function showTwo(){
  imageTwo.current.classList.add('active')
  imageOne.current.classList.remove('active')
  if(imageThree.current){
    imageThree.current.classList.remove('active')
  }
  if(imageFour.current){
    imageFour.current.classList.remove('active')
  }
  if(imageFive.current){
    imageFive.current.classList.remove('active')
  }
}

function showThree(){
  imageThree.current.classList.add('active')
  imageOne.current.classList.remove('active')
  imageTwo.current.classList.remove('active')
  if(imageFour.current){
    imageFour.current.classList.remove('active')
  }
  if(imageFive.current){
    imageFive.current.classList.remove('active')
  }
}

function showFour(){
  imageFour.current.classList.add('active')
  imageOne.current.classList.remove('active')
  imageTwo.current.classList.remove('active')
  imageThree.current.classList.remove('active')
  if(imageFive.current){
    imageFive.current.classList.remove('active')
  }
}

function showFive(){
  imageFive.current.classList.add('active')
  imageOne.current.classList.remove('active')
  imageTwo.current.classList.remove('active')
  imageThree.current.classList.remove('active')
  imageFour.current.classList.remove('active')
}

function zoomImage(e){
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop

  if(imageOne.current.classList.contains('active')){
    imageOne.current.style.transformOrigin = `${x}px ${y}px`
    imageOne.current.style.transform = 'scale(2)'
  }
  if(imageTwo.current.classList.contains('active')){
    imageTwo.current.style.transformOrigin = `${x}px ${y}px`
    imageTwo.current.style.transform = 'scale(2)'
  }
  if(imageThree.current && imageThree.current.classList.contains('active')){
    imageThree.current.style.transformOrigin = `${x}px ${y}px`
    imageThree.current.style.transform = 'scale(2)'
  }
  if(imageFour.current && imageFour.current.classList.contains('active')){
    imageFour.current.style.transformOrigin = `${x}px ${y}px`
    imageFour.current.style.transform = 'scale(2)'
  }
  if(imageFive.current && imageFive.current.classList.contains('active')){
    imageFive.current.style.transformOrigin = `${x}px ${y}px`
    imageFive.current.style.transform = 'scale(2)'
  }
}

function leaveImage(){
  if(imageOne.current.classList.contains('active')){
    imageOne.current.style.transformOrigin = 'center'
    imageOne.current.style.transform = 'scale(1)'
  }
  if(imageTwo.current.classList.contains('active')){
    imageTwo.current.style.transformOrigin = 'center'
    imageTwo.current.style.transform = 'scale(1)'
  }
  if(imageThree.current && imageThree.current.classList.contains('active')){
    imageThree.current.style.transformOrigin = 'center'
    imageThree.current.style.transform = 'scale(1)'
  }
  if(imageFour.current && imageFour.current.classList.contains('active')){
    imageFour.current.style.transformOrigin = 'center'
    imageFour.current.style.transform = 'scale(1)'
  }
  if(imageFive.current && imageFive.current.classList.contains('active')){
    imageFive.current.style.transformOrigin = 'center'
    imageFive.current.style.transform = 'scale(1)'
  }
}

  return ( 
    <div className="left-side">
            <div className="main-image" ref={mainImage} onMouseMove={zoomImage} onMouseLeave={leaveImage}>
            <img src={product.image} alt="" id="image-one" ref={imageOne}/>
            <img src={product.image2} alt="" id="image-two" ref={imageTwo}/>
            {product.image3 && <img src={product.image3} alt="" id="image-three" ref={imageThree}/>}
            {product.image4 && <img src={product.image4} alt="" id="image-four" ref={imageFour}/>}
            {product.image5 && <img src={product.image5} alt="" id="image-five" ref={imageFive}/>}
            </div>
            <div className="small-images">
             <img src={product.image} alt="" id="small-image-one" onClick={showOne}/>
             <img src={product.image2} alt="" id="small-image-two" onClick={showTwo}/>
             {product.image3 && <img src={product.image3} alt="" id="small-image-three" onClick={showThree}/>}
             {product.image4 && <img src={product.image4} alt="" id="small-image-four" onClick={showFour}/>}
             {product.image5 && <img src={product.image5} alt="" id="small-image-five" onClick={showFive}/>}
          </div>
    </div>
   );
}
 
export default LeftSide;