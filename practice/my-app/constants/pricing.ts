type PlanType = "Starter" | "Investor" | "VIP";
type PricingPlan = {
  type: PlanType;
  price: number;
  description: string;
  features: { text: string }[];
  isVIP?: boolean;
};
export const pricingPlans: PricingPlan[] = [
  {
    type: "Starter",
    price: 0,
    description:
      "You're new to investing but want to do it right. Get started for free.",
    features: [
      { text: "Commission-free trading" },
      { text: "Multi-layered encryption" },
      { text: "One tip every day" },
      { text: "Invest up to $1,500 each month" },
    ],
  },
  {
    type: "Investor",
    price: 7,
    description:
      "You've been investing for a while. Invest more and grow your wealth faster.",
    features: [
      { text: "Commission-free trading" },
      { text: "Multi-layered encryption" },
      { text: "One tip every hour" },
      { text: "Invest up to $15,000 each month" },
      { text: "Basic transaction anonymization" },
    ],
  },
  {
    type: "VIP",
    price: 199,
    description:
      "You've got a huge amount of assets but it's not enough. To the moon.",
    features: [
      { text: "Commission-free trading" },
      { text: "Multi-layered encryption" },
      { text: "Real-time tip notifications" },
      { text: "No investment limits" },
      { text: "Advanced transaction anonymization" },
      { text: "Automated tax-loss harvesting" },
    ],
    isVIP: true,
  },
];
