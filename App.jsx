import React, {useState} from 'react'

function App(){
  const [color,Setcolor]=useState("white")
  return (
    <div>
      <h1>color-picker</h1>
      <button onClick={()=>Setcolor("red")}>Red</button>
      <button onClick={()=>Setcolor("blue")}>Blue</button>
      <button onClick={()=>Setcolor("green")}>Green</button>
      <div style={{height:"100px",
        width:"200px",
        border:"1px solid",
        marginLeft:"220px",
        marginTop:"20px",
        backgroundColor:color}}></div>
    </div>
  )
}
export default  App; 

