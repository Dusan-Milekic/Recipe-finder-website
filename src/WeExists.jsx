import "./WeExists.css";

export default function WeExists() {
  return (
    <>
      <div className="we-exists-section">
        <div className="heading">
          <h1>Why we exist </h1>
        </div>
        <ul className="points">
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Cut throught the noise.</h3>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </div>
          </li>
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Empower home kitchens.</h3>
              <p>
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </div>
          </li>
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Make healthy look good.</h3>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </div>
          </li>
        </ul>
        <hr></hr>
      </div>

      <div className="we-exists-section">
        <div className="heading">
          <h1>Our food philosophy</h1>
        </div>
        <ul className="points">
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Whole ingredients first.</h3>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </div>
          </li>
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Flavor without compromise.</h3>
              <p>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </div>
          </li>
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Respect for time.</h3>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </div>
          </li>
          <li>
            <img src="images/icon-bullet-point.svg" alt="bullet" />
            <div className="box">
              <h3>Sustainable choices.</h3>
              <p>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
