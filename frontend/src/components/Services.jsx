import { ArrowUpRight, Truck, Building2, PaintBucket } from "lucide-react";
import { SERVICE_IMG, WHATSAPP_LINK } from "./constants";

const SERVICES = [
  {
    num: "01",
    title: "Soil Dumping & Earth Filling",
    short: "Earthwork",
    desc: "Heavy-duty soil dumping, earth filling and site levelling for residential, commercial and industrial projects of every scale.",
    img: SERVICE_IMG.soil,
    Icon: Truck,
    bullets: ["Site levelling", "Earth filling", "Heavy earthmoving", "Volumetric quotes"],
    testid: "soil",
  },
  {
    num: "02",
    title: "White Cement Application",
    short: "Architectural Finish",
    desc: "Premium white cement work for smooth, durable and weather-resistant wall surfaces with an architectural-grade finish.",
    img: SERVICE_IMG.cement,
    Icon: Building2,
    bullets: ["Smooth finish", "Weather-resistant", "Long-lasting", "Pre-coat ready"],
    testid: "white-cement",
  },
  {
    num: "03",
    title: "Wall Putty & Surface Prep",
    short: "Surface Prep",
    desc: "Expert surface preparation with superior putty application — creating a flawless, paint-ready canvas every single time.",
    img: SERVICE_IMG.putty,
    Icon: PaintBucket,
    bullets: ["Crack repair", "Smooth base", "Paint-ready", "Premium materials"],
    testid: "wall-putty",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-slate-50 py-24 lg:py-32 border-y border-slate-200"
    >
      {/* Decorative diagonal stripe */}
      <div className="absolute inset-0 diagonal-stripes opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-500" />
              <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
                Capabilities
              </p>
            </div>
            <h2 className="font-display font-black tracking-tighter text-slate-900 text-4xl lg:text-6xl leading-[1.02]">
              Three things.
              <br />
              Done <span className="text-orange-500">brilliantly.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base lg:text-lg leading-relaxed">
            Specialised, focused, and proven — every service we offer reflects deep field
            experience and an obsession with execution quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              data-testid={`service-card-${s.testid}`}
              className="svc-card group relative bg-white border border-slate-200 rounded-sm overflow-hidden reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-white text-slate-900 px-3 py-1.5 rounded-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold">
                    {s.short}
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center">
                    <s.Icon className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-black text-xl lg:text-2xl text-slate-900 leading-tight">
                    {s.title}
                  </h3>
                  <span className="svc-num font-display font-black text-2xl text-slate-200 leading-none shrink-0">
                    {s.num}
                  </span>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed">{s.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-[13px] text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  data-testid={`service-cta-${s.testid}`}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-cta mt-7 inline-flex items-center gap-2 font-display font-bold uppercase tracking-[0.16em] text-[12px] text-slate-900"
                >
                  Request a Quote
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
