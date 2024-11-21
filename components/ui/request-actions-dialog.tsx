"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Eye } from "lucide-react"

interface RequestDetails {
  id: string
  originalSong: string
  originalArtist: string
  newSong: string
  newArtist: string
  usageType: string
  distributionType: string
  status?: string
  _date: string
  email: string
  notes: string
}

export function RequestActionsDialog({ 
  isOpen, 
  setIsOpen, 
  request 
}: { 
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  request: RequestDetails
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <h3 className="font-medium mb-2">Request Information</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Original Song:</span> {request.originalSong}</p>
              <p><span className="font-medium">Original Artist:</span> {request.originalArtist}</p>
              <p><span className="font-medium">New Song:</span> {request.newSong}</p>
              <p><span className="font-medium">New Artist:</span> {request.newArtist}</p>
              <p><span className="font-medium">Usage Type:</span> {request.usageType}</p>
              <p><span className="font-medium">Distribution:</span> {request.distributionType}</p>
              <p><span className="font-medium">Email:</span> {request.email}</p>
              <p><span className="font-medium">Date:</span> {new Date(request._date).toLocaleDateString()}</p>
              <p><span className="font-medium">Status:</span> {request.status || 'New'}</p>
            </div>
          </div>
          
          {request.notes && (
            <div className="p-4 rounded-lg bg-blue-50">
              <h3 className="font-medium mb-2">Additional Notes</h3>
              <p className="text-sm text-gray-700">{request.notes}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
