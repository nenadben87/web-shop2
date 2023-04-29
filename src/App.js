import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import MensDep from './routes/MensDep';
import WomensDep from './routes/WomensDep';

import Bags from './routes/mensdepartments/bags/Bags';
import Footwear from './routes/mensdepartments/footwear/Footwear';
import Hats from './routes/mensdepartments/hats/Hats';
import Hoodies from './routes/mensdepartments/hoodies/Hoodies';
import Jeans from './routes/mensdepartments/jeans/Jeans';
import Outerwear from './routes/mensdepartments/outerwear/Outerwear';
import Shirts from './routes/mensdepartments/shirts/Shirts';
import Shorts from './routes/mensdepartments/shorts/Shorts';
import Sweatshirts from './routes/mensdepartments/sweatshirts/Sweatshirts';
import Swimwear from './routes/mensdepartments/swimwear/Swimwear';

import ProductDetails from './routes/ProductDetails';
import MyCart from './routes/MyCart';
import SubmitOrder from './routes/SubmitOrder';

import ItemContextProvider from './contexts/ItemContext';

import BagsW from './routes/womensdepartments/BagsW';
import Bodysuits from './routes/womensdepartments/Bodysuits';
import Bottoms from './routes/womensdepartments/Bottoms';
import Dresses from './routes/womensdepartments/Dresses';
import FootwearW from './routes/womensdepartments/FootwearW';
import HoodiesW from './routes/womensdepartments/HoodiesW';
import Jumpsuits from './routes/womensdepartments/Jumpsuits';
import OuterwearW from './routes/womensdepartments/OuterwearW';
import Sweaters from './routes/womensdepartments/Sweaters';
import Tops from './routes/womensdepartments/Tops';


function App() {
  
  const removeCartWindow = (e) => {
    const lastAdded = document.querySelector('.last-added')
    const main = document.querySelector('.main')
    const myAccountList = document.querySelector('.my-account-list')
    const navigation = document.querySelector('.navigation')

    if(lastAdded && lastAdded.classList.contains('active') && !e.target.classList.contains('items') && !e.target.parentElement.classList.contains('last-added-content') && !e.target.parentElement.classList.contains('last-added-image')){
      lastAdded.classList.remove('active')
    }

    if(navigation && navigation.parentElement.className === 'mens-dep'){
      if(lastAdded.classList.contains('active') || myAccountList.classList.contains('active')){
        main.style.zIndex = '-1'
      } else {
        main.style.zIndex = '1'
      }
    }

   } 
  
  return (
    <Router>
    <ItemContextProvider>
    <div className="App" onClick={removeCartWindow}>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/men">
            <MensDep />
          </Route>
          <Route path="/women">
            <WomensDep />
          </Route>
          <Route path="/bags">
            <Bags />
          </Route>
          <Route path="/footwear">
            <Footwear />
          </Route>
          <Route path="/hats">
            <Hats />
          </Route>
          <Route path="/hoodies">
            <Hoodies />
          </Route>
          <Route path="/jeans">
            <Jeans />
          </Route>
          <Route path="/outerwear">
            <Outerwear />
          </Route>
          <Route path="/shirts">
            <Shirts />
          </Route>
          <Route path="/shorts">
            <Shorts />
          </Route>
          <Route path="/sweatshirts">
            <Sweatshirts />
          </Route>
          <Route path="/swimwear">
            <Swimwear />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/my-cart">
            <MyCart />
          </Route>
          <Route path="/submit-order">
            <SubmitOrder />
          </Route>
          <Route path="/bags-women">
            <BagsW />
          </Route>
          <Route path="/bodysuits">
            <Bodysuits />
          </Route>
          <Route path="/bottoms">
            <Bottoms />
          </Route>
          <Route path="/dresses">
            <Dresses />
          </Route>
          <Route path="/footwear-women">
            <FootwearW />
          </Route>
          <Route path="/hoodies-women">
            <HoodiesW />
          </Route>
          <Route path="/jumpsuits">
            <Jumpsuits />
          </Route>
          <Route path="/outerwear-women">
            <OuterwearW />
          </Route>
          <Route path="/sweaters">
            <Sweaters />
          </Route>
          <Route path="/tops">
            <Tops />
          </Route>
        </Switch>
      </div>
    </div>
    </ItemContextProvider>
    </Router>
  );
}

export default App;
