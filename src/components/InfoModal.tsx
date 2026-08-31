import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface InfoModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0058be] flex items-center justify-center">
              {type === 'privacy' ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <h3 className="font-display text-xl font-bold text-[#0b1c30]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At Vendokit, we are committed to protecting creator and merchant privacy. We
                adhere to SOC2 Type II standards and modern data protection frameworks.
              </p>
              <p>
                <strong>Data Processing:</strong> Your customer, order, and lead records are
                encrypted in transit and at rest. We never sell your audience data to third-party ad
                exchanges.
              </p>
              <p>
                <strong>Attribution Privacy:</strong> Our attribution engine utilizes first-party
                server-side tokens and privacy-preserving metrics compliant with GDPR and CCPA.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Vendokit. By accessing or using our unified commerce and marketing
                platform, you agree to be bound by these service terms.
              </p>
              <p>
                <strong>Service Availability:</strong> We target a 99.99% uptime SLA across all
                storefront, inventory, and order processing endpoints.
              </p>
              <p>
                <strong>Fair Use:</strong> API access and lead ingestion limits scale according to
                your selected tier (Starter, Scale, or Enterprise).
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full cursor-pointer transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
