import Card from "../../UI/Card";
import classes from "./UserForm.module.css";

const UserForm = () => {
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">ID</label>
          <input type="number" required id="id" />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone</label>
          <input type="number" required id="phone" />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Type</label>
          <input type="text" required id="type" />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;