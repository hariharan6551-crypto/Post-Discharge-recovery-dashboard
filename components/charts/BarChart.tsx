"use client"

import { BarChart,Bar,XAxis,YAxis,Tooltip } from "recharts"

export default function Chart({data}:any){

return(
<BarChart width={400} height={200} data={data}>
<XAxis dataKey="week"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="visits" fill="#82ca9d"/>
</BarChart>
)
}