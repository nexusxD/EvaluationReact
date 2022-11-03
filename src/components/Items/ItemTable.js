import ItemUnit from "./ItemUnit";
const ItemTable = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>UserId</th>
        <th>Actions</th>
      </tr>

      {props.items.map((item) => (
        <tr>
          <ItemUnit
            key={item.ItemId}
            Name={item.Name}
            Description={item.Description}
            Quantity={item.Quantity}
            UserId={item.UserId}
            AddItem={props.items}
          />
        </tr>
      ))}
    </table>
  );
};
export default ItemTable;
