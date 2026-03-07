import { NextResponse } from "next/server"

let dataset:any[] = []

export async function POST(req: Request) {

  const form = await req.formData()
  const file:any = form.get("file")

  const text = await file.text()

  const rows = text.split("\n").slice(1)

  dataset = rows.map(r=>{
    const c = r.split(",")

    return {
      gender:c[1],
      recovery:c[2],
      visitDate:c[3]
    }
  })

  globalThis.dataset = dataset

  return NextResponse.json({rows:dataset.length})
}