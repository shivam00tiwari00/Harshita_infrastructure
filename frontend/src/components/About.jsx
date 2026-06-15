import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ABOUT_IMG, LOGO } from "./constants";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Heading column */}
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-500" />
              <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
                Who We Are
              </p>
            </div>
            <h2 className="font-display font-black tracking-tighter text-slate-900 text-4xl lg:text-5xl xl:text-6xl leading-[1.02]">
              Foundations of
              <br />
              modern India,
              <br />
              <span className="text-orange-500">poured by us.</span>
            </h2>

            <div className="mt-10 relative">
              <img
                src={ABOUT_IMG}
                alt="Modern construction site"
                className="w-full h-72 object-cover rounded-sm"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-5 py-3 rounded-sm shadow-lg">
                <p className="font-display font-black text-sm uppercase tracking-wider">
                  Since Day One
                </p>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 reveal">
            <p className="text-lg lg:text-xl leading-relaxed text-slate-700">
              Harshita Infrastructure is dedicated to delivering dependable infrastructure
              support across India. From large-scale soil dumping and earth filling to
              precision white cement and wall putty finishes — we provide end-to-end
              solutions that form the backbone of contemporary construction.
            </p>

            <div className="mt-8 p-6 lg:p-8 border-l-4 border-orange-500 bg-slate-50 rounded-sm">
              <div className="flex items-start gap-5">
                <img
                  src={LOGO}
                  alt="Harshita logo mark"
                  className="w-14 h-14 object-contain shrink-0"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-orange-500 mb-1">
                    Leadership
                  </p>
                  <p className="font-display font-bold text-2xl text-slate-900">
                    Mrs. Vandana Tiwari
                  </p>
                  <p className="text-slate-600 mt-2 leading-relaxed">
                    Driving every project with discipline, transparency and a relentless
                    commitment to quality — the values that have shaped Harshita
                    Infrastructure into a name builders trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Residential, commercial & industrial projects",
                "Premium quality materials only",
                "Disciplined, on-time execution",
                "Transparent pricing & quotations",
                "Pan-India deployment capability",
                "Direct founder-led accountability",
              ].map((point) => (
                <div
                  key={point}
                  data-testid={`about-point-${point.split(" ")[0].toLowerCase()}`}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700 leading-snug">{point}</p>
                </div>
              ))}
            </div>

            <a
              data-testid="about-services-link"
              href="#services"
              className="mt-10 inline-flex items-center gap-2 font-display font-bold uppercase tracking-[0.18em] text-sm text-slate-900 hover:text-orange-500 transition-colors group"
            >
              See what we build
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
