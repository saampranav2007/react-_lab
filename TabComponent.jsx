import React, { useState } from 'react'

function TabComponent() {
    const [activetab,setActivTab]=useState("Home")
  return (
    <div style={Styles.container}>
        <h1>Hi! Tab Component</h1>
        <div style={Styles.tabContainer}>
            <button onClick={()=>setActivTab("Home")}>Home</button>
            <button onClick={()=>setActivTab("About")}>About</button>
            <button onClick={()=>setActivTab("Contact")}>Contact</button>

        </div>
        <div style={Styles.ContentBox}>
          {activetab === "Home" && <p>Home</p>}
           {activetab === "About" && <p>Kgcas</p>}
            {activetab === "Contact" && <p>computer science</p>}

        </div>
        
    </div>
  )
}
const Styles={
    container:{
        minHeight:"50vh",
        padding:"20px",
        border:"1px solid"
    },
    tabContainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
    },
    ContentBox:{
        height:"100px",
        width:"300px",
        marginLeft:"100px",
        background:"lightblue",
        paddingTop:"10px",
    },

}

export default TabComponent