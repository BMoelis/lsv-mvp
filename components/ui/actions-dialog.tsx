"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface RequestAction {
  id: string
  status: string
  details: string
  requiredActions?: string[]
  nextSteps?: string[]
  timestamp: Date
}

interface ActionsDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  request: {
    id: string;
    originalSong: string;
    originalArtist: string;
    newSong: string;
    status: string;
  };
}

export function ActionsDialog({ isOpen, setIsOpen, request }: ActionsDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleAction = async (action: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/submissions/${request.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: action,
          id: request.id
        })
      });

      if (!response.ok) throw new Error('Action failed');

      toast({
        title: "Success",
        description: `Request ${action}d successfully`,
      });
      setIsOpen(false);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process action",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="flex flex-col gap-2 mt-4">
            <Button
              variant="default"
              onClick={() => handleAction('approve')}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Approve
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleAction('reject')}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
