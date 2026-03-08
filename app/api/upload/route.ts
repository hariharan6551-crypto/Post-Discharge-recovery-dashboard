import { NextResponse } from "next/server"

export async function POST(req:Request){

 const data = await req.formData()
 const file = data.get("file")

 return NextResponse.json({message:"File uploaded"})
}