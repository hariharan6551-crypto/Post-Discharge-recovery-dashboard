export default function PatientTable() {

  const patients = [
    { id: 1023, age: 68, gender: "Male", diagnosis: "Heart Failure", risk: "High" },
    { id: 1024, age: 77, gender: "Female", diagnosis: "Diabetes", risk: "Medium" },
  ]

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h2 className="font-bold mb-4">Patient Analytics</h2>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p,i)=>(
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.diagnosis}</td>
              <td>{p.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}