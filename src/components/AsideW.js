import { Link } from "react-router-dom";

const AsideW = () => {
  return ( 
    <aside className="aside">
      <ul>
        <Link to="/bags-women"><li>Bags</li></Link>
        <Link to="/bodysuits"><li>Bodysuits</li></Link>
        <Link to="/bottoms"><li>Bottoms</li></Link>
        <Link to="/dresses"><li>Dresses</li></Link>
        <Link to="/footwear-women"><li>Footwear</li></Link>
        <Link to="/hoodies-women"><li>Hoodies</li></Link>
        <Link to="/jumpsuits"><li>Jumpsuits</li></Link>
        <Link to="/outerwear-women"><li>Outerwear</li></Link>
        <Link to="/sweaters"><li>Sweaters</li></Link>
        <Link to="/tops"><li>Tops</li></Link>
      </ul>
    </aside>
   );
}
 
export default AsideW;