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
      infoBg: "bg-[#484747]",
      nameText: "text-white",
      qualText: "text-white",
    },
    platinum: {
      infoBg: "bg-[#392D22]",
      nameText: "text-yellow-400",
      qualText: "text-white",
    },
    gold: {
      infoBg: "bg-yellow-400",
      nameText: "text-black",
      qualText: "text-black",
    },
    silver: {
      infoBg: "bg-black",
      nameText: "text-yellow-400",
      qualText: "text-white",
    },
  };

  const colors = colorSchemes[cardStyle];

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full min-h-[500px] max-w-sm w-full hover:shadow-xl transition-shadow">
      {/* Trainer Image */}
      <div className="relative w-full h-64">
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
      <div className={`${colors.infoBg} px-6 py-6 flex flex-col flex-1 `}>
        {/* Trainer Name */}
        <h3 className={`${colors.nameText} text-2xl font-extrabold uppercase tracking-wide mb-8 justify-center flex`}>
          {name}
        </h3>

        {/* Qualifications */}
        <div className={`${colors.qualText} space-y-2 text-lg`}>
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
