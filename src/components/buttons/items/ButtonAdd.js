import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import ModalItemForm from "../../modals/ModalItemForm";

const ButtonAdd = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function getHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function onHandler (){
    setModalIsOpen(true);
  }

  return(
    <div>
      <button  onClick={getHandler}>
        Add
      </button>
      {modalIsOpen && <ModalItemForm onCancel={closeModalHandler} list={props.onAdd}/>}
      {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
    </div>
  );
};
export default ButtonAdd;