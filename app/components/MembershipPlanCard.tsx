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
      headerBg: "bg-[#392D22] dark:bg-amber-400 transition-colors duration-300",
      titleBg: "bg-[#484747] dark:bg-gray-800 transition-colors duration-300",
      titleText: "text-yellow-400 dark:text-orange-500",
      bodyBg: "bg-[#484747] dark:bg-gray-800 transition-colors duration-300",
      bodyText: "text-white dark:text-white",
      buttonBg: "bg-[#392D22] hover:bg-[#4A3A2E] dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300",
      buttonText: "text-yellow-400 dark:text-white",
    },
    platinum: {
      headerBg: "bg-black dark:bg-amber-400 transition-colors duration-300",
      titleBg: "bg-[#392D22] dark:bg-gray-800 transition-colors duration-300",
      titleText: "text-yellow-400 dark:text-orange-500",
      bodyBg: "bg-[#392D22] dark:bg-gray-800 transition-colors duration-300",
      bodyText: "text-white dark:text-white",
      buttonBg: "bg-black hover:bg-gray-900 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300",
      buttonText: "text-yellow-400 dark:text-white",
    },
    gold: {
      headerBg: "bg-yellow-400 dark:bg-amber-400 transition-colors duration-300",
      titleBg: "bg-black dark:bg-gray-800 transition-colors duration-300",
      titleText: "text-yellow-400 dark:text-orange-500",
      bodyBg: "bg-black dark:bg-gray-800 transition-colors duration-300",
      bodyText: "text-white dark:text-white",
      buttonBg: "bg-yellow-400 hover:bg-yellow-300 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300",
      buttonText: "text-black dark:text-white",
    },
    silver: {
      headerBg: "bg-[#484747] dark:bg-amber-400 transition-colors duration-300",
      titleBg: "bg-black dark:bg-gray-800 transition-colors duration-300",
      titleText: "text-yellow-400 dark:text-orange-500",
      bodyBg: "bg-black dark:bg-gray-800 transition-colors duration-300",
      bodyText: "text-white dark:text-white",
      buttonBg: "bg-[#484747] hover:bg-[#555555] dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors duration-300",
      buttonText: "text-yellow-400 dark:text-white",
    },
  };

  const colors = colorSchemes[planType];

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col h-full min-h-[600px] sm:min-h-[700px] max-w-sm w-full mx-auto sm:mx-0">
      {/* Header with Dumbbell Icon */}
      <div className={`${colors.headerBg} px-4 sm:px-6 py-6 sm:py-8 flex justify-center`}>
        {planType === "gold" ? (
          <span className="text-5xl sm:text-7xl">🏋️</span>
        ) : (
          <span className="text-5xl sm:text-7xl">🏋️</span>
        )}
      </div>

      {/* Plan Name Section */}
      <div className={`${colors.titleBg} px-4 sm:px-6 py-4 sm:py-6 text-center`}>
        <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${colors.titleText} uppercase tracking-wide`}>
          {planName}
        </h3>
      </div>

      {/* Body Content */}
      <div className={`${colors.bodyBg} px-4 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col`}>
        {/* Pricing Section */}
        <div className={`${colors.bodyText} space-y-2 text-xs sm:text-sm md:text-base mb-4`}>
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
        <div className={`${colors.bodyText} text-xs sm:text-sm md:text-base mb-4 pb-4 border-b border-opacity-20 border-white`}>
          <div className="flex justify-between flex-col sm:flex-row gap-1 sm:gap-0">
            <span>Gym Membership (1 Month):</span>
            <span className="font-semibold">Rs. {monthlyPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Features List */}
        <div className={`${colors.bodyText} space-y-1 text-sm sm:text-base md:text-lg flex-1`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select Plan Button */}
      <div className={`${colors.bodyBg} px-4 sm:px-6 py-4 sm:py-6`}>
        <button
          className={`${colors.buttonBg} ${colors.buttonText} w-full font-extrabold text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 rounded-full transition-colors uppercase tracking-wide`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}
