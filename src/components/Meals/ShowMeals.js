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
                <div className="columns">
                  <div className="column is-half">
                    <li className="meal_name">{meal.meal_name}</li>
                    <li className="meal_desc">{meal.meal_desc}</li>
                    <li className="meal_price">${meal.meal_price}</li>
                  </div>
                  <div class="column is-half second-column">
                    <div class="amount-wrapper">
                      <span
                        class="amount-label"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Amount
                      </span>
                      <span class="amount-number">1</span>
                    </div>
                    <div>
                      <button class="btn">Add</button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
