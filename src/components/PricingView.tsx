import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/modulesData';

interface PricingViewProps {
  onOpenGetStarted: (planName?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenGetStarted }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I switch or cancel my plan at any time?',
      a: 'Yes, absolutely. You can upgrade, downgrade, or cancel your subscription whenever you wish directly from your account settings with zero hidden penalty fees.',
    },
    {
      q: 'How does the creator attribution modeling work?',
      a: 'Vendokit utilizes advanced first-party server-side tracking and unique affiliate tokens so you can accurately measure conversion from Instagram, TikTok, YouTube, and podcasts without relying on third-party cookies.',
    },
    {
      q: 'Can I connect my existing suppliers or warehouse?',
      a: 'Yes! Vendokit integrates seamlessly with Shopify, WooCommerce, ShipStation, Printful, and custom ERP/supplier webhooks.',
    },
    {
      q: 'Is there a free trial available?',
      a: 'Yes, every new workspace includes a 14-day free trial of all Scale & Commerce features—no credit card required upfront.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 space-y-16 animate-in fade-in duration-300">
      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1 text-xs font-semibold text-[#0058be]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent, Value-Driven Pricing</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight">
          Choose the plan to <br className="hidden sm:inline" />
          <span className="font-serif-italic text-[#0058be]">fuel your expansion</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Start free for 14 days. Scale as your store, creator roster, and sales orders grow.
        </p>

        {/* Billing Cycle Switcher */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-semibold cursor-pointer ${
              !isAnnual ? 'text-[#0b1c30]' : 'text-slate-500'
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-slate-200 rounded-full p-1 transition-colors relative cursor-pointer"
            style={{ backgroundColor: isAnnual ? '#0058be' : '#cbd5e1' }}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span
            className={`text-sm font-semibold cursor-pointer flex items-center gap-1.5 ${
              isAnnual ? 'text-[#0b1c30]' : 'text-slate-500'
            }`}
            onClick={() => setIsAnnual(true)}
          >
            <span>Annual Billing</span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan) => {
          const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                plan.highlighted
                  ? 'bg-white border-2 border-[#0058be] shadow-xl shadow-blue-500/10 scale-102'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0b1c30]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="my-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0b1c30] font-display">
                      ${price}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">/ month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {isAnnual ? 'Billed annually ($' + price * 12 + '/yr)' : 'Billed monthly'}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What is included:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0058be] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenGetStarted(plan.name)}
                className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-[#0058be] to-[#004aa0] text-white shadow-md hover:scale-[1.02]'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto pt-10">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0b1c30]">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Need help deciding? Reach out anytime to our 24/7 creator support team.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 font-semibold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/50"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
