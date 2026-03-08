export default function KPIcards() {
  const metrics = [
    { title: "Total Patients", value: "1245" },
    { title: "Avg Recovery Days", value: "18 days" },
    { title: "Support Score", value: "7.4 /10" },
    { title: "Readmission Rate", value: "11%" },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="bg-white p-4 shadow rounded-xl">
          <p className="text-gray-500">{m.title}</p>
          <h2 className="text-2xl font-bold">{m.value}</h2>
        </div>
      ))}
    </div>
  )
}