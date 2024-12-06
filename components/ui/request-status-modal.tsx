"use client"

import { X, MessageSquare } from 'lucide-react'
import { format } from "date-fns"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface RequestUpdate {
    type: "System" | "Admin"
    message: string
    status: string
    timestamp: Date
}

interface RequestDetails {
    id: string
    originalSong: string
    originalArtist: string
    newSong: string
    newArtist: string
    usageType: string
    distributionType: string
    status: "pending" | "approved" | "rejected"
    email: string
    date: Date
    notes?: string
    updates: RequestUpdate[]
}

interface RequestStatusModalProps {
    isOpen: boolean
    onClose: () => void
    request: RequestDetails | null
}

export function RequestStatusModal({ isOpen, onClose, request }: RequestStatusModalProps) {
    if (!request) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Request Status</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Request Information</h3>
                        <div className="grid grid-cols-2 gap-y-4">
                            <div className="font-medium">Original Song</div>
                            <div>{request.originalSong}</div>
                            <div className="font-medium">Original Artist</div>
                            <div>{request.originalArtist}</div>
                            <div className="font-medium">New Song</div>
                            <div>{request.newSong}</div>
                            <div className="font-medium">New Artist</div>
                            <div>{request.newArtist}</div>
                            <div className="font-medium">Usage Type</div>
                            <div>{request.usageType}</div>
                            <div className="font-medium">Distribution</div>
                            <div>{request.distributionType}</div>
                            <div className="font-medium">Email</div>
                            <div>{request.email}</div>
                            <div className="font-medium">Date</div>
                            <div>{format(request.date, "MM/dd/yyyy")}</div>
                            <div className="font-medium">Status</div>
                            <div>
                                <Badge
                                    variant={
                                        request.status === "approved"
                                            ? "success"
                                            : request.status === "rejected"
                                                ? "destructive"
                                                : request.status === "pending"
                                                    ? "warning"
                                                    : "default"
                                    }
                                >
                                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {request.notes && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                {request.notes}
                            </div>
                        </div>
                    )}

                    <Separator />

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="h-5 w-5" />
                            <h3 className="text-lg font-semibold">Updates</h3>
                        </div>
                        <div className="space-y-4">
                            {request.updates.map((update, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium">{update.type}</div>
                                        <div className="text-sm text-gray-500">
                                            {format(update.timestamp, "MM/dd/yyyy")}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p>{update.message}</p>
                                        <p className="text-blue-500 mt-2">Status: {update.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}