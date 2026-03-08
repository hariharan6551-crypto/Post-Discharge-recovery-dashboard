"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { week: 1, value: 40 },
  { week: 2, value: 55 },
  { week: 3, value: 70 },
  { week: 4, value: 80 },
  { week: 5, value: 88 },
]

export default function RecoveryChart() {
  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h2 className="font-bold mb-4">Recovery Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}