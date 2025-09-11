import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <img src="/src/assets/images/logo.svg" rel="logo"></img>
        <div className="menu">
          <img src="/src/assets/images/icon-hamburger-menu.svg" alt="menu" />
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Recipes</a>
        </div>
        <div className="browse">
          <button>Browse Recipes</button>
        </div>
      </header>
    </>
  );
}
