import React, { useContext } from "react";

import '../scss/ProductDetails.scss'

import { ItemContext } from "../contexts/ItemContext";

const RightSide = ({ product }) => {

  const details = React.useRef(null)
  const contact = React.useRef(null)
  const offers = React.useRef(null)

  const detailsArea = React.useRef(null)
  const contactArea = React.useRef(null)
  const offersArea = React.useRef(null)

  const {increaseItem, cartArr, sumArr, cartSum, showLastItem} = useContext(ItemContext)
  
  setTimeout(() => {
    if(product){
      const sizes = document.querySelectorAll('.sizes')
      sizes.forEach((size) => {
         size.textContent = size.textContent.toUpperCase()
      })
    }
    if(details.current && detailsArea.current){
      details.current.classList.add('active')
      detailsArea.current.classList.add('active')
    }
  })
  
  function showDetails(){
    details.current.classList.add('active')
    contact.current.classList.remove('active')
    offers.current.classList.remove('active')

    detailsArea.current.classList.add('active')
    contactArea.current.classList.remove('active')
    offersArea.current.classList.remove('active')
  }

  function showContact(){
    contact.current.classList.add('active')
    details.current.classList.remove('active')
    offers.current.classList.remove('active')

    contactArea.current.classList.add('active')
    detailsArea.current.classList.remove('active')
    offersArea.current.classList.remove('active')
  }

  function showOffers(){
    offers.current.classList.add('active')
    contact.current.classList.remove('active')
    details.current.classList.remove('active')

    offersArea.current.classList.add('active')
    contactArea.current.classList.remove('active')
    detailsArea.current.classList.remove('active')
  }
  
  const chosenSize = React.useRef(null)
  const message = React.useRef(null)

  let sameProductArr = []

  function getSize(e){
    chosenSize.current.innerHTML = `<p>You've chosen size: <span>${e.target.textContent}</span></p>`
    chosenSize.current.classList.add('active')
  }

  function getSingleSize(e){
    chosenSize.current.innerHTML = `<p>You've chosen size: <span>${e.target.textContent}</span></p>`
    chosenSize.current.classList.add('active')
  }
  
  function addToCart(e){

    const quantity = e.target.previousElementSibling.previousElementSibling.children[1]

    if(!chosenSize.current.classList.contains('active') || quantity.value === '' || quantity.value < 1){
       message.current.textContent = 'Please select desired size and quantity!'
       message.current.style.backgroundColor = '#e14a4a'
       message.current.style.border = '1px solid #ca4242'
    } else {
      const size = e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.textContent

       message.current.textContent = 'Item is added to the Cart!'
       message.current.style.backgroundColor = '#7fcfa4'
       message.current.style.border = '1px solid #72ba93'

       const productObj = {
        name: product.name,
        price: product.price,
        color: product.color,
        image: product.image,
        id: product.id,
        quantity: quantity.value,
        size: size
       }

       increaseItem()

       if(cartArr.length > 0){
         cartArr.forEach((item) => {
           if(item.id === product.id){
             const strId = String(product.id)
             sameProductArr.push(product.id)
             const position = String(sameProductArr.length + 100)
             const concated = strId.concat(position)
             const numbered = Number(concated)

             productObj.id = numbered
           }
         })
       }

       cartArr.push(productObj)

       let calculatedPrice = product.price * quantity.value

       localStorage.setItem('products', JSON.stringify(cartArr))

       if(localStorage.length > 0){
        sumArr.push('+')
        sumArr.push(calculatedPrice)
       } else {
        sumArr.push(calculatedPrice)
       }
       
       let joinedSum = sumArr.join('')
       let evaledSum = eval(joinedSum)
       cartSum.current.textContent = evaledSum.toFixed(2)
       
       setTimeout(() => {
        showLastItem()
       }, 1000)
  }

    setTimeout(() => {
      message.current.textContent = ''
      message.current.style.backgroundColor = '#fff'
      message.current.style.border = 'none'
    },3000)

  }
  
  return ( 
    <div className="right-side">
            {
              product && 
              <div className="product-details">
                <h2>{product.name}</h2>
                <p id="product-mark">by {product.mark}</p>
                <p id="product-price">{product.price}$</p>
                <div className="product-sizes">
                {
                  typeof(product.size) === 'object' ? product.size.map((item) => (
                    <div className="product-size">
                      <span className="sizes" onClick={getSize}>{item}</span>
                    </div>
                  )) : 
                  <span className="sizes" onClick={getSingleSize}>{product.size}</span>
                }
                </div>
                <div className="chosen-size" ref={chosenSize}></div>
                 <div className="product-quantity">
                  <div className="quantity">
                    QTY
                  </div>
                  <input type="number" />
                 </div>
                 <div className="message" ref={message}></div>
                 <button className="add-to-cart" onClick={addToCart}>
                  ADD TO CART
                 </button>
                 <div className="window">
                  <div className="window-header">
                    <div className="header-btn" onClick={showDetails} ref={details}>Details</div>
                    <div className="header-btn" onClick={showContact} ref={contact}>Contact</div>
                    <div className="header-btn" onClick={showOffers} ref={offers}>Special Offers</div>
                  </div>
                  <div className="window-body">
                    <div className="body-area details" ref={detailsArea}>
                      <p>Color: {product.color}</p>
                      <p>Fabric: {product.fabric}</p>
                      <p>Item ID: {product.id}</p>
                    </div>
                    <div className="body-area contact" ref={contactArea}>
                      <h4>HOURS OF OPERATION Avaliable 7 Days a Week</h4>
                      <p id="first-par">Monday-Friday 9am-11pm EST</p>
                      <p id="second-par">Saturday & Sunday 11am-7pm EST</p>
                      <p id="third-par">Feel free to email us at <span>service-drjays@gmail.com</span> and one of our team members will reply within 24 hours</p>
                    </div>
                    <div className="body-area offers" ref={offersArea}>
                      <p>20% discount on each fifth item after 200$ purchase</p>
                    </div>
                  </div>
                 </div>
              </div> 
            }
          </div>
   );
}
 
export default RightSide;