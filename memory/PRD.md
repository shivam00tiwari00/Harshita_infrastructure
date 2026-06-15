# Harshita Infrastructure — Marketing Site

## Original Problem Statement
Build a polished single-page React marketing website for **Harshita Infrastructure** (Pan-India construction services led by Mrs. Vandana Tiwari), upgrading a basic HTML draft into a bold, industrial-grade B2B site that wins contracts. Services: Soil Dumping, White Cement, Wall Putty. Contact via WhatsApp +91 73551 43354, HR (Satyam +91 70712 74245, Sachin +91 94159 40006), Email Harshitainfrastructure2@gmail.com.

## Architecture
- **Frontend**: React 19 + React Router + Tailwind CSS
- **Type**: Pure marketing single-page site (no backend required — all CTAs are mailto / tel / wa.me deep links)
- **Fonts**: Outfit (display) + Manrope (body) via Google Fonts
- **Icons**: lucide-react
- **Animations**: IntersectionObserver-driven reveals + count-up stats + CSS keyframes (no framer-motion needed)

## User Personas
1. **Builders / Developers** — looking for reliable earthwork & finishing partners with Pan-India deployment
2. **Project Managers** — need quick WhatsApp/phone access for quotes
3. **Property Owners** — vetting an infrastructure company for trust & quality signals

## Core Requirements (Static)
- Bold industrial aesthetic matching the navy + orange logo
- Hero with WhatsApp + Services CTAs
- About section featuring Mrs. Vandana Tiwari
- Three services (Soil Dumping, White Cement, Wall Putty) with images & feature lists
- Why-Us / Stats section with animated counters
- Project showcase + 4-step process band
- Testimonials
- Contact block with WhatsApp, two HR phone numbers, email
- Sticky footer with credit to Shivam Tiwari
- Floating WhatsApp FAB on every screen

## Implemented (2026-01)
- Sticky navbar with utility bar (phone + email) and mobile menu
- Hero with logo card, image, decorative blocks, badges, and a marquee ticker
- About section with founder quote-card and 6 trust points
- Services grid (3 cards) with images, feature bullets and per-service WhatsApp CTA
- Why-Us section with 4 animated count-up stats + 4 trust pillars on dark slate background
- Projects gallery (3 cards) with hover zoom + 4-step process band
- Testimonials (3 quotes with 5-star ratings)
- Contact section with WhatsApp big card, two HR cards, prominent email block
- Footer with brand, nav links, all contact details, copyright, and "Built by Shivam Tiwari ❤"
- Floating WhatsApp FAB with pulse animation

## Prioritized Backlog
- **P1**: Add real project photo gallery once user shares actual site photos
- **P1**: Service-area map (highlight key cities served)
- **P2**: Add an inline lead-capture form (SendGrid/Resend integration → email)
- **P2**: SEO meta tags + Open Graph image
- **P2**: Add Hindi language toggle for Tier-2/3 audience
- **P3**: Add a downloadable company profile PDF

## Next Tasks
- Awaiting user feedback after Wow moment
- Consider lead-capture form for higher conversion
