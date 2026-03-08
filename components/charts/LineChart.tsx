"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"
import { recoveryData } from "@/lib/data"

export default function RecoveryChart() {

 return (

  <LineChart width={400} height={250} data={recoveryData}>
    <XAxis dataKey="week"/>
    <YAxis/>
    <Tooltip/>
    <Line type="monotone" dataKey="recovery"/>
  </LineChart>

 )
}