import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY || '',
  baseURL: 'https://api.perplexity.ai',
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    console.log('Received messages:', messages)

    const response = await perplexity.chat.completions.create({
      model: 'llama-3-small-128k-online',
      messages: messages,
      stream: true,
    })

    console.log('API Response:', response)
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error('Error in chat route:', error)
    return new Response(
      JSON.stringify({ error: 'An error occurred during your request.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
