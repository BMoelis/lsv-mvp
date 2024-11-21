"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"

interface RequestAction {
  id: string
  status: string
  details: string
  requiredActions?: string[]
  nextSteps?: string[]
  timestamp: Date
}

export function ActionsDialog({ 
  isOpen, 
  setIsOpen, 
  request 
}: { 
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  request: {
    id: string
    originalSong: string
    originalArtist: string
    newSong: string
    status: string
  }
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <h3 className="font-medium mb-2">Sample Information</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Original Song:</span> {request.originalSong}</p>
              <p><span className="font-medium">Original Artist:</span> {request.originalArtist}</p>
              <p><span className="font-medium">New Song:</span> {request.newSong}</p>
              <p><span className="font-medium">Status:</span> {request.status}</p>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50">
            <h3 className="font-medium mb-2">Required Actions</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              {request.status === 'pending' && (
                <li>Awaiting initial review</li>
              )}
              {request.status === 'approved' && (
                <li>No further actions required</li>
              )}
              {request.status === 'rejected' && (
                <li>Please review rejection reasons in comments</li>
              )}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
