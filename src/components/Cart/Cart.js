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
    setTotalAmount(total.toFixed(2));
  }, [cartCtx.items]);

  function removeItemHandler(id) {
    cartCtx.removeItem(id);
  }

  function addItemHandler(item) {
    console.log(item);
    const quantity = 1;
    cartCtx.addItem({ meal: item, amount: quantity });
  }

  return createPortal(
    <>
      <div className={`modal ${showCart}`}>
        <div onClick={() => setShowCart("")} class="modal-background"></div>
        <div class="modal-content">
          <div class="column cart-items">
            {cartCtx.items.map((item) => {
              return (
                <>
                  <div className="columns">
                    <div class="column">
                      <>
                        <h2 className="title is-3">{item.meal_name}</h2>
                        <div className="columns">
                          <div className="column cart_price">
                            ${item.meal_price}
                          </div>
                          <div className="column">
                            <p className="cart_item_amount">x{item.amount}</p>
                          </div>
                        </div>
                      </>
                    </div>
                    <div class="column">
                      <button
                        onClick={() => removeItemHandler(item.meal_id)}
                        className="button"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addItemHandler(item)}
                        className="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </>
              );
            })}
            <h2 class="title is-4">Total Amount: ${totalAmount}</h2>
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
