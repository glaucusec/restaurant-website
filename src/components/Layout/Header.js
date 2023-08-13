import bulma from "bulma";
import "./Header.css";

const Header = ({ setShowCart }) => {
  return (
    <>
      <div class="columns header_main p-4">
        <div class="column header_heading">
          <h1 class="title is-1 has-text-white has-text-centered">
            ReactMeals
          </h1>
        </div>
        <div class="column header_button has-text-centered">
          <button
            onClick={() => setShowCart("is-active")}
            class="button is-large cart_button"
          >
            Your Cart<p class="cart_item__count">4</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
