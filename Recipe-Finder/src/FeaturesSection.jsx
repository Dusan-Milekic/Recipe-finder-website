import "./FeaturesSection.css";
export default function FeatureSection() {
  return (
    <>
      <div className="section-features">
        <h2>What you'll get</h2>
        <div className="flex">
          <div className="feature">
            <div className="img-holder">
              <img
                src="/public/images/icon-whole-food-recipes.svg"
                alt="food"
              />
            </div>

            <h3>Whole-food recipes</h3>
            <p>Each dish uses everyday, unprocessed ingredients.</p>
          </div>
          <div className="feature">
            <div className="img-holder">
              <img src="/public/images/icon-minimum-fuss.svg" alt="fuss" />
            </div>

            <h3>Minimum fuss</h3>
            <p>
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="feature">
            <div className="img-holder">
              <img
                src="/public/images/icon-search-in-seconds.svg"
                alt="search"
              />
            </div>

            <h3>Search in seconds</h3>
            <p>
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
