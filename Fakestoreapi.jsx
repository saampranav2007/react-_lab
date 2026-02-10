import React, { useEffect,useState } from 'react'

function Fakestoreapi() {
    const [Products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json()) 
            .then((data)=>setProducts(data))

            
    },[])
  return (
    <div style={Styles.card}>
        <h4>{Products.title}</h4>
        <img src={Products.image}alt=""style={Styles.img}/>
        <p><b>Price:</b>{Products.price}</p>
        <p><b>Description:</b>{Products.description}</p>
        <p><b>Category:</b>{Products.category}</p>
    </div>
  )
}
const Styles={
    card:{
    width:"300px",
    border:"1px solid ",
    padding:"15px",
    borderradius:"8px"
    },
    img:{
        width:"100px",
        heigth:"200px",
        objectFit:"contain",
        
    }
}

export default Fakestoreapi