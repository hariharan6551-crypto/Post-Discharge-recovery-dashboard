import Papa from "papaparse"

export function parseCSV(file){

 return new Promise((resolve)=>{

  Papa.parse(file,{
   header:true,
   complete:(result)=>resolve(result.data)
  })

 })

}