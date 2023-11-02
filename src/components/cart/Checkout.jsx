import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import PaystackPop from '@paystack/inline-js';
import useInput from '../../store/use-input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const {
    value: enteredFirstname,
    isValid: firstnameIsValid,
    hasError: firstnameInputIsInvalid,
    valueChangeHandler: firstnameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredOthername,
    isValid: othernameIsValid,
    hasError: othernameInputIsInvalid,
    valueChangeHandler: othernameChangeHandler,
    valueBlurHandler: otherNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredNumber,
    isValid: numberIsValid,
    hasError: numberInputIsInvalid,
    valueChangeHandler: numberChangeHandler,
    valueBlurHandler: numberBlurHandler,
  } = useInput((value) => value.length === 11);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressInputIsInvalid,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;
  if (
    firstnameIsValid &&
    othernameIsValid &&
    numberIsValid &&
    emailIsValid &&
    addressIsValid
  ) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_0deead23ca0da7dcae6ed5624bc499060f0c261e',
      amount: totalAmount * 100,
      email: enteredEmail,
      name: enteredFirstname,
      onSuccess(transaction) {
        let msg = `Payment success! Reference ${transaction.reference}`;
        alert(msg);
      },
      onCancel() {
        alert('Transaction Cancel!');
      },
    });

    props.onConfirm({
      firstname: enteredFirstname,
      othername: enteredOthername,
      number: enteredNumber,
      email: enteredEmail,
      address: enteredAddress,
    });
  };

  const firstnameClasses = `${classes.control} ${
    firstnameInputIsInvalid ? classes.invalid : ''
  }`;

  const othernameClasses = `${classes.control} ${
    othernameInputIsInvalid ? classes.invalid : ''
  }`;

  const numberClasses = `${classes.control} ${
    numberInputIsInvalid ? classes.invalid : ''
  }`;

  const emailClasses = `${classes.control} ${
    emailInputIsInvalid ? classes.invalid : ''
  }`;

  const addressClasses = `${classes.control} ${
    addressInputIsInvalid ? classes.invalid : ''
  }`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={firstnameClasses}>
        <label>Firstname:</label>
        <input
          type='text'
          name='firstname'
          value={enteredFirstname}
          onChange={firstnameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstnameInputIsInvalid && (
          <p className={classes.error}>Name field must not be empty</p>
        )}
      </div>
      <div className={othernameClasses}>
        <label>Othername:</label>
        <input
          type='text'
          name='othername'
          value={enteredOthername}
          onChange={othernameChangeHandler}
          onBlur={otherNameBlurHandler}
        />
        {othernameInputIsInvalid && (
          <p className={classes.error}>Name field must not be empty</p>
        )}
      </div>
      <div className={numberClasses}>
        <label>Phone Number:</label>
        <input
          type='text'
          name='phone number'
          value={enteredNumber}
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
        />
        {numberInputIsInvalid && (
          <p className={classes.error}>invalid phone number</p>
        )}
      </div>
      <div className={emailClasses}>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className={classes.error}>invalid email address</p>
        )}
      </div>
      <div className={addressClasses}>
        <label>Address:</label>
        <input
          type='text'
          name='address'
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressInputIsInvalid && (
          <p className={classes.error}>Address field must not be empty</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.hideCheckout}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Comfirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
