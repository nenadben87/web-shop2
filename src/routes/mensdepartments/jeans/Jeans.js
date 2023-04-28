import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navigation from '../../../components/Navigation'
import Aside from '../../../components/Aside'
import Footer from '../../../components/Footer'

import '../../../scss/Navigation.scss'
import '../../../scss/Products.scss'
import '../../../scss/Footer.scss'

const Jeans = () => {

  let [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://products-databse.herokuapp.com/products')
      .then(response => response.json())
      .then(data => {
           setProducts(data)
      })
  }, [])

  const chevronRight = React.useRef(null)
  const departments = React.useRef(null)

  function toggleDepartments(){
    chevronRight.current.classList.toggle('active')
    departments.current.classList.toggle('active')
  }

  return ( 
    <div className="products">
      <Navigation />
           <div className="department-chevron">
            <p>Departments</p>
            <i className="fa-solid fa-chevron-right" onClick={toggleDepartments} id="chevron-right" ref={chevronRight}></i>
          </div>
          <div className="departments" ref={departments}>
          <ul className="departments-list">
            <li><Link to="bags-men">Bags</Link></li>
            <li><Link to="footwear-men">Footwear</Link></li>
            <li><Link to="hats-men">Hats</Link></li>
            <li><Link to="hoodies-men">Hoodies</Link></li>
            <li><Link to="jeans-men">Jeans</Link></li>
            <li><Link to="outerwear-men">Outerwear</Link></li>
            <li><Link to="shirts-men">Shirts</Link></li>
            <li><Link to="shorts-men">Shorts</Link></li>
            <li><Link to="sweatshirts-men">Sweatshirts</Link></li>
            <li><Link to="swimwear-men">Swimwear</Link></li>
          </ul>
        </div>
        <div className="products-navigation">
          <Link to="/men">men</Link>
          <i className="fa-solid fa-chevron-right"></i>
          <p>jeans</p>
        </div>
        <div className="products-wrapper">
         <Aside />
         <div className="products-main">
          {products && products.map((product) => (
            product.department === 'jeans' &&
             <div className="single-product" key={product.id}>
               <Link to={`products/${product.id}`}>
              <img src={product.image} alt="" />
              <h4>{product.mark}</h4>
              <p>{product.name}</p>
              <p className="product-price">{product.price} $</p>
             </Link>
             </div>
          ))}
         </div>
        </div>
        <Footer />
    </div>
   );
}
 
export default Jeans;