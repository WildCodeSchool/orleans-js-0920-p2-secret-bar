import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="contain">
        <div className="tab">
          <img
            className="navbar--logo"
            src="https://zupimages.net/up/20/44/kzh0.png"
            alt="logo"
          />
        </div>
        <div className="menu--logo">
          <img
            className="logoHome"
            src="https://zupimages.net/up/20/44/ji9d.png"
            alt="logo"
          />
          <img
            className="logoCart"
            src="https://zupimages.net/up/20/44/33qx.png"
            alt="logo"
          />
          <img
            className="logoPicture"
            src="https://zupimages.net/up/20/44/xk4n.png"
            alt="logo"
          />
        </div>
        <ul className="menu" id="menu">
          <a href="../App.jsx">Accueil</a>
          <a href="../App.jsx">Carte</a>
          <a href="../App.jsx">Livre d'or</a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
