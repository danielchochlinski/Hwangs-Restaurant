import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div
      className={classes.meal}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>

      <div>
        <MealItemForm price={props.price} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
