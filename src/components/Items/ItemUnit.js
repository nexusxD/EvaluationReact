import ButtonUpdate from "../buttons/items/ButtonUpdate";
import ButtonAdd from "../buttons/items/ButtonAdd";
import {useState} from "react";
const ItemUnit = (props) => {
  const [] = useState();
  return (
    <>
      <td>{props.Name}</td>
      <td>{props.Description}</td>
      <td>{props.Quantity}</td>
      <td>{props.UserId}</td>
      <td>
              <ButtonAdd onAdd={props.AddItem}>Add</ButtonAdd>
              <ButtonUpdate>Update</ButtonUpdate>
              <button>Delete</button>
            </td>
    </>
  );
};

export default ItemUnit;
