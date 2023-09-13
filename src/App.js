import React, { useState } from 'react';
import FoodInput from './FoodInput';
import CalorieDisplay from './CalorieDisplay';
import MonthlyCalories from './MonthlyCalories';
import './App.css'; 

function App() {
  const [foods, setFoods] = useState([]);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  console.log(foods, 'foods')

  return (
    <div className="App-tracker">
      <h1>Calorie Tracker</h1>
      <FoodInput addFood={addFood} />
      <CalorieDisplay foods={foods} />
      <MonthlyCalories foods={foods} />
    </div>
  );
}

export default App;
