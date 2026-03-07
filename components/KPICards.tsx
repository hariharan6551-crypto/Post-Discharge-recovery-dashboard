export default function KPICards({stats}:any){

  return(

    <div style={{display:"flex",gap:20,margin:"20px 0"}}>

      <div>Total Patients: {stats.totalPatients}</div>

      <div>Recovery Rate:
        {Math.round(stats.recovery[0].value/stats.totalPatients*100)}%
      </div>

    </div>

  )
}