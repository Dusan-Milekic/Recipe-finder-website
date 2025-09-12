import "./RealLifeSection.css";
export default function RealLifeSection() {
  return (
    <>
      <div className="real-life">
        <div className="text">
          <h2>Built for real life</h2>
          <p>
            Cooking shouldn’t be complicated. These recipes come in under{" "}
            <b>30 minutes</b> of active time, fit busy schedules, and taste good
            enough to repeat.
          </p>
          <p>
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered
          </p>
        </div>
        <div className="img-holder">
          <img src="images/image-home-real-life-large.webp" alt="reallife" />
        </div>
      </div>
    </>
  );
}
