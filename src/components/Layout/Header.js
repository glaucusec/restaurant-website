import bulma from "bulma";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="columns header_main p-4">
        <div class="column header_heading">
          <h1 class="title is-1 has-text-white has-text-centered">
            ReactMeals
          </h1>
        </div>
        <div class="column header_button has-text-centered">
          <button class="button is-large cart_button">
            Your Cart<p class="cart_item__count">0</p>
          </button>
        </div>
      </div>
      <div class="background-div"></div>
    </>
  );
};

export default Header;
