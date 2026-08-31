import React, { useState } from 'react';
import {
  Store,
  Layers,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Globe2,
  BarChart,
  Users,
  Package,
} from 'lucide-react';
import { featureCategories, modulesData } from '../data/modulesData';
import { ModuleItem } from '../types';

interface FeaturesViewProps {
  onSelectModule: (module: ModuleItem) => void;
  onOpenGetStarted: () => void;
}

export const FeaturesView: React.FC<FeaturesViewProps> = ({
  onSelectModule,
  onOpenGetStarted,
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number>(0);
  const [audienceSize, setAudienceSize] = useState<number>(50000);
  const [avgProductPrice, setAvgProductPrice] = useState<number>(45);

  const selectedModule = modulesData.find((m) => m.id === selectedModuleId) || modulesData[0];

  // Simple interactive ROI calculation
  const estimatedConversions = Math.round(audienceSize * 0.022);
  const estimatedRevenue = estimatedConversions * avgProductPrice;
  const estimatedTimeSavedHours = Math.round((audienceSize / 10000) * 8 + 12);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10 space-y-16 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1 text-xs font-semibold text-[#0058be]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Creator & Brand Ecosystem</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight">
          Everything you need to <br className="hidden sm:inline" />
          <span className="font-serif-italic text-[#0058be]">scale your audience</span> into revenue
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Vendokit unites high-converting storefronts, creator attribution, supplier logistics,
          and inbound leads under one seamless, zero-friction operating system.
        </p>
      </div>

      {/* Feature Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCategories.map((cat) => (
          <div
            key={cat.id}
            className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0058be] flex items-center justify-center mb-6">
                {cat.id === 'creator-commerce' && <Store className="w-6 h-6" />}
                {cat.id === 'unified-operations' && <Layers className="w-6 h-6" />}
                {cat.id === 'attribution-growth' && <TrendingUp className="w-6 h-6" />}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0058be] mb-1">
                {cat.metricHighlight}
              </div>
              <h3 className="font-display text-xl font-bold text-[#0b1c30] mb-3">
                {cat.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <ul className="space-y-2.5">
                {cat.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0058be] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive 8-Module Explorer */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0b1c30]">
              Modular Architecture
            </h2>
            <p className="text-sm text-slate-500">
              Click any module to inspect real-time data flows and live capabilities.
            </p>
          </div>
          <button
            onClick={() => onSelectModule(selectedModule)}
            className="self-start md:self-auto text-sm font-semibold text-[#0058be] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <span>Open {selectedModule.name} Full Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Modules Pill Selector */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100">
          {modulesData.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModuleId(mod.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedModuleId === mod.id
                  ? 'bg-[#0058be] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {mod.name}
            </button>
          ))}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#0058be] bg-blue-50">
              {selectedModule.platform} • {selectedModule.subs}
            </div>
            <h3 className="font-display text-3xl font-extrabold text-[#0b1c30]">
              {selectedModule.name}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {selectedModule.description}
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {selectedModule.stats.map((s, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
                  <div className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onSelectModule(selectedModule)}
                className="px-6 py-3 bg-[#0058be] text-white rounded-full text-sm font-semibold hover:bg-[#004aa0] transition-colors shadow-sm cursor-pointer"
              >
                Inspect Live {selectedModule.name} Telemetry
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {selectedModule.mockData.title}
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Live Stream
              </span>
            </div>
            <div className="space-y-2.5">
              {selectedModule.mockData.items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{item.primary}</div>
                    <div className="text-[11px] text-slate-500">{item.secondary}</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800">
                    {item.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Creator Revenue Calculator */}
      <div className="bg-gradient-to-br from-[#0b1c30] to-[#17283c] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-400/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Growth Estimator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">
            Calculate your growth potential with Vendokit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            See how much revenue and operational time your brand or creator team can unlock
            with optimized multi-channel funnels and automated inventory.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-slate-300">
                  <span>Monthly Audience / Visitors</span>
                  <span className="text-blue-400 font-mono">
                    {audienceSize.toLocaleString()} reach
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={audienceSize}
                  onChange={(e) => setAudienceSize(Number(e.target.value))}
                  className="w-full accent-[#2170e4] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-2 text-slate-300">
                  <span>Average Order Value</span>
                  <span className="text-blue-400 font-mono">${avgProductPrice}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="350"
                  step="5"
                  value={avgProductPrice}
                  onChange={(e) => setAvgProductPrice(Number(e.target.value))}
                  className="w-full accent-[#2170e4] cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/10 flex flex-col justify-center space-y-4">
              <div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                  Estimated Monthly GMV
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-1">
                  ${estimatedRevenue.toLocaleString()}
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
                <span>Est. Time Saved:</span>
                <span className="font-semibold text-emerald-400">
                  ~{estimatedTimeSavedHours} hrs / week
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenGetStarted}
            className="px-8 py-3.5 bg-gradient-to-b from-[#2170e4] to-[#0058be] text-white rounded-full font-semibold text-sm hover:scale-102 transition-transform shadow-lg cursor-pointer flex items-center gap-2"
          >
            <span>Start Leveling Up Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
