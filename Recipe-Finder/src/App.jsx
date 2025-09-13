import "./App.css";

import Header from "./Header";
import Footer from "./Footer";

//Main page libraries
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
import RealLifeSection from "./RealLifeSection";
import CallToAction from "./CallToAction";

// About page libaries
import MissionSection from "./MissionSection";
import WeExists from "./WeExists";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function HomePage() {
  return (
    <>
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
function AboutPage() {
  return (
    <>
      <main>
        <MissionSection />
        <WeExists />
      </main>
    </>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
