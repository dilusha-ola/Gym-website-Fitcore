import Image from "next/image";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    path: "/Personal-training.jpg",
    title: "Personal Training",
    description:
      "One-on-one sessions with certified trainers tailored to your specific fitness goals and needs.",
  },
  {
    path: "/group-class.jpg",
    title: "Group Classes",
    description:
      "Energetic group sessions including Yoga, HIIT, Zumba and more for all fitness levels.",
  },
  {
    path: "/diet-plan.jpg",
    title: "Diet Plans",
    description:
      "Personalized meal planning and nutrition guidance to complement your fitness journey.",
  },
];

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

      {/* Diagonal Section Divider */}
      <section className="bg-zinc-100 pt-16">
        <div className="relative w-full h-24 bg-zinc-100 overflow-hidden">
          {/* Left black wedge */}
          <div
            className="absolute inset-0 bg-black"
            style={{ clipPath: "polygon(0 0, 54% 100%, 0 100%)" }}
          />
          {/* Right golden yellow wedge */}
          <div
            className="absolute inset-0 bg-amber-400"
            style={{ clipPath: "polygon(46% 0, 100% 0, 100% 100%)" }}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-zinc-100 py-20 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-200 rounded-3xl px-12 py-14 text-center shadow-lg">
          <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide mb-4">
            About Us
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-zinc-700 text-2xl leading-relaxed">
            FitCore Gym is dedicated to helping individuals of all fitness levels
            reach their full potential. Our state-of-the-art facility, expert trainers
            and diverse class offerings provide the perfect environment to
            achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide text-center mb-4">
            Services
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                path={service.path}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
