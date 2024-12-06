"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"

interface Comment {
  id: string
  author: string
  timestamp: Date
  content: string
  type: 'system' | 'admin'
  status?: string
}

export function CommentsDialog({ 
  isOpen, 
  setIsOpen, 
  requestId 
}: { 
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  requestId: string 
}) {
  const comments = [
    {
      id: '1',
      author: 'System',
      timestamp: new Date(),
      content: 'Request received and under review',
      type: 'system',
      status: 'Pending'
    },
    {
      id: '2',
      author: 'Admin',
      timestamp: new Date(),
      content: 'Additional information needed regarding usage context',
      type: 'admin',
      status: 'Awaiting Response'
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Comments</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div 
              key={comment.id} 
              className={`p-4 rounded-lg ${
                comment.type === 'system' ? 'bg-gray-50' : 'bg-blue-50'
              }`}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {comment.timestamp.toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              {comment.status && (
                <span className="text-sm text-blue-600 mt-2 block">
                  Status: {comment.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
