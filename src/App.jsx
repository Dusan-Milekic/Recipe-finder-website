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
import RecipeItem from "./RecipeItem";

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

function DataFoods() {
  const recipes = [
    {
      name: "Mediterranean Chickpea Salad",
      desc: "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
      serv: 20,
      prep: 10,
      cook: 0,
      img: "images/mediterranean-chickpea-salad-large.webp",
    },
    {
      name: "Avocado & Tomato Wholegrain Toast",
      desc: "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
      serv: 1,
      prep: 5,
      cook: 5,
      img: "images/avocado-tomato-wholegrain-toast-large.webp",
    },
    {
      name: "One-Pan Lemon Garlic Salmon with A",
      desc: "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
      serv: 2,
      prep: 5,
      cook: 12,
      img: "images/salmon-asparagus-large.webp",
    },
  ];

  return recipes;
}

function LoadFood(recipe) {
  // Prima JEDAN recept kao argument
  return (
    <RecipeItem
      name={recipe.name}
      desc={recipe.desc}
      serv={recipe.serv}
      prep={recipe.prep}
      cook={recipe.cook}
      img={recipe.img}
    />
  );
}

function RecipesPage() {
  const RecipesData = DataFoods();

  return (
    <>
      <main>
        <HeroRecipes />
        <Recipes />
        <div className="foods-container grid grid-cols-1 gap-8 mx-auto w-[375px]">
          {LoadFood(RecipesData[0])}
          {LoadFood(RecipesData[1])}
          {LoadFood(RecipesData[2])}
        </div>
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
