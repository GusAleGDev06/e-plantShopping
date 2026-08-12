import React from 'react';
import Header from '../components/Header';
import PlantList from '../components/PlantList';
import { plantsData } from '../data/plantsData';

function ProductList() {
  const allPlants = Object.values(plantsData).flat();
  
  return (
    <div>
      <Header />
      <PlantList plants={allPlants} />
    </div>
  );
}

export default ProductList;