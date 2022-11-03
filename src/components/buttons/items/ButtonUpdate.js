import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalItemForm from "../../modals/ModalItemForm";

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
      <button  onClick={getHandler}>
        Update
      </button>
      {modalIsOpen && <ModalItemForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonUpdate;