"use client";

import { useRef } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  path: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const showScrollButtons = services.length > 5;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="bg-white py-16">
      <div className="px-6">
        <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide text-center mb-4">
          Services
        </h2>
        <div className="w-16 h-1 bg-amber-400 mx-auto mb-12 rounded-full" />
      </div>

      <div className="relative">
        {/* Left Scroll Button - only show if more than 5 services */}
        {showScrollButtons && (
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-amber-400 hover:bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        {/* Right Scroll Button - only show if more than 5 services */}
        {showScrollButtons && (
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-amber-400 hover:bg-amber-300 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        )}

        {/* Services Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
        >
          <div className="flex gap-8 px-6 w-max mx-auto">
            {services.map((service) => (
              <div key={service.title} className="w-80 shrink-0 snap-start">
                <ServiceCard
                  path={service.path}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}