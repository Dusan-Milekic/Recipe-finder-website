import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <img src="/src/assets/images/logo.svg" rel="logo"></img>
        <div className="menu">
          <img src="/src/assets/images/icon-hamburger-menu.svg" alt="menu" />
        </div>
      </header>
    </>
  );
}
