"use client"

import {useEffect,useState} from "react"
import KPICards from "@/components/KPICards"

export default function Dashboard(){

 const [data,setData] = useState([])
 const [kpis,setKpis] = useState({})

 useEffect(()=>{

  const stored = localStorage.getItem("dataset")

  if(stored){

    const dataset = JSON.parse(stored)

    setData(dataset)

  }

 },[])

 return(

  <div className="p-8">

   <KPICards kpis={kpis}/>

  </div>

 )
}