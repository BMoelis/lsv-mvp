'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Sample Clearance Assistant</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4 mb-4">
            {messages.map(m => (
              <div key={m.id} className={`p-4 rounded-lg ${m.role === 'assistant' ? 'bg-gray-100' : 'bg-blue-50'}`}>
                {m.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about sample clearance..."
              className="flex-1 p-2 border rounded-md"
            />
            <button 
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
