import "./App.css";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
import RealLifeSection from "./RealLifeSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
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

        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
