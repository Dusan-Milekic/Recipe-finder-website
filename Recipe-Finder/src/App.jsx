import "./App.css";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
import RealLifeSection from "./RealLifeSection";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <main>
        <HeroSection />
        <FeatureSection />
        <RealLifeSection />
      </main>
    </>
  );
}

export default App;
