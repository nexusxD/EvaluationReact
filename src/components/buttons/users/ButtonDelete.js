import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalIdForm from "../../modals/ModalIdForm";
import classes from "./ButtonDelete.module.css";

const ButtonDelete = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function getHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return(
    <div>
      <button className={classes.button} onClick={getHandler}>
        Delete
      </button>
      {modalIsOpen && <ModalIdForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonDelete;