import React from "react";
import Meal from "../Meal/Meal";
import './index.css'

const macrosList={
  color:'black',
  border:'1px solid #d3d3d3',
  padding:'10px',
  fontSize:'15px'
}
const macrosHeader={  
  fontFamily: "Song Myung, serif",
fontSize:"25px",
fontWeight:'10px'

}
  

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>

      <div className="nutrients">
        <h1 style={macrosHeader}>This is your Meal Plan</h1>
        <ul style={macrosList}>
        <li>Calories: {nutrients.calories.toFixed(0)}</li>|
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>|
          <li>Fat: {nutrients.fat.toFixed(0)}</li>|
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </div>

      <div className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </main>
  );
}
