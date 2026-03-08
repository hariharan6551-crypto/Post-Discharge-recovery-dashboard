"use client"

import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import KPICards from "@/components/KPICards"
import LineChart from "@/components/charts/LineChart"
import PieChart from "@/components/charts/PieChart"
import DatasetTable from "@/components/DatasetTable"
import ChatAssistant from "@/components/ChatAssistant"

export default function Dashboard() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 p-6 space-y-6">

        <Header />

        <KPICards />

        <div className="grid grid-cols-2 gap-6">
          <LineChart />
          <PieChart />
        </div>

        <DatasetTable />

        <ChatAssistant />

      </div>

    </div>
  )
}