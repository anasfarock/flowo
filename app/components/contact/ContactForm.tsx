"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-3/5 xl:w-2/3 bg-card-light dark:bg-background-dark/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-text-light dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
        Send Us a Message
      </h2>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-700 rounded-lg">
          <p className="text-green-700 dark:text-green-300 font-medium">
            Thank you! Your message has been sent successfully. We'll get back
            to you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Full Name
            </p>
            <input
              className="form-input py-2 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal"
              name="fullName"
              placeholder="Enter your full name"
              required
              type="text"
            />
          </label>
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Work Email
            </p>
            <input
              className="form-input py-2 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal"
              name="email"
              placeholder="you@company.com"
              required
              type="email"
            />
          </label>
        </div>

        {/* Company and Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Company Name
            </p>
            <input
              className="form-input py-2 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal"
              name="company"
              placeholder="Your Company Inc."
              type="text"
            />
          </label>
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Phone Number (Optional)
            </p>
            <input
              className="form-input py-2 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal leading-normal"
              name="phone"
              placeholder="(123) 456-7890"
              type="tel"
            />
          </label>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Inquiry Type
            </p>
            <select
              className="form-select py-2 flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 h-12 px-4 text-base font-normal leading-normal"
              name="inquiryType"
              defaultValue="Sales Inquiry"
            >
              <option>Sales Inquiry</option>
              <option>Technical Support</option>
              <option>General Question</option>
              <option>Partnership</option>
            </select>
          </label>
        </div>

        {/* Message */}
        <div>
          <label className="flex flex-col">
            <p className="text-text-light dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Message
            </p>
            <textarea
              className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-background-light dark:bg-gray-800 p-4 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base font-normal leading-normal"
              name="message"
              placeholder="Tell us how we can help..."
              required
              rows={5}
            ></textarea>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </div>

        {/* Privacy Policy */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          By submitting this form, you agree to our{" "}
          <Link href="/docs/Legal/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}