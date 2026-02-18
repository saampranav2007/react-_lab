import React from 'react'
import { Link } from "react-router-dom"
function Home() {
  return (
    <div>
        <h1>Hi , Click here to go to the page: Post.jsx 
            <Link to="/post">Go</Link></h1>
    </div>
  )
}

export default Home