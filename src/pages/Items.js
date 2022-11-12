import ButtonAdd from "../components/buttons/items/ButtonAdd";
import ItemTable from "../components/Items/ItemTable";
import ButtonGetById from "../components/buttons/items/ButtonGetById";
import ButtonGetAll from "../components/buttons/items/ButtonGetAll";
import ButtonGetByUserId from "../components/buttons/items/ButtonGetByUserId";
import ButtonTrade from "../components/buttons/items/ButtonTrade";
import classes from "./Items.module.css";
import {useState} from "react";

function Items() {
  const [itemList, setItemList]=useState([]);
  
  
  return(
  <div>
    <ButtonGetAll itemsList={setItemList}/>
    <ButtonAdd/>
    <ButtonGetById/>
    <ButtonGetByUserId/>
    <ButtonTrade/>
    <p className={classes.p}>Item Table</p>
    <ItemTable items={itemList}/>
  </div>
  );
}

export default Items;
