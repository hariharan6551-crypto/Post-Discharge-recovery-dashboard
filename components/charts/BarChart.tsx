"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function Chart({data}:any){

  if(!data || data.length === 0){
    return <p>No chart data</p>
  }

  return(
    <BarChart width={400} height={250} data={data}>
      <XAxis dataKey="week"/>
      <YAxis/>
      <Tooltip/>
      <Bar dataKey="value"/>
    </BarChart>
  )
}