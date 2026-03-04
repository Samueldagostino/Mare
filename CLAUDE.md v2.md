# MARE — Project Context for Claude Code

> This is the single source of truth for anyone (human or AI) working on the MARE project.
> Read this file completely before making any changes or giving any advice.

---

## 1. Company Overview

**MARE** is a consumer underwater breathing products company founded by **Samuel D'Agostino**, based in Miami, Florida.

- **Stage:** Pre-launch. Website live in email-capture mode. Provisional patents drafted (not yet filed). Manufacturing sourcing research complete.
- **Mission:** Make underwater breathing gear lighter, smarter, and more accessible for young divers and content creators.
- **Positioning:** Premium consumer brand. NOT commercial/military/industrial. Think GoPro for underwater breathing, not Scubapro for dive shops.
- **Website:** https://samueldagostino.github.io/Mare/
- **Repo:** github.com/Samueldagostino/Mare

---

## 2. Products

### DRIFT (Flagship — Full-Face Helmet)
- Full-face diving helmet with integrated side-mount 0.5L tank
- **Patent-pending innovations:**
  - Magnetic quick-release 5-point strap retention system (neodymium N52 magnets in glass-filled nylon housing)
  - Acoustic exhaust diffuser (PA66-GF30 + LSR membrane) for silent bubble exhaust during content creation
- Integrated front-mount GoPro bracket
- Visor tint customization options (future feature — SVG clip paths already generated)
- Comms-ready port for underwater communication
- **Target weight:** ~613g lightweight build (40% lighter than ANY competitor)
- **Materials:** Glass-filled polycarbonate shell (PC-GF20), coated polycarbonate visor, marine-grade aluminum 6061-T6 regulator housing, LSR face seal
- **Premium tier:** Carbon fiber build at ~430g (marketing halo product)
- **BOM:** Standard $27-43 | Lightweight $38-58 | Premium $95-158 per unit
- **Target retail:** $299-499 (Lightweight), $599-899 (Premium Carbon)

### AquaPulse (Portable — Open Mask System)
- Traditional open mask with separate handheld 0.5L mini tank
- Long-tube mouthpiece regulator connecting tank to mouth
- **Coming soon:** Patented waist-belt attachment — holds up to 2 tanks for extended dive time (currently in design)
- No dive certification required for user
- Ultra-portable, travel-friendly, beach-ready
- **BOM:** $51-102 per unit (mask + air system)
- **Target retail:** $149-249

---

## 3. Target Audience

### Primary
- **Age:** 18-35 (Gen Z and young millennials)
- **Lifestyle:** Beach/ocean lifestyle, travel, adventure sports
- **Key trait:** Creates content underwater (GoPro, phone in waterproof case, TikTok/Instagram/YouTube)
- **Pain point:** Current diving gear is heavy, ugly, complicated, and designed for old-school commercial divers — not them

### Secondary
- Casual snorkelers who want to breathe longer without a full scuba setup
- Travel divers who don't want to carry heavy gear
- Freediving beginners looking for a safety backup air supply

### NOT our audience
- Professional/commercial divers (they have gear and don't care about weight)
- Military/rescue operations
- Budget-conscious snorkelers who just want a $20 mask

---

## 4. Tech Stack

### Frontend
- **Framework:** React 18 (Vite build system)
- **Hosting:** GitHub Pages (auto-deploy via GitHub Actions on push to `main`)
- **Single component:** `src/mare-site.jsx` (~970KB — large because 9 images are base64-embedded)
- **Entry point:** `src/main.jsx` → renders `<Mare />`
- **Styles:** All inline JSX. No external CSS files. No Tailwind (artifact rendering constraint).
- **Fonts:** Google Fonts — Syne (headlines) + Outfit (body)

### Email Capture
- **Backend:** Firebase Firestore (project: `mare-e77e6`)
- **Collection:** `waitlist`
- **Fields per document:** `email` (string), `interest` (string: "drift" | "aquapulse" | "both"), `timestamp` (serverTimestamp)
- **Security rules:** `allow create: if true;` / `allow read, update, delete: if false;`
- **Admin access:** Firebase console only (Samuel)

### Deployment
- Push to `main` triggers `.github/workflows/deploy.yml`
- GitHub Actions: checkout → Node 20 → `npm install` → `npm run build` → deploy `./dist` to Pages
- Typical build time: ~30-45 seconds
- Live URL: `https://samueldagostino.github.io/Mare/`

### File Structure
```
Mare/
  .github/workflows/deploy.yml     # Auto-deploy pipeline
  src/
    main.jsx                        # React entry point
    mare-site.jsx                   # Entire website (~970KB with base64 images)
  index.html                        # HTML shell with meta tags
  package.json                      # React 18, Firebase 11, Vite 5
  vite.config.js                    # base: './' for GitHub Pages
  CLAUDE.md                         # THIS FILE — project brain
```

---

## 5. Design System

### Brand Identity
- **Vibe:** Bright adventure meets Apple-level cleanliness
- **Core emotion:** "This is different" — curiosity and intrigue
- **Aspirational references:** GoPro (action, energy, UGC) x Apple (minimal, premium, hero shots)
- **Anti-references:** Generic tech startups, children's products, cheap Amazon listings, stock-photo-heavy corporate sites

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Ocean | `#0891b2` | Primary brand color, nav active states |
| Ocean Light | `#22d3ee` | Accents, highlights, CTA gradient end, active rings |
| Ocean Deep | `#0e7490` | Darker accent contexts |
| Coral | `#f97316` | AquaPulse accent, "coming soon" badges, secondary CTAs |
| Page Dark | `#020a18` | Base background, section blending target |
| White | `#ffffff` | Primary text color |
| Off-White | `#e8f4f8` | Subtle text variation (used in hero "the surface.") |

### Typography
- **Headlines:** `'Syne', sans-serif` — weight 700-800, letter-spacing -0.02em to -0.03em
- **Body:** `'Outfit', sans-serif` — weight 300-600, clean and highly readable
- **Sizing:** Use `clamp()` for responsive type scaling
- **Text over photos:** Always use multi-layer text-shadow for legibility:
  ```
  textShadow: "0 2px 6px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.4)"
  ```

### Photography
Four Unsplash photos embedded as base64 serve as section backgrounds:
1. **Sunset beach** (Hawaii golden hour) → Hero section + Signup section
2. **Clear blue underwater** (light from surface) → Splash/stats + DRIFT section
3. **Coral reef** (deep blue with reef texture) → Products overview + "Why Different"
4. **Deep ocean sun beams** (dramatic light rays) → AquaPulse section

**CRITICAL RULE:** Photography is the star. Never bury photos behind heavy dark overlays. Use the `BgImg` component with:
- `brightness` at 0.75-0.9 (natural, not crushed)
- Gradient overlay that fades edges into `#020a18` for section blending only
- Text readability handled via text-shadow, not by darkening photos

### Five Product Images (base64-embedded, cropped clean — no watermarks)
- `ap1` — AquaPulse side view with tank held in hand
- `ap2` — AquaPulse front view with tank and mouthpiece
- `ap3` — AquaPulse mask only with mouthpiece (no tank visible)
- `dF` — DRIFT helmet front view
- `dS` — DRIFT helmet side profile view

### UI Components
| Component | Description |
|-----------|-------------|
| `BgImg` | Background photo with brightness control + blending gradient overlay |
| `SR` (ScrollReveal) | Fade-up animation on scroll intersection, configurable delay |
| `AC` (AnimCounter) | Animated number counter triggered on scroll visibility |
| `PG` (ProductGallery) | Image viewer with thumbnail selector and active ring |
| `.gc` (glass-card) | Frosted dark glass: `rgba(2,10,24,0.55)` + backdrop blur + hover lift |
| `.cb` (cta-btn) | Pill-shaped button (border-radius: 100px) |
| `.cp` (cta-primary) | Gradient fill: ocean → ocean-light |
| `.co` (cta-outline) | Frosted outline with dark background blur |
| `.nl` (nav-link) | Underline-on-hover navigation link |
| `.ib` (interest-btn) | Pill toggle for waitlist product selection |
| `.bb` (bubble) | Floating animated particle (CSS keyframe: bubbleRise) |

---

## 6. Design Principles (NON-NEGOTIABLE)

1. **Photography is the star.** Never darken backgrounds below brightness 0.7. The ocean photos ARE the brand.
2. **Every button goes somewhere.** Zero dead links. Zero placeholder interactions. If it's clickable, it works.
3. **Premium feel always.** Think high-end product launch. Clean spacing, confident type, no clutter, no desperation.
4. **Content-creator first.** GoPro mount, acoustic diffuser, clean audio — these are headline features, not footnotes.
5. **Mobile must work.** Every layout must degrade gracefully to single-column on mobile.
6. **No AI slop.** No Inter/Roboto. No purple gradients. No cookie-cutter card grids. No "lorem ipsum." Every choice is intentional.
7. **Text must be readable.** Triple-layer text shadows on all text over photography. Glass card backgrounds for dense text blocks.
8. **Smooth transitions.** Sections blend into each other through the page dark color. No hard visual cuts.
9. **Fast loading matters.** The site is ~970KB due to base64 images. Don't add unnecessary weight. Optimize where possible.
10. **Test before pushing.** Always run `npm run build` before committing. Never push broken code to main.

---

## 7. Image Handling Rules

When processing images for this project:
- **Product images:** Resize to 700x700, JPEG quality 65, via PIL/Pillow
- **Background images:** Resize to 1600px wide (maintain aspect ratio), JPEG quality 60
- **All images:** Base64-encode and embed directly in `mare-site.jsx`
- **Crop rules:** Remove any watermarks, UI elements, black borders, or "Click to Zoom" overlays before embedding
- **No external image URLs.** The site's artifact/sandbox environment blocks external image loading. Everything must be base64-embedded.

---

## 8. Git & Deployment Workflow

### For Claude Code:
1. Make changes to files in `src/`
2. Run `npm run build` to verify no errors
3. If build passes, commit with a clear descriptive message
4. Push to `main` — GitHub Actions auto-deploys within ~45 seconds
5. Verify at https://samueldagostino.github.io/Mare/

### Commit message conventions:
- `feat: Add mobile responsive nav` (new feature)
- `fix: Resolve text legibility on hero section` (bug fix)
- `style: Adjust spacing in product cards` (visual tweak)
- `docs: Update CLAUDE.md with new priorities` (documentation)

### NEVER:
- Force push to main
- Delete the `.github/workflows/deploy.yml`
- Remove or modify Firebase config without Samuel's explicit approval
- Push code that fails `npm run build`

---

## 9. Copywriting Guidelines

### Voice & Tone
- **Confident.** We know our product is better. We don't need to shout about it.
- **Clean.** Short sentences. No fluff. If a word doesn't earn its place, cut it.
- **Aspirational.** Paint the feeling — the water, the freedom, the moment.
- **Never salesy.** No "Buy now!" No "Limited time!" No "Don't miss out!" This is a premium brand, not a clearance sale.
- **"You" language.** "Your next dive" not "the diver's next dive."

### Approved terminology
- "Underwater breathing gear" (not "scuba equipment" — we're broader than scuba)
- "Content creators" (not "influencers")
- "Young divers" or "next generation" (not "beginners" — that sounds condescending)
- "Engineered" (not "designed" — engineered implies depth and precision)
- "Patent-pending" (not "patented" — they aren't filed yet)

### Copy that already works well (reference these for tone):
- "Breathe beneath the surface."
- "DRIFT isn't a mask. It's a platform."
- "AquaPulse. Just grab it and go."
- "Not just lighter. Different."
- "Every full-face mask on the market was designed for commercial divers. MARE was designed for you."

---

## 10. Competitive Intelligence

| Competitor | Price | Weight | Target | MARE Advantage |
|-----------|-------|--------|--------|----------------|
| Ocean Reef Predator | $1,200+ | ~1,030g | Pro, comms | 40% lighter, content-focused |
| OTS Guardian | $650-750 | ~850g | Military/commercial | 28% lighter, consumer UX |
| Scubapro FFM | $500-900 | ~800-950g | Pro cold water | Lighter, modern design |
| Scubapro FM2 | $800-900 | ~750-850g | Pro EN250 | Lighter, magnetic straps |
| Generic snorkel FF | $30-80 | ~554g | Surface only | Actual diving capability |

**Nobody** currently offers: magnetic quick-release straps, acoustic exhaust diffuser, integrated GoPro mount, or a full-face mask under 650g. MARE owns all four.

---

## 11. Manufacturing & IP

### IP Protection (TOP PRIORITY)
- Two provisional patent applications drafted and ready for attorney review
- **Invention 1:** Magnetic Quick-Release Strap Retention System
- **Invention 2:** Acoustic Exhaust Diffuser
- Inventor: Samuel D'Agostino
- Filing status: Micro-entity under 35 U.S.C. §123
- **CRITICAL: Provisionals MUST be filed before ANY contact with OEM suppliers**

### Supply Chain Targets
- **Tanks:** SMACO (Shenzhen), DEDEPU (Shenzhen) — pre-certified DOT/CE 0.5L aluminum cylinders
- **Regulators:** AQUATEC (Taiwan) — RG-2100S and RG-3100S candidates, also potential mask OEM partner
- **Custom components:** Helmet mount cradle + sealed bulkhead fitting (proprietary, needs tooling)

### Budget
- Without EN 250 certification: $34K-$93K
- With EN 250 certification: $49K-$133K
- Timeline: ~12-14 months from patent filing to first production run

---

## 12. Current Priorities (Ordered)

### P0 — Immediate (Website Polish)
- [ ] Mobile responsiveness across all sections
- [ ] Loading performance optimization (lazy-load sections below fold)
- [ ] SEO: meta description, Open Graph tags, Twitter card, favicon
- [ ] Accessibility: aria labels, keyboard navigation, focus states
- [ ] Smooth scroll behavior polish

### P1 — Near-Term (Content Depth)
- [ ] DRIFT detailed product page (specs, materials, weight comparison chart)
- [ ] AquaPulse detailed product page
- [ ] "About MARE" / founder story section
- [ ] FAQ section (depth rating, tank refill, safety, shipping timeline)
- [ ] Social media links (Instagram, TikTok — where the target audience lives)
- [ ] Photo gallery / lifestyle imagery section

### P2 — Medium-Term (Business Infrastructure)
- [ ] File provisional patents with patent attorney
- [ ] Email notification on new waitlist signups (Firebase Cloud Functions or email forwarding)
- [ ] Custom domain registration and setup
- [ ] Privacy policy and terms of service pages
- [ ] Google Analytics or Plausible for traffic tracking
- [ ] Waitlist dashboard (admin view of signups)

### P3 — Future (Growth)
- [ ] Product configurator (visor tint selector, DRIFT vs AquaPulse comparison tool)
- [ ] Blog / content section for SEO and community building
- [ ] Pre-order functionality when IP is secured
- [ ] Investor pitch deck / materials
- [ ] Ambassador / early tester program

---

## 13. Agent Operating Modes

When working in Claude Code, use these mode prefixes:

| Mode | Purpose |
|------|---------|
| `/build` | Frontend development. Read CLAUDE.md first. Explain changes before making them. Run `npm run build` to verify. Push only clean code. |
| `/design` | Creative direction. Audit the site for visual issues, consistency, mobile problems, dead buttons, cheap-looking elements. Prioritized fix list. |
| `/copy` | Brand copywriting. Confident, clean, aspirational. Short sentences. "You" language. Reference product specs for accuracy. |
| `/research` | Business strategy. Manufacturing, competitors, patents, go-to-market, pricing. Reference CLAUDE.md data before external research. |
| `/specs` | Technical product documentation. Precise specifications using material analysis and BOM data. For consumer spec sheets and OEM communication. |

---

## 14. Things That Must Never Happen

- Darkening photography backgrounds below brightness 0.7
- Adding external image URLs (sandbox blocks them — base64 only)
- Pushing code that fails `npm run build`
- Using generic fonts (Inter, Roboto, Arial, system-ui)
- Creating dead/placeholder buttons or links
- Contacting OEM suppliers before patents are filed
- Sharing Firebase credentials publicly (they're in the source code but Firestore rules restrict access)
- Using the words "buy now", "limited time", "don't miss out", or any desperate sales language
- Making the site look childish, cheap, or template-generated
- Removing or modifying the `CLAUDE.md` file without Samuel's approval
