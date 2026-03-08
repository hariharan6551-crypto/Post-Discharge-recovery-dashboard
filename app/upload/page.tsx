"use client"
import { useState } from "react"
import Papa from "papaparse"

export default function UploadPage() {
  const [data,setData] = useState([])

  const handleFile = (file:any) => {
    Papa.parse(file,{
      header:true,
      complete:(result)=>{
        setData(result.data)
        localStorage.setItem("dataset",JSON.stringify(result.data))
      }
    })
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Upload Dataset</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e)=>handleFile(e.target.files[0])}
      />
    </div>
  )
}