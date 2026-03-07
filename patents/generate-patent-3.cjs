const { Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, PageNumber, ImageRun, PageBreak } = require("docx");
const fs = require("fs");
const sharp = require("sharp");
const figs = require("./generate-patent-3-part1.cjs");

async function svgToPng(svgStr, w=1600) { return await sharp(Buffer.from(svgStr,"utf-8")).resize(w).png().toBuffer(); }

async function build() {
  const svgFns = [figs.fig1, figs.fig2, figs.fig3, figs.fig4, figs.fig5, figs.fig6, figs.fig7, figs.fig8];
  const svgs = svgFns.map(f => f());
  svgs.forEach((s,i) => fs.writeFileSync(`/home/user/Mare/patents/fig${i+1}_drift.svg`, s));
  const pngs = await Promise.all(svgs.map(s => svgToPng(s)));

  const F="Arial", HS=28, BS=24, SS=18;
  const h = t => new Paragraph({spacing:{before:360,after:120,line:360},children:[new TextRun({text:t,font:F,size:HS,bold:true})]});
  const b = (t,o={}) => new Paragraph({spacing:{after:120,line:360},children:[new TextRun({text:t,font:F,size:BS,...o})]});
  const bb = (l,t) => new Paragraph({spacing:{after:120,line:360},children:[new TextRun({text:l,font:F,size:BS,bold:true}),new TextRun({text:t,font:F,size:BS})]});
  const bl = t => new Paragraph({spacing:{after:80,line:360},indent:{left:720,hanging:360},children:[new TextRun({text:"\u2022  "+t,font:F,size:BS})]});
  const e = () => new Paragraph({spacing:{after:120},children:[]});
  const pb = () => new Paragraph({children:[new PageBreak()]});

  const title = "Full-Face Underwater Helmet with Integrated Side-Mount Tank, Magnetic Quick-Release Retention System, and Acoustic Exhaust Diffusion System";

  const doc = new Document({
    sections: [{
      properties: { page: { size: { width:12240, height:15840 }, margin: { top:1440, bottom:1440, left:1440, right:1440 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: "Provisional Patent Application \u2014 " + title, font:F, size:SS, italics:true, color:"666666" })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({text:"Page ",font:F,size:SS}), new TextRun({children:[PageNumber.CURRENT],font:F,size:SS})] })] }) },
      children: [
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:480},children:[new TextRun({text:"PROVISIONAL PATENT APPLICATION",font:F,size:32,bold:true})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:200},children:[new TextRun({text:"Filed under 35 U.S.C. \u00A7111(b)",font:F,size:BS,italics:true})]}),
        e(),

        h("1. TITLE OF THE INVENTION"),
        b(title),
        e(),

        h("2. CROSS-REFERENCE TO RELATED APPLICATIONS"),
        b("This application is related to co-pending provisional patent applications by the same inventor: (1) \"Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator\" (the \"AquaPulse\" system); and (2) \"Dual-Tank Body-Mounted Harness System for Portable Underwater Breathing Apparatus\" (the \"HydroHarness\" system). The present DRIFT helmet system may be used independently or in conjunction with components described in the related applications."),
        e(),

        h("3. FIELD OF THE INVENTION"),
        b("The present invention relates to full-face underwater breathing helmets, and more particularly to a lightweight, consumer-oriented full-face helmet with an integrated side-mount compressed air tank, a magnetic quick-release strap retention system, and an acoustic exhaust diffusion system for noise-reduced underwater breathing, particularly suited for recreational diving and underwater content creation. The invention is classified within the field of underwater breathing apparatus and diving helmets (IPC: B63C 11/02, B63C 11/12)."),
        e(),

        h("4. BACKGROUND OF THE INVENTION"),
        b("Existing full-face dive masks and helmets are designed primarily for commercial, military, and technical diving applications. Products from manufacturers such as Kirby Morgan (SuperLite series), Ocean Technology Systems (OTS Guardian), Interspiro (Divator), and Scubapro (full-face models) typically weigh between 1.0 and 1.8 kilograms for the mask unit alone, cost between $1,500 and $4,000 or more, and are engineered for professional working depths of 30 to 300+ meters. These systems prioritize ruggedness, communication integration, and regulatory compliance for occupational use, resulting in products that are prohibitively heavy, expensive, and complex for casual recreational use."),
        e(),
        b("Consumer-grade full-face snorkel masks, such as the Tribord Easybreath and similar products, provide an integrated mask-and-breathing solution for surface snorkeling. However, these products are designed exclusively for surface use with ambient air and cannot accept compressed air input for actual underwater breathing. Reported safety concerns regarding CO2 buildup in the breathing dead space of some full-face snorkel designs have further limited their utility and consumer confidence."),
        e(),
        b("No existing product on the market integrates the following four features into a single consumer-accessible system: (a) a side-mounted compressed air tank that delivers air through the helmet shell without external hoses; (b) a magnetic quick-release strap retention system enabling don and doff in under three seconds; (c) an acoustic exhaust diffusion system that reduces bubble noise for content creation; and (d) a structurally integrated action camera mounting system."),
        e(),
        b("The rise of underwater content creation on platforms such as YouTube, TikTok, and Instagram has created a rapidly growing market segment of users who explore shallow ocean environments with action cameras and waterproof smartphones. These content creators face specific challenges that no existing product addresses: (a) traditional dive mask straps require two hands and 10 to 15 seconds to secure, interrupting filming; (b) exhaled bubble noise from conventional regulators and masks produces significant acoustic interference (60 to 80 dB underwater) that degrades audio quality in recordings; (c) no integrated camera mounting system exists, forcing users to rely on adhesive stick-on mounts that frequently detach underwater; and (d) existing gear designed for professional divers is unnecessarily heavy, complex, and expensive for shallow recreational use at 1 to 5 meters depth."),
        e(),
        b("Accordingly, there exists a significant unmet need for a lightweight full-face underwater helmet specifically designed for the content-creator generation: easy to don and doff, acoustically quiet, camera-integrated, and weighing under 700 grams. The present invention addresses this need with multiple novel technical solutions."),
        e(),

        h("5. SUMMARY OF THE INVENTION"),
        b("The present invention provides a full-face underwater helmet system comprising the following principal components and innovations:"),
        bl("A helmet shell (200) constructed from glass-filled polycarbonate (PC-GF20) in the lightweight configuration (approximately 613 grams total system weight) or vacuum-formed carbon fiber composite in the premium configuration (approximately 430 grams), with full-face coverage and integrated mounting features;"),
        bl("A full-face visor (202) constructed from optically clear polycarbonate with anti-fog, anti-scratch, and UV400 coatings, configured as an interchangeable tint system with tool-free removal;"),
        bl("An integrated GoPro-compatible action camera mount (204) structurally molded into the front-top of the helmet shell;"),
        bl("A side-mounted 0.5-liter compressed air tank (206) connected through a proprietary sealed bulkhead fitting (208) that routes air through the helmet shell wall to an interior second-stage demand valve (222), eliminating external hoses;"),
        bl("A magnetic quick-release strap retention system (210) using encapsulated N52-grade neodymium magnets with ferromagnetic receiver plates (230) recessed into the helmet shell, enabling don/doff in under three seconds;"),
        bl("An acoustic exhaust diffuser system (212) employing a multi-port diffuser plate with 12 to 20 small holes (2 to 3 mm diameter) that disperses exhaled air into many small bubbles, reducing acoustic noise by an estimated 15 to 25 dB compared to single-port exhaust designs;"),
        bl("A sealed communications port (214) for future electronic module integration;"),
        bl("Maximum operating depth of 10 meters for intended recreational consumer use."),
        e(),

        h("6. DETAILED DESCRIPTION OF THE INVENTION"),
        b("The following detailed description refers to the accompanying drawings (FIGS. 1\u20138), which form a part hereof. Like reference numerals refer to like elements throughout the several views. Reference numerals in the 200-series are used throughout this specification."),
        e(),

        h("6.1 Helmet Shell"),
        b("Referring to FIGS. 1 and 2, the helmet shell (200) is the primary structural element of the DRIFT system. In the lightweight configuration, the shell is injection-molded from glass-filled polycarbonate (PC-GF20, 20% glass fiber content by weight). In the premium configuration, the shell is vacuum-formed from a carbon fiber composite layup (3K twill weave pre-preg, autoclave-cured)."),
        e(),
        b("The shell provides full-face coverage from the forehead to below the chin, with a smooth exterior contour optimized for minimal hydrodynamic drag during forward swimming. The shell defines a single opening for the full-face visor (202) on the anterior face, and incorporates molded features for the camera mount (204), tank cradle (216), bulkhead fitting (208), magnetic strap receiver plates (230), and communications port (214)."),
        e(),
        b("The interior of the shell is lined with a comfort liner (220) comprising 3-millimeter closed-cell EVA (ethylene-vinyl acetate) foam bonded to a moisture-wicking polyester fabric cover. The liner conforms to the user's head and provides thermal insulation. The liner is removable for cleaning and replacement."),
        e(),
        b("Peripheral vision through the visor aperture provides a minimum of 180 degrees horizontal and 120 degrees vertical field of view. Shell thickness is 2.5 to 3.5 millimeters for the polycarbonate version and 1.5 to 2.5 millimeters for the carbon fiber version."),
        e(),
        bb("Total system weight (lightweight PC configuration): ", "Approximately 613 grams including shell, visor, face seal, comfort liner, camera mount, magnetic strap assemblies, bulkhead fitting, demand valve, and diffuser plate. Excluding tank and first-stage regulator."),
        e(),
        bb("Total system weight (premium CF configuration): ", "Approximately 430 grams."),
        e(),

        h("6.2 Full-Face Visor System"),
        b("Referring to FIGS. 1, 2, and 8, the full-face visor (202) is a single-piece component constructed from optically clear polycarbonate (Lexan or equivalent), injection-molded or thermoformed to the curvature specified by the shell aperture geometry."),
        e(),
        b("The interior surface of the visor receives a hydrophilic anti-fog coating (permanent chemical treatment, not a removable film). The exterior surface receives an anti-scratch hardcoat (silicone-based, pencil hardness 3H minimum). Both surfaces provide UV400 protection, blocking ultraviolet radiation below 400 nanometers wavelength."),
        e(),
        b("The visor is retained in the shell aperture by a compression-fit silicone gasket (Shore A 40\u201350 durometer) that runs the full perimeter of the visor-to-shell interface. The gasket provides a watertight seal to a minimum depth of 15 meters (safety margin above the 10-meter intended maximum operating depth). The visor can be removed and reinstalled by hand without tools, by pressing inward on the gasket and lifting the visor from its seat."),
        e(),
        b("Referring to FIG. 8, the visor is available in five interchangeable tint options: (1) Clear \u2014 maximum light transmission, suitable for all conditions; (2) Smoke \u2014 reduced light transmission for bright sunlight conditions; (3) Amber \u2014 enhanced contrast for low-light or murky water conditions; (4) Blue Mirror \u2014 exterior reflective coating for glare reduction and aesthetic purposes; (5) Rose \u2014 contrast enhancement for reef photography. The user may purchase multiple visor panels and swap them based on conditions, inserting the desired visor into the same gasket seat."),
        e(),
        b("A demist channel (252) is incorporated into the upper interior of the shell, routing a small portion of inhaled air from the demand valve output across the interior surface of the visor before it reaches the user's breathing zone. This directed airflow prevents fogging during use."),
        e(),

        h("6.3 Magnetic Quick-Release Strap Retention System"),
        b("Referring to FIGS. 1, 4, and 7, the magnetic quick-release strap retention system (210) is a novel mechanism not found in any existing dive mask, helmet, or underwater breathing apparatus."),
        e(),
        b("In conventional dive masks and helmets, head retention is provided by buckle-and-strap systems (typically silicone or rubber straps with plastic or metal buckle adjusters). These conventional systems require two hands to operate and typically require 10 to 15 seconds to secure properly. Adjustment underwater, particularly while wearing gloves, is difficult and time-consuming."),
        e(),
        b("The DRIFT magnetic retention system replaces mechanical buckles with magnetic connections. The system comprises the following components:"),
        e(),
        bb("Ferromagnetic Receiver Plates (230): ", "Four receiver plates constructed from 316L stainless steel (ferromagnetic grade) are recessed into the helmet shell at predetermined attachment points. Two plates are positioned on the lateral aspects of the shell above the temples (for the crown strap 248), and two are positioned on the lateral aspects of the shell at the jaw line (for the chin strap 250). Each plate is approximately 30mm diameter and 3mm thick, epoxy-bonded into a machined recess in the shell wall such that the plate surface is flush with the shell interior."),
        e(),
        bb("Magnetic Pucks (232): ", "Each strap terminates in a magnetic puck containing an N52-grade neodymium magnet (the highest commercially available grade of NdFeB permanent magnet). Each magnet is disc-shaped, approximately 25mm diameter and 5mm thick, producing a perpendicular pull force of approximately 3 to 5 kilograms against the corresponding receiver plate. The magnet is fully encapsulated in medical-grade silicone rubber (234), providing electrical insulation, corrosion protection in saltwater environments, and a smooth contact surface."),
        e(),
        bb("Strap Webbing (236): ", "Two straps are provided: a crown strap (248) that routes over the top of the head from left temple to right temple, and a chin strap (250) that routes under the chin from left jaw to right jaw. Each strap is constructed from 25-millimeter silicone-coated nylon webbing, adjustable in length via a sliding friction keeper. The strap length is adjustable to accommodate head circumferences from approximately 52 to 62 centimeters."),
        e(),
        b("Operation: To don the helmet, the user places the helmet on the head and allows the four magnetic pucks to snap to their corresponding receiver plates. Each puck self-aligns and self-secures upon proximity (approximately 5 to 10 millimeters). Total don time: under 3 seconds. To doff, the user applies a firm outward (perpendicular) pull on any strap, which overcomes the magnetic force and separates the puck from the receiver plate. The magnetic force is calibrated to be strong enough to hold the straps secure during normal use (swimming, head turning, moderate currents) but weak enough to be overcome by deliberate emergency pull."),
        e(),
        b("This magnetic retention system is a NOVEL mechanism with no known prior art in diving equipment. It provides substantial advantages over conventional buckle systems in don/doff speed, gloved operation capability, and emergency release reliability."),
        e(),

        h("6.4 Integrated Side-Mount Tank System"),
        b("Referring to FIGS. 1, 3, and 6, the integrated side-mount tank system comprises a tank cradle (216), a proprietary sealed bulkhead fitting (208), and an interior second-stage demand valve (222)."),
        e(),
        b("A 0.5-liter compressed air tank (206) mounts directly to the right side of the helmet shell via the tank cradle (216). The cradle is an injection-molded glass-reinforced nylon (PA66-GF30) bracket with a snap-lock retention mechanism similar in principle to the tank cradle described in the related HydroHarness provisional application. The tank is oriented at approximately 15 degrees forward cant from vertical, optimized for hydrodynamic profile when the user is swimming in a prone position and for center-of-gravity balance to minimize neck strain."),
        e(),
        bb("Proprietary Sealed Bulkhead Fitting (208): ", "This is a key novel component. The bulkhead fitting is a through-hull connection point that is molded into (lightweight version) or machined and bonded into (premium version) the helmet shell wall. The fitting creates a sealed air passage through the shell wall, comprising:"),
        e(),
        bl("An exterior port that accepts the output of a standard first-stage regulator (244) mounted on the tank, via a standard low-pressure hose connection;"),
        bl("A sealed passage through the shell wall, with dual O-ring seals (246) providing watertight integrity to a minimum of 15 meters depth;"),
        bl("An interior port that delivers intermediate-pressure air (125\u2013150 PSI) to a second-stage demand valve (222) mounted on the interior of the shell."),
        e(),
        b("The second-stage demand valve (222) is a balanced diaphragm type regulator integrated into the interior of the helmet at the bulkhead fitting location. When the user inhales, reduced pressure in the helmet interior actuates the demand valve, which opens to admit air from the intermediate-pressure supply. This demand-actuated delivery optimizes air consumption."),
        e(),
        b("This architecture eliminates all external hoses between the tank and the breathing space. Air travels: tank (206) \u2192 first-stage regulator (244) \u2192 bulkhead fitting (208) through shell wall \u2192 demand valve (222) \u2192 interior breathing space. The elimination of external hoses reduces snag hazards, improves hydrodynamic profile, and simplifies the system."),
        e(),
        b("The total side-mount assembly (cradle, bulkhead fitting, demand valve) adds approximately 180 grams to the helmet weight, excluding the tank and first-stage regulator. The tank can be removed and replaced underwater via the snap-lock cradle mechanism."),
        e(),

        h("6.5 Acoustic Exhaust Diffuser System"),
        b("Referring to FIGS. 3 and 5, the acoustic exhaust diffuser system (212) is a novel approach to exhaust noise management in full-face dive masks and helmets."),
        e(),
        b("In conventional full-face masks, exhaled air exits the breathing space through a single exhaust port (typically 10 to 15 millimeters in diameter) located at the chin or lower front of the mask. This single-port design produces a concentrated stream of relatively large air bubbles (5 to 15 millimeters diameter) that generate significant acoustic noise, measured at 60 to 80 dB in the underwater environment. This noise level is problematic for two reasons: (a) it interferes with ambient sound recording for content creators; and (b) it can startle marine life, reducing the quality of wildlife encounters."),
        e(),
        b("The DRIFT acoustic exhaust diffuser operates on the principle that many small bubbles produce substantially less acoustic energy than fewer large bubbles of equivalent total volume. The system comprises:"),
        e(),
        bb("Chin Chamber (238): ", "A collection volume of approximately 150 milliliters located in the lower chin area of the helmet interior. Exhaled air naturally descends into this chamber due to buoyancy and the geometry of the helmet interior."),
        e(),
        bb("Multi-Port Diffuser Plate (212): ", "A removable plate constructed from glass-reinforced nylon (PA66-GF30) with a liquid silicone rubber (LSR) membrane. The plate contains 12 to 20 through-holes, each 2 to 3 millimeters in diameter, distributed across the plate surface. These small holes divide the exhaled air stream into many individual small-diameter air columns."),
        e(),
        bb("One-Way Mushroom Valve (224): ", "A medical-grade silicone mushroom valve (also known as an umbrella valve or duckbill valve) is positioned on the interior face of the diffuser plate. During exhalation, positive pressure in the chin chamber deflects the valve open, allowing air to pass through the diffuser holes. During inhalation, the valve seals against the plate, preventing water ingress through the diffuser holes."),
        e(),
        b("When exhaled air passes through the small diffuser holes, it exits the helmet as many tiny bubbles (approximately 2 to 3 millimeters diameter each) rather than a few large bubbles. The acoustic energy of a bubble is proportional to the square of its diameter; therefore, halving the bubble diameter reduces the acoustic energy per bubble by a factor of four. The overall noise reduction is estimated at 15 to 25 dB compared to conventional single-port exhaust."),
        e(),
        b("Additionally, the small bubbles disperse laterally rather than rising in a concentrated column directly in front of the visor. This lateral dispersion provides a secondary benefit: improved clarity in action camera footage, as bubbles do not obscure the camera's field of view."),
        e(),
        b("The diffuser plate is positioned at the bottom-rear of the chin area and is removable for cleaning and maintenance. The plate is retained by a twist-lock or bayonet-type mounting that allows tool-free removal."),
        e(),
        b("This multi-port diffusion approach to exhaust noise management is a NOVEL mechanism in the field of consumer diving equipment. Existing commercial dive helmets that address exhaust noise use expensive and complex exhaust gas recirculation or reclaim systems. The simple multi-port diffusion approach achieves meaningful noise reduction at minimal cost and complexity."),
        e(),

        h("6.6 Integrated Action Camera Mount"),
        b("Referring to FIGS. 1 and 2, an action camera mount (204) is structurally integrated into the front-top (forehead area) of the helmet shell. The mount provides a standard GoPro-compatible three-prong finger mount interface, enabling direct attachment of GoPro cameras and compatible accessories without adapters."),
        e(),
        b("The mount position at the center-top of the forehead provides first-person point-of-view (POV) footage aligned with the user's line of sight. Because the mount is molded as part of the shell (in the injection-molded version) or bonded during manufacturing (in the carbon fiber version), it provides structural integrity rated for underwater use to 30+ meters depth. This eliminates the failure mode of adhesive-based aftermarket mounts, which frequently detach due to water pressure, temperature changes, or adhesive degradation in saltwater."),
        e(),
        b("An optional secondary mount point is provided on the right temple area of the shell for side-angle footage."),
        e(),

        h("6.7 Communications Port"),
        b("Referring to FIG. 7, a sealed pass-through port (214) is provided on the left side of the helmet shell. This port is designed to accept future electronic modules including but not limited to: underwater voice communication units, dive computer displays, LED lighting modules, and environmental sensors."),
        e(),
        b("When not in use, the port is sealed with a waterproof blanking cap incorporating an O-ring seal. The port interface is a standard 4-pin wet-mate connector rated for 30+ meters depth. The port is positioned on the opposite side from the tank mount (right side) to maintain weight balance."),
        e(),

        h("7. BRIEF DESCRIPTION OF THE DRAWINGS"),
        b("FIG. 1 is a front isometric view of the complete DRIFT helmet showing the shell (200), visor (202), camera mount (204), side-mounted tank (206), bulkhead fitting (208), magnetic strap pucks (210), diffuser plate (212), communications port (214), and tank cradle (216)."),
        b("FIG. 2 is an exploded view showing all major components separated along the assembly axis: shell (200), visor (202), camera mount bracket (204), magnetic strap assemblies (210), comfort liner (220), face seal (218), bulkhead fitting (208), tank cradle (216), and diffuser plate (212)."),
        b("FIG. 3 is a cross-section side view showing the interior breathing space, the air path from tank (206) through bulkhead fitting (208) and demand valve (222) into the breathing space, and the exhaust path from the chin chamber through diffuser plate (212) to dispersed bubbles (226)."),
        b("FIG. 4 is a detail view of the magnetic quick-release strap mechanism showing: (a) attached state with magnetic puck (232) engaged with receiver plate (230) in shell wall (228), and (b) separated state showing perpendicular pull release. Silicone encapsulation (234) and strap webbing (236) are labeled."),
        b("FIG. 5 is a detail view of the acoustic exhaust diffuser system showing the chin chamber (238), multi-port diffuser plate (212) with individual holes (240), mushroom valve (224), dispersed bubble pattern (226), and a comparison inset showing traditional single-port exhaust vs. DRIFT multi-port diffusion."),
        b("FIG. 6 is a detail cross-section of the side-mount tank system showing the tank (206), tank cradle (216), bulkhead fitting (208) with O-ring seals (246), demand valve (222), first-stage regulator (244), and air flow path through the shell wall."),
        b("FIG. 7 is a rear view of the helmet showing crown strap (248) and chin strap (250) routing paths, four magnetic attachment points (210), diffuser plate (212) position, communications port (214) with sealed cap, and tank cradle (216)."),
        b("FIG. 8 shows the five interchangeable visor (202) tint options: clear, smoke, amber, blue mirror, and rose."),
        e(),

        h("8. ABSTRACT"),
        b("A full-face underwater helmet for recreational diving and content creation, comprising a polycarbonate shell with integrated full-face visor, a side-mounted compressed air tank connected through a proprietary sealed bulkhead fitting, a magnetic quick-release strap retention system using encapsulated neodymium magnets for rapid don/doff, and an acoustic exhaust diffuser system employing a multi-port diffuser plate that disperses exhaled air into small bubbles to reduce noise. The helmet further incorporates a structurally integrated GoPro-compatible action camera mount, an interchangeable tinted visor system, and a sealed communication port for future electronic module integration. Total system weight in lightweight configuration is approximately 613 grams, representing a 40% or greater weight reduction compared to existing commercial full-face dive masks."),
        e(),

        h("INVENTOR"),
        b("Samuel D\u2019Agostino"),
        b("Miami, Florida, United States"),
        e(),

        h("DISCLAIMER"),
        b("This provisional patent application establishes a filing date and priority for the described invention. It does not constitute a granted patent. A corresponding non-provisional utility patent application must be filed within twelve (12) months of this provisional filing date to preserve the priority date.", {italics:true}),
        e(),

        // DRAWINGS
        pb(),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:240},children:[new TextRun({text:"DRAWINGS",font:F,size:HS,bold:true})]}),
        e(),

        // FIG 1
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[0],transformation:{width:530,height:596}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 1 \u2014 Front Isometric View of DRIFT Helmet",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 2
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[1],transformation:{width:530,height:729}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 2 \u2014 Exploded View of DRIFT Helmet Assembly",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 3
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[2],transformation:{width:530,height:530}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 3 \u2014 Cross-Section Side View (Air Path and Exhaust Path)",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 4
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[3],transformation:{width:550,height:413}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 4 \u2014 Magnetic Quick-Release Strap Mechanism (Detail)",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 5
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[4],transformation:{width:530,height:464}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 5 \u2014 Acoustic Exhaust Diffuser System (Detail)",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 6
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[5],transformation:{width:530,height:398}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 6 \u2014 Side-Mount Tank System (Detail Cross-Section)",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 7
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[6],transformation:{width:530,height:464}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 7 \u2014 Rear View of DRIFT Helmet",font:F,size:BS,bold:true})]}),
        pb(),
        // FIG 8
        new Paragraph({alignment:AlignmentType.CENTER,children:[new ImageRun({data:pngs[7],transformation:{width:550,height:344}})]}),
        new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:120,after:300},children:[new TextRun({text:"FIG. 8 \u2014 Interchangeable Visor Tint System",font:F,size:BS,bold:true})]}),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const out = "/home/user/Mare/patents/MARE_Provisional_Patent_3_DRIFT.docx";
  fs.writeFileSync(out, buffer);
  console.log("Patent 3 (DRIFT) generated:", out);
  console.log("File size:", (buffer.length / 1024).toFixed(1), "KB");
}

build().catch(err => { console.error("Error:", err); process.exit(1); });
