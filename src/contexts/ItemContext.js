import React, { createContext, useRef } from "react";

export const ItemContext = createContext()

const ItemContextProvider = (props) => {
   let cartArr = []
   let sumArr = []
   let helpArr = []

   let i = 0
   const itemsEl = useRef(null)

   let cartSum = useRef(null)

   const lastAdded = useRef(null)

   const main = useRef(null)
   const footer = useRef(null)

   const mainW = useRef(null)

    if(localStorage.length > 0){
      sumArr.splice(0, sumArr.length)
      cartArr.splice(0, cartArr.length)
      cartArr = JSON.parse(localStorage.getItem('products'))

      cartArr.forEach((item) => {
        const calculatedPrice = item.price * item.quantity
        helpArr.push(calculatedPrice)
        helpArr.push('+')
      })
      helpArr.pop()
      const joined = helpArr.join('')
      const evaled = eval(joined)
      sumArr.push(evaled)
      helpArr.splice(0, helpArr.length)
    } else {
      cartArr = []
    }

  const increaseItem = () => {
   if(localStorage.length > 0){
     i = cartArr.length
   }
   i++
   itemsEl.current.textContent = i
 }

 const showLastItem = () => {
    if(lastAdded.current){
      lastAdded.current.innerHTML = `
    <div class="last-added-wrapper">
    <div class="last-added-image">
      <img src="${cartArr[cartArr.length - 1].image}" alt="" />
    </div>
    <div class="last-added-content">
    <h4>Last Added</h4>
    <p>${cartArr[cartArr.length - 1].name}</p>
    <p>$${cartArr[cartArr.length -1].price} USD</p>
    <p>Quantity:${cartArr[cartArr.length - 1].quantity}</p>
    <p>ID: ${cartArr[cartArr.length - 1].id}</p>
    </div>
    </div>
   <a href="https://aquamarine-stardust-09c6c6.netlify.app/#/my-cart" class="go-to-cart">GO TO CART</a> 
    `;
    }
 }

 const value = {cartArr, i, itemsEl, increaseItem, cartSum, sumArr, lastAdded, showLastItem, main, footer, helpArr, mainW}

  return ( 
    <ItemContext.Provider value={value}>
       {props.children}
    </ItemContext.Provider>
   );
}
 
export default ItemContextProvider;