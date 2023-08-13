import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import ShowMeals from "./components/Meals/ShowMeals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState('');
  const [meals, setMeals] = useState([
    {
      meal_name: "Sushi",
      meal_desc: "Finest fish and veggies",
      meal_price: 22.99,
    },
    {
      meal_name: "Schnitzel",
      meal_desc: "A german speciality!",
      meal_price: 16.50,
    },{
      meal_name: "Barbecue Burger",
      meal_desc: "American, raw, meaty",
      meal_price: 12.99,
    },
    {
      meal_name: "Green Bowl",
      meal_desc: "Healthy... and green...",
      meal_price: 30.50,
    },
  ]);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      <Summary />
      <ShowMeals meals={meals}/>
      <Cart showCart={showCart} setShowCart={setShowCart}/>
    </div>
  );
}

export default App;
