import CartContext from "./cart-context";
import React, { useState } from "react";

export default function CartProvider(props) {
  const [cartItems, updateCartItems] = useState([]);

  const addItemToCartHandler = ({ meal, amount }) => {
    const isAlreadyAdded = cartItems.some(
      (item) => item.meal_id === meal.meal_id
    );

    const updatedItems = cartItems.reduce((updatedItems, item) => {
      if (item.meal_id === meal.meal_id) {
        return [
          ...updatedItems,
          { ...item, amount: item.amount + parseInt(amount) },
        ];
      }
      return [...updatedItems, item];
    }, []);

    isAlreadyAdded
      ? updateCartItems(updatedItems)
      : updateCartItems([
          ...updatedItems,
          { ...meal, amount: parseInt(amount) },
        ]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
