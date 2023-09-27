// DishList.js
import React, { useState, useEffect } from 'react';
import DishCard from './DishCard'; // Import the DishCard component
import Filters from './Filters';

const DishList = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  useEffect(() => {
    // Fetch the data from your local JSON server
    fetch('http://localhost:8000/dishes') // Update the URL as needed
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

  return (
    <div>
        <Filters dishes={dishes} filteredDishes={filteredDishes} setFilteredDishes={setFilteredDishes}/>
        <h1>Menu</h1>
        <div className="dish-list">
            {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
            ))}
        </div>
    </div>
  );
};

export default DishList;