import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navigation from '../../components/Navigation'
import AsideW from '../../components/AsideW'
import Footer from '../../components/Footer'

import '../../scss/Navigation.scss'
import '../../scss/Products.scss'
import '../../scss/Footer.scss'

const HoodiesW = () => {

  let [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/products')
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
            <li><Link to="bags-women">Bags</Link></li>
            <li><Link to="bodysuits">Bodysuits</Link></li>
            <li><Link to="bottoms">Bottoms</Link></li>
            <li><Link to="dresses">Dresses</Link></li>
            <li><Link to="footwear-women">Footwear</Link></li>
            <li><Link to="hoodies-women">Hoodies</Link></li>
            <li><Link to="jumpsuits">Jumpsuits</Link></li>
            <li><Link to="outerwear-women">Outerwear</Link></li>
            <li><Link to="sweaters">Sweaters</Link></li>
            <li><Link to="tops">Tops</Link></li>
          </ul>
        </div>
        <div className="products-navigation">
          <Link to="/women">women</Link>
          <i className="fa-solid fa-chevron-right"></i>
          <p>hoodies</p>
        </div>
        <div className="products-wrapper women">
         <AsideW />
         <div className="products-main">
          {products && products.map((product) => (
            product.department === 'hoodies-women' &&
             <div className="single-product" key={product.id}>
               <Link to={`/products/${product.id}`}>
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
 
export default HoodiesW;