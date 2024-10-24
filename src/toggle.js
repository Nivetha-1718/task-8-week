import { useState } from "react"

const Toggle = () =>{

const[view,setview] = useState(false)
const toggletext = ()=>{
  setview(!view)
}

return(
<div className="quote">
    <h1>Toggle</h1>
    {view && <p style={{fontWeight:"bolder"}}>Hello Everyone!!</p>}
    <button onClick={toggletext}>{view?"Hide":"Show"}Text</button>
    </div>
)
}

export default Toggle