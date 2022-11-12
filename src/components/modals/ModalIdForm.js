import useState from "react";
import classes from "./ModalIdForm.module.css";
import IdForm from "../usuario/IdForm";
function ModalIdForm(props) {
  
  function cancelHandler() {
    props.onCancel();
  }
  function print() {
    console.log(props);
  }

  return (
    <div className={classes.modal}>
      <p>ID Form</p>
      <IdForm/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button onClick={print}>
        Send
      </button>
    </div>
  );
}

export default ModalIdForm;