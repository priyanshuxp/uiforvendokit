import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Layers,
  ShieldCheck,
  Package,
  BarChart3,
  Users,
  Receipt,
  Store,
  UserCheck,
  Truck,
} from 'lucide-react';
import { ModuleItem } from '../types';

interface ModuleDetailModalProps {
  module: ModuleItem | null;
  allModules: ModuleItem[];
  onClose: () => void;
  onSelectModule: (module: ModuleItem) => void;
  onOpenGetStarted: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  allModules,
  onClose,
  onSelectModule,
  onOpenGetStarted,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'live-feed' | 'features'>('overview');

  if (!module) return null;

  const currentIndex = allModules.findIndex((m) => m.id === module.id);
  const prevModule = allModules[(currentIndex - 1 + allModules.length) % allModules.length];
  const nextModule = allModules[(currentIndex + 1) % allModules.length];

  const renderIcon = (iconName: string, iconColor: string) => {
    const props = { className: 'w-6 h-6', style: { color: iconColor } };
    switch (iconName) {
      case 'Users':
        return <Users {...props} />;
      case 'Receipt':
        return <Receipt {...props} />;
      case 'Store':
        return <Store {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Package':
        return <Package {...props} />;
      case 'BarChart3':
        return <BarChart3 {...props} />;
      default:
        return <Package {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Banner */}
        <div
          className="p-6 sm:p-8 border-b border-slate-100 transition-colors duration-500 relative"
          style={{ backgroundColor: module.color }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all shadow-xs cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-white">
                {renderIcon(module.iconName, module.iconColor)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/80 text-[#0058be] border border-blue-100">
                    {module.platform}
                  </span>
                  {module.badge && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/5 text-slate-800">
                      {module.badge}
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0b1c30] mt-1">
                  {module.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#545f73] mt-0.5 font-medium">
                  {module.subs}
                </p>
              </div>
            </div>

            {/* Quick module navigator */}
            <div className="flex items-center gap-1.5 self-start sm:self-center">
              <button
                onClick={() => onSelectModule(prevModule)}
                className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 hover:text-[#0058be] text-xs font-medium flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                title={`Previous: ${prevModule.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevModule.name}</span>
              </button>
              <button
                onClick={() => onSelectModule(nextModule)}
                className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 hover:text-[#0058be] text-xs font-medium flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                title={`Next: ${nextModule.name}`}
              >
                <span className="hidden sm:inline">{nextModule.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-6 px-6 sm:px-8 border-b border-slate-100 bg-slate-50/50">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#0058be] text-[#0058be]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Overview & Telemetry
          </button>
          <button
            onClick={() => setActiveTab('live-feed')}
            className={`py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'live-feed'
                ? 'border-[#0058be] text-[#0058be]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Live Activity Stream
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'border-[#0058be] text-[#0058be]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Core Capabilities
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {module.description}
              </p>

              {/* KPI Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {module.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between"
                  >
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-2xl font-extrabold text-[#0b1c30] font-display">
                        {stat.value}
                      </span>
                      {stat.change && (
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {stat.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Preview Live Mini-Table */}
              <div className="rounded-2xl border border-slate-200/80 overflow-hidden">
                <div className="bg-slate-100/70 px-4 py-3 border-b border-slate-200/70 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {module.mockData.title}
                    </h4>
                    <p className="text-xs text-slate-500">{module.mockData.subtitle}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                    Live Data
                  </span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {module.mockData.items.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-semibold text-slate-400">
                          {item.id}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">
                            {item.primary}
                          </div>
                          <div className="text-xs text-slate-500">{item.secondary}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-md font-medium ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'live-feed' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">
                  {module.mockData.title}
                </h4>
                <span className="text-xs text-slate-500">Auto-refresh: 5s</span>
              </div>
              <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 bg-white">
                {module.mockData.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {item.id}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.primary}
                        </div>
                        <div className="text-xs text-slate-500">{item.secondary}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                      <span className="text-sm font-bold text-slate-900 font-mono">
                        {item.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900">
                Included Features in {module.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {module.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0058be] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Part of the complete Vendokit Unified Commerce & Marketing Suite.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenGetStarted();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-b from-[#0058be] to-[#004aa0] rounded-full hover:scale-[1.02] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Launch Module</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
