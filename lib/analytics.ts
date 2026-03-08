export function calculateKPIs(data:any[]) {

 const totalPatients = data.length

 const avgRecoveryDays =
   data.reduce((a,b)=>a+b.recoveryDays,0)/totalPatients

 const avgSupportScore =
   data.reduce((a,b)=>a+b.supportScore,0)/totalPatients

 const readmissionRate =
   data.filter(p=>p.readmissionRisk > 0.5).length / totalPatients

 return {
   totalPatients,
   avgRecoveryDays,
   avgSupportScore,
   readmissionRate
 }
}