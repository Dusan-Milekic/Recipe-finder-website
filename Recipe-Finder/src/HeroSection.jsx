import "./HeroSection.css";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  let span_ref = useRef(null);
  function onHandler() {
    const h = span_ref.current;
    h.style.width = "100%";
  }
  useEffect(() => {
    if (span_ref.current) onHandler(); // ref je postavljen nakon mounta
  }, []);
  return (
    <>
      <div className="hero">
        <h1>
          <span>
            Healthy <span id="highlight" ref={span_ref}></span>
          </span>
          &nbsp;meals, zero fuss
        </h1>
        <p>
          Discover eight quick, whole-food
          <br id="br1" />
          recipes that you can cook tonight
          <br id="br2" />
          —no processed junk, no guesswork.
        </p>
        <div className="container">
          <button>Start exploring</button>
        </div>

        <img src="images/image-home-hero-large.webp" alt="hero image" />
      </div>
    </>
  );
}
