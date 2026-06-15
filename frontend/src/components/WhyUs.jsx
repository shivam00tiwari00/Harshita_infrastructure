import { useCountUp } from "./hooks";
import { ShieldCheck, Clock, HardHat, Award } from "lucide-react";

const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 28, suffix: " States", label: "Pan-India Reach" },
  { value: 100, suffix: "%", label: "Quality Assured" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Quality, non-negotiable",
    desc: "Premium materials and disciplined processes on every site, every time.",
  },
  {
    icon: Clock,
    title: "On-time, on-budget",
    desc: "Timeline-first execution with transparent reporting at every milestone.",
  },
  {
    icon: HardHat,
    title: "Field-tested crew",
    desc: "Skilled supervisors and experienced workers across all our services.",
  },
  {
    icon: Award,
    title: "Founder-led trust",
    desc: "Direct accountability under Mrs. Vandana Tiwari — your project, our reputation.",
  },
];

function StatItem({ value, suffix, label, idx }) {
  const [count, ref] = useCountUp(value, 1400 + idx * 150);
  return (
    <div ref={ref} data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`} className="reveal">
      <p className="font-display font-black text-5xl lg:text-7xl tracking-tighter text-white leading-none">
        {count}
        <span className="text-orange-500">{suffix}</span>
      </p>
      <p className="mt-3 text-xs uppercase tracking-[0.22em] font-bold text-slate-400">{label}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="relative bg-slate-900 text-white overflow-hidden"
    >
      {/* Massive background text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <p className="font-display font-black text-stroke-light text-[16vw] lg:text-[12vw] leading-none whitespace-nowrap text-center opacity-60">
          BUILT TO LAST · BUILT TO LAST ·
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Heading */}
        <div className="max-w-2xl reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-orange-500" />
            <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
              Why Choose Us
            </p>
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl lg:text-6xl leading-[1.02]">
            Numbers that
            <br />
            speak for <span className="text-orange-500">themselves.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16 border-b border-slate-800">
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} idx={i} />
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-testid={`pillar-${p.title.split(" ")[0].toLowerCase()}`}
              className="reveal group relative bg-slate-800/60 border border-slate-700/70 hover:border-orange-500 rounded-sm p-7 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 mb-5 bg-orange-500/15 border border-orange-500/40 rounded-sm flex items-center justify-center">
                <p.icon className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-white leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
