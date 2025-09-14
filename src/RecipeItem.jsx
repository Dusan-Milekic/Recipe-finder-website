import "./RecipeItem.css";
export default function RecipeItem({ name, desc, serv, prep, cook, img }) {
  return (
    <>
      <div className="recipe-item bg-white rounded-xl p-2">
        <img src={img} alt="food" className="rounded-xl" />
        <h3 className="text-xl py-2">{name}</h3>
        <p className="text-base">{desc}</p>
        <div className="info flex flex-wrap gap-x-4 gap-y-1">
          <div className="servings flex w-fit">
            <img src="images/icon-servings.svg" alt="serv" className="w-5" />
            <p className="text-base">Servings: {serv}</p>
          </div>
          <div className="prep flex w-fit">
            <img
              src="images/icon-prep-time.svg"
              alt="prep time"
              className="w-5"
            />
            <p className="text-base">Prep: {prep} min</p>
          </div>
          <div className="cook flex w-full">
            <img
              src="images/icon-cook-time.svg"
              alt="cook time"
              className="w-5"
            />
            <p className="text-base">Cook: {cook} min</p>
          </div>
        </div>
        <button className="bg-[#163a34] text-white py-2 px-4 w-full rounded-3xl ">
          View Recipe
        </button>
      </div>
    </>
  );
}
