import { useState } from "react";
import Backdrop from "../../../UI/Backdrop";
import classes from "./ButtonGetAll.module.css";

const ButtonAdd = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  function getHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function fetchUsersHandler() {
    fetch("https://localhost:7011/api/user/User/All")
      .then((response) => {
        console.log(response);
        return response.json();
        
      })
      .then((data) => {
        
        const transformedUsers = data.data;
        props.usersList(transformedUsers);
      });
  }
  function twoFunctions() {
    getHandler();
    fetchUsersHandler();
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
