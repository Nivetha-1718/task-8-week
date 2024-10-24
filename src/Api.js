import { useEffect, useState } from "react"

const Api =() =>{
   
   const[api,setapi]=useState("")
   useEffect (() =>{
   fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(response => response.json())
   .then(data => setapi(data))
   } ,[])
    return(
    
        <div className="data">
            <h1>Fetching Data from API</h1>
             {api && (<div>
                <p>UserId:{api.userid}</p>
                <p>Id:{api.id}</p>
                <p>Title:{api.title}</p>
                <p>Completed: {api.completed?'true':'false'}</p>
                </div>)}       
        </div>
    )
}

export default Api