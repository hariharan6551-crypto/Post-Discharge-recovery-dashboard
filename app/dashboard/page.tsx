"use client"

import { useEffect, useState } from "react"
import { getStats } from "../../lib/api"

import KPICards from "../../components/KPICards"
import Filters from "../../components/Filters"
import ChatAssistant from "../../components/ChatAssistant"

import LineChart from "../../components/charts/LineChart"
import BarChart from "../../components/charts/BarChart"
import PieChart from "../../components/charts/PieChart"
import DonutChart from "../../components/charts/DonutChart"
import AreaChart from "../../components/charts/AreaChart"

export default function Dashboard() {

  const [stats,setStats] = useState<any>(null)

  useEffect(()=>{
    getStats().then(setStats)
  },[])

  if(!stats) return <p>Loading...</p>

  return (
    <div style={{padding:30}}>

      <h1>Recovery Dashboard</h1>

      <Filters/>

      <KPICards stats={stats}/>

      <LineChart data={stats.daily}/>
      <BarChart data={stats.weekly}/>
      <PieChart data={stats.gender}/>
      <DonutChart data={stats.recovery}/>
      <AreaChart data={stats.monthly}/>

      <ChatAssistant stats={stats}/>

    </div>
  )
}