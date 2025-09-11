import "./App.css";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
    </>
  );
}

export default App;
