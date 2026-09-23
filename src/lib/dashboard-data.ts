export const navItems = [
  { label: "Overview", to: "/", icon: "LayoutDashboard" },
  { label: "Email Queue", to: "/email-queue", icon: "Mail" },
  { label: "AI Performance", to: "/ai-performance", icon: "Bot" },
  { label: "Customer Insights", to: "/customer-insights", icon: "MessageCircle" },
  { label: "Service Categories", to: "/service-categories", icon: "Boxes" },
  { label: "SLA & Operations", to: "/sla-operations", icon: "Clock3" },
  { label: "Risk & Compliance", to: "/risk-compliance", icon: "ShieldCheck" },
  { label: "Reports", to: "/reports", icon: "BarChart3" },
  { label: "Settings", to: "/settings", icon: "Settings" },
] as const;

export const volumeData = [
  { day: "Mon", received: 1080, resolved: 790, human: 210 },
  { day: "Tue", received: 1260, resolved: 940, human: 245 },
  { day: "Wed", received: 1520, resolved: 1130, human: 238 },
  { day: "Thu", received: 1460, resolved: 1110, human: 255 },
  { day: "Fri", received: 1690, resolved: 1270, human: 270 },
  { day: "Sat", received: 620, resolved: 470, human: 128 },
  { day: "Sun", received: 796, resolved: 580, human: 140 },
];

export const categories = [
  { name: "Account Related", value: 2148, pct: 25.5, color: "var(--chart-1)" },
  { name: "Debit / Credit Card", value: 1463, pct: 17.4, color: "var(--chart-2)" },
  { name: "Loans & EMI", value: 1089, pct: 12.9, color: "var(--chart-3)" },
  { name: "KYC & Account Opening", value: 842, pct: 10, color: "var(--chart-4)" },
  { name: "Digital Banking", value: 618, pct: 7.3, color: "var(--chart-5)" },
];

export type EmailItem = {
  id: string; received: string; subject: string; customer: string; category: string;
  priority: "High" | "Medium" | "Low"; status: "Escalated" | "Resolved (AI)" | "Open" | "In Review";
  resolution: string; sentiment: string; body: string;
};

export const emails: EmailItem[] = [
  { id: "EM-8421", received: "10:24 AM", subject: "Unauthorized transaction on card", customer: "Riya Mehta", category: "Debit / Credit Card", priority: "High", status: "Escalated", resolution: "2h 14m", sentiment: "Concerned", body: "I noticed a card transaction I do not recognize. Please block further activity and help me dispute it." },
  { id: "EM-8419", received: "09:11 AM", subject: "KYC document update", customer: "Aarav Sharma", category: "KYC", priority: "Medium", status: "Resolved (AI)", resolution: "14m", sentiment: "Neutral", body: "Could you confirm whether my updated address proof has been received?" },
  { id: "EM-8415", received: "Yesterday", subject: "Home loan EMI query", customer: "Neha Kapoor", category: "Loans & EMI", priority: "Medium", status: "Resolved (AI)", resolution: "22m", sentiment: "Neutral", body: "Please explain why this month's EMI amount differs from last month." },
  { id: "EM-8408", received: "Yesterday", subject: "Unable to login to mobile app", customer: "Kabir Singh", category: "Digital Banking", priority: "High", status: "In Review", resolution: "18m", sentiment: "Frustrated", body: "The mobile app keeps showing an authentication error after the latest update." },
  { id: "EM-8401", received: "Mon, 11:45", subject: "Credit card limit increase", customer: "Diya Nair", category: "Debit / Credit Card", priority: "Low", status: "Open", resolution: "12m", sentiment: "Positive", body: "I would like to request an increase to my credit card limit for upcoming travel." },
  { id: "EM-8397", received: "Mon, 09:30", subject: "Savings account interest certificate", customer: "Vikram Patel", category: "Account Related", priority: "Low", status: "Resolved (AI)", resolution: "9m", sentiment: "Neutral", body: "Please share the interest certificate for the previous financial year." },
];
