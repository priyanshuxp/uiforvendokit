import { ModuleItem, PricingPlan, FeatureCategory } from '../types';

export const modulesData: ModuleItem[] = [
  {
    id: 0,
    name: 'Headless Storefront',
    subs: 'Edge CDN • 98ms Speed',
    platform: 'Custom Storefront',
    color: '#eef2ff', // Soft indigo
    iconColor: '#0058be',
    iconName: 'Store',
    badge: 'Edge Deployed',
    description: 'Launch lightning-fast, composable storefronts with zero latency, custom checkout flows, and sub-100ms global response times.',
    stats: [
      { label: 'Avg Page Speed', value: '98/100', change: 'A+ Lighthouse', isPositive: true },
      { label: 'Checkout Conv.', value: '5.24%', change: '+1.4%', isPositive: true },
      { label: 'Live Shoppers', value: '2,840', change: '+34%', isPositive: true },
    ],
    keyFeatures: [
      'Sub-second Edge SSR with Next.js & Remix support',
      'One-click multi-currency & localized pricing',
      'Dynamic upsell, cross-sell & bundle engine',
      'Direct social feed embeds (TikTok & Instagram live sync)',
    ],
    mockData: {
      title: 'Active Storefront Deployments',
      subtitle: 'Global edge regions synchronized in real-time',
      items: [
        { id: 'ST-01', primary: 'Main Global Flagship (v4.2)', secondary: 'Edge CDN • 34 PoPs active', status: 'Optimal (92ms)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '48.2k visits' },
        { id: 'ST-02', primary: 'Creator Exclusive Merch Drop', secondary: 'Flash Sale • Link-in-Bio', status: 'Live Surge', statusColor: 'bg-blue-100 text-blue-700', metric: '14.1k visits' },
        { id: 'ST-03', primary: 'EU & UK Localized Portal', secondary: 'Multi-Currency & VAT Ready', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$32.4k GMV' },
      ],
    },
  },
  {
    id: 1,
    name: 'Creator Splits',
    subs: 'Automated Royalties',
    platform: 'Affiliate Engine',
    color: '#f0fdf4', // Soft mint
    iconColor: '#059669',
    iconName: 'Users',
    badge: 'Auto-Disbursed',
    description: 'Direct-to-bank automated revenue splits and commission payouts for influencers, affiliates, and brand collaborators without third-party app fees.',
    stats: [
      { label: 'Active Affiliates', value: '420', change: '+18.2%', isPositive: true },
      { label: 'Attributed Sales', value: '$84,500', change: '+29.4%', isPositive: true },
      { label: 'Split Payouts', value: 'Instant', change: '0% Delay', isPositive: true },
    ],
    keyFeatures: [
      'Automated multi-party commission splitting on every checkout',
      'Dedicated creator dashboard with custom referral links',
      'Automated 1099/W8-BEN compliance tax reporting',
      'Custom tiered payouts and performance milestone bonuses',
    ],
    mockData: {
      title: 'Live Creator Revenue Ledger',
      subtitle: 'Real-time attribution and instant commission routing',
      items: [
        { id: 'CR-881', primary: 'Elena Rostova (YouTube)', secondary: '15% Rev Share • 420k reach', status: 'Auto-Disbursed', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$4,280 Earned' },
        { id: 'CR-882', primary: 'Kai Tanaka (TikTok Tech)', secondary: '20% Custom Drop Promo', status: 'Settled', statusColor: 'bg-blue-100 text-blue-700', metric: '$7,920 Earned' },
        { id: 'CR-883', primary: 'Apex Fitness Ambassador', secondary: 'Tier 3 Bonus Active', status: 'Disbursing', statusColor: 'bg-amber-100 text-amber-700', metric: '$2,150 Earned' },
      ],
    },
  },
  {
    id: 2,
    name: 'Omnichannel Orders',
    subs: 'Social & B2B Checkout',
    platform: 'Order Engine',
    color: '#fffbeb', // Soft warm amber
    iconColor: '#d97706',
    iconName: 'Receipt',
    badge: '99.9% Success',
    description: 'Centralized order routing engine uniting web storefronts, TikTok Shop, Instagram Checkout, and B2B wholesale in one live ledger.',
    stats: [
      { label: 'Orders Today', value: '542', change: '+22.4%', isPositive: true },
      { label: 'Gross Volume', value: '$68,400', change: '+31.8%', isPositive: true },
      { label: 'Avg Process Time', value: '1.2s', change: '-45%', isPositive: true },
    ],
    keyFeatures: [
      'Unified order stream across 8+ social and web channels',
      'Automated high-risk fraud detection & zero chargeback liability',
      'Real-time tax calculation for 120+ global jurisdictions',
      'Custom webhook triggers and ERP synchronization',
    ],
    mockData: {
      title: 'Live Omnichannel Stream',
      subtitle: 'Synced across connected storefronts & social checkouts',
      items: [
        { id: 'ORD-1092', primary: 'Aura Studio Kit v3 (Matte Black)', secondary: 'Direct Web Checkout • Sarah J.', status: 'Dispatched', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$289.00' },
        { id: 'ORD-1093', primary: 'Creator Wireless Mic Duo', secondary: 'TikTok Shop In-App Purchase', status: 'Fulfilling', statusColor: 'bg-blue-100 text-blue-700', metric: '$199.50' },
        { id: 'ORD-1094', primary: 'B2B Wholesale Pack (50 units)', secondary: 'Invoice #8491 • Net 30 Terms', status: 'Payment Verified', statusColor: 'bg-purple-100 text-purple-700', metric: '$6,450.00' },
      ],
    },
  },
  {
    id: 3,
    name: '3PL & Warehouse',
    subs: 'Multi-Hub Inventory',
    platform: 'Logistics Routing',
    color: '#eff6ff', // Soft sky blue
    iconColor: '#2563eb',
    iconName: 'Package',
    badge: 'Smart Routing',
    description: 'Intelligent multi-location warehouse synchronization that automatically routes each order to the nearest fulfillment hub.',
    stats: [
      { label: 'Tracked SKUs', value: '620', change: 'Multi-Location', isPositive: true },
      { label: 'Fulfill SLA', value: '99.4%', change: '+1.2%', isPositive: true },
      { label: 'Shipping Savings', value: '28%', change: 'Zone-Optimized', isPositive: true },
    ],
    keyFeatures: [
      'Smart closest-warehouse routing to minimize shipping transit and cost',
      'Live barcode scanning and picking/packing mobile app',
      'Automated reorder triggers with manufacturer purchase orders',
      'Direct carrier integrations (FedEx, UPS, DHL, Royal Mail, Australia Post)',
    ],
    mockData: {
      title: 'Multi-Hub Stock & Dispatch',
      subtitle: 'Live inventory balances across regional fulfillment nodes',
      items: [
        { id: 'WH-EAST', primary: 'New Jersey East Hub', secondary: '412 SKUs • 98.6% Capacity', status: 'Active (Fast Ship)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '2,410 Units' },
        { id: 'WH-WEST', primary: 'California West Coast Hub', secondary: '380 SKUs • Zone 1-3 Optimized', status: 'Active (Fast Ship)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '1,890 Units' },
        { id: 'WH-EU', primary: 'Frankfurt European Hub', secondary: '290 SKUs • Cross-Border Duty Free', status: 'Restocked', statusColor: 'bg-blue-100 text-blue-700', metric: '940 Units' },
      ],
    },
  },
  {
    id: 4,
    name: 'Real-Time Telemetry',
    subs: 'Cookieless Attribution',
    platform: 'Analytics Suite',
    color: '#fefce8', // Soft amber/yellow
    iconColor: '#ca8a04',
    iconName: 'BarChart3',
    badge: '100% Granular',
    description: 'Server-side attribution modeling that bypasses ad-blockers and iOS privacy restrictions to reveal your true channel ROI.',
    stats: [
      { label: 'Monthly GMV', value: '$248.6k', change: '+32.4%', isPositive: true },
      { label: 'Blended ROAS', value: '4.92x', change: '+0.8x', isPositive: true },
      { label: 'Repeat Rate', value: '38.4%', change: '+6.2%', isPositive: true },
    ],
    keyFeatures: [
      'Cookieless server-side tracking resistant to browser privacy blocks',
      'Full-funnel cohort retention and customer lifetime value (LTV)',
      'Per-SKU gross margin calculation factoring returns and shipping',
      'Automated daily revenue digests delivered via Slack and email',
    ],
    mockData: {
      title: 'Real-Time Channel ROAS & Volume',
      subtitle: 'First-touch & multi-touch revenue attribution matrix',
      items: [
        { id: 'CH-01', primary: 'TikTok Creator Drop Blitz', secondary: 'ROAS: 5.6x • 8.4k visits', status: 'Top Performer', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$78,400 GMV' },
        { id: 'CH-02', primary: 'Organic YouTube Reviews', secondary: 'ROAS: 7.2x • 4.1k visits', status: 'High Conv', statusColor: 'bg-blue-100 text-blue-700', metric: '$44,200 GMV' },
        { id: 'CH-03', primary: 'Meta Retargeting Engine', secondary: 'ROAS: 3.8x • 12k visits', status: 'Consistent', statusColor: 'bg-purple-100 text-purple-700', metric: '$31,900 GMV' },
      ],
    },
  },
  {
    id: 5,
    name: 'Fraud & Chargebacks',
    subs: '0% Liability Shield',
    platform: 'Security Suite',
    color: '#fdf2f8', // Soft pink
    iconColor: '#db2777',
    iconName: 'ShieldCheck',
    badge: 'AI Shield Active',
    description: 'Machine learning fraud detection with automated chargeback representment and 100% win-rate protection guarantees.',
    stats: [
      { label: 'Fraud Catch Rate', value: '99.98%', change: 'Real-time', isPositive: true },
      { label: 'Disputes Won', value: '94.6%', change: 'Auto-Represent', isPositive: true },
      { label: 'Saved Revenue', value: '$14,280', change: 'This Quarter', isPositive: true },
    ],
    keyFeatures: [
      'Real-time behavioral biometric scoring on checkout',
      'Automated 1-click evidence generation for Stripe and PayPal disputes',
      'Zero liability chargeback insurance options',
      'Granular IP and device fingerprinting blacklist management',
    ],
    mockData: {
      title: 'Shield Protection Telemetry',
      subtitle: 'Suspicious transactions blocked and disputes automatically won',
      items: [
        { id: 'SEC-91', primary: 'Bot Farm Checkout Surge Blocked', secondary: '42 stolen card attempts thwarted', status: 'Blocked (0ms)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$12,400 Protected' },
        { id: 'SEC-92', primary: 'Chargeback Win (Visa Dispute)', secondary: 'Automated proof & delivery signature', status: 'Dispute Won', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$349.00 Recovered' },
        { id: 'SEC-93', primary: 'High-Risk Proxy Verification', secondary: 'Step-up 3D Secure SMS Challenge', status: 'Passed Verified', statusColor: 'bg-blue-100 text-blue-700', metric: '$180.00 Order' },
      ],
    },
  },
  {
    id: 6,
    name: 'Customer CRM',
    subs: '360° Profiles & VIP',
    platform: 'CRM & Loyalty',
    color: '#faf5ff', // Soft lavender
    iconColor: '#9333ea',
    iconName: 'UserCheck',
    badge: 'VIP Retention',
    description: 'Unified customer records aggregating web purchases, social interactions, support history, and custom loyalty point tiers.',
    stats: [
      { label: 'Customer Records', value: '34,200', change: '+14.5%', isPositive: true },
      { label: 'VIP Club Members', value: '2,480', change: '+28%', isPositive: true },
      { label: 'Avg Customer LTV', value: '$385', change: '+19.2%', isPositive: true },
    ],
    keyFeatures: [
      'Unified 360-degree timeline of orders, tickets, and social clicks',
      'Automated VIP tier promotions with custom discount codes',
      'Predictive churn alerts with automated SMS re-engagement flows',
      'Native subscription management with 0% app add-on fee',
    ],
    mockData: {
      title: 'High-Value Customer Segments',
      subtitle: 'Real-time cohort clustering and predictive lifetime value',
      items: [
        { id: 'CRM-01', primary: 'Tier 1 VIP Brand Advocates', secondary: '1,840 members • 5+ orders', status: 'High Retention', statusColor: 'bg-purple-100 text-purple-700', metric: '$890 Avg LTV' },
        { id: 'CRM-02', primary: 'Monthly Merch Subscribers', secondary: '640 active monthly recurring members', status: 'Active (0.8% Churn)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '$14.2k MRR' },
        { id: 'CRM-03', primary: 'At-Risk Winback Cohort', secondary: '420 buyers • 60d inactive', status: 'SMS Flow Active', statusColor: 'bg-amber-100 text-amber-700', metric: '32% Re-engaged' },
      ],
    },
  },
  {
    id: 7,
    name: 'Vendors & 3PLs',
    subs: 'Automated PO Dispatch',
    platform: 'Vendor Portal',
    color: '#f5f3ff', // Soft violet
    iconColor: '#7c3aed',
    iconName: 'Truck',
    badge: '22 Suppliers',
    description: 'Supplier and drop-ship manufacturer coordination with automated purchase orders when inventory hits threshold.',
    stats: [
      { label: 'Connected Vendors', value: '22', change: 'Verified', isPositive: true },
      { label: 'On-Time Fulfillment', value: '98.8%', change: '+2.1%', isPositive: true },
      { label: 'Cost Savings', value: '18.4%', change: 'Bulk POs', isPositive: true },
    ],
    keyFeatures: [
      'Automated purchase order dispatch when stock drops below safety minimums',
      'Vendor SLA tracking with real-time delivery timelines',
      'Direct supplier EDI and CSV upload integrations',
      'Integrated customs duty and international freight tracking',
    ],
    mockData: {
      title: 'Production & Supplier Status',
      subtitle: 'Real-time production runs and replenishment timelines',
      items: [
        { id: 'VND-01', primary: 'Apex Textile & Apparel Mills', secondary: 'Merch Manufacturer • Portugal', status: 'Healthy SLA (3d)', statusColor: 'bg-emerald-100 text-emerald-700', metric: '1,200 Units' },
        { id: 'VND-02', primary: 'Acoustic Labs Hardware', secondary: 'Mic & Hardware • Taiwan', status: 'In Transit (FedEx)', statusColor: 'bg-blue-100 text-blue-700', metric: '600 Units' },
        { id: 'VND-03', primary: 'EcoPack Global Solutions', secondary: '100% Recyclable Packaging • US', status: 'Restocked', statusColor: 'bg-emerald-100 text-emerald-700', metric: '5,000 Boxes' },
      ],
    },
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Growth Store',
    priceMonthly: 29,
    priceAnnual: 24,
    description: 'For growing e-commerce brands wanting headless speed without the Shopify app tax.',
    features: [
      'Unlimited Products & Digital Downloads',
      'Headless Storefront with 98ms Global Edge Speed',
      'Native Creator & Affiliate Split Billing (5 creators)',
      'Multi-Warehouse Inventory (Up to 2 locations)',
      '0% Platform Transaction Fees',
      'Real-Time Analytics & Abandoned Cart Recovery',
    ],
    ctaText: 'Start 14-Day Trial',
  },
  {
    id: 'scale',
    name: 'Scale & Commerce',
    badge: 'Most Popular',
    highlighted: true,
    priceMonthly: 79,
    priceAnnual: 64,
    description: 'For scaling direct-to-consumer brands and high-volume creator networks.',
    features: [
      'Everything in Growth Store',
      'Unlimited Creator & Affiliate Commission Splits',
      'Multi-Warehouse 3PL Auto-Routing (Unlimited Hubs)',
      'Social Checkouts (TikTok Shop, Instagram, WhatsApp)',
      'Chargeback & Fraud Shield Protection',
      'Role-Based Team Access (Up to 15 Seats)',
      '24/7 Dedicated Priority Support & Migration Concierge',
    ],
    ctaText: 'Start Scale Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Agency',
    badge: 'Full Suite',
    priceMonthly: 249,
    priceAnnual: 199,
    description: 'For high-volume retail brands, holding companies, and global commerce operations.',
    features: [
      'Everything in Scale & Commerce',
      'Custom ERP, SAP & NetSuite Bi-Directional Sync',
      'Unlimited Team Seats & SSO (Okta, SAML, Google)',
      'Custom Checkout SLAs (99.99% Uptime Guarantee)',
      'Dedicated Solutions Architect & Migration Team',
      'Custom 0% Fee Payment Gateway Integrations',
    ],
    ctaText: 'Contact Enterprise Sales',
  },
];

export const featureCategories: FeatureCategory[] = [
  {
    id: 'headless-speed',
    title: 'Sub-100ms Headless Storefronts',
    description: 'Leave bloated Shopify liquid themes behind. Render high-converting digital storefronts at the edge with instantaneous loading.',
    icon: 'Store',
    metricHighlight: '98ms Global Edge Latency',
    bulletPoints: [
      'Next.js & Remix composable architecture out of the box',
      'Sub-second mobile checkouts with 1-click Apple Pay and Google Pay',
      'Dynamic upsells, bundles, and personalized discount matrices',
    ],
  },
  {
    id: 'creator-splits',
    title: 'Native Creator & Affiliate Splits',
    description: 'Pay influencers, co-founders, and licensing partners automatically on every transaction with zero manual accounting overhead.',
    icon: 'Users',
    metricHighlight: '0% Manual Accounting',
    bulletPoints: [
      'Instant direct-to-bank commission routing on checkout completion',
      'Custom creator dashboards with real-time conversion stats and links',
      'Automated 1099 and international tax form distribution',
    ],
  },
  {
    id: 'multi-warehouse-3pl',
    title: 'Smart 3PL & Warehouse Routing',
    description: 'Coordinate global logistics effortlessly. Orders are automatically routed to the closest warehouse to cut shipping costs and delivery times.',
    icon: 'Package',
    metricHighlight: '28% Lower Shipping Costs',
    bulletPoints: [
      'Real-time multi-location inventory synchronization across channels',
      'Automated purchase order dispatch when stock reaches safety minimums',
      'Live carrier rates and tracking label generation',
    ],
  },
];
