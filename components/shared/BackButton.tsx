"use client"

import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <button
      type="button"
      onClick={() => history.back()}
      className="mt-8 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mx-auto"
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      Go back to previous page
    </button>
  )
}
