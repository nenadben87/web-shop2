import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Main from "../components/Main";
import Footer from "../components/Footer";

const MensDep = () => {
  return ( 
    <div className="mens-dep">
      <Navigation />
      <div className="container">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
   );
}
 
export default MensDep;