import React from "react";
import { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

import '../scss/Navigation.scss'

import { ItemContext } from "../contexts/ItemContext";

const Navigation = () => {

  const chevronDown = React.useRef(null)
  const myAccountList = React.useRef(null)
  const navigation = useRef(null)
  const myCart = useRef(null)

  const screenWidth = document.body.clientWidth

  let [products, setProducts] = useState(null)

  let {itemsEl, cartArr, i, cartSum, sumArr, lastAdded, main, helpArr, mainW, footer} = useContext(ItemContext)

   useEffect(() => {
   if(localStorage.length > 0){
     cartArr = JSON.parse(localStorage.getItem('products'))
     i = cartArr.length

     itemsEl.current.textContent = i

     sumArr.splice(0, sumArr.length)
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
     
      if(sumArr[0] !== undefined){
        cartSum.current.textContent = sumArr[0].toFixed(2)
      } else {
        cartSum.current.textContent = '0'
      }
   } else {
     itemsEl.current.textContent = '0'
     cartSum.current.textContent = '0'
   } 

   fetch('https://products-databse.herokuapp.com/products')
       .then(response => response.json())
       .then(data => {
         setProducts(data)
       })
 }, [])

  function showUserWindow(){
    chevronDown.current.classList.toggle('active')
    myAccountList.current.classList.toggle('active')
  }

  function toggleCart(){
    if(localStorage.length > 0 && lastAdded.current){
      lastAdded.current.classList.toggle('active')
      if(lastAdded.current.classList.contains('active')){
        if(main.current !== null){
          main.style.zIndex = '-1'
        }
     } else if(!lastAdded.current.classList.contains('active') && main.current !== null){
      main.style.zIndex = '1'
     }
    }
  }

  const searchInput = React.useRef(null)
  const searchResultEl = useRef(null)

  let searchArr = []
  let slicedArr = []

  function showSearchResult(){
    searchArr.splice(0, searchArr.length)
    slicedArr.splice(0, slicedArr.length)
    searchResultEl.current.innerHTML = ''

    products.forEach((product) => {
      if(product.name.toLowerCase().indexOf(searchInput.current.value) != -1 && searchInput.current.value != ''){
        searchArr.push(product)
        footer.current.classList.add('fixed')

        if(screenWidth <= 404){
          myCart.current.style.zIndex = '-1'
        } else {
          myCart.current.style.zIndex = '1'
        }

        if(main.current !== null){
          main.current.style.zIndex = '-1'
        }
        if(mainW.current !== null){
          mainW.current.style.zIndex = '-1'
        }
      } 
    })

    if(searchInput.current.value === '' && main.current !== null){
      main.current.style.zIndex = '1'
    }
    if(searchInput.current.value === '' && mainW.current !== null){
      mainW.current.style.zIndex = '1'
    }
    if(searchInput.current.value === ''){
      footer.current.classList.remove('fixed')
    }

    if(searchArr.length >= 10){
      slicedArr = searchArr.slice(0, 10)
      slicedArr.forEach((item) => {
        searchResultEl.current.innerHTML += `<div class="product-names">
        <a href="/products/${item.id}">${item.name}</a>
        </div>`
      })
    } else {
      searchArr.forEach((item) => {
        searchResultEl.current.innerHTML += `<div class="product-names-two">
        <a href="/products/${item.id}" class="product-names-wrapper">
          <img src="${item.image}">
          <div class="product-names-right">
           <p>${item.name}</p>
           <p id="item-price">$${item.price}</p>
          </div>
         </a>
        </div>`
      })
    }
  }
  
  return ( 
    <nav className="navigation" ref={navigation}>
      <div className="logo">
        <Link to="/"><h1>DrJays Clone</h1></Link>
        <i className="fa-solid fa-bag-shopping"></i>
      </div>
      <div className="search-wrapper">
       <input type="text" placeholder="Search..." className="search-input" ref={searchInput} onKeyUp={showSearchResult}/>
          <div className="search-result" ref={searchResultEl}></div>
       </div>
      <div className="my-account">
        <p>My Account</p>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-chevron-down" id="chevron-down" ref={chevronDown} onClick={showUserWindow}></i>
      </div>
      <div className="my-account-list" ref={myAccountList}>
        <ul>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className="my-cart" ref={myCart}>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="items" ref={itemsEl} onClick={toggleCart}>
        0
      </div>
      <div className="items-sum">
        <span id="dollar-sign">$</span> <span id="sum" ref={cartSum}>0</span>
      </div>
      </div>
      {products && 
      cartArr.length > 0 ?
      products.map((product) => (
        product.id === cartArr[cartArr.length - 1].id &&
        <div className="last-added" ref={lastAdded} key={product.id}>
        <div className="last-added-wrapper">
          <div className="last-added-image">
            <img src={product.image} alt="" />
          </div>
          <div className="last-added-content">
          <h4>Last Added</h4>
          <p>{ product.name }</p>
          <p>${ product.price } USD</p>
          <p>Quantity: { cartArr[cartArr.length - 1].quantity }</p>
          <p>ID: { product.id }</p>
          </div>
        </div>
        <Link to="/my-cart" className="go-to-cart">GO TO CART</Link>
        </div> 
      )) : 
        <div className="last-added" ref={lastAdded}></div>
      }
      </nav>
   );
}
 
export default Navigation;