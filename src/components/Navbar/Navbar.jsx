import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ active }) {
  return (
    <nav className="navbar">
      <div className="contain">
        <div className="tab">
        <Link to="/">
              <img
                className="navbar--logo"
                src="https://zupimages.net/up/20/45/jc89.png"
                alt="logo"
              />
         </Link>     
        </div>
        <div className="menu--logo">
         <Link to="/">
            <img
              className="logoHome"
              src="https://zupimages.net/up/20/44/ji9d.png"
              alt="logo"
            />
          </Link>
          <Link to="/carte">
            <img
              className="logoCart"
              src="https://zupimages.net/up/20/44/33qx.png"
              alt="logo"
            />
          </Link>
          <Link to="/livre-d-or">
            <img
              className="logoPicture"
              src="https://zupimages.net/up/20/44/xk4n.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="menu">
          <div className={active === "accueil" ? "active" : ""}><Link to="/">Accueil</Link></div>
          <div className={active === "carte" ? "active" : ""}><Link to="/carte">Carte</Link></div>
          <div className={active === "livre" ? "active" : ""}><Link to="/livre-d-or">Livre d'or</Link></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
