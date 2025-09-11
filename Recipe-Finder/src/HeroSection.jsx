import "./HeroSection.css";
export default function HeroSection() {
  return (
    <>
      <div className="hero">
        <h1>
          <span>Healthy</span> meals, zero fuss
        </h1>
        <p>
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <button>Start exploring</button>
        <img
          src="src/assets/images/image-home-hero-small.webp"
          alt="hero image"
        />
      </div>
    </>
  );
}
