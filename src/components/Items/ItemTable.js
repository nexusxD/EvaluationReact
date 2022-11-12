import ItemUnit from "./ItemUnit";
import classes from "./ItemTable.module.css";
const ItemTable = (props) => {
  return (
    <table className={classes.table} rules="all">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>UserId</th>
        <th className={classes.actions}>Actions</th>
      </tr>

      {props.items.map((item) => (
        <tr>
          <ItemUnit
            key={item.itemId}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            userId={item.userId}
            AddItem={props.items}
          />
        </tr>
      ))}
    </table>
  );
};
export default ItemTable;
