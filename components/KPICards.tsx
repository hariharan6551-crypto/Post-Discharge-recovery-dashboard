export default function KPICards({ kpis }: any) {
  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="p-4 bg-white shadow rounded">
        <p>Total Patients</p>
        <h2>{kpis.totalPatients}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <p>Avg Recovery Days</p>
        <h2>{kpis.avgRecoveryDays}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <p>Support Score</p>
        <h2>{kpis.avgSupportScore}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <p>Readmission Rate</p>
        <h2>{kpis.readmissionRate}%</h2>
      </div>

    </div>
  )
}