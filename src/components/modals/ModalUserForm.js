import classes from "./ModalUserForm.module.css";
import UserForm from "../usuario/UserForm";
function ModalUserForm(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <p>User Form</p>
      <UserForm/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalUserForm;