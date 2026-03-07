"use client"

import { AreaChart,Area,XAxis,YAxis,Tooltip } from "recharts"

export default function Chart({data}:any){

return(
<AreaChart width={400} height={200} data={data}>
<XAxis dataKey="month"/>
<YAxis/>
<Tooltip/>
<Area type="monotone" dataKey="visits" stroke="#8884d8" fill="#8884d8"/>
</AreaChart>
)
}