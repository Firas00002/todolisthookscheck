import React, { useState } from 'react'

const Addtodo = () => {
    const [addtask, setAddtask] = useState ("")

   const newtask =()=>{
      setAddtask([...addtask],addtask.push({action :addtask}))
       
          
        
        
    
}
        
      
       
      
    return (
        <div>
            <input value={addtask} onChange={(event)=>setAddtask(event.target.value)} />
         
         <button onClick={()=>newtask()}>add task</button>
        </div>
    )
}

export default Addtodo
