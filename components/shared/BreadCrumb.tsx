import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { SchemaMarkup } from "./SchemaMarkup"
import { getBreadcrumbSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/constants"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadCrumbProps {
  items: BreadcrumbItem[]
}

export function BreadCrumb({ items }: BreadCrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items]
  const schemaItems = allItems.map((item) => ({
    name: item.name,
    href: item.href === "/" ? SITE_CONFIG.domain : `${SITE_CONFIG.domain}${item.href}`,
  }))

  return (
    <>
      <SchemaMarkup schema={getBreadcrumbSchema(schemaItems)} id="breadcrumb-schema" />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center py-4 text-sm"
      >
        <ol className="flex items-center flex-wrap gap-1">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight
                    className="w-4 h-4 text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="text-gray-300 font-medium truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {index === 0 && (
                      <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    )}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-150 flex items-center gap-1"
                  >
                    {index === 0 && (
                      <Home className="w-4 h-4" aria-hidden="true" />
                    )}
                    <span className="truncate max-w-[150px]">{item.name}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
