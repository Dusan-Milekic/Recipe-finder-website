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
            <div className="box">
              <h3>Make healthy look good.</h3>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
