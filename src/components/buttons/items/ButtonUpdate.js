import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalItemForm2 from "../../modals/ModalItemForm2";
import classes from "./ButtonUpdate.module.css";

const ButtonUpdate = props => {
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
        Update
      </button>
      {modalIsOpen && <ModalItemForm2 onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonUpdate;