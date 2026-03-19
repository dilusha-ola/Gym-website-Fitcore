import Image from "next/image";

interface ServiceCardProps {
  path: string;
  title: string;
  description: string;
}

export default function ServiceCard({ path, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
      {/* Card Image */}
      <div className="relative w-full h-32 sm:h-40 md:h-52">
        <Image
          src={path}
          alt={title}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="bg-amber-400 dark:bg-amber-600 px-3 sm:px-5 py-3 sm:py-4 flex flex-col gap-1 sm:gap-2 flex-1 transition-colors duration-300">
        <h3 className="text-black dark:text-white font-extrabold text-sm sm:text-base md:text-xl uppercase">{title}</h3>
        <p className="text-black dark:text-white text-xs sm:text-sm md:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
