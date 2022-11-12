import ButtonAdd from "../components/buttons/users/ButtonAdd";
import UserTable from "../components/Users/UserTable"
import ButtonGetById from "../components/buttons/users/ButtonGetById";
import ButtonGetAll from "../components/buttons/users/ButtonGetAll";
import classes from "./Users.module.css";
import {useState} from "react";

function Users() {
  const [userList, setUserList]=useState([]);
  
  return(
    <div>
      <ButtonGetAll className={classes.button} usersList={setUserList}/>
      <ButtonAdd className={classes.button}/>
      <ButtonGetById className={classes.button}/>
      <p>Users List</p>
      <UserTable users={userList}/>
      
    </div>
  );
}

export default Users;
