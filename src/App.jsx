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
import PlateSection from "./PlateSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Recipes page libraries
import HeroRecipes from "./HeroRecipes";
import Recipes from "./Recipes";
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
        <PlateSection />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function RecipesPage() {
  return (
    <>
      <main>
        <HeroRecipes />
        <Recipes />
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
          <Route path="/recipes" element={<RecipesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
