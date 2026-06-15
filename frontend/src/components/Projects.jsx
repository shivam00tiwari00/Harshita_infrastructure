import { ArrowUpRight } from "lucide-react";
import { PROJECT_IMGS } from "./constants";

const PROJECTS = [
  {
    title: "Commercial Earthwork — Pune",
    type: "Site Preparation",
    scope: "Soil dumping & levelling",
    img: PROJECT_IMGS[0],
  },
  {
    title: "High-Rise Substructure — Lucknow",
    type: "Industrial",
    scope: "Earth filling",
    img: PROJECT_IMGS[1],
  },
  {
    title: "Architectural Façade — Indore",
    type: "Surface Finish",
    scope: "White cement & putty",
    img: PROJECT_IMGS[2],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-500" />
              <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
                Selected Work
              </p>
            </div>
            <h2 className="font-display font-black tracking-tighter text-slate-900 text-4xl lg:text-6xl leading-[1.02]">
              On site,
              <br />
              <span className="text-orange-500">across India.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base lg:text-lg leading-relaxed">
            A snapshot of recent assignments — from earthwork at greenfield sites to
            architectural finishing on completed structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              data-testid={`project-card-${i}`}
              className="project-card group relative rounded-sm overflow-hidden bg-slate-900 reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              </div>

              <div className="absolute top-5 left-5">
                <span className="inline-flex bg-orange-500 text-white text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-sm">
                  {p.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 text-white project-meta">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-orange-400 mb-2">
                  {p.scope}
                </p>
                <h3 className="font-display font-bold text-xl lg:text-2xl leading-tight">
                  {p.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/90 group-hover:text-orange-400 transition-colors">
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Process band */}
        <div className="mt-20 grid lg:grid-cols-4 gap-6 lg:gap-8 reveal">
          {[
            { n: "01", t: "Discuss", d: "Share your site, timeline and scope on WhatsApp." },
            { n: "02", t: "Quote", d: "Transparent, itemised quotation with no hidden costs." },
            { n: "03", t: "Execute", d: "Disciplined crew deployment with daily reporting." },
            { n: "04", t: "Handover", d: "Quality-checked delivery, ready for the next stage." },
          ].map((s) => (
            <div
              key={s.n}
              data-testid={`process-step-${s.n}`}
              className="relative border-t-2 border-slate-900 pt-5"
            >
              <p className="font-display font-black text-orange-500 text-sm tracking-[0.18em]">
                STEP {s.n}
              </p>
              <h4 className="mt-3 font-display font-bold text-2xl text-slate-900">{s.t}</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
