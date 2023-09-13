import React from 'react';
import './CalorieDisplay.css'; // Create a new CSS file

function CalorieDisplay({ foods }) {
  return (
    <div>
      <h2>Food List</h2>
      <table className="food-table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={index}>
              <td>{food.food}</td>
              <td>{food.calories}</td>
              <td>${food.price}</td>
              <td>
              {food.date && new Date(food.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalorieDisplay;
