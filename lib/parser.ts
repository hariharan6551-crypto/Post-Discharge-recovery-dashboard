export function parseDataset(data:any[]) {

 return data.map((row)=>({
    patientId: row["Patient ID"],
    age: Number(row["Age"]),
    gender: row["Gender"],
    diagnosis: row["Diagnosis"],
    supportScore: Number(row["Support Score"]),
    recoveryDays: Number(row["Recovery Days"]),
    readmissionRisk: Number(row["Readmission Risk"]),
    opVisits: Number(row["OP Visits"]),
 }))
}