export const APP_NAME = "FindBack";
export const APP_TAGLINE = "Bringing lost things home.";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const NAV_LINKS = [
  { label: "Browse Reports", href: "/browse" },
  { label: "How It Works", href: "/#how-it-works" },
] as const;

export const ITEM_CATEGORIES = [
  { id: "electronics", label: "Electronics", icon: "Smartphone" },
  { id: "wallets-bags", label: "Wallets & Bags", icon: "WalletCards" },
  { id: "keys", label: "Keys", icon: "KeyRound" },
  { id: "documents", label: "Documents", icon: "FileText" },
  { id: "accessories", label: "Accessories", icon: "Watch" },
  { id: "clothing", label: "Clothing", icon: "Shirt" },
  { id: "books", label: "Books", icon: "BookOpen" },
  { id: "pets", label: "Pets", icon: "PawPrint" },
  { id: "other", label: "Other", icon: "PackageSearch" },
] as const;

export const REPORT_STATUS = ["OPEN", "MATCHED", "RESOLVED", "CLOSED"] as const;
export const CLAIM_STATUS = [
  "PENDING",
  "VERIFIED",
  "REJECTED",
  "COMPLETED",
] as const;

export const MATCH_THRESHOLDS = {
  VERY_STRONG: 90,
  STRONG: 75,
  MODERATE: 60,
  WEAK: 40,
} as const;
