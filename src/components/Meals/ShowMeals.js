import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

import "./ShowMeals.css";

export default function (props) {
  const meals = props.meals;

  const cartCtx = useContext(CartContext);

  function handleAddMeal(meal) {
    const mealAmountInput = document.querySelector(`#amount-${meal.meal_id}`).value;
    cartCtx.addItem({ meal, amount: mealAmountInput });
  }

  return (
    <div className="meals_section">
      <div className="meals">
        <ul>
          {meals.map((meal, index) => {
            return (
              <React.Fragment key={index}>
                <div className="columns">
                  <div className="column is-half">
                    <li className="meal_name">{meal.meal_name}</li>
                    <li className="meal_desc">{meal.meal_desc}</li>
                    <li className="meal_price">${meal.meal_price}</li>
                  </div>
                  <div className="column is-half second-column">
                    <div className="amount-wrapper">
                      <span
                        className="amount-label"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Amount
                      </span>
                      <input
                        type="number"
                        className="amount-number"
                        defaultValue={1}
                        id={`amount-${meal.meal_id}`}
                      />
                    </div>
                    <div>
                      <button onClick={() => handleAddMeal(meal)} class="btn">
                        +Add
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
