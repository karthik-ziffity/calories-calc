import React, { useState, useEffect } from 'react';

function MonthlyCalories({ foods }) {
  const selectedDate = useState(new Date().toISOString().substr(0, 10));
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dailyCaloriesWarning, setDailyCaloriesWarning] = useState(false);
  const [monthlyPriceWarning, setMonthlyPriceWarning] = useState(false);

  useEffect(() => {
    const newTotalCalories = foods.reduce((acc, food) => acc + food.calories, 0);
    const newTotalPrice = foods.reduce((acc, food) => acc + food.price, 0);

    setTotalCalories(newTotalCalories);
    setTotalPrice(newTotalPrice);

    // Check if total price for one month exceeds $1000
    setMonthlyPriceWarning(newTotalPrice > 1000);

    // Calculate total calories for the selected date
    const totalCaloriesForDate = foods.reduce((acc, food) => {
      if (food.date === selectedDate) {
        console.log(acc, 'acc')
        return acc + food.calories;
      }
      return acc;
    }, 0);

    // Check if total calories for one day exceed 2000
    setDailyCaloriesWarning(totalCaloriesForDate > 2000);
  }, [foods, selectedDate]);


  return (
    <div>
      <h2>Total Calories</h2>
      <p>{totalCalories} calories</p>
      <p style={{color:'red', fontWeight: 'bold'}}>{totalCalories > 2000 && 'Warning: calories exceeds 2000'}</p>
      <h2>Total Price</h2>
      <p>${totalPrice}</p>
      <p style={{color:'red', fontWeight: 'bold'}}>{totalPrice > 1000 && 'Warning: Price exceeds 1000'}</p>
    </div>
  );
}

export default MonthlyCalories;
