import UserUnit from "./UserUnit";
import classes from "./UserTable.module.css";

const UserTable = (props) => {
  return (
    <table className={classes.table} rules="all">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Type</th>
        <th className={classes.actions}>Actions</th>
      </tr>

      {props.users.map((user) => (
        <tr key={user.userId}>
          <UserUnit
            key={user.userId}
            name={user.name}
            email={user.email}
            phone={user.phone}
            type={user.type}
          />
        </tr>
      ))}
    </table>
  );
};

export default UserTable;
