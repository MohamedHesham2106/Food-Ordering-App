import React, { useContext } from "react";
import CardIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  //reduce array to single number
  const NumOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
