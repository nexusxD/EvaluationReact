import ItemTable from "../components/Items/ItemTable";
function Items() {
  const Dummy_Files = [
    {
      ItemId : 1,
      Name: "Galletas",
      Description: "Galletas Ricas",
      Quantity: 15,
      UserId: 1,
    },
    {
      ItemId : 2,
      Name: "Paletas",
      Description: "De Pollo",
      Quantity: 20,
      UserId: 2,
    },
  ];
  
  return(
  <div>
    <p>Item Table</p>
    <ItemTable items={Dummy_Files}/>
  </div>
  );
}

export default Items;
