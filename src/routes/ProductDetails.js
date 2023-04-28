import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState} from "react";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../scss/ProductDetails.scss'

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
   fetch(`https://products-databse.herokuapp.com/products/${id}`)
     .then(response => response.json())
     .then(data => {
       setProduct(data)
     })
  }, [])

  return ( 
    <div className="product-details">
      <Navigation />
      {
        product && 
        <div className="product-wrapper">
         <div className="product-nav">
          <Link to={`/${product.for}`}><p>{product.for}</p></Link>
          <i className="fa-solid fa-chevron-right"></i>
          <Link to={`/${product.department}`}><p>{product.department}</p></Link>
          <i className="fa-solid fa-chevron-right"></i>
          <p>{product.name}</p>
         </div>
         <div className="product-main">
          <LeftSide product={product}/>
          <RightSide product={product} />
         </div>
        </div>
      }
      <Footer />
    </div>
   );
}
 
export default ProductDetails;