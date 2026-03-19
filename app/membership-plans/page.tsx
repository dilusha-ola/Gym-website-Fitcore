import MembershipPlanCard from "../components/MembershipPlanCard";

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
      <section className="px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-black mb-12 tracking-wide uppercase">
          Membership Plans
        </h1>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {membershipPlans.map((plan) => (
            <MembershipPlanCard
              key={plan.planName}
              planName={plan.planName}
              planType={plan.planType}
              pricing={plan.pricing}
              monthlyPrice={plan.monthlyPrice}
              features={plan.features}
            />
          ))}
        </div>
      </section>
    </main>
  );
}