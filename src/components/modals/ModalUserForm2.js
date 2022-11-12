import classes from "./ModalUserForm.module.css";
import UserForm from "../usuario/UserForm";

function ModalUserForm(props) {
  function cancelHandler() {
    props.onCancel();
  }
  const submitUserHandler = async( userData)=> {
    await fetch("https://localhost:7011/api/user/User/edit", {
      method: "PUT",
      headers:{
        "Acept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData),
      
    });
    console.log(userData);
  }

  return (
    <div className={classes.modal}>
      <p>User Form</p>
      <UserForm onConfirm={submitUserHandler}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalUserForm;