import { Link } from "react-router-dom";

const Aside = () => {
  return ( 
    <aside className="aside">
      <ul>
        <Link to="/bags"><li>Bags</li></Link>
        <Link to="/footwear"><li>Footwear</li></Link>
        <Link to="/hats"><li>Hats</li></Link>
        <Link to="/hoodies"><li>Hoodies</li></Link>
        <Link to="/jeans"><li>Jeans</li></Link>
        <Link to="/outerwear"><li>Outerwear</li></Link>
        <Link to="/shirts"><li>Shirts</li></Link>
        <Link to="/shorts"><li>Shorts</li></Link>
        <Link to="/sweatshirts"><li>Sweatshirts</li></Link>
        <Link to="/swimwear"><li>Swimwear</li></Link>
      </ul>
    </aside>
   );
}
 
export default Aside;