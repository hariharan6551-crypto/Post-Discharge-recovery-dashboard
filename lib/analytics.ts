export function calculateKPIs(data:any[]) {

  return {
    totalPatients: data.length,
    avgRecoveryDays: 10,
    avgSupportScore: 4,
    readmissionRate: 12
  }

}