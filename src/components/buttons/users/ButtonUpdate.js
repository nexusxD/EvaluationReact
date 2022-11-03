import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalUserForm from "../../modals/ModalUserForm";

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
      {modalIsOpen && <ModalUserForm onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonUpdate;