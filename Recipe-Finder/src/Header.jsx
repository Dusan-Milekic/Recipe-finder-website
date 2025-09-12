import "./Header.css";
import { useRef } from "react";

export default function Header() {
  let menu_boxRef = useRef(null);

  function onBurgerClick() {
    if (!menu_boxRef) return;
    const el = menu_boxRef.current;

    el.style.display =
      !el.style.display || el.style.display === "none" ? "block" : "none";
  }

  return (
    <>
      <header>
        <img src="images/logo.svg" rel="logo"></img>
        <div className="menu" onClick={() => onBurgerClick()}>
          <img src="images/icon-hamburger-menu.svg" alt="menu" />
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

      <div className="menu-box" ref={menu_boxRef}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
        </ul>
        <button>Browse recipes</button>
      </div>
    </>
  );
}
