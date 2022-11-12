import ButtonDelete from "../buttons/users/ButtonDelete";
import ButtonUpdate from "../buttons/users/ButtonUpdate";
import classes from "./UserUnit.module.css";
const UserUnit = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.type}</td>
      <td className={classes.actions}>
        <ButtonUpdate className={classes.boton}>Update</ButtonUpdate>
        <ButtonDelete className={classes.boton}>Delete</ButtonDelete>
      </td>
    </>
  );
};

export default UserUnit;
