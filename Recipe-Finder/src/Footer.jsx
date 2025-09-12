import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="flex">
        <div className="social">
          <img src="src/assets/images/icon-instagram.svg" alt="instagram" />
          <img src="src/assets/images/icon-bluesky.svg" alt="bluesky" />
          <img src="src/assets/images/icon-tiktok.svg" alt="titkok" />
        </div>
        <div className="text">
          <p>Made with ❤️ and 🥑</p>
        </div>
      </div>
    </>
  );
}
