"use client"
import { PieChart, Pie, Tooltip } from "recharts"

export default function Chart({data}:any){

  if(!data || data.length === 0){
    return <p>No chart data</p>
  }

  return(
    <PieChart width={300} height={250}>
      <Pie data={data} dataKey="value" nameKey="name"/>
      <Tooltip/>
    </PieChart>
  )
}