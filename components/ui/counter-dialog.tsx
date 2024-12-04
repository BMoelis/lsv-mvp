"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface CounterDialogProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  request: {
    id: string
    originalSong: string
    originalArtist: string
    newSong: string
    status: string
    distributionType: string
    usageType: string
    analysis: {
      usageDescription: string
      artistBackground: string
      recommendation: string
      systemRecommendation: string
    }
  }
}

export function CounterDialog({ isOpen, setIsOpen, request }: CounterDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [counterOffer, setCounterOffer] = useState("")
  const { toast } = useToast()

  const handleCounter = async () => {
    if (!counterOffer) {
      toast({
        title: "Error",
        description: "Please enter a counter offer",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/submissions/${request.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'counter',
          id: request.id,
          counterOffer
        })
      })

      if (!response.ok) throw new Error('Counter offer failed')

      toast({
        title: "Success",
        description: "Counter offer sent successfully",
      })
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send counter offer",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Counter Offer</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <h3 className="font-medium mb-2">Request Details</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Original Song:</span> {request.originalSong}</p>
              <p><span className="font-medium">Original Artist:</span> {request.originalArtist}</p>
              <p><span className="font-medium">New Song:</span> {request.newSong}</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-blue-50">
            <h3 className="font-medium mb-2">System Recommendation</h3>
            <p className="text-sm font-semibold text-blue-900">
              {request.analysis.systemRecommendation}
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Counter Offer Percentage</label>
            <Input
              type="number"
              value={counterOffer}
              onChange={(e) => setCounterOffer(e.target.value)}
              placeholder="Enter percentage (e.g., 25)"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCounter} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Counter Offer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}