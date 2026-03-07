"use client"

import { useState } from "react"

export default function ChatAssistant({stats}:any){

  const [q,setQ] = useState("")
  const [a,setA] = useState("")

  const ask = ()=>{

    if(q.includes("recovery"))
      setA("Recovery rate is "+
      Math.round(stats.recovery[0].value/stats.totalPatients*100)+"%")

    else if(q.includes("patients"))
      setA("Total patients "+stats.totalPatients)

    else
      setA("Question not recognized")
  }

  return(

    <div style={{marginTop:40}}>

      <h3>AI Assistant</h3>

      <input value={q} onChange={e=>setQ(e.target.value)}/>

      <button onClick={ask}>Ask</button>

      <p>{a}</p>

    </div>
  )
}