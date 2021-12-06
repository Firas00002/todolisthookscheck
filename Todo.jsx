import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([{ id: Math.random(), action: 'learn react hook',isShown:false },
                                      { id: Math.random(), action: 'learn react state' ,isShown:true},
                                      { id: Math.random(), action: 'learn react Router' ,isShown:false},
                                      { id: Math.random(), action: 'learn react Redux',isShown:true}])

   const handledelete = (i)=>{
    setTodo([...todo],todo.filter((el)=>el.id !==i))
   }
   
   const handledone = (i)=>{
    setTodo([...todo],todo.map((el)=>el.id===i?{...el,isShown:!el.isShown}:el))

   }
    return (
        <div>
            {todo.map((el,i)=> <li id={el.isShown?"Appp":""} key={i}>
             {el.action} 
             <button onClick={()=>handledelete(el.id)}>Delete</button> 
             <button onClick={()=>handledone(el.id)}>Done</button>
            </li>)}
        
        
        </div>
    )
}

export default Todo
