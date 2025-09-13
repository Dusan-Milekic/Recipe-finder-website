import "./App.css";

import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
import RealLifeSection from "./RealLifeSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
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
  return <h1>About Page</h1>;
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
