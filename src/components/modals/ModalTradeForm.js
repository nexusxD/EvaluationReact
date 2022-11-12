import classes from "./ModalItemForm.module.css";
import TradeForm from "../usuario/TradeForm";
function ModalItemForm(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <p>Item Form</p>
      <TradeForm list={props.list}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalItemForm;
