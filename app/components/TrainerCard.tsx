import Image from "next/image";

interface TrainerCardProps {
  name: string;
  qualifications: string[];
  imagePath: string;
  cardStyle?: "diamond" | "platinum" | "gold" | "silver";
}

export default function TrainerCard({
  name,
  qualifications,
  imagePath,
  cardStyle = "diamond",
}: TrainerCardProps) {
  // Define color schemes for each card style - matching MembershipPlanCard colors
  const colorSchemes = {
    diamond: {
      infoBg: "bg-[#484747] dark:bg-gray-700 transition-colors duration-300",
      nameText: "text-white dark:text-white",
      qualText: "text-white dark:text-gray-100",
    },
    platinum: {
      infoBg: "bg-[#392D22] dark:bg-gray-800 transition-colors duration-300",
      nameText: "text-yellow-400 dark:text-amber-500",
      qualText: "text-white dark:text-gray-100",
    },
    gold: {
      infoBg: "bg-yellow-400 dark:bg-amber-700 transition-colors duration-300",
      nameText: "text-black dark:text-white",
      qualText: "text-black dark:text-white",
    },
    silver: {
      infoBg: "bg-black dark:bg-gray-900 transition-colors duration-300",
      nameText: "text-yellow-400 dark:text-amber-500",
      qualText: "text-white dark:text-gray-100",
    },
  };

  const colors = colorSchemes[cardStyle];

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col h-full min-h-[450px] sm:min-h-[500px] max-w-sm w-full mx-auto sm:mx-0 hover:shadow-xl transition-shadow">
      {/* Trainer Image */}
      <div className="relative w-full h-40 sm:h-52 md:h-64">
        <Image
          src={imagePath}
          alt={name}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Info Section */}
      <div className={`${colors.infoBg} px-4 sm:px-6 py-4 sm:py-6 flex flex-col flex-1`}>
        {/* Trainer Name */}
        <h3 className={`${colors.nameText} text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide mb-4 sm:mb-8 justify-center flex`}>
          {name}
        </h3>

        {/* Qualifications */}
        <div className={`${colors.qualText} space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base`}>
          {qualifications.map((qual, index) => (
            <div key={index} className="leading-relaxed">
              <p>{qual}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
