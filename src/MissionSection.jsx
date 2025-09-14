import "./MissionSection.css";
export default function MissionSection() {
  return (
    <>
      <div className="mission-section">
        <div className="text">
          <div className="heading">
            <p id="p1">Our mission</p>
          </div>
          <h1>Help more people cook nourishing meals, more often.</h1>
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
        <div className="image-holder">
          <img src="images/image-about-our-mission-large.webp" alt="mission" />
        </div>
      </div>
    </>
  );
}
