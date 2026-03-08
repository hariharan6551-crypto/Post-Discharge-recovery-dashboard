export default function Sidebar(){
  return(
    <div style={{
      width:"220px",
      background:"#1f3c5c",
      color:"white",
      padding:"20px",
      minHeight:"100vh"
    }}>
      <h3>Menu</h3>

      <ul style={{listStyle:"none",padding:0}}>
        <li style={{margin:"10px 0"}}>Dashboard</li>
        <li style={{margin:"10px 0"}}>Dataset</li>
        <li style={{margin:"10px 0"}}>AI Assistant</li>
        <li style={{margin:"10px 0"}}>Reports</li>
        <li style={{margin:"10px 0"}}>Settings</li>
      </ul>
    </div>
  )
}