import Card from "../../UI/Card"
import classes from "./ItemForm.module.css";


const ItemForm = (props) => {
  function submitHandler(event) {
    event.preventDefault();
  }
  function submitData(event) {
    event.preventDefault();
    props.list.push({
    });
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Item ID</label>
          <input type="number" required id="id" />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input type="text" required id="description" />
        </div>
        <div className={classes.control}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" required id="quantity" />
        </div>
        <div className={classes.control}>
          <label htmlFor="userid">User ID</label>
          <input type="number" required id="userid" />
        </div>
        <div className={classes.actions}>
          <button onClick={submitData}>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default ItemForm;