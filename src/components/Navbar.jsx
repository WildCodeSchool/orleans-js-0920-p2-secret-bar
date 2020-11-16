import './Navbar.css';

function Navbar({ active }) {
  return (
    <nav className="navbar">
      <div className="contain">
        <div className="tab">
            <a href=""><img
            className="navbar--logo"
            src="https://zupimages.net/up/20/45/jc89.png"
            alt="logo"
          /></a>
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
        <div className="menu">
          <div className={active === "accueil" ? "active" : ""}><a href="../Home.jsx">Accueil</a></div>
          <div className={active === "carte" ? "active" : ""}><a href="../App.jsx">Carte</a></div>
          <div className={active === "livre" ? "active" : ""}><a href="../App.jsx">Livre d'or</a></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
