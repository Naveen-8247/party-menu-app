import React, { useState } from 'react';
import mockDishes from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('MAIN COURSE');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const filteredDishes = mockDishes.filter(dish => {
    const matchCategory = dish.mealType === selectedCategory;
    const matchVeg = vegOnly ? dish.type === 'VEG' : true;
    const matchNonVeg = nonVegOnly ? dish.type === 'NON-VEG' : true;
    const matchSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchVeg && matchNonVeg && matchSearch;
  });

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter(dishId => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getCategoryCount = (category) =>
    mockDishes.filter(d => d.mealType === category && selectedDishes.includes(d.id)).length;

  return (
    <div className="app">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        nonVegOnly={nonVegOnly}
        onNonVegOnlyChange={setNonVegOnly}
        selectedDishes={selectedDishes}
        getCategoryCount={getCategoryCount}
      />
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />
      <IngredientModal
        dish={isModalOpen ? currentDish : null}
        onClose={handleCloseModal}
      />
      <Footer count={selectedDishes.length} />
    </div>
  );
}

export default App;
