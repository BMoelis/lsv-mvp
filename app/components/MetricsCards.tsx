'use client'

import { ArrowUpIcon, ArrowDownIcon, ClockIcon } from 'lucide-react'

export default function MetricsCards({ metrics }: { 
  metrics: {
    totalRequests: number,
    totalChange: number,
    pendingReview: number,
    pendingChange: number,
    approved: number,
    approvedChange: number,
    averageTime: number,
    timeComparison: string
  }
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      <div className="bg-white overflow-hidden rounded-lg shadow p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Total Requests</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{metrics.totalRequests}</p>
          </div>
          <div className={`${metrics.totalChange >= 0 ? 'bg-green-100' : 'bg-red-100'} rounded-full p-2`}>
            {metrics.totalChange >= 0 ? 
              <ArrowUpIcon className="w-5 h-5 text-green-600" /> : 
              <ArrowDownIcon className="w-5 h-5 text-red-600" />
            }
          </div>
        </div>
        <p className={`mt-4 text-sm ${metrics.totalChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {`${metrics.totalChange >= 0 ? '+' : ''}${metrics.totalChange}% from last month`}
        </p>
      </div>

      <div className="bg-white overflow-hidden rounded-lg shadow p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Pending Review</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{metrics.pendingReview}</p>
          </div>
          <div className={`${metrics.pendingChange <= 0 ? 'bg-green-100' : 'bg-red-100'} rounded-full p-2`}>
            {metrics.pendingChange <= 0 ? 
              <ArrowDownIcon className="w-5 h-5 text-green-600" /> : 
              <ArrowUpIcon className="w-5 h-5 text-red-600" />
            }
          </div>
        </div>
        <p className={`mt-4 text-sm ${metrics.pendingChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {`${metrics.pendingChange >= 0 ? '+' : ''}${metrics.pendingChange}% from last month`}
        </p>
      </div>

      <div className="bg-white overflow-hidden rounded-lg shadow p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Approved</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{metrics.approved}</p>
          </div>
          <div className={`${metrics.approvedChange >= 0 ? 'bg-green-100' : 'bg-red-100'} rounded-full p-2`}>
            {metrics.approvedChange >= 0 ? 
              <ArrowUpIcon className="w-5 h-5 text-green-600" /> : 
              <ArrowDownIcon className="w-5 h-5 text-red-600" />
            }
          </div>
        </div>
        <p className={`mt-4 text-sm ${metrics.approvedChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {`${metrics.approvedChange >= 0 ? '+' : ''}${metrics.approvedChange}% from last month`}
        </p>
      </div>

      <div className="bg-white overflow-hidden rounded-lg shadow p-5">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">Average Time</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{metrics.averageTime} days</p>
          </div>
          <div className="bg-green-100 rounded-full p-2">
            <ClockIcon className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <p className="mt-4 text-sm text-green-600">{metrics.timeComparison}</p>
      </div>
    </div>
  )
}
