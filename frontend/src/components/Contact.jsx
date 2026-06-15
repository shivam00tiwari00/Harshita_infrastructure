import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACTS, WHATSAPP_LINK, LOGO } from "./constants";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-orange-500" />
              <p className="text-[12px] font-bold tracking-[0.32em] uppercase text-orange-500">
                Start a Project
              </p>
            </div>
            <h2 className="font-display font-black tracking-tighter text-slate-900 text-4xl lg:text-6xl leading-[1.02]">
              Tell us about
              <br />
              your <span className="text-orange-500">site.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md">
              Send us a quick message on WhatsApp or give the HR team a call — we&rsquo;ll
              share a timeline and a transparent quote within 24 hours.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-sm">
              <img src={LOGO} alt="logo" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-display font-black text-slate-900">Harshita Infrastructure</p>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Serving sites Pan-India
                </p>
              </div>
            </div>
          </div>

          {/* Right — contact cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 reveal">
            {/* WhatsApp big card */}
            <a
              data-testid="contact-whatsapp-card"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 group bg-slate-900 text-white rounded-sm p-8 lg:p-10 flex items-center justify-between gap-6 hover:bg-orange-500 transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-sm flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-orange-400 group-hover:text-white mb-1">
                    Fastest Reply
                  </p>
                  <p className="font-display font-black text-xl lg:text-3xl leading-tight">
                    WhatsApp us now
                  </p>
                  <p className="text-sm text-slate-400 group-hover:text-white/90 mt-1">
                    {CONTACTS.phone_primary}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-8 h-8 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Satyam */}
            <a
              data-testid="contact-satyam-card"
              href={`tel:${CONTACTS.satyam_raw}`}
              className="group bg-white border border-slate-200 hover:border-orange-500 rounded-sm p-7 transition-colors"
            >
              <Phone className="w-6 h-6 text-orange-500 mb-5" />
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-orange-500 mb-1">
                HR Team
              </p>
              <p className="font-display font-bold text-xl text-slate-900">Satyam Agrawal</p>
              <p className="text-sm text-slate-600 mt-2">{CONTACTS.satyam}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-900 group-hover:text-orange-500">
                Call now <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Sachin */}
            <a
              data-testid="contact-sachin-card"
              href={`tel:${CONTACTS.sachin_raw}`}
              className="group bg-white border border-slate-200 hover:border-orange-500 rounded-sm p-7 transition-colors"
            >
              <Phone className="w-6 h-6 text-orange-500 mb-5" />
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-orange-500 mb-1">
                HR Team
              </p>
              <p className="font-display font-bold text-xl text-slate-900">Sachin</p>
              <p className="text-sm text-slate-600 mt-2">{CONTACTS.sachin}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-900 group-hover:text-orange-500">
                Call now <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Email */}
            <a
              data-testid="contact-email-card"
              href={`mailto:${CONTACTS.email}`}
              className="sm:col-span-2 group bg-orange-500 text-white rounded-sm p-8 flex items-center justify-between gap-6 hover:bg-orange-600 transition-colors"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/15 rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-white/80 mb-1">
                    Drop an email
                  </p>
                  <p className="font-display font-black text-lg lg:text-2xl leading-tight break-all">
                    {CONTACTS.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-7 h-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
