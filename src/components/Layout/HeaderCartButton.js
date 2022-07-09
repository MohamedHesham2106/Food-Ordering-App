import React, { useContext, useEffect, useState } from "react";
import CardIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  //reduce array to single number
  const NumOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    //reset bump animation
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    //cleanUp fn
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
