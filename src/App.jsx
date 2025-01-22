import "./style/App.css"
import Menu from "./Components/Menu";
import Bill
 from "./Components/Bill";
import { useState } from "react";
function App(){
  const[component, setComponent] = useState("menu")
  const[orderedItem, setOrderedItem]=useState([])
 
  return (
    <div className="maincontainer">
      <h1>Star Restaurant</h1>
      {component==="menu"?<Menu setComponent={setComponent} setOrderedItem={setOrderedItem}/>
      :<Bill setComponent={setComponent}/>}
    
    </div>
  )

}


export default App;
