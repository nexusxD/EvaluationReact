
import Card from "../../UI/Card";
const UserUnit = (props) => {
  return (
    <section>
      <Card>
        <tr>
            <td>Name: {props.Name}</td>
            <td>Email: {props.Email}</td>
            <td>Phone: {props.Phone}</td>
            <td>Type: {props.Type}</td>
        </tr>
      </Card>
    </section>
  );
};

export default UserUnit;