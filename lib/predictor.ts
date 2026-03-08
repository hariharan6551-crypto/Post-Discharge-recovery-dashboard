export function predictRisk(patient){

 if(patient.age > 70 && patient.support_score < 5){
  return "High Risk"
 }

 return "Low Risk"
}