import React from "react";
import { createPortal } from "react-dom";
import bulma from "bulma";
import "./Cart.css";

export default function Cart() {
  return createPortal(
    <>
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="column cart-items">
            <h2 class="title is-5">Sushi</h2>
            <h2 class="title is-3">Total Amount: $35.55</h2>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Close</button>
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
