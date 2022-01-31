import { useContext, useState } from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const Checkout = (props) => {

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput(isNotEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetInputReset,
  } = useInput(isNotEmpty);

  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: postalCodeInputReset,
  } = useInput(isNotEmpty);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityInputReset,
  } = useInput(isNotEmpty);
  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const nameClasses = nameInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const streetClasses = streetInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const postalCodeClasses = postalCodeInputHasError
    ? classes.formControlInvalid
    : classes.formControl;
  const cityClasses = cityInputHasError
    ? classes.formControlInvalid
    : classes.formControl;

  const confirmHandler = (e) => {
    e.preventDefault();

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue,
    });
    console.log({
      name: nameValue,
      street: streetValue,
      postalCode: postalCodeValue,
      city: cityValue,
    });
    //http request to send order
    nameInputReset();
    streetInputReset();
    postalCodeInputReset();
    cityInputReset();
  };
  return (
    <form className={classes.formControl} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className={classes.textError}>Please enter your name!</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetInputHasError && (
          <p className={classes.textError}>Please enter your streer!</p>
        )}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCodeValue}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeInputHasError && (
          <p className={classes.textError}>Please enter your post code!</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityInputHasError && (
          <p className={classes.textError}>Please enter your city!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
