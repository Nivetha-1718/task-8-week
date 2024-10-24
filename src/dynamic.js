import { useState } from "react"
const List=()=>{
    const[box,setbox]=useState([])
    const[text,settext]=useState("")
    const handlechange =()=>{
     if(text.trim()!=="")
     
    {
     setbox([...box,text])
     settext("")
    }}
    
    const handletext = (event) =>{
     settext(event.target.value)
    }
    return(
     <div className="enter">
        <h1>Dynamic List</h1>
        <input type="text" onChange={handletext} value={text} placeholder="Enter list" style={{textAlign:"center"}} />
        <button onClick={handlechange}>AddItem</button>
        <div className="entered">
        <ul>
         {box.map((item,index) =>
            (<li key={index}>{item}</li>)
            )}
        
        </ul>
    </div>
    </div>
    )
}
export default List