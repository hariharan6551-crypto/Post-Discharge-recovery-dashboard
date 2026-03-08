export default function Filters(){

  return(
    <div style={{
      marginTop:"20px",
      display:"flex",
      gap:"15px"
    }}>

      <select>
        <option>All Patients</option>
        <option>High Risk</option>
        <option>Recovered</option>
      </select>

      <select>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
      </select>

      <button>Apply</button>

    </div>
  )
}