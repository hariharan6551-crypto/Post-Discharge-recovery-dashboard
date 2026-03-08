"use client"

import {useState} from "react"

export default function ChatAssistant(){

 const [question,setQuestion]=useState("")
 const [answer,setAnswer]=useState("")

 const askAI = async () => {

  const res = await fetch("/api/chat",{
   method:"POST",
   body:JSON.stringify({question})
  })

  const data = await res.json()

  setAnswer(data.answer)

 }

 return(

  <div>

   <input
    value={question}
    onChange={(e)=>setQuestion(e.target.value)}
   />

   <button onClick={askAI}>
    Ask
   </button>

   <p>{answer}</p>

  </div>

 )
}