import TrainerCard from "../components/TrainerCard";
import ScrollableCardsContainer from "../components/ScrollableCardsContainer";

const trainers = [
  {
    name: "Ayesh Ranasinghe",
    qualifications: [
      "Physical Fitness Trainer (NVQ Level 4)",
      "Physical Fitness Instructor",
      "(National Institute Of Sports Science)",
    ],
    imagePath: "/Personal-training.jpg",
    cardStyle: "diamond" as const,
  },
  {
    name: "Ayesh Ranasinghe",
    qualifications: [
      "Physical Fitness Trainer (NVQ Level 4)",
      "Physical Fitness Instructor",
      "(National Institute Of Sports Science)",
    ],
    imagePath: "/Personal-training.jpg",
    cardStyle: "platinum" as const,
  },
  {
    name: "Ayesh Ranasinghe",
    qualifications: [
      "Physical Fitness Trainer (NVQ Level 4)",
      "Physical Fitness Instructor",
      "(National Institute Of Sports Science)",
    ],
    imagePath: "/Personal-training.jpg",
    cardStyle: "gold" as const,
  },
  {
    name: "Ayesh Ranasinghe",
    qualifications: [
      "Physical Fitness Trainer (NVQ Level 4)",
      "Physical Fitness Instructor",
      "(National Institute Of Sports Science)",
    ],
    imagePath: "/Personal-training.jpg",
    cardStyle: "silver" as const,
  },
];

export default function Trainers() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-black mb-6 sm:mb-8 md:mb-12 tracking-wide uppercase">
          Our Trainers
        </h1>

        <ScrollableCardsContainer>
          <div className="flex gap-6 justify-center px-6 min-w-min">
            {trainers.map((trainer, index) => (
              <div key={index} className="flex-shrink-0">
                <TrainerCard
                  name={trainer.name}
                  qualifications={trainer.qualifications}
                  imagePath={trainer.imagePath}
                  cardStyle={trainer.cardStyle}
                />
              </div>
            ))}
          </div>
        </ScrollableCardsContainer>
      </section>
    </main>
  );
}
