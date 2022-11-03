import ButtonUpdate from "../buttons/users/ButtonUpdate";
import ButtonAdd from "../buttons/users/ButtonAdd";
const UserUnit = (props) => {
  return (
        <>
            <td>{props.Name}</td>
            <td>{props.Email}</td>
            <td>{props.Phone}</td>
            <td>{props.Type}</td>
            <td>
              <ButtonAdd>Add</ButtonAdd>
              <ButtonUpdate>Update</ButtonUpdate>
              <button>Delete</button>
            </td>
        </>
      
    
  );
};

export default UserUnit;