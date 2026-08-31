export type NavTab = 'home' | 'features' | 'pricing';

export interface ModuleItem {
  id: number;
  name: string;
  subs: string;
  platform: string;
  color: string; // Background tint color
  iconColor: string;
  iconName: string;
  badge?: string;
  description: string;
  stats: {
    label: string;
    value: string;
    change?: string;
    isPositive?: boolean;
  }[];
  keyFeatures: string[];
  mockData: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      primary: string;
      secondary: string;
      status: string;
      statusColor: string;
      metric: string;
    }[];
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  bulletPoints: string[];
  metricHighlight: string;
}
