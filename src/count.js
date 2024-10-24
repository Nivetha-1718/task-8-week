import { useState } from "react"

const Counter = ()=>{
    
   const [count,setcount] = useState(0)
   const increment =()=>{
    setcount(count+1)
   } 
    return(
        
<div className="plus">
   <h1>Counter</h1>
   <p>Count:{count}</p>
   <button onClick={increment} >Increment</button>
</div> 

    )
}

export default Counter