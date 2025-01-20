import React, { useState } from 'react'
import "../style/menu.css"
// hook => stateful 
const FoodItem = (props) => {
    const [num , setNum ] = useState({value:0})
    let item = props.item;
    let setOrderedItem= props.setOrderedItem
    // let num =0 ;
    function clickHandler(sym){
      if(sym==="+")
      {
        setNum({value:num.value+1})
        console.log(num.value)

        setOrderedItem((currentState)=>{
          console.log(currentState)
          let result = currentState.filter((ele)=>{
            if(ele.name===item.name){
              return true;
            }
          })

          if(result.length===0){
            item.count =1;
            return [...currentState, item]
          }
          else{
            
            // let obj = currentState.map(ele=>{
            //   //return [...currentState, item]
            // })

            
          
          let obj= currentState.map(ele=>{
            if(ele.name===item.name){
              ele.count =ele.count+1
            }
          })
          console.log(obj)
          return obj
        }
        
        })
      }
      else{
        if(num.value>0)
          setNum({value:num.value-1})
        console.log(num.value)
      }
        
    }
  return (
            <div className='foodItem_container'>
                    <img src={item.imageUrl} alt="dish name" width="200px" height="200px"/>
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    <p>{item.description}</p>

                    <div>
                      <button onClick={()=>{clickHandler("-")}}>-</button>
                      <button>{num.value}</button>
                      <button onClick={()=>{clickHandler("+")}}>+</button>
                    </div>
                    
                </div>
  )
}

export default FoodItem