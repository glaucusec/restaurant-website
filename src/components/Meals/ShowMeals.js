import React from "react";

import "./ShowMeals.css";

export default function (props) {
  const meals = props.meals;

  return (
    <div className="meals_section">
      <div className="meals">
        <ul>
          {meals.map((meal) => {
            return (
              <>
                <li className="meal_name">{meal.meal_name}</li>
                <li className="meal_desc">{meal.meal_desc}</li>
                <li className="meal_price">${meal.meal_price}</li>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
