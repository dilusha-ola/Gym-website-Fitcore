import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Landing Image Section */}
      <section className="relative w-full h-screen">
        {/* Background Image - full quality, no downscale */}
        <Image
          src="/Landing image.jpg"
          alt="FitCore Gym Landing"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text + CTA */}
        <div className="absolute inset-0 flex flex-col justify-center px-16 md:px-24 lg:px-32">
          <h1 className="text-white font-extrabold uppercase leading-none tracking-tight">
            <span className="block text-7xl md:text-8xl lg:text-9xl">UNLOCK</span>
            <span className="block text-7xl md:text-8xl lg:text-9xl">YOUR</span>
            <span className="block text-7xl md:text-8xl lg:text-9xl">POTENTIAL.</span>
          </h1>

          <button className="mt-10 w-fit bg-amber-400 hover:bg-amber-300 transition-colors text-black font-extrabold text-xl uppercase tracking-widest px-10 py-4 rounded-full">
            JOIN TODAY!
          </button>
        </div>
      </section>
    </main>
  );
}
