import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import classes from "./ButtonGetAll.module.css";

const ButtonAdd = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allItems, setAllItems] = useState([]);
  function getHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function fetchItemsHandler() {
    fetch("https://localhost:7011/api/item/Item/All")
      .then((response) => {
        console.log(response);
        return response.json();
        
      })
      .then((data) => {
        
        const transformedItems = data.data;
        props.itemsList(transformedItems);
      });
  }
  function twoFunctions() {
    getHandler();
    fetchItemsHandler();
  }
  return (
    <div>
      <button className={classes.button} onClick={twoFunctions}>
        Get All
      </button>

      {/*modalIsOpen && <Backdrop onClose={closeModalHandler} />*/}
    </div>
  );
};
export default ButtonAdd;
