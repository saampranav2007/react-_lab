import React, { useState } from 'react'

function App() {
  const [tasks,settask]=useState([]);
  const [text,settext]=useState("")
  const addtask=()=>{
      settask([...tasks ,{name:text, completed:false}])
      settext("")
   }

   const deletetask=(index)=>{
    settask(tasks.filter((_,i)=>i !== index));
   }

  return (
    <div>
      <h1>to-do list</h1>
      <input 
      value={text}
      onChange={(e)=>settext(e.target.value)}
      placeholder='enter task'
      />
      <button onClick={addtask}>Add</button>

      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>
            <input
            type='checkbox'
            checked={tasks.completed}
            />
            <span>{task.name}</span>
            <button onClick={()=>deletetask(index)}
            >delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
