import "./style/App.css"
import Menu from "./Components/Menu";
import Bill from "./Components/Bill";
import { useState } from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
function App(){
  const[page, setPage]=useState("home")
  const[component, setComponent] = useState("menu")
  const[orderedItem, setOrderedItem]=useState([])
  
 
  return (
    <div className="maincontainer">
      <nav>
        <ul style={{display:"flex", listStyle:"none", fontSize:"30px", cursor:"pointer", border:"1px solid black", padding:"20px", justifyContent:"space-evenly", color:"red"}}>
          <li onClick={()=> {setPage("home")}}>Home</li>
          <li onClick={()=> {setPage ("contact")}}>Contact Us</li>
          <li onClick={()=> {setPage("about")}}>About</li>
        </ul>
      </nav>
      <h1>Star Restaurant</h1>
       {page === "home" &&
       <div>
      {component==="menu"?<Menu setComponent={setComponent} setOrderedItem={setOrderedItem}/>
      :<Bill setComponent={setComponent}/>}
       </div>}

       {page === "contact" && <Contact/>}
       {page === "About" && <About/>}
    </div> 
  )

}


export default App;
