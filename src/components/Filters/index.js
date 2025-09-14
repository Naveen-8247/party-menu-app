import './index.css';
import { FiSearch } from "react-icons/fi";  

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  nonVegOnly,
  onNonVegOnlyChange,
  selectedDishes,
  getCategoryCount,
}) {
  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  return (
    <div className="filters">
     
      <div className="search-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <FiSearch className="search-icon" />
      </div>
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
            {getCategoryCount(cat) > 0 && (
              <span className="count"> {getCategoryCount(cat)}</span>
            )}
          </button>
        ))}
      </div>
      <div className="filters-row">
        <div className="active-text">
          {activeCategory} Selected ({getCategoryCount(activeCategory)})
        </div>

        <div className="filters-toggle">
          <button
            className={`pill-btn ${vegOnly ? 'active' : ''}`}
            onClick={() => {
              onVegOnlyChange(!vegOnly);
              onNonVegOnlyChange(false);
            }}
          >
            <span className="icon veg-icon"></span> Veg
          </button>
          <button
            className={`pill-btn ${nonVegOnly ? 'active' : ''}`}
            onClick={() => {
              onNonVegOnlyChange(!nonVegOnly);
              onVegOnlyChange(false);
            }}
          >
            <span className="icon nonveg-icon"></span> Non-Veg
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
