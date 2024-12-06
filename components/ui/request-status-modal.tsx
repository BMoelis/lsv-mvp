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

                <div className="grid gap-6">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Song Information</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-gray-50 p-4 rounded-lg">
                                <div className="font-medium">Original Song</div>
                                <div>{request.originalSong}</div>
                                <div className="font-medium">Original Artist</div>
                                <div>{request.originalArtist}</div>
                                <div className="font-medium">New Song</div>
                                <div>{request.newSong}</div>
                                <div className="font-medium">New Artist</div>
                                <div>{request.newArtist}</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Usage Details</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-gray-50 p-4 rounded-lg">
                                <div className="font-medium">Usage Type</div>
                                <div>{request.usageType}</div>
                                <div className="font-medium">Distribution</div>
                                <div>{request.distributionType}</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Request Details</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-gray-50 p-4 rounded-lg">
                                <div className="font-medium">Email</div>
                                <div>{request.email}</div>
                                <div className="font-medium">Date</div>
                                <div>{format(request.date, "MM/dd/yyyy")}</div>
                                <div className="font-medium">Status</div>
                                <div className="flex items-center gap-2">
                                    <Badge
                                        variant={
                                            request.status === "approved"
                                                ? "success"
                                                : request.status === "rejected"
                                                    ? "destructive"
                                                    : "warning"
                                        }
                                        className="px-3 py-1 text-sm"
                                    >
                                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                    </Badge>
                                    {request.status === "pending" && (
                                        <span className="text-xs text-gray-500">
                                            Estimated response: 48h
                                        </span>
                                    )}
                                </div>
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

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-gray-600" />
                            <h3 className="text-lg font-semibold">Updates</h3>
                        </div>
                        <div className="space-y-6">
                            {request.updates.map((update, index) => (
                                <div key={index} className="relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="font-medium text-gray-700">{update.type}</div>
                                        <div className="text-sm text-gray-500">
                                            {format(update.timestamp, "MM/dd/yyyy")}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-800">{update.message}</p>
                                        <div className="mt-3 text-sm">
                                            <span className="text-gray-600">Status: </span>
                                            <span className={`font-medium ${update.status.toLowerCase() === "pending" ? "text-yellow-600" :
                                                    update.status.toLowerCase() === "approved" ? "text-green-600" :
                                                        update.status.toLowerCase() === "rejected" ? "text-red-600" :
                                                            "text-blue-600"
                                                }`}>
                                                {update.status}
                                            </span>
                                        </div>
                                    </div>
                                    {index < request.updates.length - 1 && (
                                        <div className="absolute left-4 top-full w-0.5 h-4 bg-gray-200" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}