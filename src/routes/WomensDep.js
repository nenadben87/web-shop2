import Navigation from "../components/Navigation";
import AsideW from "../components/AsideW";
import MainW from "../components/MainW";
import Footer from "../components/Footer";

const WomensDep = () => {
  return ( 
    <div className="womens-dep">
      <Navigation />
      <div className="container">
        <AsideW />
        <MainW />
      </div>
      <Footer />
    </div>
   );
}
 
export default WomensDep;