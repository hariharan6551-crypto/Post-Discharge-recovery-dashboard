"use client"
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts"

export default function Chart({data}:any){

  if(!data || data.length === 0){
    return <p>No chart data</p>
  }

  return(
    <AreaChart width={400} height={250} data={data}>
      <XAxis dataKey="month"/>
      <YAxis/>
      <Tooltip/>
      <Area type="monotone" dataKey="value"/>
    </AreaChart>
  )
}