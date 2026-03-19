"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-zinc-100 dark:bg-gray-800 rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-10 py-8 sm:py-10 shadow-md transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white text-center mb-6 sm:mb-8 transition-colors duration-300">
        Contact Us
      </h2>

      <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-black dark:text-white text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black dark:text-white text-sm outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600 transition-colors duration-300"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-black dark:text-white text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black dark:text-white text-sm outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600 transition-colors duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-black dark:text-white text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300" htmlFor="phone">
            Phone (Optional):
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black dark:text-white text-sm outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600 transition-colors duration-300"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-black dark:text-white text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white dark:bg-gray-700 border border-zinc-300 dark:border-gray-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black dark:text-white text-sm outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600 resize-none transition-colors duration-300"
            placeholder="Your message..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus.type === "success" && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base transition-colors duration-300">
            {submitStatus.message}
          </div>
        )}
        {submitStatus.type === "error" && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base transition-colors duration-300">
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-400 dark:bg-amber-600 hover:bg-amber-300 dark:hover:bg-amber-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 transition-colors text-black dark:text-white font-extrabold uppercase tracking-widest py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base duration-300"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
