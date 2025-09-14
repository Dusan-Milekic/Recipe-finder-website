import "./MissionSection.css";
export default function MissionSection() {
  return (
    <>
      <div className="mission-section">
        <div className="text">
          <h1>Help more people cook nourishing meals, more often.</h1>
          <p>
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul>
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
        <div className="image-holder">
          <img
            src="images/image-about-beyond-the-plate-large.webp"
            alt="mission"
          />
        </div>
      </div>
    </>
  );
}
