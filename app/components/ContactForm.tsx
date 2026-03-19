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
    <div className="max-w-4xl mx-auto bg-zinc-100 rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-10 py-8 sm:py-10 shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-6 sm:mb-8">
        Contact Us
      </h2>

      <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-base sm:text-lg md:text-xl font-semibold" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white border border-zinc-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-base sm:text-lg md:text-xl font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white border border-zinc-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-base sm:text-lg md:text-xl font-semibold" htmlFor="phone">
            Phone (Optional):
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white border border-zinc-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-base sm:text-lg md:text-xl font-semibold" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white border border-zinc-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus.type === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base">
            {submitStatus.message}
          </div>
        )}
        {submitStatus.type === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base">
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-gray-400 transition-colors text-black font-extrabold uppercase tracking-widest py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
