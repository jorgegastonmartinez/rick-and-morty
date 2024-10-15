import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-r-a-m.png";

const NavBar = () => {
  return (
    <div>
        <nav className='NavBar'>
            <ul className="ul">
              <Link to="/">
                <img src={logo} className="LogoNavBar"></img>
              </Link>        
              <Link className="li" to="/">HOME</Link>
              <Link className="li" to="/about">ABOUT</Link>
              <Link className="li" to="/contact">CONTACT</Link>
              <Link className="li" to="/category/Human">HUMAN</Link>
              <Link className="li" to="/category/Alien">ALIEN</Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar