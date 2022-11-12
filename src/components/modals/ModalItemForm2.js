import classes from "./ModalItemForm2.module.css";
import ItemForm from "../articulo/ItemForm";

function ModalItemForm(props) {
  function cancelHandler() {
    props.onCancel();
  }
  const submitItemHandler = async(itemData)=> {
    await fetch("https://localhost:7011/api/item/Item/Update", {
      method: "PUT",
      headers:{
        "Acept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemData),
      
    });
    console.log(itemData);

  }

  return (
    <div className={classes.modal}>
      <p>Item Form</p>
      <ItemForm onConfirm={submitItemHandler}/>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default ModalItemForm;
