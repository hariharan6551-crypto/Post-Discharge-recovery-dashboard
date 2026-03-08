import OpenAI from "openai"

export async function POST(req:Request){

 const {question,data} = await req.json()

 const openai = new OpenAI({
   apiKey: process.env.OPENAI_KEY
 })

 const response = await openai.chat.completions.create({
   model:"gpt-4o-mini",
   messages:[
     {
      role:"system",
      content:"You are a healthcare data assistant"
     },
     {
      role:"user",
      content:`Dataset:${JSON.stringify(data)} Question:${question}`
     }
   ]
 })

 return Response.json(response.choices[0].message)
}