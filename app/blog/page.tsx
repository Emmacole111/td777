import type { Metadata } from "next"
import { BlogGrid } from "@/components/blog/BlogGrid"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { blogData } from "@/lib/blog-data"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "TD777 Blog – Guides, Tips & Strategies 2026",
  description:
    "Read TD777 Game guides, tutorials, and tips. Learn how to download TD777 APK, claim bonuses, withdraw money, and win more. Updated 2026 guides for Pakistani players.",
  keywords: [
    "td777 blog",
    "td777 guide",
    "td777 tips",
    "td777 download guide",
    "td777 bonus guide",
    "td777 withdrawal guide",
    "td777 kaise khele",
    "td777 earning tips pakistan",
  ],
  slug: "blog",
})

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb items={[{ name: "Blog", href: "/blog" }]} />

        {/* Page Header */}
        <div className="section-header text-left mb-10">
          <span className="section-label">Guides & Tutorials</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3">
            TD777 Game Blog
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Expert guides, tutorials and tips to help Pakistani players get the
            most out of TD777 Game. Learn how to download, earn, and withdraw
            successfully.
          </p>
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={blogData} />

        {/* Pagination placeholder */}
        <nav
          className="flex items-center justify-center gap-2 mt-12"
          aria-label="Blog pagination"
        >
          <button
            type="button"
            disabled
            className="px-4 py-2 rounded-lg bg-dark-800 text-gray-600 text-sm cursor-not-allowed"
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium">
            1
          </span>
          <button
            type="button"
            disabled
            className="px-4 py-2 rounded-lg bg-dark-800 text-gray-600 text-sm cursor-not-allowed"
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}
