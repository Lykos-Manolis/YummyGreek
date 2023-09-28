// Hooks
import React, { useState, useEffect } from 'react';

// Components
import DishCard from './DishCard'; // Import the DishCard component
import Filters from './Filters';

const DishList = () => {
  // State variables for filtered and unfiltered dishes
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  // Fetch database
  useEffect(() => {
    fetch('http://localhost:8000/dishes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDishes(data);
        setFilteredDishes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Render content
  return (
    <div>
        <Filters dishes={dishes} filteredDishes={filteredDishes} setFilteredDishes={setFilteredDishes}/>
        <h1>Menu</h1>
        {/* Render a dish card for each dish in database */}
        <div className="dish-list">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish}/>
            ))}
        </div>
    </div>
  );
};

export default DishList;