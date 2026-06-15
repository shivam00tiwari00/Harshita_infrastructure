import { ArrowUpRight, MessageCircle, ShieldCheck, Truck, MapPin } from "lucide-react";
import { LOGO, HERO_BG, WHATSAPP_LINK } from "./constants";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden bg-white"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      {/* Orange accent rail */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left text column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7 rise rise-delay-1">
              <div className="h-px w-10 bg-orange-500" />
              <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
                Est. India · Pan-India Operations
              </p>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-display font-black tracking-tighter text-slate-900 text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] rise rise-delay-2"
            >
              Earthwork.
              <br />
              <span className="relative inline-block">
                Surfaces.
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-orange-500/90" />
              </span>
              <br />
              <span className="text-slate-400">Built solid.</span>
            </h1>

            <p
              data-testid="hero-subline"
              className="mt-7 max-w-xl text-lg text-slate-600 leading-relaxed rise rise-delay-3"
            >
              Harshita Infrastructure delivers professional soil dumping, earth filling
              and premium wall finishing — under the leadership of{" "}
              <span className="font-semibold text-slate-900">Mrs. Vandana Tiwari</span>,
              we serve sites across India with quality and trust.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 rise rise-delay-4">
              <a
                data-testid="hero-whatsapp-cta"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-push inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-[0.16em] text-[13px] px-7 py-4 rounded-sm shadow-[0_18px_40px_-15px_rgba(249,115,22,0.6)]"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                data-testid="hero-services-cta"
                href="#services"
                className="btn-push inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-[0.16em] text-[13px] px-7 py-4 rounded-sm"
              >
                Explore Services
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick badges */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl rise rise-delay-5">
              {[
                { icon: Truck, label: "Heavy Earthwork", sub: "Soil & filling" },
                { icon: ShieldCheck, label: "Quality Assured", sub: "Premium finish" },
                { icon: MapPin, label: "Pan-India", sub: "Reach & deploy" },
              ].map((b) => (
                <div
                  key={b.label}
                  data-testid={`hero-badge-${b.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border-l-2 border-slate-200 pl-4"
                >
                  <b.icon className="w-5 h-5 text-orange-500 mb-2" />
                  <p className="font-display font-bold text-sm text-slate-900">{b.label}</p>
                  <p className="text-xs text-slate-500">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual column */}
          <div className="lg:col-span-5 relative rise rise-delay-3">
            <div className="relative">
              {/* Backdrop block */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-500 rounded-sm hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-[6px] border-slate-900 rounded-sm hidden md:block" />

              {/* Image card */}
              <div className="relative bg-slate-900 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={HERO_BG}
                  alt="Construction site with earthwork"
                  className="w-full h-[440px] sm:h-[560px] object-cover opacity-90"
                />
                {/* Floating logo card */}
                <div className="absolute top-5 left-5 bg-white rounded-sm px-4 py-3 flex items-center gap-3 shadow-lg">
                  <img src={LOGO} alt="Harshita Infrastructure logo" className="w-10 h-10 object-contain" />
                  <div>
                    <p className="font-display font-black text-[13px] text-slate-900 leading-none">
                      HARSHITA
                    </p>
                    <p className="font-display text-[10px] uppercase tracking-[0.22em] text-orange-500 font-bold">
                      Infrastructure
                    </p>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute bottom-5 right-5 bg-white rounded-sm px-5 py-4 shadow-lg">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-orange-500 mb-1">
                    Trusted Across
                  </p>
                  <p className="font-display font-black text-2xl text-slate-900 leading-none">28 States</p>
                  <p className="text-xs text-slate-500 mt-1">of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative bg-slate-900 text-white overflow-hidden border-y border-slate-800">
        <div className="flex whitespace-nowrap py-5 ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
              {[
                "Soil Dumping",
                "Earth Filling",
                "Site Levelling",
                "White Cement Finish",
                "Wall Putty",
                "Pan-India Service",
                "Quality Assured",
                "Industrial Projects",
                "Commercial Builds",
                "Residential Sites",
              ].map((t, idx) => (
                <div key={`${i}-${idx}`} className="flex items-center gap-12 shrink-0">
                  <span className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight">
                    {t}
                  </span>
                  <span className="w-2.5 h-2.5 bg-orange-500 rotate-45" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
