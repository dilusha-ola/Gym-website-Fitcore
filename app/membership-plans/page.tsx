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

        {/* Horizontal Scrolling Cards Container - Centered with 4 visible */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full">
            <div className="flex justify-center">
              <div className="overflow-x-auto pb-4 max-w-[1700px] w-full">
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
              </div>
            </div>
          </div>

          {/* Scroll Hint Icon */}
          <div className="text-gray-400">
            <span className="text-xl flex items-center gap-2">
              Scroll to see more →
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}