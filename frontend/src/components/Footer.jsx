import { Phone, Mail, MessageCircle, Heart } from "lucide-react";
import { CONTACTS, WHATSAPP_LINK, LOGO, NAV_LINKS } from "./constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Harshita Infrastructure" className="w-14 h-14 object-contain" />
              <div>
                <p className="font-display font-black text-white text-lg leading-none">
                  HARSHITA
                </p>
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-orange-500 font-bold">
                  Infrastructure
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm">
              Building strong foundations with quality and trust across India. Soil
              dumping, earth filling, white cement and wall putty — done right.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] font-bold text-orange-500">
              Led by Mrs. Vandana Tiwari
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="font-display font-bold text-white mb-5 text-sm uppercase tracking-[0.18em]">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="font-display font-bold text-white mb-5 text-sm uppercase tracking-[0.18em]">
              Get in touch
            </p>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  data-testid="footer-whatsapp"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: {CONTACTS.phone_primary}
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-call-satyam"
                  href={`tel:${CONTACTS.satyam_raw}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Satyam Agrawal: {CONTACTS.satyam}
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-call-sachin"
                  href={`tel:${CONTACTS.sachin_raw}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Sachin: {CONTACTS.sachin}
                </a>
              </li>
              <li>
                <a
                  data-testid="footer-email"
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p data-testid="footer-copyright">
            © {year} Harshita Infrastructure. All rights reserved.
          </p>
          <p data-testid="footer-credit" className="flex items-center gap-1.5">
            Website built by <span className="text-slate-300 font-semibold">Shivam Tiwari</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
