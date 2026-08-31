import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Store,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { modulesData } from '../data/modulesData';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Scale & Commerce',
}) => {
  const [step, setStep] = useState<number>(1);
  const [role, setRole] = useState<'creator' | 'brand' | 'agency'>('creator');
  const [workspaceName, setWorkspaceName] = useState('My Creator Brand');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Storefront',
    'Sales Orders',
    'Analytics',
    'Leads',
  ]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const toggleModule = (name: string) => {
    if (selectedModules.includes(name)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== name));
      }
    } else {
      setSelectedModules([...selectedModules, name]);
    }
  };

  const handleFinish = () => {
    setIsCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0058be] text-white flex items-center justify-center">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#0b1c30]">
                {isCompleted ? 'Workspace Initialized!' : 'Get Started with Vendokit'}
              </h3>
              <p className="text-xs text-slate-500">
                {isCompleted
                  ? 'Your unified workspace is ready'
                  : `Step ${step} of 2 • ${initialPlan}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!isCompleted ? (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      I am launching as:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setRole('creator')}
                        className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                          role === 'creator'
                            ? 'border-[#0058be] bg-blue-50/60 text-[#0058be] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Users className="w-5 h-5 mx-auto mb-1.5" />
                        <div className="text-xs">Solo Creator</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRole('brand')}
                        className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                          role === 'brand'
                            ? 'border-[#0058be] bg-blue-50/60 text-[#0058be] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Store className="w-5 h-5 mx-auto mb-1.5" />
                        <div className="text-xs">Commerce Brand</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRole('agency')}
                        className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                          role === 'agency'
                            ? 'border-[#0058be] bg-blue-50/60 text-[#0058be] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Briefcase className="w-5 h-5 mx-auto mb-1.5" />
                        <div className="text-xs">Talent Agency</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Workspace or Brand Name
                    </label>
                    <input
                      type="text"
                      value={workspaceName}
                      onChange={(e) => setWorkspaceName(e.target.value)}
                      placeholder="e.g. Aura Studio, Nova Merch"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0058be] text-sm text-slate-900"
                    />
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs text-slate-600 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <Zap className="w-3.5 h-3.5 text-[#0058be]" />
                      <span>Instant 14-Day Scale Trial</span>
                    </div>
                    <p>Includes full access to the interactive 8-module arc engine & attribution.</p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Select Modules to Provision
                    </h4>
                    <p className="text-xs text-slate-500">
                      Choose which capabilities to load into your unified workspace view.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {modulesData.map((m) => {
                      const isSelected = selectedModules.includes(m.name);
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => toggleModule(m.name)}
                          className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#0058be] bg-blue-50/50 text-[#0058be] font-semibold'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs">{m.name}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0058be]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Selected {selectedModules.length} of 8 high-performance modules</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Completed view */
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#0b1c30]">
                Workspace &ldquo;{workspaceName}&rdquo; is Live!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your Vendokit environment has been configured with {selectedModules.join(', ')}.
                Live data sync and telemetry have been booted.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left font-mono text-xs text-slate-700 space-y-1">
                <div>status: <span className="text-emerald-600 font-bold">ONLINE (200 OK)</span></div>
                <div>domain: <span className="text-blue-600">{workspaceName.toLowerCase().replace(/\s+/g, '')}.vendokit.app</span></div>
                <div>active_tier: <span className="text-slate-900 font-semibold">{initialPlan} (Trial)</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          {!isCompleted ? (
            <>
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
              )}

              {step < 2 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2.5 bg-[#0058be] text-white rounded-full text-xs font-semibold hover:bg-[#004aa0] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 bg-gradient-to-b from-[#0058be] to-[#004aa0] text-white rounded-full text-xs font-semibold hover:scale-102 transition-transform flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Provision Workspace</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#0058be] text-white rounded-full text-sm font-semibold hover:bg-[#004aa0] transition-colors cursor-pointer shadow-sm"
            >
              Enter Live Showcase Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
