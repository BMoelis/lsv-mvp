import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY || '',
  baseURL: 'https://api.perplexity.ai',
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await perplexity.chat.completions.create({
    model: 'llama-3-small-128k-online',
    stream: true,
    messages: messages,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
