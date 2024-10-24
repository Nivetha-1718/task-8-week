import { useState } from "react"

const Input = ()=>{
    
    const[uname,setuname] = useState("")
    const handlename =(event)=>{
    setuname(event.target.value)
    }
    return(
    <div className="box">
     <h1>Form Input Handler</h1>   
    <input type="text" placeholder="Enter Your Name" value={uname}onChange={handlename} style={{padding:"10px",fontWeight:"bold"}}></input>
    <p>Name is : {uname}</p>
    </div>
    )
}
export default Input