"use client";

import { useRef, ReactNode } from "react";

interface ScrollableCardsContainerProps {
  children: ReactNode;
}

export default function ScrollableCardsContainer({
  children,
}: ScrollableCardsContainerProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8">
      <div className="relative w-full">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400 dark:bg-amber-600 hover:bg-amber-300 dark:hover:bg-amber-700 text-black dark:text-white rounded-full p-2 sm:p-3 transition-colors duration-300 shadow-lg"
          aria-label="Scroll left"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-400 dark:bg-amber-600 hover:bg-amber-300 dark:hover:bg-amber-700 text-black dark:text-white rounded-full p-2 sm:p-3 transition-colors duration-300 shadow-lg"
          aria-label="Scroll right"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className="flex justify-center">
          <div
            ref={scrollContainer}
            className="overflow-x-auto pb-4 max-w-full md:max-w-[1700px] w-full scroll-smooth"
          >
            {children}
          </div>
        </div>
      </div>

      {/* Scroll Hint Icon */}
      <div className="text-gray-400 dark:text-gray-500 text-center transition-colors duration-300">
        <span className="text-xs sm:text-sm md:text-base flex items-center gap-2 justify-center">
          Use arrows or scroll to see more →
        </span>
      </div>
    </div>
  );
}
