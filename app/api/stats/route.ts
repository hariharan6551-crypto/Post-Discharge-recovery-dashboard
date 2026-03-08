import { NextResponse } from "next/server"
import OpenAI from "openai"

let uploadedData: any[] = []

export async function GET() {

  try {

    const total = uploadedData.length

    return NextResponse.json({
      totalRecords: total,
      message: "Stats fetched successfully"
    })

  } catch {

    return NextResponse.json(
      { error: "Failed to get stats" },
      { status: 500 }
    )

  }

}

export async function POST(req: Request) {

  try {

    const { question, data } = await req.json()

    if (data) {
      uploadedData = data
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a healthcare analytics assistant. Analyze the dataset and answer questions clearly."
        },
        {
          role: "user",
          content: `Dataset: ${JSON.stringify(uploadedData).slice(0,4000)} Question: ${question}`
        }
      ]
    })

    return NextResponse.json({
      answer: completion.choices[0].message.content
    })

  } catch (error) {

    return NextResponse.json(
      { error: "AI processing failed" },
      { status: 500 }
    )

  }

}