# MARE — Project Context for Claude Code

## Company Overview

MARE is a consumer underwater breathing products company founded by Samuel D'Agostino, based in Miami, Florida. We are a pre-launch startup building two product lines for a new generation of divers and underwater content creators.

**Mission:** Make underwater breathing gear lighter, smarter, and more accessible for young divers and content creators.

**Stage:** Pre-launch. Website is live in email-capture mode. Provisional patents drafted. Manufacturing sourcing underway.

---

## Products

### DRIFT (Flagship)
Full-face diving helmet with integrated side-mount tank.
- Magnetic quick-release strap system (patent-pending)
- Acoustic exhaust diffuser for silent bubble exhaust (patent-pending)
- Integrated front-mount GoPro bracket for content creation
- Target weight: ~613g (40% lighter than any competitor)
- Glass-filled polycarbonate shell, coated PC visor, aluminum regulator housing
- Visor tint customization options (future feature)

### AquaPulse (Portable)
Open mask with handheld 0.5L mini tank and long-tube mouthpiece regulator.
- Handheld tank with pressure gauge
- Patented waist-belt attachment (coming soon) — holds up to 2 tanks for extended dive time
- No certification required for the user
- Ultra-portable, travel-friendly, beach-ready

---

## Tech Stack

- **Frontend:** React (Vite build)
- **Hosting:** GitHub Pages (auto-deploy via GitHub Actions)
- **Email Capture:** Firebase Firestore (`waitlist` collection)
- **Fonts:** Syne (headlines), Outfit (body)
- **Images:** Base64-embedded (product photos + Unsplash background photography)
- **Repo:** github.com/Samueldagostino/Mare

### Firebase Config
- Project: mare-e77e6
- Firestore collection: `waitlist` (fields: email, interest, timestamp)
- Security rules: create-only from client, no read/update/delete

### File Structure
```
Mare/
  .github/workflows/deploy.yml
  src/
    main.jsx
    mare-site.jsx                  # Full website component (~970KB with embedded images)
  index.html
  package.json
  vite.config.js
  CLAUDE.md                        # This file
```

---

## Design System

### Brand Identity
- **Vibe:** Bright adventure meets Apple-level cleanliness. "What IS this?" curiosity.
- **Emotion:** "This is different" — intrigue and aspiration
- **References:** GoPro (action, energy, user-generated content) x Apple (minimal, premium, product hero shots)
- **NOT:** Childish, cheap, generic tech template, overly dark, stock-photo-heavy

### Color Palette
- Ocean: `#0891b2` (primary)
- Ocean Light: `#22d3ee` (accent, highlights, active states)
- Ocean Deep: `#0e7490`
- Coral/Orange: `#f97316` (AquaPulse accent, CTAs, "coming soon" badges)
- Page Dark: `#020a18` (base background between sections)
- Text: White with text-shadow for legibility over photos

### Typography
- **Headlines:** `'Syne', sans-serif` — weight 700-800, tight letter-spacing
- **Body:** `'Outfit', sans-serif` — weight 300-600, clean and readable

### Photography Backgrounds
The site uses real Unsplash photography embedded as base64:
- Sunset beach (hero + signup sections)
- Clear blue underwater (splash/stats + DRIFT section)
- Coral reef (products overview + "why different" section)
- Deep ocean sun beams (AquaPulse section)

Each background uses the `BgImg` component with natural brightness and smooth gradient overlays that fade edges into the page dark color for seamless section-to-section blending.

### UI Components
- **Glass cards** (`.gc`): Dark frosted glass with backdrop blur, subtle borders, hover lift
- **CTA buttons**: Pill-shaped (border-radius: 100px), gradient primary, frosted outline secondary
- **Product galleries**: Thumbnail selector with active state ring
- **Scroll reveals**: Fade-up on intersection, staggered delays
- **Floating bubbles**: CSS animated particles rising (subtle, background layer)

---

## Design Principles

1. **Photography is the star.** Never bury real photos behind dark overlays. Minimal gradients at section edges for blending, text shadows for legibility.
2. **Every button goes somewhere.** No dead links. No placeholder interactions.
3. **Premium feel.** High-end product launch site. Clean spacing, confident typography, no clutter.
4. **Content-creator focused.** GoPro integration, clean audio, camera-friendly visor are selling points.
5. **Mobile-first readiness.** All layouts must work on mobile screens.
6. **No AI slop.** No generic purple gradients, no Inter/Roboto, no cookie-cutter layouts. Every design choice is intentional.

---

## Current Priorities

### Immediate (Website Polish)
- Mobile responsiveness across all sections
- Smoother scroll animations and micro-interactions
- Refine text legibility on all background photos
- Loading states for heavy base64 images
- SEO meta tags and Open Graph images for social sharing

### Near-Term (Content Depth)
- DRIFT full specs sheet / detailed product page
- AquaPulse detailed product page
- "About MARE" / founder story section
- FAQ section
- Social media links (Instagram, TikTok)

### Medium-Term (Business)
- File provisional patents (inventor: Samuel D'Agostino, micro-entity)
- Custom domain
- Email notification on new signups (Firebase Cloud Functions)
- Engage SMACO/DEDEPU for tank sourcing, AQUATEC for regulators

---

## Key Product Data

### DRIFT Weight Comparison
- Ocean Reef Predator: ~1,030g
- OTS Guardian: ~850g
- Scubapro FFM: ~800-950g
- DRIFT Lightweight: ~613g
- DRIFT Premium (Carbon): ~430g

### BOM Costs
- DRIFT Standard: $27-43/unit | Lightweight: $38-58/unit | Premium: $95-158/unit
- AquaPulse: $51-102/unit | Suggested retail: $149-249

### Patent-Worthy Innovations
1. Magnetic quick-release strap retention system
2. Acoustic exhaust diffuser for content creation

---

## Competitor Landscape
- Ocean Reef: Premium FFMs, $1,200+, heavy (~1,030g), comms-ready
- OTS: Commercial/military, $650-750, ~850g
- Scubapro: Pro cold water, $500-900, ~800-950g
- SMACO/DEDEPU: Mini tank kits (supply chain partners, not competitors)

MARE's positioning: lighter than all pro FFMs, designed for content creators and young divers, not commercial/military users.

---

## Working With This Project

### When editing the website:
- Single React component (`src/mare-site.jsx`) ~970KB due to base64-embedded images
- All styles are inline JSX — no external CSS files
- Firebase imported at the top of the component
- Deploy happens automatically when changes are pushed to `main`

### When writing copy:
- Tone: Confident, clean, aspirational — never salesy or desperate
- Address the audience directly with "you" language
- Keep it short. If a sentence doesn't earn its place, cut it.

### When discussing business/manufacturing:
- Provisional patents MUST be filed before any OEM supplier contact
- Development budget: $34K-$93K without EN 250, $49K-$133K with it
- Timeline: ~12-14 months from patent filing to production run
