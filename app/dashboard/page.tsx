"use client"

import { useEffect, useState } from "react"
import KPICards from "../../components/KPICards"
import LineChartComponent from "../../components/charts/LineChartComponent"
import { calculateKPIs } from "../../lib/analytics"

export default function Dashboard() {

  const [dataset, setDataset] = useState<any[]>([])
  const [kpis, setKpis] = useState<any>(null)

  useEffect(() => {

    const stored = localStorage.getItem("dataset")

    if (stored) {

      const parsed = JSON.parse(stored)

      setDataset(parsed)

      const metrics = calculateKPIs(parsed)

      setKpis(metrics)

    }

  }, [])

  if (!kpis) {

    return (
      <div className="p-10 text-gray-500">
        Loading dashboard...
      </div>
    )

  }

  return (

    <div className="p-8 space-y-6">

      <h1 className="text-2xl font-bold">
        Post-Discharge Recovery Dashboard
      </h1>

      {/* KPI CARDS */}

      <KPICards kpis={kpis} />

      {/* CHARTS */}

      <div className="grid grid-cols-2 gap-6">

        <LineChartComponent data={dataset} />

      </div>

    </div>

  )
}