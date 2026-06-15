import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LOGO, NAV_LINKS, WHATSAPP_LINK, CONTACTS } from "./constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#0F172A] text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">
          <p className="tracking-wider uppercase text-[11px]">
            Pan-India Earthwork &amp; Surface Finish Specialists
          </p>
          <div className="flex items-center gap-5">
            <a
              data-testid="top-bar-phone"
              href={`tel:${CONTACTS.phone_primary_raw}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {CONTACTS.phone_primary}
            </a>
            <span className="text-slate-500">|</span>
            <a
              data-testid="top-bar-email"
              href={`mailto:${CONTACTS.email}`}
              className="hover:text-orange-400 transition-colors"
            >
              {CONTACTS.email}
            </a>
          </div>
        </div>
      </div>

      <header
        data-testid="site-navbar"
        className={`sticky top-0 z-50 bg-white border-b transition-shadow ${
          scrolled ? "border-slate-200 shadow-[0_8px_30px_-15px_rgba(15,23,42,0.18)]" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" data-testid="navbar-logo-link" className="flex items-center gap-3">
            <img src={LOGO} alt="Harshita Infrastructure" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="font-display font-black text-[15px] tracking-tight text-slate-900">
                HARSHITA
              </p>
              <p className="font-display text-[11px] uppercase tracking-[0.22em] text-orange-500 font-bold">
                Infrastructure
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[13px] uppercase tracking-[0.18em] font-semibold text-slate-700 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              data-testid="navbar-whatsapp-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-push bg-slate-900 text-white px-5 py-3 rounded-sm font-bold text-[12px] uppercase tracking-[0.18em] hover:bg-orange-500"
            >
              Get a Quote
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm border border-slate-300 text-slate-900"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div data-testid="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="py-3 text-base font-semibold text-slate-800 border-b border-slate-100"
                >
                  {l.label}
                </a>
              ))}
              <a
                data-testid="mobile-whatsapp-cta"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex justify-center bg-orange-500 text-white font-bold uppercase tracking-wider py-4 rounded-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
