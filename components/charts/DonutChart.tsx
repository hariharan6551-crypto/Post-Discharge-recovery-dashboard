"use client"

import { PieChart,Pie,Tooltip } from "recharts"

export default function Chart({data}:any){

return(
<PieChart width={300} height={200}>
<Pie data={data} dataKey="value" nameKey="name" innerRadius={50}/>
<Tooltip/>
</PieChart>
)
}