"use client";

export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto bg-zinc-100 rounded-3xl px-10 py-10 shadow-md">
      <h2 className="text-4xl font-extrabold text-black text-center mb-8">
        Contact Us
      </h2>

      <form className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-xl font-semibold " htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-xl font-semibold " htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-xl font-semibold " htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-black text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 transition-colors text-black font-extrabold uppercase tracking-widest py-3 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
