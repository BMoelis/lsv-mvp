"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface ActionsDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  request: {
    id: string;
    originalSong: string;
    originalArtist: string;
    newSong: string;
    status: string;
    distributionType: string;
    usageType: string;
    analysis: {
      usageDescription: string;
      artistBackground: string;
      recommendation: string;
      systemRecommendation: string;
    };
  };
}

export function ActionsDialog({ isOpen, setIsOpen, request }: ActionsDialogProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCountering, setIsCountering] = useState(false);
  const [counterOffer, setCounterOffer] = useState("");
  const { toast } = useToast();

  const handleAction = async (action: string) => {
    if (action === 'counter') {
      setIsCountering(true);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/submissions/${request.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: action,
          id: request.id,
          counterOffer: action === 'counter' ? counterOffer : undefined
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
          <DialogTitle>{isCountering ? "Counter Offer" : "Request Details"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {!isCountering ? (
            <>
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Current Request</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Original Song:</span> {request.originalSong}</p>
                  <p><span className="font-medium">Original Artist:</span> {request.originalArtist}</p>
                  <p><span className="font-medium">New Song:</span> {request.newSong}</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <h3 className="font-medium mb-2">System Recommendation</h3>
                <p className="text-sm font-semibold text-blue-900">
                  {request.distributionType === "majorLabel"
                    ? "50% copyright interest in the new work"
                    : "22.5% copyright interest in the new work with a 20% floor"}
                </p>
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
                  variant="outline"
                  onClick={() => handleAction('counter')}
                  disabled={isLoading}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Counter
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
            </>
          ) : (
            <>
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Counter Offer Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Current Recommendation</label>
                    <p className="text-sm mt-1">
                      {request.distributionType === "majorLabel"
                        ? "50% copyright interest in the new work"
                        : "22.5% copyright interest in the new work with a 20% floor"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Your Counter Offer (%)</label>
                    <Input
                      type="number"
                      value={counterOffer}
                      onChange={(e) => setCounterOffer(e.target.value)}
                      placeholder="Enter percentage"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCountering(false)}>
                  Back
                </Button>
                <Button 
                  onClick={() => handleAction('counter')}
                  disabled={!counterOffer || isLoading}
                >
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Send Counter Offer
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}