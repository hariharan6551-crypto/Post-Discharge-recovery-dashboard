export function calculateMetrics(data){

 const totalPatients = data.length

 const avgRecovery =
 data.reduce((a,b)=>a + Number(b.recovery_days),0) / totalPatients

 return{
  totalPatients,
  avgRecovery
 }

}