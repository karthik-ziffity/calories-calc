import React, { useState } from 'react';
import './FoodInput.css'; // Create a new CSS file

function FoodInput({ addFood }) {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleAddFood = () => {
    // console.log(food, calories, price, 'food && calories && price')
    if (food && calories && price) {
      addFood({ food, calories: parseInt(calories, 10), price: parseFloat(price), date });
      setFood('');
      setCalories('');
      setPrice('');
      setDate(new Date().toISOString().substr(0, 10));
    }
  };

  return (
    <div className="food-input-container">
      <table className="food-input-table">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Food Name"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleAddFood}>Add Food</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FoodInput;
