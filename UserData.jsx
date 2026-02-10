import React, { useEffect, useState } from 'react'

export default function UserData() {
    const [UserData, setUserData] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>setUserData(data));

    },[])
  return (
    <div>
        <h1>UserData-Fetch API</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {UserData.map((Deatils)=>(
                    <tr key={Deatils.id}>
                        <td>{Deatils.id}</td>
                        <td>{Deatils.name}</td>
                        <td>{Deatils.Email}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}