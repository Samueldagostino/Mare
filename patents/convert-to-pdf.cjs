const { PDFDocument, StandardFonts, rgb, PageSizes } = require("pdf-lib");
const fs = require("fs");
const sharp = require("sharp");

// We'll regenerate the patent content directly as PDF
// This creates clean, phone-readable PDFs

async function svgToPng(svgStr) {
  return await sharp(Buffer.from(svgStr, "utf-8")).resize(1200).png().toBuffer();
}

async function createPatentPDF(title, shortTitle, sections, figSvgs, figCaptions, outputPath) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_W = 612; // US Letter
  const PAGE_H = 792;
  const MARGIN = 72; // 1 inch
  const MAX_W = PAGE_W - 2 * MARGIN;
  const BODY_SIZE = 11;
  const HEAD_SIZE = 13;
  const LINE_H = BODY_SIZE * 1.6;

  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  function newPage() {
    page = doc.addPage([PAGE_W, PAGE_H]);
    y = PAGE_H - MARGIN;
    // Header
    page.drawText("Provisional Patent Application — " + shortTitle, {
      x: MARGIN, y: PAGE_H - 50, size: 8, font: fontItalic, color: rgb(0.4, 0.4, 0.4)
    });
    y = PAGE_H - MARGIN;
  }

  function checkSpace(needed) {
    if (y - needed < MARGIN + 20) newPage();
  }

  function drawHeading(text) {
    checkSpace(40);
    y -= 20;
    page.drawText(text, { x: MARGIN, y, size: HEAD_SIZE, font: fontBold });
    y -= LINE_H + 4;
  }

  function wrapText(text, f, size, maxW) {
    const words = text.split(' ');
    const lines = [];
    let current = '';
    for (const word of words) {
      const test = current ? current + ' ' + word : word;
      const w = f.widthOfTextAtSize(test, size);
      if (w > maxW && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function drawBody(text, opts = {}) {
    const f = opts.bold ? fontBold : (opts.italic ? fontItalic : font);
    const indent = opts.bullet ? 20 : 0;
    const lines = wrapText(text, f, BODY_SIZE, MAX_W - indent);
    for (const line of lines) {
      checkSpace(LINE_H);
      if (opts.bullet && line === lines[0]) {
        page.drawText("•", { x: MARGIN, y, size: BODY_SIZE, font });
      }
      page.drawText(line, { x: MARGIN + indent, y, size: BODY_SIZE, font: f });
      y -= LINE_H;
    }
    y -= 4;
  }

  // Title page
  page.drawText("PROVISIONAL PATENT APPLICATION", {
    x: MARGIN + 80, y: PAGE_H - 150, size: 16, font: fontBold
  });
  page.drawText("Filed under 35 U.S.C. §111(b)", {
    x: MARGIN + 130, y: PAGE_H - 175, size: 11, font: fontItalic
  });
  y = PAGE_H - 220;

  // Sections
  for (const section of sections) {
    if (section.type === 'heading') {
      drawHeading(section.text);
    } else if (section.type === 'body') {
      drawBody(section.text, section.opts || {});
    } else if (section.type === 'break') {
      newPage();
    } else if (section.type === 'space') {
      y -= 8;
    }
  }

  // Figures
  for (let i = 0; i < figSvgs.length; i++) {
    newPage();
    try {
      const pngBuf = await svgToPng(figSvgs[i]);
      const img = await doc.embedPng(pngBuf);
      const scale = Math.min(MAX_W / img.width, (PAGE_H - 2 * MARGIN - 60) / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      page.drawImage(img, {
        x: MARGIN + (MAX_W - w) / 2,
        y: PAGE_H - MARGIN - h - 20,
        width: w, height: h
      });
      page.drawText(figCaptions[i], {
        x: MARGIN + 50, y: PAGE_H - MARGIN - h - 45,
        size: 10, font: fontBold
      });
    } catch (e) {
      page.drawText("Figure " + (i+1) + " — See SVG file", {
        x: MARGIN, y: PAGE_H - MARGIN - 50, size: 12, font
      });
    }
  }

  const bytes = await doc.save();
  fs.writeFileSync(outputPath, bytes);
  console.log("Generated:", outputPath, "(" + (bytes.length / 1024).toFixed(0) + " KB)");
}

// ---- PATENT 1: AquaPulse ----
async function patent1() {
  const figs1 = require("./generate-patent-1.cjs");
  // We need the SVG strings - read from saved files
  const svgs = [1,2,3,4].map(i => fs.readFileSync(`/home/user/Mare/patents/fig${i}_aquapulse.svg`, 'utf-8'));
  const captions = [
    "FIG. 1 — Exploded Isometric View of AquaPulse System",
    "FIG. 2 — Side Profile View (System Worn by User)",
    "FIG. 3 — Cross-Section Detail of Mouthpiece Regulator Assembly",
    "FIG. 4 — Front View of Mask Assembly"
  ];

  const sections = [
    {type:'heading', text:'1. TITLE OF THE INVENTION'},
    {type:'body', text:'Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator'},
    {type:'space'},
    {type:'heading', text:'2. CROSS-REFERENCE TO RELATED APPLICATIONS'},
    {type:'body', text:'Not applicable. This is a standalone provisional patent application.'},
    {type:'space'},
    {type:'heading', text:'3. FIELD OF THE INVENTION'},
    {type:'body', text:'The present invention relates to portable underwater breathing apparatus, and more particularly to a lightweight, consumer-oriented open-mask breathing system with an integrated mouthpiece regulator designed for recreational shallow-water use by non-certified users. The invention is classified within the field of underwater breathing apparatus (IPC: B63C 11/02).'},
    {type:'space'},
    {type:'heading', text:'4. BACKGROUND OF THE INVENTION'},
    {type:'body', text:'Traditional self-contained underwater breathing apparatus (SCUBA) requires formal certification through PADI or SSI. A complete SCUBA system typically weighs 15-25 kg and costs $1,500-$5,000. This excludes casual ocean enthusiasts from underwater exploration.'},
    {type:'space'},
    {type:'body', text:'Existing portable breathing devices (SMACO, DEDEPU) provide small compressed air cylinders but require the user to hold a separate mouthpiece while wearing a separate mask — no integration exists.'},
    {type:'space'},
    {type:'body', text:'Full-face snorkel masks (Tribord Easybreath) are surface-only and cannot provide actual underwater breathing from compressed air.'},
    {type:'space'},
    {type:'body', text:'Professional full-face masks (Kirby Morgan, OTS, Interspiro) weigh 800-1,800g, cost $1,500-$4,000+, and are designed for commercial/military depths of 30-300+ meters.'},
    {type:'space'},
    {type:'body', text:'There exists a need for an integrated mask + regulator + mini tank system requiring no certification, weighing under 900g, and designed for shallow-water recreational use at 1-5 meters depth.'},
    {type:'space'},
    {type:'heading', text:'5. SUMMARY OF THE INVENTION'},
    {type:'body', text:'The present invention provides a portable underwater breathing system comprising:', opts:{bold:true}},
    {type:'body', text:'An open-frame dive mask (10) with tempered glass dual-lens visor (12) and medical-grade LSR face seal (14)', opts:{bullet:true}},
    {type:'body', text:'A low-profile mouthpiece regulator (28) with orthodontic-style mouthpiece (24) via flexible breathing tube (26)', opts:{bullet:true}},
    {type:'body', text:'Compatibility with standard 0.5L compressed air tanks (36) at up to 3,000 PSI', opts:{bullet:true}},
    {type:'body', text:'Total dry weight under 900 grams excluding tank', opts:{bullet:true}},
    {type:'body', text:'No dive certification required for intended shallow-water recreational use', opts:{bullet:true}},
    {type:'space'},
    {type:'heading', text:'6. DETAILED DESCRIPTION'},
    {type:'heading', text:'6.1 Open-Frame Mask Assembly'},
    {type:'body', text:'The mask assembly (10) comprises a rigid polycarbonate frame with dual tempered glass lenses (12), a medical-grade LSR face seal (14, Shore A 30-40), an integrated nose pocket (16) for ear equalization, adjustable silicone head strap (20) with quick-release buckle (22), anti-fog coating, and breathing tube entry point (56). Total mask weight: 180-250g.'},
    {type:'space'},
    {type:'heading', text:'6.2 Mouthpiece Regulator System'},
    {type:'body', text:'The second-stage demand regulator (28) is a balanced diaphragm type constructed from glass-reinforced nylon (PA66-GF30). The diaphragm (40) actuates a demand lever (42) opening the valve seat (44) on inhalation. A purge button (30) allows manual clearing. Flexible corrugated breathing tube (26) is 30-45cm medical-grade silicone. Orthodontic mouthpiece (24) with bite flanges (48) and lip flange (50). Breathing resistance target: <1.2 joules/liter at 10m depth.'},
    {type:'space'},
    {type:'heading', text:'6.3 Tank Interface'},
    {type:'body', text:'Compatible with 0.5L aluminum cylinders (36) via M18x1.5 thread connection (34). First-stage regulator (32) reduces 3,000 PSI to 125-150 PSI intermediate pressure. Provides 5-10 minutes breathing at shallow depth. Tank is NOT part of the invention — system designed around existing certified pressure vessels.'},
    {type:'space'},
    {type:'heading', text:'6.4 System Integration'},
    {type:'body', text:'User dons mask, places mouthpiece between teeth, opens tank valve, and enters water. Inhale through mouthpiece (demand regulator delivers air), exhale through nose (bubbles exit open mask naturally). Open-mask design provides critical safety: user can breathe immediately through nose at surface in any emergency.'},
    {type:'space'},
    {type:'heading', text:'8. ABSTRACT'},
    {type:'body', text:'A portable underwater breathing system comprising an open-frame dive mask with dual-lens tempered glass visor and silicone face seal, integrated with a mouthpiece-style second-stage demand regulator via a flexible breathing tube. The system interfaces with commercially available 0.5-liter compressed air mini tanks to provide short-duration underwater breathing capability for recreational shallow-water use without requiring dive certification. Total system weight excluding tank is under 900 grams.'},
    {type:'space'},
    {type:'heading', text:'INVENTOR'},
    {type:'body', text:'Samuel D\'Agostino, Miami, Florida, United States'},
    {type:'space'},
    {type:'heading', text:'DISCLAIMER'},
    {type:'body', text:'This provisional patent application establishes a filing date and priority for the described invention. It does not constitute a granted patent. A corresponding non-provisional utility patent application must be filed within twelve (12) months of this provisional filing date to preserve the priority date.', opts:{italic:true}},
  ];

  await createPatentPDF(
    "Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator",
    "AquaPulse System",
    sections, svgs, captions,
    "/home/user/Mare/patents/MARE_Provisional_Patent_1_AquaPulse.pdf"
  );
}

// ---- PATENT 2: HydroHarness ----
async function patent2() {
  const svgs = [1,2,3,4,5].map(i => fs.readFileSync(`/home/user/Mare/patents/fig${i}_hydroharness.svg`, 'utf-8'));
  const captions = [
    "FIG. 1 — Front View of HydroHarness (Worn by User)",
    "FIG. 2 — Exploded View of Tank Cradle Assembly",
    "FIG. 3 — Cross-Section of Y-Valve Manifold",
    "FIG. 4 — Side Profile View (Harness Worn by User)",
    "FIG. 5 — Tank Insertion Sequence"
  ];

  const sections = [
    {type:'heading', text:'1. TITLE OF THE INVENTION'},
    {type:'body', text:'Dual-Tank Body-Mounted Harness System for Portable Underwater Breathing Apparatus'},
    {type:'space'},
    {type:'heading', text:'2. CROSS-REFERENCE TO RELATED APPLICATIONS'},
    {type:'body', text:'Related to co-pending provisional "Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator" (AquaPulse) by the same inventor.'},
    {type:'space'},
    {type:'heading', text:'3. FIELD OF THE INVENTION'},
    {type:'body', text:'Wearable body-mounted harness systems for portable underwater breathing apparatus, particularly a lightweight waist-belt harness with dual tank cradles and integrated Y-valve manifold for hands-free mini compressed air cylinder use.'},
    {type:'space'},
    {type:'heading', text:'4. BACKGROUND OF THE INVENTION'},
    {type:'body', text:'Existing portable underwater breathing devices require hand-held tank operation, limiting mobility and preventing camera use. Traditional scuba BCDs ($300-$800, 3-5 kg) are designed for full-size 11-15L tanks. No product exists for body-mounting 0.5L mini tanks with manifold connection for extended dive duration.'},
    {type:'space'},
    {type:'heading', text:'5. SUMMARY OF THE INVENTION'},
    {type:'body', text:'Adjustable waist belt (102) with 50mm webbing, neoprene padding (116), quick-release buckle (100)', opts:{bullet:true}},
    {type:'body', text:'Two injection-molded tank cradles (108) with snap-lock retention (104) and release tabs (122)', opts:{bullet:true}},
    {type:'body', text:'Y-valve manifold (112) with dual inputs, check valves (132), single output for automatic tank switching', opts:{bullet:true}},
    {type:'body', text:'Optional thigh strap (114) for stability', opts:{bullet:true}},
    {type:'body', text:'Total dry weight ~400g. Emergency doffing in under 3 seconds.', opts:{bullet:true}},
    {type:'space'},
    {type:'heading', text:'6. DETAILED DESCRIPTION'},
    {type:'heading', text:'6.1 Waist Belt Assembly'},
    {type:'body', text:'50mm high-tenacity webbing, adjustable 60-130cm circumference. Marine-grade 316 SS or Delrin quick-release buckle (100). 3mm closed-cell neoprene comfort padding (116). Two 316 SS D-ring attachment points (106). Weight: ~120g.'},
    {type:'space'},
    {type:'heading', text:'6.2 Tank Cradle System'},
    {type:'body', text:'Injection-molded PA66-GF30 cradles (108) on left and right hips. Semi-cylindrical recess for 63mm diameter 0.5L tanks. Anti-rotation ridges (124). Spring-loaded snap-lock latch (104) with 3-5 kg retention. Release tab (122) for tool-free removal. Belt mounting clips (120) allow position adjustment. Weight per cradle: ~65g.'},
    {type:'space'},
    {type:'heading', text:'6.3 Y-Valve Manifold'},
    {type:'body', text:'Dual-input, single-output brass manifold (CZ121). M18x1.5 input ports (130, 136). Central merge chamber (134). Integrated check valves (132) prevent backflow. Enables sequential depletion — seamless automatic tank switching. Single-tank compatible. Weight: ~85g.'},
    {type:'space'},
    {type:'heading', text:'6.4 Thigh Strap'},
    {type:'body', text:'Optional 25mm webbing strap (114) from belt to upper thigh. Prevents belt riding up during vigorous swimming. Quick-release buckle. Weight: ~30g.'},
    {type:'space'},
    {type:'heading', text:'8. ABSTRACT'},
    {type:'body', text:'A body-mounted harness system for portable underwater breathing apparatus, comprising an adjustable waist belt with dual injection-molded tank cradles configured to receive standard 0.5-liter compressed air cylinders via a snap-lock retention mechanism. A Y-valve manifold with integrated check valves connects two tanks to a single breathing regulator, enabling extended underwater breathing duration with automatic tank switching. The system weighs approximately 400 grams dry with emergency doffing in under three seconds.'},
    {type:'space'},
    {type:'heading', text:'INVENTOR'},
    {type:'body', text:'Samuel D\'Agostino, Miami, Florida, United States'},
    {type:'space'},
    {type:'heading', text:'DISCLAIMER'},
    {type:'body', text:'This provisional patent application establishes a filing date and priority. It does not constitute a granted patent. Non-provisional must be filed within 12 months to preserve priority.', opts:{italic:true}},
  ];

  await createPatentPDF(
    "Dual-Tank Body-Mounted Harness System",
    "HydroHarness System",
    sections, svgs, captions,
    "/home/user/Mare/patents/MARE_Provisional_Patent_2_HydroHarness.pdf"
  );
}

// ---- PATENT 3: DRIFT ----
async function patent3() {
  const svgs = [1,2,3,4,5,6,7,8].map(i => fs.readFileSync(`/home/user/Mare/patents/fig${i}_drift.svg`, 'utf-8'));
  const captions = [
    "FIG. 1 — Front Isometric View of DRIFT Helmet",
    "FIG. 2 — Exploded View of DRIFT Helmet Assembly",
    "FIG. 3 — Cross-Section Side View (Air Path and Exhaust Path)",
    "FIG. 4 — Magnetic Quick-Release Strap Mechanism (Detail)",
    "FIG. 5 — Acoustic Exhaust Diffuser System (Detail)",
    "FIG. 6 — Side-Mount Tank System (Detail Cross-Section)",
    "FIG. 7 — Rear View of DRIFT Helmet",
    "FIG. 8 — Interchangeable Visor Tint System"
  ];

  const sections = [
    {type:'heading', text:'1. TITLE OF THE INVENTION'},
    {type:'body', text:'Full-Face Underwater Helmet with Integrated Side-Mount Tank, Magnetic Quick-Release Retention System, and Acoustic Exhaust Diffusion System'},
    {type:'space'},
    {type:'heading', text:'2. CROSS-REFERENCE TO RELATED APPLICATIONS'},
    {type:'body', text:'Related to co-pending provisionals: (1) "Portable Open-Mask Underwater Breathing System" (AquaPulse); (2) "Dual-Tank Body-Mounted Harness System" (HydroHarness) by the same inventor.'},
    {type:'space'},
    {type:'heading', text:'3. FIELD OF THE INVENTION'},
    {type:'body', text:'Full-face underwater breathing helmets with integrated side-mount compressed air tank, magnetic quick-release strap retention, and acoustic exhaust diffusion for recreational diving and underwater content creation (IPC: B63C 11/02, B63C 11/12).'},
    {type:'space'},
    {type:'heading', text:'4. BACKGROUND OF THE INVENTION'},
    {type:'body', text:'Existing full-face masks (Kirby Morgan, OTS Guardian, Interspiro Divator) weigh 1.0-1.8 kg, cost $1,500-$4,000+, designed for commercial/military use. Consumer full-face snorkel masks are surface-only. No product integrates: side-mounted tank, magnetic strap retention, acoustic exhaust management, and action camera mounting. Content creators need quiet, camera-ready, lightweight gear for shallow-water use.'},
    {type:'space'},
    {type:'heading', text:'5. SUMMARY OF THE INVENTION'},
    {type:'body', text:'PC-GF20 or carbon fiber helmet shell (200) — 613g lightweight / 430g premium', opts:{bullet:true}},
    {type:'body', text:'Full-face visor (202) with interchangeable tints, anti-fog, UV400', opts:{bullet:true}},
    {type:'body', text:'GoPro-compatible camera mount (204) molded into shell', opts:{bullet:true}},
    {type:'body', text:'Side-mounted 0.5L tank (206) via sealed bulkhead fitting (208) — NO external hoses', opts:{bullet:true}},
    {type:'body', text:'MAGNETIC QUICK-RELEASE straps (210) — N52 neodymium, don/doff under 3 seconds', opts:{bullet:true}},
    {type:'body', text:'ACOUSTIC EXHAUST DIFFUSER (212) — multi-port plate, 15-25 dB noise reduction', opts:{bullet:true}},
    {type:'body', text:'Sealed communications port (214) for future modules', opts:{bullet:true}},
    {type:'space'},
    {type:'heading', text:'6. DETAILED DESCRIPTION'},
    {type:'heading', text:'6.1 Helmet Shell'},
    {type:'body', text:'Shell (200): injection-molded PC-GF20 (lightweight, ~613g total) or vacuum-formed carbon fiber composite (premium, ~430g). Full-face coverage, smooth hydrodynamic contour. Interior comfort liner (220): 3mm EVA foam with moisture-wicking fabric, removable. 180° horizontal / 120° vertical vision. Shell thickness: 2.5-3.5mm PC, 1.5-2.5mm CF.'},
    {type:'space'},
    {type:'heading', text:'6.2 Full-Face Visor System'},
    {type:'body', text:'Visor (202): single-piece optically clear polycarbonate. Anti-fog hydrophilic interior coating, anti-scratch hardcoat exterior (3H pencil hardness), UV400. Compression-fit silicone gasket (Shore A 40-50) for tool-free removal. Five interchangeable tints: clear, smoke, amber, blue mirror, rose. Demist channel (252) routes air across visor interior.'},
    {type:'space'},
    {type:'heading', text:'6.3 Magnetic Quick-Release Strap Retention — KEY INNOVATION'},
    {type:'body', text:'NOVEL MECHANISM: No known prior art in diving equipment. Replaces buckle-and-strap systems.'},
    {type:'space'},
    {type:'body', text:'Four ferromagnetic receiver plates (230): 316L stainless steel, 30mm diameter, 3mm thick, recessed flush into shell wall. Two at temples (crown strap 248), two at jaw (chin strap 250).'},
    {type:'space'},
    {type:'body', text:'Four magnetic pucks (232): N52-grade neodymium magnets (highest commercial grade), 25mm diameter, 5mm thick. 3-5 kg perpendicular pull force per connection. Fully encapsulated in medical-grade silicone (234) — corrosion-proof in saltwater.'},
    {type:'space'},
    {type:'body', text:'Straps (236): 25mm silicone-coated nylon webbing with sliding friction keeper. Crown strap (248) over top of head, chin strap (250) under chin. Adjustable 52-62cm head circumference.'},
    {type:'space'},
    {type:'body', text:'Operation: Place helmet on head — magnetic pucks self-align and snap to receiver plates within 5-10mm proximity. Don time: under 3 seconds. Emergency release: firm perpendicular pull overcomes magnetic force instantly.'},
    {type:'space'},
    {type:'heading', text:'6.4 Integrated Side-Mount Tank — KEY INNOVATION'},
    {type:'body', text:'0.5L tank (206) mounts to right side of shell via snap-lock cradle (216). 15° forward cant for hydrodynamic balance.'},
    {type:'space'},
    {type:'body', text:'PROPRIETARY SEALED BULKHEAD FITTING (208): Through-hull connection molded into shell wall. Exterior port accepts first-stage regulator (244) output. Dual O-ring seals (246) rated 15m+ depth. Interior port feeds second-stage demand valve (222).'},
    {type:'space'},
    {type:'body', text:'Air path: Tank -> First-stage -> Bulkhead through shell wall -> Demand valve -> Interior breathing space. NO EXTERNAL HOSES. Eliminates snag hazards, improves hydrodynamics. Side-mount assembly adds ~180g. Tank replaceable underwater.'},
    {type:'space'},
    {type:'heading', text:'6.5 Acoustic Exhaust Diffuser — KEY INNOVATION'},
    {type:'body', text:'NOVEL APPROACH: Multi-port diffusion not previously applied to full-face dive masks.'},
    {type:'space'},
    {type:'body', text:'Chin chamber (238): ~150 mL collection volume in lower chin area. Multi-port diffuser plate (212): PA66-GF30 + LSR membrane, 12-20 holes at 2-3mm diameter each. One-way mushroom valve (224) prevents water ingress during inhalation.'},
    {type:'space'},
    {type:'body', text:'Principle: Many small holes -> many tiny 2-3mm bubbles instead of few large 5-15mm bubbles. Acoustic energy proportional to diameter squared — halving diameter reduces energy 4×. Estimated 15-25 dB noise reduction vs. single-port exhaust. Lateral dispersion keeps bubbles out of camera field of view.'},
    {type:'space'},
    {type:'heading', text:'6.6 Integrated Action Camera Mount'},
    {type:'body', text:'GoPro-compatible 3-prong mount (204) structurally molded into shell front-top. Center-forehead position for POV footage. Rated 30m+ depth. Optional secondary mount at right temple. Eliminates adhesive mount failures.'},
    {type:'space'},
    {type:'heading', text:'6.7 Communications Port'},
    {type:'body', text:'Sealed pass-through port (214) on left side. 4-pin wet-mate connector for future modules (comms, dive computer, LED). Waterproof blanking cap when unused.'},
    {type:'space'},
    {type:'heading', text:'8. ABSTRACT'},
    {type:'body', text:'A full-face underwater helmet for recreational diving and content creation, comprising a polycarbonate shell with integrated full-face visor, a side-mounted compressed air tank connected through a proprietary sealed bulkhead fitting, a magnetic quick-release strap retention system using encapsulated neodymium magnets for rapid don/doff, and an acoustic exhaust diffuser system employing a multi-port diffuser plate that disperses exhaled air into small bubbles to reduce noise. The helmet incorporates a structurally integrated GoPro-compatible camera mount, interchangeable tinted visor system, and sealed communication port. Total weight: ~613g lightweight, representing 40%+ reduction vs. existing commercial full-face dive masks.'},
    {type:'space'},
    {type:'heading', text:'INVENTOR'},
    {type:'body', text:'Samuel D\'Agostino, Miami, Florida, United States'},
    {type:'space'},
    {type:'heading', text:'DISCLAIMER'},
    {type:'body', text:'This provisional patent application establishes a filing date and priority. It does not constitute a granted patent. Non-provisional must be filed within 12 months to preserve priority.', opts:{italic:true}},
  ];

  await createPatentPDF(
    "DRIFT Full-Face Underwater Helmet",
    "DRIFT Helmet System",
    sections, svgs, captions,
    "/home/user/Mare/patents/MARE_Provisional_Patent_3_DRIFT.pdf"
  );
}

(async () => {
  await patent1();
  await patent2();
  await patent3();
  console.log("\nAll 3 PDFs generated successfully!");
})().catch(e => { console.error("Error:", e); process.exit(1); });
