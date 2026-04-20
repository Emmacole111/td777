import Link from "next/link"
import { Download } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

interface DownloadButtonProps {
  variant?: "primary" | "accent"
  size?: "sm" | "md" | "lg"
  label?: string
  className?: string
}

export function DownloadButton({
  variant = "accent",
  size = "md",
  label = "Download TD777 APK Free",
  className = "",
}: DownloadButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    primary: "btn-primary",
    accent: "btn-accent",
  }

  return (
    <Link
      href={SITE_CONFIG.apkDownloadUrl}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={`${label} - Android APK`}
    >
      <Download className="w-5 h-5" aria-hidden="true" />
      {label}
    </Link>
  )
}
