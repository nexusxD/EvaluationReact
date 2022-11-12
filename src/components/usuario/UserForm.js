import Card from "../../UI/Card";
import classes from "./UserForm.module.css";
import React, { useRef, useState } from "react";

const UserForm = (props) => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const typeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredType = typeInputRef.current.value;

    props.onConfirm({
      userId: enteredId,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      type: enteredType, 
    });
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">ID</label>
          <input type="number" required id="id" ref={idInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone</label>
          <input type="number" required id="phone" ref={phoneInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Type</label>
          <input type="text" required id="type" ref={typeInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;