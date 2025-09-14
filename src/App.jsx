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
import { useState } from "react";

//Details food page libarraies
import DetailFood from "./DetailFood";

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

export function DataFoods() {
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
    {
      name: "Quinoa Veggie Power Bowl",
      desc: "A balanced bowl of fluffy quinoa, roasted veggies and protein-packed beans.",
      serv: 2,
      prep: 10,
      cook: 25,
      img: "images/quinoa-veggie-bowl-large.webp",
    },
    {
      name: "Sweet Potato Black Bean Tacos",
      desc: "Smoky roasted sweet potatoes and black beans loaded into warm tortillas.",
      serv: 3,
      prep: 10,
      cook: 15,
      img: "images/sweet-potato-tacos-large.webp",
    },
    {
      name: "Greek Yogurt Berry Parfait",
      desc: "Layered creamy yogurt, fresh berries and crunchy oats for a high protein boost.",
      serv: 1,
      prep: 5,
      cook: 0,
      img: "images/greek-yogurt-large.webp", // Placeholder, zameniti stvarnom
    },
    {
      name: "Lentil & Spinach Soup",
      desc: "A hearty 30-minute soup rich in plant protein and warming spices.",
      serv: 4,
      prep: 10,
      cook: 30,
      img: "images/lentil-soup-large.webp",
    },
    {
      name: "Banana Oat Pancakes",
      desc: "Fluffy oat pancakes sweetened naturally with ripe bananas.",
      serv: 2,
      prep: 5,
      cook: 12,
      img: "images/banana-pancakes-large.webp", // Placeholder, zameniti stvarnom
    },
    {
      name: "Salmon Asparagus",
      desc: "Fresh salmon with crispy asparagus and herbs.",
      serv: 2,
      prep: 8,
      cook: 15,
      img: "images/salmon-asparagus-large.webp",
    },
  ];

  return recipes;
}

function RecipesPage() {
  return (
    <>
      <main>
        <HeroRecipes />
        <Recipes className="pt-12 " />;
      </main>
    </>
  );
}

function DetailFoodPage() {
  return (
    <>
      <main>
        <HeroRecipes />
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
          <Route path="/detail" element={<DetailFoodPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
