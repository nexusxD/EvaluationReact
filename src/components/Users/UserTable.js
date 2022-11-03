import UserUnit from "./UserUnit";

const UserList = (props) => {
  return(
    <table>
      {props.users.map((user)=>(
        <UserUnit
          key={user.UserId}
          UserId={user.UserId}
          Name={user.Name}
          Email={user.Email}
          Phone={user.Phone}
          Type={user.Type}
          />
      ))}

    </table>
  );
};

export default UserList;