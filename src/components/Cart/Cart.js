import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context";
import bulma from "bulma";
import "./Cart.css";

export default function Cart({ showCart, setShowCart }) {
  const cartCtx = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    cartCtx.items.forEach((item) => {
      console.log(item);
      total += item.amount * item.meal_price;
    });
    setTotalAmount(total);
  }, [cartCtx.items]);
  return createPortal(
    <>
      <div className={`modal ${showCart}`}>
        <div onClick={() => setShowCart("")} class="modal-background"></div>
        <div class="modal-content">
          <div class="column cart-items">
            {cartCtx.items.map((item) => {
              return <h2 class="title is-5">{item.meal_name} | Quantity: {item.amount}</h2>;
            })}
            <h2 class="title is-3">Total Amount: ${totalAmount}</h2>
            <div class="field is-grouped">
              <div class="control">
                <button onClick={() => setShowCart("")} class="button is-link">
                  Close
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Order</button>
              </div>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </>,
    document.querySelector("#portal")
  );
}
