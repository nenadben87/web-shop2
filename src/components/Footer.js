import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import '../scss/Footer.scss';

const Footer = () => {

  const {footer} = useContext(ItemContext)

  return ( 
    <footer className="footer" ref={footer}>
      <div className="copyright">
        Copyright &copy; 2023
      </div>
      <div className="contacts">
        <div className="contact address">
        <i className="fa-solid fa-location-dot"></i>
        <p>Office: Main Street 50, Boston, MA</p>
        </div>
        <div className="contact phone">
        <i className="fa-solid fa-phone"></i>
        <p>01/333-444-11</p>
        </div>
        <div className="contact email">
        <i className="fa-solid fa-envelope"></i>
        <p>office.drjays@gmail.com</p>
        </div>
        <div className="contact shop">
        <i className="fa-solid fa-shop"></i>
        <p>Shop: Fifth Avenue 10, Boston, MA</p>
        </div>
      </div>
      <div className="social">
        <p>Connect</p>
        <div className="social-icons">
          <a href="http://instagram.com">
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="http://facebook.com">
          <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="http://youtube.com">
          <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="http://pinterest.com">
          <i className="fa-brands fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;