import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    console.log('Received messages:', messages)

    const response = await perplexity.chat.completions.create({
      model: 'pplx-7b-online',
      stream: true,
      messages: messages,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error('Chat API Error:', error)
    return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
