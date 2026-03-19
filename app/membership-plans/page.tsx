import MembershipPlanCard from "../components/MembershipPlanCard";
import ScrollableCardsContainer from "../components/ScrollableCardsContainer";

const membershipPlans = [
  {
    planName: "Diamond",
    planType: "diamond" as const,
    pricing: {
      gents: 65000,
      ladies: 60000,
      couple: 90000,
    },
    monthlyPrice: 25000,
    features: [
      "Full Time Personal Trainer",
      "Group Fitness Classes",
      "Daily Access",
      "Diet Plan",
    ],
  },
  {
    planName: "Platinum",
    planType: "platinum" as const,
    pricing: {
      gents: 65000,
      ladies: 60000,
      couple: 90000,
    },
    monthlyPrice: 15000,
    features: [
      "Group Fitness Classes",
      "Daily Access",
      "Workout Plan",
      "Diet Plan",
    ],
  },
  {
    planName: "Gold",
    planType: "gold" as const,
    pricing: {
      gents: 60000,
      ladies: 50000,
      couple: 80000,
    },
    monthlyPrice: 10000,
    features: ["Daily Access", "Workout Plan", "Diet Plan"],
  },
  {
    planName: "Silver",
    planType: "silver" as const,
    pricing: {
      gents: 50000,
      ladies: 50000,
      couple: 80000,
    },
    monthlyPrice: 8000,
    features: ["Workout Plan", "Diet Plan"],
  },
];

export default function MembershipPlans() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-black uppercase tracking-wide mb-6 sm:mb-8 md:mb-12">
          Membership Plans
        </h1>

        <ScrollableCardsContainer>
          <div className="flex gap-6 justify-center px-6 min-w-min">
            {membershipPlans.map((plan) => (
              <div key={plan.planName} className="flex-shrink-0">
                <MembershipPlanCard
                  planName={plan.planName}
                  planType={plan.planType}
                  pricing={plan.pricing}
                  monthlyPrice={plan.monthlyPrice}
                  features={plan.features}
                />
              </div>
            ))}
          </div>
        </ScrollableCardsContainer>
      </section>
    </main>
  );
}