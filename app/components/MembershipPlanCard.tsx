interface MembershipPlanCardProps {
  planName: string;
  planType: "diamond" | "platinum" | "gold" | "silver";
  pricing: {
    gents: number;
    ladies: number;
    couple: number;
  };
  monthlyPrice: number;
  features: string[];
}

export default function MembershipPlanCard({
  planName,
  planType,
  pricing,
  monthlyPrice,
  features,
}: MembershipPlanCardProps) {
  // Define color schemes for each plan type
  const colorSchemes = {
    diamond: {
      header: "bg-gray-700",
      title: "text-amber-400",
      button: "bg-amber-600 hover:bg-amber-700",
      card: "bg-gray-600",
    },
    platinum: {
      header: "bg-black",
      title: "text-amber-400",
      button: "bg-amber-400 hover:bg-amber-300 text-black",
      card: "bg-gray-900",
    },
    gold: {
      header: "bg-amber-400",
      title: "text-black",
      button: "bg-amber-400 hover:bg-amber-300 text-black",
      card: "bg-black",
    },
    silver: {
      header: "bg-gray-700",
      title: "text-amber-400",
      button: "bg-amber-600 hover:bg-amber-700",
      card: "bg-gray-800",
    },
  };

  const colors = colorSchemes[planType];

  return (
    <div
      className={`${colors.card} rounded-2xl overflow-hidden shadow-lg flex flex-col h-full max-w-sm w-full`}
    >
      {/* Header with Dumbbell Icon */}
      <div className={`${colors.header} px-6 py-8 flex justify-center`}>
        <span className="text-4xl">🏋️</span>
      </div>

      {/* Plan Name */}
      <div className={`px-6 py-4 text-center border-b border-gray-600`}>
        <h3 className={`text-3xl font-extrabold ${colors.title} uppercase tracking-wide`}>
          {planName}
        </h3>
      </div>

      {/* Pricing Section */}
      <div className="px-6 py-6 text-gray-300 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Gents</span>
          <span className="font-semibold">Annual Rs. {pricing.gents.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Ladies</span>
          <span className="font-semibold">Annual Rs. {pricing.ladies.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Couple</span>
          <span className="font-semibold">Annual Rs. {pricing.couple.toLocaleString()}</span>
        </div>
      </div>

      {/* Monthly Membership */}
      <div className="px-6 py-4 border-t border-gray-600 text-gray-300 text-sm">
        <div className="flex justify-between mb-2">
          <span>Gym Membership (1 Month):</span>
          <span className="font-semibold">Rs. {monthlyPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Features List */}
      <div className="px-6 py-4 border-t border-gray-600 text-gray-300 space-y-2 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="text-sm">
            <span>• {feature}</span>
          </div>
        ))}
      </div>

      {/* Select Plan Button */}
      <div className="px-6 py-6 border-t border-gray-600">
        <button
          className={`${colors.button} w-full font-extrabold text-lg py-3 rounded-full transition-colors uppercase tracking-wide`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}
