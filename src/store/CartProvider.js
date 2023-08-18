import CartContext from "./cart-context";
import React, { useState } from "react";

export default function CartProvider(props) {
  const [cartItems, updateCartItems] = useState([]);

  const addItemToCartHandler = ({ meal, amount }) => {
    console.log({meal, amount})
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

  const removeItemFromCartHandler = (id) => {
    const mealIndex = cartItems.findIndex((item) => {
      return item.meal_id == id;
    });
    if(cartItems[mealIndex].amount == 1) {
        const newItems = cartItems.filter(item => {
            return item.meal_id != id;
        })
        updateCartItems(newItems);
    } else {
        const newItems = cartItems.map(item => {
            if(item.meal_id === id) {
                item.amount -= 1
                return item;
            } else {
                return item;
            }
        })
        updateCartItems(newItems);
    }
  };

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
