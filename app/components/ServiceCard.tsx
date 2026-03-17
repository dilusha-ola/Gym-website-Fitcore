import Image from "next/image";

interface ServiceCardProps {
  path: string;
  title: string;
  description: string;
}

export default function ServiceCard({ path, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
      {/* Card Image */}
      <div className="relative w-full h-52">
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
      <div className="bg-amber-400 px-5 py-4 flex flex-col gap-2 flex-1">
        <h3 className="text-black font-extrabold text-xl uppercase">{title}</h3>
        <p className="text-black text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
