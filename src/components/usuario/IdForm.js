import Card from "../../UI/Card";
import classes from "./IdForm.module.css";

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
      </form>
    </Card>
  );
};

export default UserForm;