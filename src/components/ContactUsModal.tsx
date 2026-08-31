import React, { useState } from 'react';
import {
  X,
  MessageSquare,
  CheckCircle2,
  Mail,
  User,
  Phone,
  Send,
  HelpCircle,
  Zap,
} from 'lucide-react';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Shopify Migration & Pricing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (!message.trim()) {
      setError('Please enter your message');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError('');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
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
        <div className="bg-[#0b1c30] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0058be]/20 border border-[#0058be]/40 flex items-center justify-center text-[#0058be]">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg leading-tight">
                Contact Our Team
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Questions about migration, 0% fees, or custom API access?
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
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
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Jordan Blake"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="jordan@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Phone Number <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] placeholder-slate-400 focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                    Topic / Department
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0b1c30] bg-white focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/15 transition-all"
                  >
                    <option value="Shopify Migration & Pricing">Shopify Store Migration</option>
                    <option value="Custom Checkout & Developer API">Custom Checkout & APIs</option>
                    <option value="Enterprise High-Volume Tier">Enterprise / High-Volume</option>
                    <option value="Creator & Affiliate Partnership">Creator / Agency Partnership</option>
                    <option value="General Inquiry">General Question</option>
                  </select>
                </div>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-xs font-semibold text-[#0b1c30] mb-1">
                  How can we help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your brand, current challenges, or specific questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                className="w-full py-3.5 rounded-xl bg-[#0b1c30] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#132742] active:scale-[0.99] transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Team</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#727785] pt-1">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Avg response time: &lt; 2 hours
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-[#0b1c30]">
                  Message Received!
                </h4>
                <p className="text-sm text-[#545f73] mt-2 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#0b1c30]">{name}</span>. An engineering and commerce lead will respond to <span className="font-semibold text-[#0058be]">{email}</span> within 2 hours.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-1.5 text-[#424754]">
                <div className="font-semibold text-[#0b1c30]">Inquiry Details:</div>
                <div><span className="text-[#727785]">Topic:</span> {inquiryType}</div>
                <div><span className="text-[#727785]">Status:</span> Queued for Commerce Lead</div>
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
