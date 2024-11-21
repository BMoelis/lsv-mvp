"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function AdminCommentsDialog({ 
  isOpen, 
  setIsOpen, 
  requestId 
}: { 
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  requestId: string 
}) {
  const [newComment, setNewComment] = useState("")
  const [status, setStatus] = useState("pending")

  const handleSubmit = () => {
    // TODO: Implement comment submission and status update
    console.log("New comment:", newComment)
    console.log("Status updated to:", status)
    setNewComment("")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Comments</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="font-medium">System</span>
              <span className="text-sm text-gray-500">11/21/2024</span>
            </div>
            <p className="text-gray-700">Request received and under review</p>
            <span className="text-sm text-blue-600 mt-2 block">
              Status: {status}
            </span>
          </div>

          <div className="space-y-4">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Update status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button 
              className="w-full"
              onClick={handleSubmit}
            >
              Add Comment & Update Status
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
