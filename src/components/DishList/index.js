import React from 'react';
import Dishcard from '../Dishcard';
import './index.css';

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dishcard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
