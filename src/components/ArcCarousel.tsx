import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Users,
  Receipt,
  Store,
  UserCheck,
  Truck,
  ShieldCheck,
  Package,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import { ModuleItem } from '../types';

interface ArcCarouselProps {
  modules: ModuleItem[];
  onSelectModule: (module: ModuleItem) => void;
  onActiveColorChange: (color: string) => void;
}

export const ArcCarousel: React.FC<ArcCarouselProps> = ({
  modules,
  onSelectModule,
  onActiveColorChange,
}) => {
  const [offset, setOffset] = useState<number>(0);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [isManualPaused, setIsManualPaused] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Drag tracking refs
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const dragHistoryRef = useRef<{ x: number; time: number }[]>([]);

  // 5-second spin decay physics state
  const spinDecayRef = useRef<{
    active: boolean;
    startTime: number;
    duration: number; // 5000ms (5 seconds)
    initialSpeed: number; // peak speed
    direction: number; // +1 or -1
  }>({
    active: false,
    startTime: 0,
    duration: 5000,
    initialSpeed: 0,
    direction: -1,
  });

  const requestRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Screen size detection for responsive geometry
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Geometry configuration:
  // Continuous, seamless circular arc loop
  // Mobile: angleStep = 18deg, cardWidth = 114px, arcRadius = 500px -> 5 cards crisply visible
  // Desktop: angleStep = 22deg, cardWidth = 205px, arcRadius = 820px -> 5 cards crisply visible
  const angleStep = isMobile ? 18 : 22;
  const totalCards = modules.length;
  const totalAngle = totalCards * angleStep;
  const baseSpeed = isMobile ? 0.038 : 0.042; // default cruising speed (deg/frame)
  const arcRadius = isMobile ? 500 : 820;

  // Icon renderer
  const renderIcon = (iconName: string, iconColor: string) => {
    const iconProps = {
      className: isMobile ? 'w-5 h-5' : 'w-7 h-7 sm:w-8 sm:h-8',
      style: { color: iconColor },
    };
    switch (iconName) {
      case 'Users':
        return <Users {...iconProps} />;
      case 'Receipt':
        return <Receipt {...iconProps} />;
      case 'Store':
        return <Store {...iconProps} />;
      case 'UserCheck':
        return <UserCheck {...iconProps} />;
      case 'Truck':
        return <Truck {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      case 'Package':
        return <Package {...iconProps} />;
      case 'BarChart3':
        return <BarChart3 {...iconProps} />;
      default:
        return <Package {...iconProps} />;
    }
  };

  // Main 60fps Animation Loop with 5-Second Spin Decay & Card-Only Hover Pause
  const animate = useCallback(() => {
    const isPausedByHover = hoveredCardId !== null;
    const isPausedTotal = (isPausedByHover || isManualPaused) && !isDragging && !spinDecayRef.current.active;

    if (!isDragging && !isPausedTotal) {
      const now = performance.now();
      let currentFrameSpeed = baseSpeed;
      let moveDir = -1; // standard forward rotation

      // Check if 5-second spin decay is running
      if (spinDecayRef.current.active) {
        const elapsed = now - spinDecayRef.current.startTime;
        const totalDuration = spinDecayRef.current.duration; // 5000ms

        if (elapsed < totalDuration) {
          // Progress from 0 to 1 over exactly 5.0 seconds
          const progress = elapsed / totalDuration;
          // Smooth non-linear decay that visibly drops speed every single second
          const decayFactor = Math.pow(1 - progress, 2.2);
          const bonusSpeed = (spinDecayRef.current.initialSpeed - baseSpeed) * decayFactor;
          currentFrameSpeed = baseSpeed + Math.max(0, bonusSpeed);
          moveDir = spinDecayRef.current.direction;
        } else {
          // 5 seconds completed: return cleanly to base cruising speed
          spinDecayRef.current.active = false;
          currentFrameSpeed = baseSpeed;
          moveDir = -1;
        }
      }

      setOffset((prev) => {
        let next = prev + currentFrameSpeed * (spinDecayRef.current.active ? spinDecayRef.current.direction : moveDir);
        if (next < 0) {
          next += totalAngle;
        }
        return next % totalAngle;
      });
    }

    requestRef.current = requestAnimationFrame(animate);
  }, [hoveredCardId, isManualPaused, isDragging, baseSpeed, totalAngle]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Compute active center card
  useEffect(() => {
    let closestIndex = 0;
    let minDistance = Infinity;

    modules.forEach((_, index) => {
      let angle = ((index * angleStep - offset) % totalAngle + totalAngle) % totalAngle;
      if (angle > totalAngle / 2) {
        angle -= totalAngle;
      }
      const dist = Math.abs(angle);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeModuleIndex) {
      setActiveModuleIndex(closestIndex);
      onActiveColorChange(modules[closestIndex].color);
    }
  }, [offset, activeModuleIndex, modules, onActiveColorChange, angleStep, totalAngle]);

  // Direct card navigation
  const rotateToCard = (targetIndex: number) => {
    spinDecayRef.current.active = false;
    const targetOffset = (targetIndex * angleStep) % totalAngle;
    setOffset(targetOffset);
    setActiveModuleIndex(targetIndex);
    onActiveColorChange(modules[targetIndex].color);
  };

  const handleNext = () => {
    const nextIndex = (activeModuleIndex + 1) % totalCards;
    rotateToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeModuleIndex - 1 + totalCards) % totalCards;
    rotateToCard(prevIndex);
  };

  // Pointer / Touch Hold & Spin Interaction with 5-Second Deceleration
  const handlePointerDown = (e: React.PointerEvent) => {
    spinDecayRef.current.active = false;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offset;
    dragHistoryRef.current = [{ x: e.clientX, time: performance.now() }];

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const now = performance.now();
    const deltaX = e.clientX - dragStartXRef.current;
    const dragSensitivity = isMobile ? 6.2 : 8.5;
    const deltaAngle = (deltaX / dragSensitivity) % totalAngle;
    const newOffset = (dragStartOffsetRef.current - deltaAngle + totalAngle) % totalAngle;
    setOffset(newOffset);

    // Maintain recent drag samples for release velocity
    dragHistoryRef.current.push({ x: e.clientX, time: now });
    if (dragHistoryRef.current.length > 8) {
      dragHistoryRef.current.shift();
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }

    // Calculate release velocity from the drag history
    const history = dragHistoryRef.current;
    if (history.length >= 2) {
      const firstSample = history[0];
      const lastSample = history[history.length - 1];
      const dt = lastSample.time - firstSample.time;
      const dx = lastSample.x - firstSample.x;

      if (dt > 10) {
        const velocityPxPerMs = dx / dt;
        const dragSensitivity = isMobile ? 6.2 : 8.5;
        const velocityDegPerFrame = (velocityPxPerMs / dragSensitivity) * 16.6;

        // If user made a spin or swipe gesture
        if (Math.abs(velocityDegPerFrame) > 0.06) {
          const spinDir = velocityDegPerFrame > 0 ? -1 : 1;
          // Initial peak speed between 0.42 (fast) and 1.15 (high speed) deg/frame
          const initialPeakSpeed = Math.min(Math.max(Math.abs(velocityDegPerFrame) * 1.6, 0.42), 1.15);

          // Initiate exactly 5-second (5000ms) deceleration curve
          spinDecayRef.current = {
            active: true,
            startTime: performance.now(),
            duration: 5000, // 5 seconds
            initialSpeed: initialPeakSpeed,
            direction: spinDir,
          };
        }
      }
    }
    dragHistoryRef.current = [];
  };

  return (
    <div className="w-full relative select-none mt-1 sm:mt-2">
      {/* 3D Arc Stage Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] xs:h-[410px] sm:h-[460px] md:h-[500px] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 36%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, transparent 100%)',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Ambient 3D Curved Light Track under the arc */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-40 blur-2xl transition-all duration-700"
          style={{
            top: isMobile ? '60px' : '85px',
            width: isMobile ? '340px' : '750px',
            height: isMobile ? '120px' : '180px',
            background: `radial-gradient(ellipse at center, ${modules[activeModuleIndex]?.iconColor || '#0058be'} 0%, rgba(255,255,255,0) 70%)`,
          }}
        />

        {/* 3D Arc Curve Reference Line (soft glass ring glow) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full border border-white/50 opacity-40 shadow-[0_0_25px_rgba(255,255,255,0.7)]"
          style={{
            top: isMobile ? '28px' : '40px',
            width: `${arcRadius * 1.85}px`,
            height: `${arcRadius * 1.85}px`,
          }}
        />

        {/* Track containing revolving cards all strictly on the EXACT SAME circular arc trajectory */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {modules.map((card, index) => {
            let angle = ((index * angleStep - offset) % totalAngle + totalAngle) % totalAngle;
            if (angle > totalAngle / 2) {
              angle -= totalAngle;
            }

            const isCurrentActive = index === activeModuleIndex;
            const isHovered = hoveredCardId === card.id;
            const distance = Math.abs(angle);

            // True Continuous Arc Trajectory:
            // The top 5 cards (distance <= angleStep * 2.2) are 100% visible and crisp.
            // When cards travel past ±2.2, they continue along the exact circular curve downwards
            // and smoothly fade to 0 at the wrap-around boundary (totalAngle / 2),
            // giving the natural "coming up on the left arc, going down into the right arc" continuous flow.
            const fadeStart = angleStep * 2.15;
            const maxBoundary = totalAngle / 2;

            let opacity = 1;
            if (distance > fadeStart) {
              const t = (distance - fadeStart) / (maxBoundary - fadeStart);
              opacity = Math.max(0, 1 - Math.pow(t, 1.2));
            }

            // Mobile: 114px width so 5 cards have 20-30px clean gaps without overlapping
            // Desktop/PC: 205px width with generous spacing
            const cardWidth = isMobile ? 114 : 205;
            const halfWidth = cardWidth / 2;

            return (
              <div
                key={card.id}
                style={{
                  position: 'absolute',
                  left: '50%',
                  marginLeft: `-${halfWidth}px`,
                  // ALL cards strictly sit on the exact same vertical anchor across the whole arc
                  top: isMobile ? '12px' : '26px',
                  // Perfect circle rotation around uniform center point
                  transformOrigin: `center ${arcRadius}px`,
                  transform: `rotate(${angle}deg)`,
                  zIndex: isCurrentActive ? 30 : Math.round(20 - distance),
                  opacity: opacity,
                  transition: isDragging ? 'none' : 'opacity 0.2s ease',
                  willChange: 'transform, opacity',
                  pointerEvents: opacity < 0.3 ? 'none' : 'auto',
                }}
              >
                {/* 3D Glassmorphic Card Container - Crisp and sharp */}
                <div
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className={`group relative rounded-[20px] sm:rounded-[26px] transition-all duration-300 overflow-hidden ${
                    isMobile ? 'w-[114px] p-2.5' : 'w-[205px] p-4'
                  } ${
                    isCurrentActive
                      ? 'glass-card-active'
                      : 'glass-card hover:border-white'
                  }`}
                  style={{
                    // 3D Glass Surface Lighting & Subtle Hover Tilt
                    transform: isHovered && !isMobile ? 'perspective(600px) translateY(-3px) rotateX(3deg)' : 'none',
                    boxShadow: isCurrentActive
                      ? `0 22px 50px -8px ${card.iconColor}36, 0 6px 20px rgba(0,0,0,0.04), inset 0 2px 3px rgba(255,255,255,1), inset 0 -1px 3px ${card.iconColor}24`
                      : isHovered
                      ? `0 18px 36px -6px ${card.iconColor}28, 0 4px 14px rgba(0,0,0,0.03), inset 0 1.5px 2px rgba(255,255,255,0.9)`
                      : undefined,
                  }}
                  onClick={(e) => {
                    if (!isCurrentActive) {
                      e.stopPropagation();
                      rotateToCard(index);
                    }
                  }}
                >
                  {/* Top-Left Specular Light Glare (Glass Refraction Effect) */}
                  <div className="pointer-events-none absolute -top-8 -left-8 w-20 h-20 bg-white/40 rounded-full blur-md" />
                  
                  {/* Subtle Inner Gradient Tint */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px] sm:rounded-[26px] opacity-15"
                    style={{
                      background: `linear-gradient(135deg, ${card.iconColor} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Card Icon and Titles */}
                  <div className={`flex flex-col items-center text-center relative z-10 ${isMobile ? 'gap-1 mb-2' : 'gap-2 mb-3.5'}`}>
                    {/* 3D Embossed Icon Sphere */}
                    <div
                      className={`relative rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isMobile ? 'w-9 h-9' : 'w-13 h-13 sm:w-15 sm:h-15'
                      } ${
                        isCurrentActive ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      style={{
                        background: 'linear-gradient(145deg, #ffffff 0%, #e9f0ff 100%)',
                        boxShadow: `0 6px 16px -2px ${card.iconColor}30, inset 0 1px 2px rgba(255,255,255,1), inset 0 -1px 2px rgba(0,88,190,0.1)`,
                        border: '1px solid rgba(255,255,255,0.95)',
                      }}
                    >
                      {renderIcon(card.iconName, card.iconColor)}
                    </div>

                    <div className="w-full px-0.5">
                      <h3
                        className={`font-display font-bold text-[#0b1c30] leading-tight tracking-tight ${
                          isMobile ? 'text-[11.5px]' : 'text-[16px] sm:text-[17px]'
                        }`}
                      >
                        {card.name}
                      </h3>
                      <div className="mt-0.5">
                        <div
                          className={`text-[#545f73] font-medium leading-none truncate ${
                            isMobile ? 'text-[9.5px]' : 'text-[11.5px]'
                          }`}
                        >
                          {card.subs}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Glass Details Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectModule(card);
                    }}
                    className={`w-full rounded-xl flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer relative z-10 ${
                      isMobile ? 'py-1.5 px-1.5 text-[10px] gap-1' : 'py-2.5 px-3 text-xs sm:text-sm gap-1.5'
                    } ${
                      isCurrentActive
                        ? 'bg-gradient-to-r from-[#0058be] to-[#004aa0] text-white shadow-sm hover:opacity-95'
                        : 'glass-pill text-[#0058be] hover:bg-white hover:text-[#004aa0]'
                    }`}
                  >
                    <span>{isMobile ? 'Details' : 'View Module'}</span>
                    <ArrowRight className={isMobile ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls & Pagination Dots */}
      <div className="flex flex-col xs:flex-row items-center justify-between gap-3 sm:gap-4 max-w-xl mx-auto px-4 mt-0 sm:mt-1">
        {/* Navigation Arrows & Manual Play/Pause */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handlePrev}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-[#0058be] hover:border-[#0058be] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            title="Previous module"
            aria-label="Previous module"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsManualPaused(!isManualPaused)}
            className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-[#0058be] text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
            title={isManualPaused ? 'Resume auto-rotate' : 'Pause auto-rotate'}
          >
            {isManualPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-slate-600" />}
            <span>{isManualPaused ? 'Play' : 'Pause'}</span>
          </button>
          <button
            onClick={handleNext}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-[#0058be] hover:border-[#0058be] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            title="Next module"
            aria-label="Next module"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {modules.map((card, index) => {
            const isActive = index === activeModuleIndex;
            return (
              <button
                key={card.id}
                onClick={() => rotateToCard(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                  isActive
                    ? 'w-4 sm:w-5 h-1.5 sm:h-2 bg-[#0058be]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#c2c6d6] hover:bg-[#727785]'
                }`}
                title={`Jump to ${card.name}`}
                aria-label={`Jump to ${card.name}`}
              />
            );
          })}
        </div>

        {/* Current Active Label */}
        <div className="text-[11px] sm:text-xs text-[#545f73] font-medium hidden xs:block">
          Active: <span className="font-semibold text-[#0058be]">{modules[activeModuleIndex]?.name}</span>
        </div>
      </div>
    </div>
  );
};
