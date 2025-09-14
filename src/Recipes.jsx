// src/Recipes.jsx
import "./Recipes.css";
import RecipeItem from "./RecipeItem";
import { DataFoods } from "./DataFoods"; // nema potrebe za .jsx ekstenzijom
import { useState } from "react";

export default function Recipes() {
  const recipes = DataFoods();
  console.log(recipes);

  const [prop, setProp] = useState(1000);
  const [cook, setCook] = useState(1000);
  const [q, setQ] = useState(""); // search text

  const prepNum = prop !== "" && prop != null ? Number(prop) : null;
  const cookNum = cook !== "" && cook != null ? Number(cook) : null;
  function SearchFood(query) {
    const text = String(query.value ?? "")
      .trim()
      .toLowerCase();
    return recipes
      .filter((r) => (text ? r.name.toLowerCase().startsWith(text) : true))
      .map((r) => <RecipeItem key={r.name} className="pt-12" {...r} />);
  }
  return (
    <>
      <div className="tool-bar flex flex-col justify-between mx-auto w-[375px] gap-5 py-10">
        <div className="search-bars flex gap-3">
          <select
            id="prep_time"
            name="prep_time"
            defaultValue="title"
            className="px-3 py-2"
            onChange={(e) => setProp(e.target.value)}
          >
            <option value="" className="hidden">
              Max time prep
            </option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="">Clear</option>
          </select>

          <select
            id="cook_time"
            name="cook_time"
            defaultValue="title"
            className="px-3 py-2"
            onChange={(e) => setCook(e.target.value)}
          >
            <option value="" className="hidden">
              Max time cook
            </option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="">Clear</option>
          </select>
        </div>

        <div className="search-box bg-white flex border border-stone-300 rounded-lg w-full">
          <img
            src="/images/icon-search.svg"
            alt="search"
            className="w-5 ml-1"
          />
          <input
            type="search"
            className="text-lg rounded-lg w-full ml-1"
            placeholder="Search recipes..."
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      <div className="foods-container grid grid-cols-1 gap-8 mx-auto w-[375px] pb-24">
        {recipes
          .filter((d) => {
            const text = q.trim().toLowerCase();
            const matchesSearch = text
              ? d.name.toLowerCase().includes(text) ||
                d.desc.toLowerCase().includes(text)
              : true;

            const okPrep = prepNum != null ? d.prep <= prepNum : true;
            const okCook = cookNum != null ? d.cook <= cookNum : true;

            return matchesSearch && okPrep && okCook;
          })
          .sort((a, b) => a.cook - b.cook) // rastuće po cook
          .map((r) => (
            <RecipeItem
              key={r.name}
              className="pt-12"
              name={r.name}
              desc={r.desc}
              serv={r.serv}
              prep={r.prep}
              cook={r.cook}
              img={r.img}
            />
          ))}
      </div>
    </>
  );
}
