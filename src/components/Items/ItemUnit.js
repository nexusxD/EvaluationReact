import ButtonUpdate from "../buttons/items/ButtonUpdate";
import { useState } from "react";
import ButtonDelete from "../buttons/items/ButtonDelete";
import classes from "./ItemUnit.module.css";
const ItemUnit = (props) => {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.quantity}</td>
      <td>{props.userId}</td>
      <td className={classes.actions}>
        <ButtonUpdate>Update</ButtonUpdate>
        <ButtonDelete>Delete</ButtonDelete>
      </td>
    </>
  );
};

export default ItemUnit;
