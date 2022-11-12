import Card from "../../UI/Card";
import classes from "./TradeForm.module.css";

const UserForm = () => {
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="idFrom">User ID From</label>
          <input type="number" required id="idFrom" />
        </div>
        <div className={classes.control}>
          <label htmlFor="idTo">User ID To</label>
          <input type="number" required id="idTo" />
        </div>
        <div className={classes.control}>
          <label htmlFor="idItem">Item ID From</label>
          <input type="number" required id="idItem" />
        </div>
        <div className={classes.control}>
          <label htmlFor="quantiy">Quantity</label>
          <input type="number" required id="quantity" />
        </div>
      </form>
    </Card>
  );
};

export default UserForm;