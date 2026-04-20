import Link from "next/link"
import Image from "next/image"
import { Clock, Calendar, ChevronRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const categoryColors: Record<string, string> = {
    "Download Guide": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Bonus Guide": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Withdrawal Guide": "bg-green-500/20 text-green-300 border-green-500/30",
    Comparison: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Deposit Guide": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  }

  const categoryClass =
    categoryColors[post.category] ||
    "bg-primary-500/20 text-primary-300 border-primary-500/30"

  return (
    <article className="card-hover overflow-hidden flex flex-col h-full group">
      {/* Featured Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/9] overflow-hidden flex-shrink-0 bg-dark-700"
        aria-label={`Read: ${post.title}`}
        tabIndex={-1}
      >
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent group-hover:from-dark-900/70 transition-colors duration-300" />
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <span
            className={`badge border text-xs ${categoryClass}`}
          >
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{publishDate}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-white mb-3 leading-snug flex-1 group-hover:text-primary-300 transition-colors duration-200">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors duration-150 group/link mt-auto"
          aria-label={`Read full article: ${post.title}`}
        >
          Read More
          <ChevronRight
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-150"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  )
}
