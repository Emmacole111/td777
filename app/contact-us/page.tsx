"use client"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}


export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "Contact Us", href: "/contact-us" }]}
        />

        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="section-label mb-4">Get in Touch</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              Contact TD777 Game Support
            </h1>
            <p className="text-lg text-gray-300">
              Our support team is available{" "}
              <strong className="text-white">24/7</strong> to help you. Fill in
              the form below and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

              {isSubmitted ? (
                <div className="card p-8 text-center">
                  <CheckCircle
                    className="w-16 h-16 text-green-400 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for contacting us. We&apos;ll get back to you
                    within 24 hours. For faster response, contact us on
                    WhatsApp.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card p-6 space-y-5"
                  aria-label="Contact form"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Ahmed Khan"
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.name ? "border-red-500" : "border-dark-600"
                      }`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-required="true"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-red-400"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.email ? "border-red-500" : "border-dark-600"
                      }`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-required="true"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-red-400"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                        errors.subject ? "border-red-500" : "border-dark-600"
                      } ${!formData.subject ? "text-gray-500" : ""}`}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      aria-required="true"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="withdrawal-issue">Withdrawal Issue</option>
                      <option value="deposit-issue">Deposit Issue</option>
                      <option value="bonus-query">Bonus Query</option>
                      <option value="account-issue">Account Issue</option>
                      <option value="technical-issue">Technical Issue</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="mt-1.5 text-xs text-red-400"
                        role="alert"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your issue in detail..."
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-dark-600"
                      }`}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-required="true"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-red-400"
                        role="alert"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
