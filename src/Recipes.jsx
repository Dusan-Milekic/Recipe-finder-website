import "./Recipes.css";
export default function HeroSection() {
  return (
    <>
      <div className="tool-bar">
        <select
          id="prep_time"
          name="prep_time"
          defaultValue="title"
          className="px-3 py-2"
        >
          <option value="title" className="hidden">
            Max time prep
          </option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="clear">Clear</option>
        </select>

        <select
          id="cook_time"
          name="cook_time"
          defaultValue="title"
          className="px-3 py-2"
        >
          <option value="title" className="hidden">
            Max time prep
          </option>
          <option value="0">0 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
          <option value="clear">Clear</option>
        </select>

        <div className="search-box bg-white flex border border-stone-400 rounded-lg w-fit">
          <img src="/public/images/icon-search.svg" alt="search" />
          <input type="search" className="text-lg rounded-lg"></input>
        </div>
      </div>
    </>
  );
}
