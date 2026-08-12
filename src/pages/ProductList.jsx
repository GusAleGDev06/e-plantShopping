import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';
import Header from '../components/Header';
import { plantsData } from '../data/plantsData';

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  // Aplanar todas las plantas de todas las categorías
  const allPlants = Object.values(plantsData).flat();

  // Agrupar plantas por categoría
  const groupedPlants = allPlants.reduce((groups, plant) => {
    const category = plant.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(plant);
    return groups;
  }, {});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const isItemAdded = (plantId) => {
    return addedItems.includes(plantId);
  };

  return (
    <div>
      <Header />
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
    </div>
  );
}

export default ProductList;