import UserUnit from "./UserUnit";

const UserTable = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>

      {props.users.map((user) => (
        <tr>
          <UserUnit
            key={user.UserId}
            Name={user.Name}
            Email={user.Email}
            Phone={user.Phone}
            Type={user.Type}
          />
        </tr>
      ))}
    </table>
  );
};

export default UserTable;
