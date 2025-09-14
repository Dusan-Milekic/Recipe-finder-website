import { useSearchParams } from "react-router-dom";
import { DataFoods } from "./DataFoods";
import RecipeItem from "./RecipeItem";
import "./DetailFood.css";
import "./WeExists.css";
import "./RecipeItem.css";

export default function DetailFood() {
  const [sp] = useSearchParams();
  const slug = sp.get("slug") ?? "";
  const recipes = DataFoods();

  function sampleUnique(arr, n) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, Math.min(n, a.length));
  }

  const r = recipes.find((item) => item.slug === slug);

  if (!slug) {
    return <p className="pt-12 text-red-600">Nedostaje query param “slug”.</p>;
  }
  if (!r) {
    return <p className="pt-12 text-red-600">Recept nije pronađen.</p>;
  }

  // Uzmi 3 nasumična druga recepta (bez trenutnog)
  const recomended = sampleUnique(
    recipes.filter((item) => item.slug !== slug),
    3
  );

  return (
    <>
      <div className="detailsFood mx-auto">
        <p className="my-0 pt-14 font-extrabold">
          <a href="/recipes" className="font-normal">
            Recipes /
          </a>{" "}
          {r.title}
        </p>

        <div className="recipe-item bg-white rounded-xl py-7 max-w-xl px-5">
          <img
            src={r.image.large}
            alt={r.title ?? "Food"}
            id="img1"
            className="rounded-xl h-auto object-cover"
          />

          <div className="right-side">
            <h2 className="text-4xl py-2 text-green-950 font-extrabold w-fit">
              {r.title}
            </h2>
            <p className="text-lg text-green-900 w-fit">{r.overview}</p>

            <div className="info mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="servings flex items-center gap-2 w-fit">
                <img
                  src="/images/icon-servings.svg"
                  alt=""
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                <p className="text-base">Servings: {r.servings}</p>
              </div>
              <div className="prep flex items-center gap-2 w-fit">
                <img
                  src="/images/icon-prep-time.svg"
                  alt=""
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                <p className="text-base">Prep: {r.prepMinutes} min</p>
              </div>
              <div className="cook flex items-center gap-2 w-fit">
                <img
                  src="/images/icon-cook-time.svg"
                  alt=""
                  className="w-5 h-5"
                  aria-hidden="true"
                />
                <p className="text-base">Cook: {r.cookMinutes} min</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ingr w-full pt-6">
          <h2 className="text-2xl">Ingridients: </h2>
          <ul className="points">
            {r.ingredients.map((i, idx) => (
              <li key={idx} className="flex gap-0 items-center">
                <img src="/images/icon-bullet-point.svg" alt="bullet" />
                <p className="px-2 my-0">{i}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ingr w-full py-6">
          <h2 className="text-2xl">Instructions: </h2>
          <ul className="points">
            {r.instructions.map((i, idx) => (
              <li key={idx} className="flex gap-0 items-center">
                <img src="/images/icon-bullet-point.svg" alt="bullet" />
                <p className="px-2 my-0">{i}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="more mx-auto">
        <h2 className="text-2xl">More recipes </h2>
        <div className="flex flex-col recomended">
          {recomended.map((i) => (
            <RecipeItem
              key={i.slug}
              slug={i.slug}
              className="pt-12"
              name={i.title}
              desc={i.overview}
              serv={i.servings}
              prep={i.prepMinutes}
              cook={i.cookMinutes}
              img={i.image.large}
            />
          ))}
        </div>
      </div>
    </>
  );
}
