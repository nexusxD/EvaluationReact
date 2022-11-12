import Card from "../../UI/Card"
import classes from "./ItemForm.module.css";
import React, { useRef, useState } from "react";

const ItemForm = (props) => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();
  const userIdInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredUserId = userIdInputRef.current.value;

    props.onConfirm({
      itemId: enteredId,
      name: enteredName,
      description: enteredDescription,
      quantity: enteredQuantity,
      userId: enteredUserId, 
    });
  }
  
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Item ID</label>
          <input type="number" required id="id" ref={idInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input type="text" required id="description" ref={descriptionInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" required id="quantity" ref={quantityInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="userid">User ID</label>
          <input type="number" required id="userid" ref={userIdInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default ItemForm;