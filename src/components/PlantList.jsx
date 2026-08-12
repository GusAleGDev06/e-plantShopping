import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

function PlantList({ plants }) {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);
  
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };
  
  const isItemAdded = (plantId) => {
    return addedItems.includes(plantId);
  };
  
  const groupedPlants = plants.reduce((groups, plant) => {
    const category = plant.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(plant);
    return groups;
  }, {});
  
  return (
    <div className="plant-list">
      <h2>Our Plants</h2>
      
      {Object.entries(groupedPlants).map(([category, plantsInCategory]) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="plant-grid">
            {plantsInCategory.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isItemAdded(plant.id)}
                >
                  {isItemAdded(plant.id) ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantList;