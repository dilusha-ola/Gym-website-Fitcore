import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import ServicesSection from "./components/ServicesSection";

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
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
          <h1 className="text-white font-extrabold uppercase leading-none tracking-tight">
            <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">UNLOCK</span>
            <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">YOUR</span>
            <span className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">POTENTIAL.</span>
          </h1>

          <button className="mt-6 sm:mt-8 md:mt-10 w-fit bg-amber-400 dark:bg-orange-500 hover:bg-amber-300 dark:hover:bg-orange-600 transition-colors text-black dark:text-black font-extrabold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full">
            JOIN TODAY!
          </button>
        </div>
      </section>

      {/* Diagonal Section Divider */}
      <section className="bg-white dark:bg-gray-950 transition-colors duration-300 pt-16 pb-16">
        <div className="relative w-full h-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
          {/* Left black wedge */}
          <div
            className="absolute inset-0 bg-black dark:bg-gray-900 transition-colors duration-300"
            style={{ clipPath: "polygon(0 0, 54% 100%, 0 100%)" }}
          />
          {/* Right golden yellow wedge */}
          <div
            className="absolute inset-0 bg-amber-400 dark:bg-orange-500 transition-colors duration-300"
            style={{ clipPath: "polygon(46% 0, 100% 0, 100% 100%)" }}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white dark:bg-gray-950 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-5xl mx-auto bg-zinc-200 dark:bg-gray-800 rounded-3xl px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 text-center shadow-lg dark:shadow-xl transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white uppercase tracking-wide mb-3 sm:mb-4 md:mb-6 transition-colors duration-300">
            About Us
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-amber-400 dark:bg-amber-600 mx-auto mb-6 sm:mb-8 rounded-full transition-colors duration-300" />
          <p className="text-zinc-700 dark:text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-colors duration-300">
            FitCore Gym is dedicated to helping individuals of all fitness levels
            reach their full potential. Our state-of-the-art facility, expert trainers
            and diverse class offerings provide the perfect environment to
            achieve your fitness goals.
          </p>
        </div>
      </section>

      <ServicesSection services={services} />
    
    {/* Diagonal Section Divider */}
      <section className="bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="relative w-full h-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
          {/* Right golden yellow wedge */}
          <div
            className="absolute inset-0 bg-amber-400 dark:bg-orange-500 transition-colors duration-300"
            style={{ clipPath: "polygon(46% 0, 100% 0, 100% 100%)" }}
          />
          {/* Left black wedge */}
          <div
            className="absolute inset-0 bg-black dark:bg-gray-900 transition-colors duration-300"
            style={{ clipPath: "polygon(0 0, 54% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6">
        <ContactForm />
      </section>
    </main>
  );
}
