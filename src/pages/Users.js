import UserTable from "../components/Users/UserTable"
function Users() {
  const Dummy_Files = [
    {
      UserId : 1,
      Name: "Pato",
      Email: "pato@patomail.com",
      Phone: 1234567890,
      Type: "Comprador",
    },
    {
      UserId : 2,
      Name: "Patito",
      Email: "patito@patomail.com",
      Phone: 9876543210,
      Type: "Vendedor",
    },
  ];
  return(
    <div>
      <p>Users List</p>
      <UserTable users={Dummy_Files}/>
    </div>
  );
}

export default Users;
