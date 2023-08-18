import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import ShowMeals from "./components/Meals/ShowMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState("");
  const [meals, setMeals] = useState([
    {
      meal_id: 1,
      meal_name: "Sushi",
      meal_desc: "Finest fish and veggies",
      meal_price: 22.99,
    },
    {
      meal_id: 2,
      meal_name: "Schnitzel",
      meal_desc: "A german speciality!",
      meal_price: 16.5,
    },
    {
      meal_id: 3,
      meal_name: "Barbecue Burger",
      meal_desc: "American, raw, meaty",
      meal_price: 12.99,
    },
    {
      meal_id: 4,
      meal_name: "Green Bowl",
      meal_desc: "Healthy... and green...",
      meal_price: 30.5,
    },
  ]);

  return (
    <CartProvider>
      <Header setShowCart={setShowCart} />
      <Summary />
      <ShowMeals meals={meals} />
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </CartProvider>
  );
}

export default App;
