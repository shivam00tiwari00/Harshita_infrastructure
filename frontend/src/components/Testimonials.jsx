import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Harshita Infrastructure handled our site levelling on a tight schedule. The crew was disciplined, on-time and the quality of finish on our compound walls was first-class.",
    name: "Rakesh Mehra",
    role: "Project Manager · Mehra Developers",
  },
  {
    quote:
      "Direct, transparent quotes and an honest team. We've now used them for three different sites — earthwork on one, putty and white cement on two others. Highly recommended.",
    name: "Anita Bhandari",
    role: "Owner · Bhandari Realty",
  },
  {
    quote:
      "What stands out is Mrs. Tiwari's personal involvement. You feel the accountability from the top. Smooth communication and reliable delivery.",
    name: "Vikram Joshi",
    role: "Civil Engineer · Joshi & Co.",
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative bg-slate-50 border-y border-slate-200 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-orange-500" />
            <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
              Trusted by Builders
            </p>
          </div>
          <h2 className="font-display font-black tracking-tighter text-slate-900 text-4xl lg:text-6xl leading-[1.02]">
            Voices from
            <br />
            <span className="text-orange-500">the field.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-${i}`}
              className="reveal relative bg-white border border-slate-200 rounded-sm p-7 lg:p-8 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="w-9 h-9 text-orange-500 mb-5" strokeWidth={1.5} />
              <blockquote className="text-[15px] leading-relaxed text-slate-700 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-1 mb-2 text-orange-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <figcaption>
                  <p className="font-display font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
