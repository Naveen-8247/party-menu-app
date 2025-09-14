import React from 'react';
import './index.css';

function IngredientModal({ dish, onClose, onRemoveDish, isSelected }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>{dish.name}</h2>
          <span className={`dish-type ${dish.type === 'VEG' ? 'veg' : 'nonveg'}`}></span>
        </div>
        <img src={dish.image} alt={dish.name} className="modal-img" />
        <p>{dish.description}</p>
        <h4>Ingredients</h4>
        <ul>
          {dish.ingredients.map((ing, i) => (
            <li key={i}>{ing.name}: {ing.quantity}</li>
          ))}
        </ul>
        <div className="modal-actions">
          {isSelected && (
            <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
              Remove
            </button>
          )}
          <button className="close-modal" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default IngredientModal;
