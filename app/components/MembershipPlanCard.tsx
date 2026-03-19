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
      headerBg: "bg-[#392D22]",
      titleBg: "bg-[#484747]",
      titleText: "text-yellow-400",
      bodyBg: "bg-[#484747]",
      bodyText: "text-white",
      buttonBg: "bg-[#392D22] hover:bg-[#4A3A2E]",
      buttonText: "text-yellow-400",
    },
    platinum: {
      headerBg: "bg-black",
      titleBg: "bg-[#392D22]",
      titleText: "text-yellow-400",
      bodyBg: "bg-[#392D22]",
      bodyText: "text-white",
      buttonBg: "bg-black hover:bg-gray-900",
      buttonText: "text-yellow-400",
    },
    gold: {
      headerBg: "bg-yellow-400",
      titleBg: "bg-black",
      titleText: "text-yellow-400",
      bodyBg: "bg-black",
      bodyText: "text-white",
      buttonBg: "bg-yellow-400 hover:bg-yellow-300",
      buttonText: "text-black",
    },
    silver: {
      headerBg: "bg-[#484747]",
      titleBg: "bg-black",
      titleText: "text-yellow-400",
      bodyBg: "bg-black",
      bodyText: "text-white",
      buttonBg: "bg-[#484747] hover:bg-[#555555]",
      buttonText: "text-yellow-400",
    },
  };

  const colors = colorSchemes[planType];

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full min-h-[700px] max-w-sm w-full">
      {/* Header with Dumbbell Icon */}
      <div className={`${colors.headerBg} px-6 py-8 flex justify-center`}>
        {planType === "gold" ? (
          <span className="text-7xl">🏋️</span>
        ) : (
          <span className="text-7xl">🏋️</span>
        )}
      </div>

      {/* Plan Name Section */}
      <div className={`${colors.titleBg} px-6 py-6 text-center`}>
        <h3 className={`text-3xl font-extrabold ${colors.titleText} uppercase tracking-wide`}>
          {planName}
        </h3>
      </div>

      {/* Body Content */}
      <div className={`${colors.bodyBg} px-6 py-6 flex-1 flex flex-col`}>
        {/* Pricing Section */}
        <div className={`${colors.bodyText} space-y-2 text-lg mb-4`}>
          <div className="flex justify-between">
            <span>Gents</span>
            <span className="font-semibold">Annual Rs. {pricing.gents.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Ladies</span>
            <span className="font-semibold">Annual Rs. {pricing.ladies.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Couple</span>
            <span className="font-semibold">Annual Rs. {pricing.couple.toLocaleString()}</span>
          </div>
        </div>

        {/* Monthly Membership */}
        <div className={`${colors.bodyText} text-lg mb-4 pb-4 border-b border-opacity-20 border-white`}>
          <div className="flex justify-between">
            <span>Gym Membership (1 Month):</span>
            <span className="font-semibold">Rs. {monthlyPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Features List */}
        <div className={`${colors.bodyText} space-y-1 text-xl flex-1`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select Plan Button */}
      <div className={`${colors.bodyBg} px-6 py-6`}>
        <button
          className={`${colors.buttonBg} ${colors.buttonText} w-full font-extrabold text-lg py-3 rounded-full transition-colors uppercase tracking-wide`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}
