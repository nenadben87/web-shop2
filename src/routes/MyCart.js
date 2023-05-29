import React, { useContext, useEffect, useRef } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../scss/MyCart.scss';
import '../scss/Navigation.scss';
import '../scss/Footer.scss';

const MyCart = () => {

  const subtotal = React.useRef(null)

  let {cartArr, sumArr, footer, i, itemsEl, cartSum, showLastItem} = useContext(ItemContext)

  let updateArr = []
  let helpArr = []
  const itemIdEl = useRef(null)

  useEffect(() => {
   if(itemIdEl.current){
    console.log(itemIdEl.current)
   }
  }, [])

  function removeItem(e){
    e.target.parentElement.parentElement.parentElement.remove()
    footer.current.style.zIndex = '1'

    const itemId = Number(e.target.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[0].textContent)

    cartArr.forEach((item) => {
      if(item.id !== itemId){
        updateArr.push(item)
      } 
    })
    cartArr.splice(0, cartArr.length)

    updateArr.forEach((item) => {
      cartArr.push(item)
    })
    updateArr.splice(0, updateArr.length)

    localStorage.setItem('products', JSON.stringify(cartArr))

    sumArr.splice(0, sumArr.length)

    if(localStorage.length > 0){
      i = cartArr.length
      itemsEl.current.textContent = i
      
      cartArr.forEach((item) => {
        let totalPrice = item.price * item.quantity
        
        helpArr.push(totalPrice)
        helpArr.push('+')
      })

      helpArr.pop()
      const joined = helpArr.join('')
      const evaled = eval(joined)
      sumArr.push(evaled)

      helpArr.splice(0, helpArr.length)
      
      if(evaled !== undefined){
        cartSum.current.textContent = evaled.toFixed(2)
        subtotal.current.textContent = `Subtotal: $${evaled.toFixed(2)}`

        setTimeout(() => {
          showLastItem()
        },1000)
      } else {
        cartSum.current.textContent = '0'
        subtotal.current.textContent = 'Subtotal: $0'
        localStorage.clear()
      }
    } else {
      localStorage.clear()
    }
  }

  return (
    <div className="my-cart">
      <Navigation /> 
      <div className="container">
      <div className="header">
      <h2>Shopping Bag</h2>
      <div className="department-nav">
        <Link to="/men">Back to Men</Link>
        <Link to="/women">Back to Women</Link>
      </div>
      </div>
      <div className="main">
        <div className="left-side">
         <div className="item-titles">
          <div className="titles-left">
            <p id="product">PRODUCT</p>
            <p id="description">DESCRIPTION</p>
          </div>
          <div className="titles-right">
            <p id="quantity">QUANTITY</p>
            <p id="total">TOTAL</p>
            <p id="remove">REMOVE</p>
          </div>
         </div>
         <div className="single-item">
         {
          localStorage.length > 0 ? cartArr.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-left">
            <img src={item.image} alt="" />
            <div className="item-description">
              <p>{item.name}</p>
              <p>ID: <span ref={itemIdEl}>{item.id}</span></p>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p id="item-price">${item.price}</p>
            </div>
            </div>
            <div className="item-right">
              <div className="item-quantity">
                {item.quantity}
              </div>
              <div className="item-total">
                ${(item.quantity * item.price).toFixed(2)}
              </div>
              <div className="item-remove">
                <i className="fa-sharp fa-solid fa-x" onClick={removeItem}></i>
              </div>
            </div>
          </div>
        )) : 
        <div className="empty-cart">
          <p>Cart is empty!</p>
          <p>Please add item to Your Cart!</p>
          <Link to="/">Back to Home</Link>
        </div>
      }
         </div>
        </div>
        <div className="right-side">
         <div className="subtotal">
           {
            sumArr[0] !== undefined ? 
            <div>
              <h2 ref={subtotal}>Subtotal: ${sumArr[0].toFixed(2)}</h2>
            </div> : 
            <div>
              <h2 ref={subtotal}>Subtotal: $0</h2>
            </div>
           }
         </div>
         <div className="checkout-text">
          <p>Tax and shipping charges are calculated during checkout.
            You will see your final total before submitting your order.</p>
         </div>
         <div className="checkout-btn-wrapper">
          <Link to="/submit-order" className="checkout-btn">
          <span>CHECKOUT</span>
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </Link>
         </div>
        </div>
       </div>
      </div>
      <Footer />
    </div>
   );
}
 
export default MyCart;