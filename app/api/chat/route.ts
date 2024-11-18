import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
})

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const response = await perplexity.chat.completions.create({
      model: 'pplx-7b-online',
      messages,
      temperature: 0.7,
      stream: true,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    console.error('Error in chat route:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
