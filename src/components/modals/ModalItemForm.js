import classes from "./ModalItemForm.module.css";
import ItemForm from "../articulo/ItemForm"
function ModalItemForm(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <p>Item Form</p>
      <ItemForm list={props.list}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalItemForm;
