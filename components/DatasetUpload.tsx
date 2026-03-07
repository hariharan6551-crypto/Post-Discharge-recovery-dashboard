"use client"

import { uploadDataset } from "../lib/api"

export default function DatasetUpload(){

  const upload = async (e:any)=>{

    const file = e.target.files[0]

    const res = await uploadDataset(file)

    alert("Uploaded rows: "+res.rows)
  }

  return <input type="file" onChange={upload}/>
}