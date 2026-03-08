export function predictRisk(patient:any){

 let risk = 0

 if(patient.age > 65) risk += 0.3
 if(patient.supportScore < 5) risk += 0.4
 if(patient.opVisits > 6) risk += 0.3

 if(risk > 0.6) return "High Risk"
 if(risk > 0.3) return "Medium Risk"

 return "Low Risk"
}