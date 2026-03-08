"use client"

import { useEffect, useState } from "react"
import KPICards from "@/components/KPICards"
import { calculateKPIs } from "@/lib/analytics"

export default function Dashboard() {

  const [data, setData] = useState<any[]>([])
  const [kpis, setKpis] = useState<any>(null)

  useEffect(() => {

    const stored = localStorage.getItem("dataset")

    if (stored) {

      const dataset = JSON.parse(stored)

      setData(dataset)

      const metrics = calculateKPIs(dataset)

      setKpis(metrics)

    }

  }, [])

  if (!kpis) {
    return <div className="p-8">Loading dashboard...</div>
  }

  return (

    <div className="p-8">

      <KPICards kpis={kpis} />

    </div>

  )
}