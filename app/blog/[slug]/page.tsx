import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, Share2, ChevronRight } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { SchemaMarkup } from "@/components/shared/SchemaMarkup"
import { BlogCard } from "@/components/blog/BlogCard"
import {
  blogData,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-data"
import { getArticleSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/constants"

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: `${SITE_CONFIG.domain}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_CONFIG.domain}${post.featuredImage}`],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(params.slug, post.category)
  const fallbackRelated = blogData
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)
  const displayRelated = relatedPosts.length > 0 ? relatedPosts : fallbackRelated

  const articleSchema = getArticleSchema({
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    slug: post.slug,
    author: post.author,
  })

  const publishDate = new Date(post.publishedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const updatedDate = new Date(post.updatedAt).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const shareUrl = `${SITE_CONFIG.domain}/blog/${post.slug}`
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${post.title} - ${shareUrl}`)}`
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`

  return (
    <>
      <SchemaMarkup schema={articleSchema} id="article-schema" />
      <div className="pt-20 min-h-screen">
        <div className="container-custom py-8">
          <BreadCrumb
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-8">
            {/* Main Article */}
            <article aria-label={post.title}>
              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-dark-800 border border-dark-700">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                />
              </div>

              {/* Article Header */}
              <header className="mb-8">
                {/* Category */}
                <span className="badge-primary text-xs mb-4 inline-block">
                  {post.category}
                </span>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-6 border-b border-dark-700">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime={post.publishedAt}>{publishDate}</time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-gray-500">
                    Updated: {updatedDate}
                  </span>
                </div>
              </header>

              {/* Article Content */}
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Social Share */}
              <div className="mt-10 pt-8 border-t border-dark-700">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <Share2 className="w-4 h-4" aria-hidden="true" />
                    Share this guide:
                  </span>
                  <a
                    href={whatsappShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 rounded-lg text-sm text-green-400 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    📱 WhatsApp
                  </a>
                  <a
                    href={facebookShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg text-sm text-blue-400 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    👥 Facebook
                  </a>
                  <a
                    href={twitterShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-600/30 rounded-lg text-sm text-sky-400 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    🐦 Twitter
                  </a>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-8 card p-6 flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-primary-gradient rounded-xl text-white text-lg font-bold"
                  aria-hidden="true"
                >
                  TD
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Gaming content writer specializing in Pakistan&apos;s online
                    gaming market. Expert in real money gaming apps, JazzCash
                    payments, and Easypaisa transactions.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Sidebar navigation and links">
              {/* Download CTA */}
              <div className="card p-5 mb-6 bg-primary-gradient border-0">
                <h3 className="text-lg font-bold text-white mb-2">
                  Download TD777 Now
                </h3>
                <p className="text-sm text-blue-100 mb-4">
                  Get Rs111 free bonus on registration. No deposit needed!
                </p>
                <Link
                  href={SITE_CONFIG.apkDownloadUrl}
                  className="btn-accent w-full justify-center text-sm py-3"
                  aria-label="Download TD777 APK for Android"
                >
                  Download APK Free
                </Link>
              </div>

              {/* Quick Links */}
              <div className="card p-5 mb-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Quick Guides
                </h3>
                <ul className="space-y-2">
                  {[
                    {
                      label: "How to Download TD777",
                      href: "/how-to-download",
                    },
                    { label: "How to Register", href: "/how-to-register" },
                    { label: "How to Deposit", href: "/how-to-deposit" },
                    { label: "How to Withdraw", href: "/how-to-withdraw" },
                    { label: "TD777 Bonus Guide", href: "/td777-bonus" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-150"
                      >
                        <ChevronRight
                          className="w-3 h-3 text-primary-500"
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts Preview */}
              <div className="card p-5">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  More Guides
                </h3>
                <ul className="space-y-3">
                  {displayRelated.slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-150 line-clamp-2"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Related Posts Section */}
          {displayRelated.length > 0 && (
            <section className="mt-16" aria-labelledby="related-posts-heading">
              <h2
                id="related-posts-heading"
                className="text-2xl font-bold text-white mb-8"
              >
                Related Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayRelated.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
