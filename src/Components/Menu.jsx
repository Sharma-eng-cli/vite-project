import FoodItem from "./FoodItem";
import "../style/menu.css"
import foodMenu from "../data"
function Menu({setComponent,setOrderedItem}){
    return (
    <div>
    <div className="foodMenu_container">
        {foodMenu.map((obj)=>{
           return <FoodItem item={obj} setOrderedItem={setOrderedItem}/>
        })}
    </div>
    <button onClick={()=>{setComponent("bill")}}>Order Now</button>
    </div>)
}

export default Menu;