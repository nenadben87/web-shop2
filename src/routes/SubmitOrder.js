import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../scss/Navigation.scss';
import '../scss/Footer.scss';
import '../scss/SubmitOrder.scss'

import { ItemContext } from "../contexts/ItemContext";

const SubmitOrder = () => {
  
  let {cartArr, sumArr, itemsEl, cartSum, footer} = useContext(ItemContext)

  const shipping = 9.99;

  const regFirstName = /^[A-Za-z]{2,10}$/
  const regLastName = /^[A-Za-z]{2,10}$/
  const regEmail = /^([A-Za-z0-9-.]){2,20}@([a-z]{2,10}\.)([a-z]{2,3})$/
  const regAddress = /^([A-Za-z\s]{2,20})\s([0-9]{1,4})$/
  const regCity = /^[A-Za-z\s]{2,20}$/
  const regZip = /^[0-9\s]{4,10}$/
  const regPhone = /^[0-9+()]{2,7}[0-9\s]{6,20}$/

  const firstNameInput = useRef(null)
  const lastNameInput = useRef(null)
  const emailInput = useRef(null)
  const addressInput = useRef(null)
  const cityInput = useRef(null)
  const zipInput = useRef(null)
  const phoneInput = useRef(null)

  const firstNameErr = useRef(null)
  const lastNameErr = useRef(null)
  const emailErr = useRef(null)
  const addressErr = useRef(null)
  const cityErr = useRef(null)
  const zipErr = useRef(null)
  const phoneErr = useRef(null)

  const spinnerWrapper = useRef(null)
  const successEl = useRef(null)
  const container = useRef(null)

  function submitYourOrder(){
    if(!firstNameInput.current.value.match(regFirstName)){
      firstNameErr.current.style.display = 'block'
    } else {
      firstNameErr.current.style.display = 'none'
    }
    if(!lastNameInput.current.value.match(regLastName)){
      lastNameErr.current.style.display = 'block'
    } else {
      lastNameErr.current.style.display = 'none'
    }
    if(!emailInput.current.value.match(regEmail)){
      emailErr.current.style.display = 'block'
    } else {
      emailErr.current.style.display = 'none'
    }
    if(!addressInput.current.value.match(regAddress)){
      addressErr.current.style.display = 'block'
    } else {
      addressErr.current.style.display = 'none'
    }
    if(!cityInput.current.value.match(regCity)){
      cityErr.current.style.display = 'block'
    } else {
      cityErr.current.style.display = 'none'
    }
    if(!zipInput.current.value.match(regZip)){
      zipErr.current.style.display = 'block'
    } else {
      zipErr.current.style.display = 'none'
    }
    if(!phoneInput.current.value.match(regPhone)){
      phoneErr.current.style.display = 'block'
    } else {
      phoneErr.current.style.display = 'none'
    }

    //Successfully Submited
    if(firstNameInput.current.value.match(regFirstName) && lastNameInput.current.value.match(regLastName) && emailInput.current.value.match(regEmail) && addressInput.current.value.match(regAddress) && cityInput.current.value.match(regCity) && zipInput.current.value.match(regZip) && phoneInput.current.value.match(regPhone)){
      container.current.style.display = 'none'
      spinnerWrapper.current.style.display = 'flex'
      footer.current.style.display = 'none'

      const order = {
        total: (sumArr[0] + shipping).toFixed(2),
        items: cartArr,
        firstName: firstNameInput.current.value,
        lastName: lastNameInput.current.value,
        email: emailInput.current.value,
        address: addressInput.current.value,
        city: cityInput.current.value,
        zip: zipInput.current.value,
        phone: phoneInput.current.value
      }

      fetch('https://products-databse.herokuapp.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })

      localStorage.clear()
      cartArr.splice(0, cartArr.length)
      cartArr = []
      sumArr = []
      itemsEl.current.textContent = '0'
      cartSum.current.textContent = '0'
      localStorage.setItem('products', JSON.stringify(cartArr))

    setTimeout(() => {
        spinnerWrapper.current.style.display = 'none'
        successEl.current.style.display = 'flex'
        footer.current.style.display = 'flex'
        getLastOrder()
      },2000)
    }
  }

  const myOrder = useRef(null)
  const orderDetails = useRef(null)
  const orderItemWrapper = useRef(null)
  let orderNumber;

  function getLastOrder(){
    fetch('https://products-databse.herokuapp.com/orders')
      .then(response => response.json())
      .then(data => {
        if(data[data.length - 1].id < 10){
          orderNumber = '00'.concat(data[data.length - 1].id)
        }
        if(data[data.length - 1].id >= 10 && data[data.length - 1].id < 100){
          orderNumber = '0'.concat(data[data.length - 1].id)
        }
        if(data[data.length -1].id >= 100){
          orderNumber = data[data.length - 1].id
        }

        orderDetails.current.innerHTML = `
        <div class="details-header">
        Order Details
        </div>
        <p>Order Number: ${orderNumber}</p>
        <p>Name: ${data[data.length - 1].firstName} ${data[data.length - 1].lastName}</p>
        <p>Address: ${data[data.length - 1].address}</p>
        <p>City: ${data[data.length - 1].city}</p>
        <p>Total: $${data[data.length - 1].total}</p>
        `;
        
        data[data.length - 1].items.forEach((item) => {
          orderItemWrapper.current.innerHTML += `
              <div class="order-item">
              <p>${item.name}</p>
              <p>Quantity: ${item.quantity}</p>
              </div>
        `;
        })
      })
  }
  
  return ( 
    <div className="submit-order">
      <Navigation />
      <div className="spinner-wrapper" ref={spinnerWrapper}>
      <div className="spinner">
        <div></div>
        <div></div>
      </div>
      </div>
      <div className="success" ref={successEl}>
        <h2>You have have succesfully completed your purchase!</h2>
        <Link to="/">Back to Home</Link>
        <div className="my-order" ref={myOrder}>
         <div className="order-details" ref={orderDetails}>
          
         </div>
         <div className="order-items">
            <div className="items-header">
              Items
            </div>
            <div className="order-item-wrapper" ref={orderItemWrapper}>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container" ref={container}>
        <div className="order-title">
          <h2>Checkout</h2>
        </div>
        <div className="main">
          <div className="left-side">
            <form action="" className="submit-form">
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input type="text" className="first-name" ref={firstNameInput}/>
                <div className="error-element" ref={firstNameErr}>Please Enter valid First Name</div>
              </div>
              <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input type="text" className="last-name" ref={lastNameInput}/>
                <div className="error-element" ref={lastNameErr}>Please Enter valid Last Name</div>
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="email" ref={emailInput}/>
                <div className="error-element" ref={emailErr}>Please Enter valid Email</div>
              </div>
              <div className="form-group">
                <label htmlFor="">Address</label>
                <input type="text" className="address" ref={addressInput}/>
                <div className="error-element" ref={addressErr}>Please Enter valid Address</div>
              </div>
              <div className="form-group">
                <label htmlFor="">City</label>
                <input type="text" className="city" ref={cityInput}/>
                <div className="error-element" ref={cityErr}>Please Enter valid City</div>
              </div>
              <div className="form-group">
                <label htmlFor="">Zip Code</label>
                <input type="text" className="zip-code" ref={zipInput}/>
                <div className="error-element" ref={zipErr}>Please Enter valid Zip Code</div>
              </div>
              <div className="form-group">
                <label htmlFor="">Phone Number</label>
                <input type="text" className="phone-number" ref={phoneInput}/>
                <div className="error-element" ref={phoneErr}>Please Enter valid Phone Number</div>
              </div>
            </form>
          </div>
          <div className="right-side">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <Link to="/my-cart">Edit Cart</Link>
            </div>
            <div className="ordered-items">
              {
                localStorage.length > 0 ?
                cartArr.map((item) => (
                  <div className="single-item" key={item.id}>
                    <div className="item-left">
                     <img src={item.image} alt="" />
                    </div>
                    <div className="item-right">
                      <p>{item.name}</p>
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                      <p>${(item.quantity * item.price).toFixed(2)}</p>
                    </div>
                  </div>
                )) : 
                <div className="empty-cart">
                  <h3>Cart is Empty</h3>
                </div>
              }
            </div>
            {
              cartArr.length > 0 &&
              <div className="cart-summary">
               <div className="flex-one">
                <p>Items: {cartArr.length}</p>
                <p>${sumArr[0].toFixed(2)}</p>
               </div>
               <div className="flex-two">
                <p>Shipping</p>
                <p>${shipping}</p>
               </div>
               <div className="flex-three">
                <h3>TOTAL</h3>
                <h3>${(sumArr[0] + shipping).toFixed(2)}</h3>
               </div>
              </div>
            }
          </div>
        </div>
        {
          cartArr.length > 0 &&
          <div className="submit-btn" onClick={submitYourOrder}>
              SUBMIT YOUR ORDER
          </div>
        }
      </div>
      <Footer />
    </div>
   );
}
 
export default SubmitOrder;