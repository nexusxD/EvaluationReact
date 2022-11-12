import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalUserForm from "../../modals/ModalUserForm";
import classes from "./ButtonAdd.module.css";

const ButtonAdd = props => {
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
        Add
      </button>
      {modalIsOpen && <ModalUserForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonAdd;