import React,{useState} from 'react'

function greeting() {
    const [greetings,setGreetings]=useState("")
    useEffect(()=>{
        const hours=new Date().getHours().toString().padStart(2,'0')
        const minutes=new Date().getMinutes().toString().padStart(2,'0')
        const seconds=new Date().getSeconds().toString().padStart(2,'0')
        if(hours<12){
            setGreetings(`Good Morning ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=17){
            setGreetings(`Good afternoon ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=17){
            setGreetings(`Good Night ${hours}:${minutes}:${seconds}`)
        }
    })
  return (
    <div>
        {greetings}
    </div>
  )
}   

export default greeting
