import React, { useState } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Building2,
  Mail,
  User,
  Globe,
  DollarSign,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [currentPlatform, setCurrentPlatform] = useState('Shopify Plus');
  const [monthlyGmv, setMonthlyGmv] = useState('$50k - $250k / mo');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid work email');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    setName('');
    setEmail('');
    setStoreUrl('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0058be] to-[#004aa0] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg leading-tight">
                Request a Live Demo
              </h3>
              <p className="text-xs text-blue-100 mt-0.5">
                See how top brands switch from Shopify and scale 3x faster
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Store Website */}
              <div>
                <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                  Brand / Store Website
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="https://yourbrand.com"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                  />
                </div>
              </div>

              {/* Current Platform & Monthly GMV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Current Platform
                  </label>
                  <select
                    value={currentPlatform}
                    onChange={(e) => setCurrentPlatform(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] bg-white focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                  >
                    <option value="Shopify Plus">Shopify / Shopify Plus</option>
                    <option value="WooCommerce">WooCommerce / WordPress</option>
                    <option value="BigCommerce">BigCommerce</option>
                    <option value="Magento">Magento / Adobe Commerce</option>
                    <option value="Custom Build">Custom / New Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Monthly Sales Volume
                  </label>
                  <select
                    value={monthlyGmv}
                    onChange={(e) => setMonthlyGmv(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] bg-white focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                  >
                    <option value="Under $20k / mo">&lt; $20,000 / mo</option>
                    <option value="$20k - $100k / mo">$20,000 - $100,000 / mo</option>
                    <option value="$100k - $500k / mo">$100,000 - $500,000 / mo</option>
                    <option value="$500k+ / mo">$500,000+ / mo (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Specific features desired */}
              <div>
                <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                  What features do you need most?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Automatic creator commission splits, multi-warehouse routing, faster headless checkout..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all resize-none"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-b from-[#0058be] to-[#004aa0] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.99] transition-all shadow-[0_8px_20px_rgba(0,88,190,0.25)] border border-white/20 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Book 20-Min Guided Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#727785] text-center mt-2">
                🔒 We respect your privacy. No pushy sales calls, just a direct product tour.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-[#0b1c30]">
                  Demo Request Confirmed!
                </h4>
                <p className="text-sm text-[#545f73] mt-2 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#0b1c30]">{name}</span>. A calendar invitation and sandbox link have been sent to <span className="font-semibold text-[#0058be]">{email}</span>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2 text-[#424754]">
                <div className="font-semibold text-[#0b1c30] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" /> What to expect on the call:
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#545f73]">
                  <li>Live comparison of your current storefront vs. our edge engine</li>
                  <li>Walkthrough of automated creator payouts & 3PL routing</li>
                  <li>Estimated fee savings calculation (average: $1,400+/month)</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0b1c30] font-semibold text-sm transition-colors cursor-pointer"
              >
                Close & Return to Platform
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
