export default function KPICards({kpis}){

 return (
  <div className="grid grid-cols-6 gap-4">

   <Card title="Total Patients" value={kpis.totalPatients}/>
   <Card title="Avg Recovery Days" value={kpis.avgRecoveryDays}/>
   <Card title="Support Score" value={kpis.avgSupportScore}/>
   <Card title="Readmission Rate" value={kpis.readmissionRate}/>

  </div>
 )
}