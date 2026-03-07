// Patent 3: DRIFT - Full-Face Underwater Helmet
// Part 1: SVG figures

function fig1() {
  // Front isometric view — smooth dome shell, massive wrap-around visor, side-mount tank with gauge
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900" width="800" height="900">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 1 — Front Isometric View of DRIFT Helmet</text>

  <!-- Helmet shell — smooth perfectly round dome, space-helmet shape -->
  <path d="M400,75 C500,75 570,120 590,200 C610,280 610,370 590,430 C570,490 530,540 480,565 C450,578 425,582 400,583 C375,582 350,578 320,565 C270,540 230,490 210,430 C190,370 190,280 210,200 C230,120 300,75 400,75 Z" fill="none" stroke="black" class="k"/>

  <!-- Visor — MASSIVE wrap-around, covering ~70% of front face, forehead to chin -->
  <path d="M400,100 C490,100 545,140 565,210 C580,270 580,340 570,400 C558,455 530,500 490,530 C460,548 430,555 400,558 C370,555 340,548 310,530 C270,500 242,455 230,400 C220,340 220,270 235,210 C255,140 310,100 400,100 Z" fill="none" stroke="black" class="m"/>
  <!-- Visor gasket/frame line -->
  <path d="M400,105 C485,105 538,143 558,210 C572,268 572,335 563,395 C552,448 525,492 488,522 C458,540 428,548 400,550 C372,548 342,540 312,522 C275,492 248,448 237,395 C228,335 228,268 242,210 C262,143 315,105 400,105 Z" fill="none" stroke="gray" stroke-dasharray="4,3" class="t"/>

  <!-- Internal mouthpiece visible through visor -->
  <rect x="388" y="440" width="24" height="12" rx="4" fill="none" stroke="black" class="m"/>
  <line x1="400" y1="452" x2="400" y2="475" stroke="black" class="m"/>
  <text x="400" y="470" text-anchor="middle" font-size="7" fill="gray">mouthpiece</text>

  <!-- Camera mount (top center of dome) -->
  <rect x="383" y="63" width="34" height="16" rx="4" fill="none" stroke="black" class="k"/>
  <line x1="392" y1="63" x2="392" y2="48" stroke="black" class="m"/>
  <line x1="408" y1="63" x2="408" y2="48" stroke="black" class="m"/>
  <rect x="387" y="38" width="26" height="12" rx="3" fill="none" stroke="black" class="m"/>

  <!-- Side-mount tank (right side) — cylindrical 0.5L tank -->
  <rect x="600" y="210" width="42" height="140" rx="21" fill="none" stroke="black" class="k"/>
  <!-- Pressure gauge on top of tank -->
  <circle cx="621" cy="200" r="12" fill="none" stroke="black" class="m"/>
  <line x1="621" y1="193" x2="621" y2="200" stroke="black" class="t"/>
  <line x1="621" y1="200" x2="626" y2="196" stroke="black" class="t"/>
  <!-- Tank valve assembly on top -->
  <rect x="610" y="195" width="22" height="18" rx="3" fill="none" stroke="black" class="m"/>

  <!-- Tank cradle/bracket on helmet side -->
  <path d="M590,230 C585,225 582,240 582,260 L582,320 C582,340 585,355 590,350" fill="none" stroke="black" class="m"/>
  <path d="M590,230 L595,230" fill="none" stroke="black" class="m"/>
  <path d="M590,350 L595,350" fill="none" stroke="black" class="m"/>

  <!-- Air tube from tank valve, looping down and into bulkhead -->
  <path d="M615,213 C615,230 630,370 630,380 C630,400 610,410 595,400 C585,395 578,380 575,365" fill="none" stroke="black" class="m"/>

  <!-- Bulkhead fitting where tube enters helmet -->
  <rect x="565" y="350" width="20" height="20" rx="3" fill="none" stroke="black" class="k"/>

  <!-- Exhaust diffuser at bottom chin area -->
  <path d="M365,570 Q400,580 435,570" fill="none" stroke="black" class="m"/>
  <rect x="368" y="572" width="64" height="12" rx="4" fill="none" stroke="black" class="m"/>
  <!-- Diffuser holes -->
  <circle cx="378" cy="578" r="2" fill="black"/>
  <circle cx="390" cy="578" r="2" fill="black"/>
  <circle cx="400" cy="578" r="2" fill="black"/>
  <circle cx="410" cy="578" r="2" fill="black"/>
  <circle cx="422" cy="578" r="2" fill="black"/>

  <!-- Comms port (left side) -->
  <circle cx="215" cy="310" r="10" fill="none" stroke="black" class="m"/>
  <circle cx="215" cy="310" r="6" fill="none" stroke="black" class="t"/>

  <!-- Labels -->
  <line x1="240" y1="110" x2="200" y2="95" stroke="black" class="t"/>
  <text x="140" y="99" class="label">200</text>
  <line x1="540" y1="300" x2="555" y2="290" stroke="black" class="t"/>
  <text x="540" y="285" class="label">202</text>
  <line x1="400" y1="38" x2="440" y2="33" stroke="black" class="t"/>
  <text x="445" y="36" class="label">204</text>
  <line x1="642" y1="280" x2="665" y2="270" stroke="black" class="t"/>
  <text x="670" y="274" class="label">206</text>
  <line x1="565" y1="360" x2="540" y2="345" stroke="black" class="t"/>
  <text x="500" y="340" class="label">208</text>
  <line x1="400" y1="440" x2="340" y2="430" stroke="black" class="t"/>
  <text x="270" y="434" class="label">252</text>
  <line x1="435" y1="578" x2="475" y2="580" stroke="black" class="t"/>
  <text x="480" y="584" class="label">212</text>
  <line x1="215" y1="320" x2="180" y2="330" stroke="black" class="t"/>
  <text x="120" y="334" class="label">214</text>
  <line x1="585" y1="290" x2="555" y2="295" stroke="black" class="t"/>
  <text x="518" y="305" class="label">216</text>
  <line x1="621" y1="188" x2="660" y2="175" stroke="black" class="t"/>
  <text x="665" y="179" class="label">242</text>

  <text x="50" y="700" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="715" class="caption">200 — Helmet shell (smooth dome)  |  202 — Full-face wrap-around visor  |  204 — GoPro camera mount  |  206 — 0.5L side-mount tank</text>
  <text x="50" y="730" class="caption">208 — Sealed bulkhead fitting  |  212 — Acoustic exhaust diffuser  |  214 — Communications port  |  216 — Tank cradle</text>
  <text x="50" y="745" class="caption">242 — Pressure gauge/valve assembly  |  252 — Internal mouthpiece</text>
</svg>`;
}

function fig2() {
  // Exploded view
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1100" width="800" height="1100">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 2 — Exploded View of DRIFT Helmet Assembly</text>

  <!-- Camera mount bracket (top, separated) -->
  <rect x="370" y="50" width="60" height="20" rx="4" fill="none" stroke="black" class="k"/>
  <line x1="385" y1="50" x2="385" y2="40" stroke="black" class="m"/>
  <line x1="415" y1="50" x2="415" y2="40" stroke="black" class="m"/>
  <rect x="380" y="32" width="40" height="10" rx="2" fill="none" stroke="black" class="m"/>
  <line x1="400" y1="70" x2="400" y2="95" stroke="black" stroke-dasharray="6,3" class="t"/>
  
  <!-- Helmet shell (main body) -->
  <path d="M400,110 Q500,110 530,160 Q550,210 550,280 Q550,340 535,380 Q515,430 470,460 Q440,475 400,480 Q360,475 330,460 Q285,430 265,380 Q250,340 250,280 Q250,210 270,160 Q300,110 400,110 Z" fill="none" stroke="black" class="k"/>
  
  <!-- Visor (separated forward) -->
  <path d="M400,520 Q480,520 505,560 Q520,590 518,640 Q515,680 500,710 Q485,740 455,760 Q440,770 400,773 Q360,770 345,760 Q315,740 300,710 Q285,680 282,640 Q280,590 295,560 Q320,520 400,520 Z" fill="none" stroke="black" class="k"/>
  <line x1="400" y1="480" x2="400" y2="520" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="400" y="650" text-anchor="middle" font-size="9" fill="gray">VISOR</text>
  
  <!-- Face seal (separated, dashed) -->
  <path d="M400,800 Q470,800 495,830 Q510,850 510,880 Q510,910 490,930 Q470,945 430,955 Q410,958 400,960 Q390,958 370,955 Q330,945 310,930 Q290,910 290,880 Q290,850 305,830 Q330,800 400,800 Z" fill="none" stroke="black" stroke-dasharray="6,3" class="m"/>
  <line x1="400" y1="773" x2="400" y2="800" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="400" y="885" text-anchor="middle" font-size="9" fill="gray">LSR FACE SEAL</text>
  
  <!-- Comfort liner (separated right) -->
  <path d="M620,200 Q660,200 670,230 L670,330 Q670,360 640,370 L620,370 Q590,360 590,330 L590,230 Q590,200 620,200 Z" fill="none" stroke="black" class="m"/>
  <line x1="625" y1="210" x2="635" y2="225" stroke="gray" class="t"/>
  <line x1="635" y1="210" x2="645" y2="225" stroke="gray" class="t"/>
  <line x1="645" y1="210" x2="655" y2="225" stroke="gray" class="t"/>
  <line x1="555" y1="280" x2="590" y2="280" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="630" y="295" text-anchor="middle" font-size="9" fill="gray">EVA LINER</text>
  
  <!-- Magnetic strap assemblies (separated left) -->
  <path d="M100,180 L180,180 Q190,180 190,190 L190,210 Q190,220 180,220 L100,220 Q90,220 90,210 L90,190 Q90,180 100,180 Z" fill="none" stroke="black" class="m"/>
  <circle cx="175" cy="200" r="10" fill="none" stroke="black" class="k"/>
  <text x="140" y="204" text-anchor="middle" font-size="8">STRAP + MAGNET</text>
  <line x1="190" y1="200" x2="250" y2="200" stroke="black" stroke-dasharray="6,3" class="t"/>
  
  <!-- Bulkhead fitting (separated right, below liner) -->
  <rect x="620" y="420" width="50" height="35" rx="5" fill="none" stroke="black" class="k"/>
  <circle cx="645" cy="437" r="8" fill="none" stroke="black" class="m"/>
  <line x1="555" y1="350" x2="620" y2="420" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="645" y="470" text-anchor="middle" font-size="8" fill="gray">BULKHEAD</text>
  
  <!-- Tank cradle (separated far right) -->
  <rect x="700" y="300" width="60" height="40" rx="8" fill="none" stroke="black" class="k"/>
  <line x1="660" y1="330" x2="700" y2="320" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="730" y="355" text-anchor="middle" font-size="8" fill="gray">CRADLE</text>
  
  <!-- Diffuser plate (separated below) -->
  <rect x="350" y="990" width="100" height="18" rx="5" fill="none" stroke="black" class="k"/>
  <circle cx="365" cy="999" r="2" fill="black"/>
  <circle cx="380" cy="999" r="2" fill="black"/>
  <circle cx="395" cy="999" r="2" fill="black"/>
  <circle cx="410" cy="999" r="2" fill="black"/>
  <circle cx="425" cy="999" r="2" fill="black"/>
  <circle cx="440" cy="999" r="2" fill="black"/>
  <line x1="400" y1="960" x2="400" y2="990" stroke="black" stroke-dasharray="6,3" class="t"/>
  <text x="400" y="1025" text-anchor="middle" font-size="8" fill="gray">DIFFUSER PLATE</text>
  
  <!-- Labels -->
  <text x="555" y="125" class="label">200 — Shell</text>
  <text x="520" y="640" class="label">202 — Visor</text>
  <text x="365" y="46" class="label">204 — Camera mount</text>
  <text x="60" y="175" class="label">210 — Magnetic strap</text>
  <text x="600" y="415" class="label">208 — Bulkhead</text>
  <text x="690" y="295" class="label">216 — Cradle</text>
  <text x="455" y="995" class="label">212 — Diffuser</text>
  <text x="520" y="880" class="label">218 — Face seal</text>
  <text x="580" y="290" class="label">220 — Comfort liner</text>
  
  <text x="50" y="1060" class="caption" font-weight="bold">Components shown separated along assembly axis for clarity.</text>
</svg>`;
}

function fig3() {
  // Cross-section side view
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}.h{stroke-width:0.4;stroke:gray}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 3 — Cross-Section Side View (Air Path Detail)</text>
  
  <!-- Helmet shell cross-section (side view) -->
  <path d="M350,80 Q420,70 460,100 Q500,140 510,200 Q520,280 515,360 Q510,420 490,470 Q470,510 440,540 L430,550 L380,560 Q350,555 330,540 Q300,510 285,470 Q270,420 265,360 Q260,280 265,200 Q270,140 300,100 Q330,75 350,80 Z" fill="none" stroke="black" class="k"/>
  <!-- Shell thickness hatching -->
  <path d="M355,85 Q415,76 455,103 Q493,140 503,200 Q512,275 508,355 Q503,415 485,465 Q467,505 438,535" fill="none" stroke="black" class="m"/>
  <line x1="352" y1="88" x2="358" y2="88" class="h"/>
  <line x1="458" y1="105" x2="452" y2="108" class="h"/>
  <line x1="505" y1="200" x2="512" y2="202" class="h"/>
  <line x1="500" y1="350" x2="510" y2="352" class="h"/>
  
  <!-- Visor (front face) -->
  <path d="M455,105 Q490,160 500,250 Q505,330 490,400 Q475,450 445,490" fill="none" stroke="black" class="k"/>
  
  <!-- Interior breathing space -->
  <text x="380" y="300" text-anchor="middle" font-size="10" fill="gray" font-style="italic">Interior</text>
  <text x="380" y="315" text-anchor="middle" font-size="10" fill="gray" font-style="italic">Breathing</text>
  <text x="380" y="330" text-anchor="middle" font-size="10" fill="gray" font-style="italic">Space</text>
  
  <!-- BULKHEAD FITTING — air path through shell wall -->
  <!-- Exterior side -->
  <rect x="510" y="230" width="40" height="25" rx="3" fill="none" stroke="black" class="k"/>
  <!-- Through-wall passage -->
  <rect x="500" y="237" width="15" height="12" fill="none" stroke="black" class="m"/>
  <!-- Hatching for bulkhead -->
  <line x1="512" y1="233" x2="518" y2="240" class="h"/>
  <line x1="520" y1="233" x2="526" y2="240" class="h"/>
  <line x1="528" y1="233" x2="534" y2="240" class="h"/>
  <line x1="536" y1="233" x2="542" y2="240" class="h"/>
  <!-- Interior demand valve -->
  <rect x="485" y="237" width="18" height="12" rx="2" fill="none" stroke="black" class="m"/>
  <!-- Air flow arrows through bulkhead -->
  <defs><marker id="a3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="0.8"/></marker></defs>
  <line x1="550" y1="243" x2="525" y2="243" stroke="black" class="m" marker-end="url(#a3)"/>
  <line x1="500" y1="243" x2="490" y2="243" stroke="black" class="m" marker-end="url(#a3)"/>
  <text x="540" y="225" font-size="8" fill="gray">AIR IN</text>
  
  <!-- Tank connected to exterior of bulkhead -->
  <rect x="555" y="180" width="30" height="100" rx="15" fill="none" stroke="black" class="k"/>
  <rect x="562" y="170" width="16" height="14" rx="2" fill="none" stroke="black" class="m"/>
  <!-- First-stage regulator -->
  <rect x="548" y="160" width="44" height="15" rx="3" fill="none" stroke="black" class="m"/>
  
  <!-- EXHAUST PATH -->
  <!-- Chin chamber -->
  <path d="M330,510 L330,540 Q330,560 350,565 L430,565 Q450,560 450,540 L450,510" fill="none" stroke="black" class="m"/>
  <text x="390" y="540" text-anchor="middle" font-size="8" fill="gray">Chin Chamber</text>
  <text x="390" y="552" text-anchor="middle" font-size="8" fill="gray">(~150 mL)</text>
  
  <!-- Exhale flow arrow down into chin chamber -->
  <path d="M390,450 L390,510" fill="none" stroke="black" class="m" marker-end="url(#a3)"/>
  <text x="410" y="480" font-size="8" fill="gray">EXHALED AIR</text>
  
  <!-- Diffuser plate at bottom of chin chamber -->
  <rect x="340" y="565" width="100" height="10" rx="3" fill="none" stroke="black" class="k"/>
  <!-- Holes in diffuser -->
  <circle cx="355" cy="570" r="1.5" fill="black"/>
  <circle cx="365" cy="570" r="1.5" fill="black"/>
  <circle cx="375" cy="570" r="1.5" fill="black"/>
  <circle cx="385" cy="570" r="1.5" fill="black"/>
  <circle cx="395" cy="570" r="1.5" fill="black"/>
  <circle cx="405" cy="570" r="1.5" fill="black"/>
  <circle cx="415" cy="570" r="1.5" fill="black"/>
  <circle cx="425" cy="570" r="1.5" fill="black"/>
  
  <!-- Mushroom valve -->
  <path d="M350,563 Q345,558 350,555 Q355,553 360,555" fill="none" stroke="black" class="m"/>
  
  <!-- Tiny bubbles exiting -->
  <circle cx="355" cy="585" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="370" cy="590" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="385" cy="587" r="2.5" fill="none" stroke="black" class="t"/>
  <circle cx="400" cy="592" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="415" cy="586" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="430" cy="590" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="360" cy="598" r="1" fill="none" stroke="black" class="t"/>
  <circle cx="390" cy="602" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="420" cy="600" r="1" fill="none" stroke="black" class="t"/>
  
  <!-- Labels -->
  <line x1="265" y1="200" x2="230" y2="190" stroke="black" class="t"/>
  <text x="160" y="194" class="label">200 — Shell</text>
  
  <line x1="490" y1="243" x2="460" y2="250" stroke="black" class="t"/>
  <text x="400" y="262" class="label">222 — Demand valve</text>
  
  <line x1="510" y1="243" x2="510" y2="270" stroke="black" class="t"/>
  <text x="510" y="285" class="label">208 — Bulkhead</text>
  
  <line x1="570" y1="230" x2="620" y2="220" stroke="black" class="t"/>
  <text x="625" y="224" class="label">206 — Tank</text>
  
  <line x1="440" y1="570" x2="480" y2="580" stroke="black" class="t"/>
  <text x="485" y="584" class="label">212 — Diffuser</text>
  
  <line x1="350" y1="555" x2="310" y2="545" stroke="black" class="t"/>
  <text x="220" y="549" class="label">224 — Mushroom valve</text>
  
  <line x1="390" y1="600" x2="460" y2="615" stroke="black" class="t"/>
  <text x="465" y="619" class="label">226 — Dispersed bubbles</text>
  
  <text x="50" y="680" class="caption" font-weight="bold">Air Path: Tank (206) → Bulkhead (208) → Demand valve (222) → Interior breathing space → Chin chamber → Diffuser (212) → Bubbles (226)</text>
  <text x="50" y="695" class="caption">Cross-hatching indicates solid material in cross-section. Dashed lines indicate hidden/internal features.</text>
</svg>`;
}

function fig4() {
  // Magnetic quick-release detail
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}.h{stroke-width:0.4;stroke:gray}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 4 — Magnetic Quick-Release Strap Mechanism (Detail)</text>
  
  <!-- STATE A: ATTACHED -->
  <text x="200" y="60" text-anchor="middle" font-size="12" font-weight="bold">(a) Attached State</text>
  
  <!-- Helmet shell wall section -->
  <rect x="130" y="100" width="140" height="30" rx="4" fill="none" stroke="black" class="k"/>
  <!-- Hatching for shell material -->
  <line x1="135" y1="105" x2="145" y2="115" class="h"/>
  <line x1="150" y1="105" x2="160" y2="115" class="h"/>
  <line x1="235" y1="105" x2="245" y2="115" class="h"/>
  <line x1="250" y1="105" x2="260" y2="115" class="h"/>
  
  <!-- Recessed ferromagnetic receiver plate -->
  <rect x="170" y="115" width="60" height="15" rx="2" fill="none" stroke="black" class="k"/>
  <!-- Hatching for steel plate -->
  <line x1="175" y1="118" x2="180" y2="127" class="h"/>
  <line x1="185" y1="118" x2="190" y2="127" class="h"/>
  <line x1="195" y1="118" x2="200" y2="127" class="h"/>
  <line x1="205" y1="118" x2="210" y2="127" class="h"/>
  <line x1="215" y1="118" x2="220" y2="127" class="h"/>
  
  <!-- Magnetic puck (snapped to plate) -->
  <rect x="168" y="130" width="64" height="20" rx="6" fill="none" stroke="black" class="k"/>
  <!-- N52 magnet inside puck -->
  <rect x="180" y="134" width="40" height="12" rx="2" fill="none" stroke="black" class="m"/>
  <text x="200" y="143" text-anchor="middle" font-size="7" font-weight="bold">N52</text>
  
  <!-- Silicone encapsulation (around magnet) -->
  <path d="M172,132 Q168,135 168,140 Q168,148 172,150" fill="none" stroke="black" stroke-dasharray="3,2" class="t"/>
  
  <!-- Strap webbing -->
  <rect x="145" y="140" width="23" height="8" rx="1" fill="none" stroke="black" class="m"/>
  <rect x="232" y="140" width="23" height="8" rx="1" fill="none" stroke="black" class="m"/>
  <line x1="120" y1="144" x2="145" y2="144" stroke="black" class="m"/>
  <line x1="255" y1="144" x2="280" y2="144" stroke="black" class="m"/>
  
  <!-- Magnetic field lines -->
  <path d="M185,130 Q180,125 185,120" fill="none" stroke="gray" stroke-dasharray="2,2" class="t"/>
  <path d="M200,130 Q200,122 200,118" fill="none" stroke="gray" stroke-dasharray="2,2" class="t"/>
  <path d="M215,130 Q220,125 215,120" fill="none" stroke="gray" stroke-dasharray="2,2" class="t"/>
  
  <!-- Force label -->
  <text x="200" y="175" text-anchor="middle" font-size="9" fill="gray">3-5 kg pull force</text>
  
  <!-- STATE B: SEPARATED -->
  <text x="600" y="60" text-anchor="middle" font-size="12" font-weight="bold">(b) Separated State</text>
  
  <!-- Helmet shell wall section -->
  <rect x="530" y="100" width="140" height="30" rx="4" fill="none" stroke="black" class="k"/>
  <line x1="535" y1="105" x2="545" y2="115" class="h"/>
  <line x1="550" y1="105" x2="560" y2="115" class="h"/>
  <line x1="635" y1="105" x2="645" y2="115" class="h"/>
  <line x1="650" y1="105" x2="660" y2="115" class="h"/>
  
  <!-- Receiver plate still in shell -->
  <rect x="570" y="115" width="60" height="15" rx="2" fill="none" stroke="black" class="k"/>
  <line x1="575" y1="118" x2="580" y2="127" class="h"/>
  <line x1="585" y1="118" x2="590" y2="127" class="h"/>
  <line x1="595" y1="118" x2="600" y2="127" class="h"/>
  <line x1="605" y1="118" x2="610" y2="127" class="h"/>
  <line x1="615" y1="118" x2="620" y2="127" class="h"/>
  
  <!-- Magnetic puck (separated, pulled away) -->
  <rect x="568" y="200" width="64" height="20" rx="6" fill="none" stroke="black" class="k"/>
  <rect x="580" y="204" width="40" height="12" rx="2" fill="none" stroke="black" class="m"/>
  <text x="600" y="213" text-anchor="middle" font-size="7" font-weight="bold">N52</text>
  
  <!-- Strap pulled away -->
  <rect x="545" y="208" width="23" height="8" rx="1" fill="none" stroke="black" class="m"/>
  <rect x="632" y="208" width="23" height="8" rx="1" fill="none" stroke="black" class="m"/>
  <line x1="520" y1="212" x2="545" y2="212" stroke="black" class="m"/>
  <line x1="655" y1="212" x2="680" y2="212" stroke="black" class="m"/>
  
  <!-- Pull direction arrow -->
  <line x1="600" y1="170" x2="600" y2="195" stroke="black" class="m"/>
  <path d="M595,190 L600,200 L605,190" fill="none" stroke="black" class="m"/>
  <text x="600" y="165" text-anchor="middle" font-size="9" fill="gray">perpendicular pull</text>
  
  <!-- Separation gap -->
  <line x1="560" y1="130" x2="560" y2="200" stroke="gray" stroke-dasharray="4,4" class="t"/>
  <line x1="640" y1="130" x2="640" y2="200" stroke="gray" stroke-dasharray="4,4" class="t"/>
  <text x="600" y="180" text-anchor="middle" font-size="8" fill="gray">gap</text>
  
  <!-- Labels -->
  <text x="60" y="110" class="label">228 — Shell wall</text>
  <line x1="130" y1="115" x2="110" y2="110" stroke="black" class="t"/>
  <text x="60" y="130" class="label">230 — Receiver plate</text>
  <line x1="170" y1="122" x2="120" y2="127" stroke="black" class="t"/>
  <text x="60" y="148" class="label">232 — Magnetic puck</text>
  <line x1="168" y1="140" x2="120" y2="145" stroke="black" class="t"/>
  <text x="60" y="170" class="label">234 — Silicone encapsulation</text>
  <text x="295" y="148" class="label">236 — Strap webbing</text>
  <line x1="255" y1="144" x2="290" y2="145" stroke="black" class="t"/>
  
  <text x="50" y="290" class="caption" font-weight="bold">Operation: Strap terminal magnetic puck (232) snaps to ferromagnetic receiver plate (230) recessed in helmet shell (228).</text>
  <text x="50" y="305" class="caption">N52 neodymium magnets encapsulated in medical-grade silicone (234) for saltwater corrosion resistance.</text>
  <text x="50" y="320" class="caption">Release: deliberate perpendicular pull overcomes 3-5 kg magnetic force. Don/doff time: under 3 seconds.</text>
</svg>`;
}

function fig5() {
  // Acoustic exhaust diffuser detail
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 700" width="800" height="700">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}.h{stroke-width:0.4;stroke:gray}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 5 — Acoustic Exhaust Diffuser System (Detail)</text>
  
  <!-- Chin chamber (cross section) -->
  <path d="M200,150 L200,300 Q200,330 230,340 L570,340 Q600,330 600,300 L600,150" fill="none" stroke="black" class="k"/>
  <!-- Chamber hatching -->
  <line x1="205" y1="160" x2="215" y2="175" class="h"/>
  <line x1="205" y1="200" x2="215" y2="215" class="h"/>
  <line x1="205" y1="240" x2="215" y2="255" class="h"/>
  <line x1="585" y1="160" x2="595" y2="175" class="h"/>
  <line x1="585" y1="200" x2="595" y2="215" class="h"/>
  <line x1="585" y1="240" x2="595" y2="255" class="h"/>
  
  <!-- Interior label -->
  <text x="400" y="200" text-anchor="middle" font-size="12" fill="gray">Chin Chamber</text>
  <text x="400" y="218" text-anchor="middle" font-size="10" fill="gray">Volume: ~150 mL</text>
  
  <!-- Exhaled air entering from above -->
  <defs><marker id="a5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="0.8"/></marker></defs>
  <line x1="350" y1="100" x2="350" y2="145" stroke="black" class="m" marker-end="url(#a5)"/>
  <line x1="400" y1="90" x2="400" y2="145" stroke="black" class="m" marker-end="url(#a5)"/>
  <line x1="450" y1="100" x2="450" y2="145" stroke="black" class="m" marker-end="url(#a5)"/>
  <text x="400" y="85" text-anchor="middle" font-size="10" fill="gray">Exhaled Air</text>
  
  <!-- DIFFUSER PLATE (cross section, detail) -->
  <rect x="220" y="340" width="360" height="20" rx="3" fill="none" stroke="black" class="k"/>
  <!-- Hatching for plate material (PA66-GF30) -->
  <line x1="225" y1="343" x2="232" y2="357" class="h"/>
  <line x1="240" y1="343" x2="247" y2="357" class="h"/>
  <line x1="540" y1="343" x2="547" y2="357" class="h"/>
  <line x1="555" y1="343" x2="562" y2="357" class="h"/>
  
  <!-- Diffuser holes (through plate) — 2-3mm diameter each -->
  <rect x="265" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="295" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="325" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="355" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="385" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="415" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="445" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="475" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="505" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  <rect x="535" y="340" width="4" height="20" fill="white" stroke="black" class="m"/>
  
  <!-- Mushroom valve (one-way, at left side of plate) -->
  <path d="M230,338 Q225,330 230,325 Q240,320 250,325 Q255,330 250,338" fill="none" stroke="black" class="k"/>
  <line x1="240" y1="325" x2="240" y2="338" stroke="black" class="m"/>
  
  <!-- Flow arrows through holes -->
  <line x1="267" y1="335" x2="267" y2="365" stroke="black" class="t" marker-end="url(#a5)"/>
  <line x1="357" y1="335" x2="357" y2="365" stroke="black" class="t" marker-end="url(#a5)"/>
  <line x1="447" y1="335" x2="447" y2="365" stroke="black" class="t" marker-end="url(#a5)"/>
  <line x1="537" y1="335" x2="537" y2="365" stroke="black" class="t" marker-end="url(#a5)"/>
  
  <!-- TINY BUBBLES exiting (dispersed pattern) -->
  <circle cx="270" cy="390" r="3" fill="none" stroke="black" class="m"/>
  <circle cx="285" cy="400" r="2" fill="none" stroke="black" class="m"/>
  <circle cx="300" cy="395" r="2.5" fill="none" stroke="black" class="m"/>
  <circle cx="330" cy="392" r="3" fill="none" stroke="black" class="m"/>
  <circle cx="345" cy="405" r="2" fill="none" stroke="black" class="m"/>
  <circle cx="360" cy="388" r="2.5" fill="none" stroke="black" class="m"/>
  <circle cx="390" cy="398" r="3" fill="none" stroke="black" class="m"/>
  <circle cx="405" cy="385" r="2" fill="none" stroke="black" class="m"/>
  <circle cx="420" cy="402" r="2.5" fill="none" stroke="black" class="m"/>
  <circle cx="450" cy="390" r="3" fill="none" stroke="black" class="m"/>
  <circle cx="465" cy="400" r="2" fill="none" stroke="black" class="m"/>
  <circle cx="480" cy="393" r="2.5" fill="none" stroke="black" class="m"/>
  <circle cx="510" cy="395" r="2" fill="none" stroke="black" class="m"/>
  <circle cx="525" cy="388" r="3" fill="none" stroke="black" class="m"/>
  <circle cx="540" cy="402" r="2" fill="none" stroke="black" class="m"/>
  
  <!-- Lateral dispersion arrows -->
  <path d="M250,395 Q220,400 200,410" fill="none" stroke="black" class="t" marker-end="url(#a5)"/>
  <path d="M550,395 Q580,400 600,410" fill="none" stroke="black" class="t" marker-end="url(#a5)"/>
  <text x="175" y="425" font-size="9" fill="gray">lateral dispersion</text>
  <text x="575" y="425" font-size="9" fill="gray">lateral dispersion</text>
  
  <!-- Comparison: Traditional single-port (inset) -->
  <rect x="150" y="480" width="200" height="120" rx="8" fill="none" stroke="black" class="m"/>
  <text x="250" y="500" text-anchor="middle" font-size="10" font-weight="bold">Traditional (Single Port)</text>
  <rect x="230" y="510" width="15" height="15" fill="none" stroke="black" class="m"/>
  <circle cx="260" cy="545" r="8" fill="none" stroke="black" class="m"/>
  <circle cx="255" cy="560" r="10" fill="none" stroke="black" class="m"/>
  <circle cx="265" cy="578" r="12" fill="none" stroke="black" class="m"/>
  <text x="250" y="600" text-anchor="middle" font-size="9">60-80 dB noise</text>
  
  <rect x="450" y="480" width="200" height="120" rx="8" fill="none" stroke="black" class="m"/>
  <text x="550" y="500" text-anchor="middle" font-size="10" font-weight="bold">DRIFT Diffuser (Multi-Port)</text>
  <circle cx="510" cy="530" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="525" cy="535" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="540" cy="528" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="555" cy="533" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="570" cy="530" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="585" cy="535" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="515" cy="550" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="530" cy="555" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="545" cy="548" r="1.5" fill="none" stroke="black" class="t"/>
  <circle cx="560" cy="553" r="2" fill="none" stroke="black" class="t"/>
  <circle cx="575" cy="550" r="1.5" fill="none" stroke="black" class="t"/>
  <text x="550" y="580" text-anchor="middle" font-size="9">~40-60 dB (15-25 dB reduction)</text>
  
  <!-- Labels -->
  <text x="620" y="160" class="label">238 — Chin chamber</text>
  <line x1="600" y1="200" x2="615" y2="165" stroke="black" class="t"/>
  <text x="620" y="350" class="label">212 — Diffuser plate</text>
  <line x1="580" y1="350" x2="615" y2="350" stroke="black" class="t"/>
  <text x="100" y="330" class="label">224 — Mushroom valve</text>
  <line x1="230" y1="332" x2="185" y2="332" stroke="black" class="t"/>
  <text x="620" y="395" class="label">226 — Dispersed bubbles</text>
  <line x1="545" y1="395" x2="615" y2="395" stroke="black" class="t"/>
  <text x="620" y="340" class="label">240 — Diffuser holes (2-3mm)</text>
  
  <text x="50" y="650" class="caption" font-weight="bold">Noise Reduction Principle: Multiple small holes produce many tiny bubbles (lower acoustic energy) vs. single large port producing few large bubbles (higher acoustic energy).</text>
  <text x="50" y="665" class="caption">Estimated noise reduction: 15-25 dB. Lateral bubble dispersion also keeps bubbles out of camera field of view.</text>
</svg>`;
}

function fig6() {
  // Side-mount tank detail
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}.h{stroke-width:0.4;stroke:gray}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 6 — Side-Mount Tank System (Detail Cross-Section)</text>
  
  <!-- Helmet shell wall (partial, side view) -->
  <path d="M250,100 L250,450" fill="none" stroke="black" class="k"/>
  <path d="M270,100 L270,450" fill="none" stroke="black" class="k"/>
  <!-- Hatching for shell wall -->
  <line x1="253" y1="110" x2="263" y2="125" class="h"/>
  <line x1="253" y1="150" x2="263" y2="165" class="h"/>
  <line x1="253" y1="190" x2="263" y2="205" class="h"/>
  <line x1="253" y1="230" x2="263" y2="245" class="h"/>
  <line x1="253" y1="350" x2="263" y2="365" class="h"/>
  <line x1="253" y1="390" x2="263" y2="405" class="h"/>
  <text x="260" y="95" text-anchor="middle" font-size="8" fill="gray">SHELL WALL</text>
  <text x="230" y="280" text-anchor="middle" font-size="8" fill="gray" transform="rotate(-90, 230, 280)">INTERIOR</text>
  <text x="290" y="280" text-anchor="middle" font-size="8" fill="gray" transform="rotate(-90, 290, 280)">EXTERIOR</text>
  
  <!-- BULKHEAD FITTING (through shell wall) -->
  <rect x="240" y="260" width="40" height="30" rx="3" fill="none" stroke="black" class="k"/>
  <!-- O-ring seals -->
  <ellipse cx="250" cy="275" rx="3" ry="8" fill="none" stroke="black" class="m"/>
  <ellipse cx="270" cy="275" rx="3" ry="8" fill="none" stroke="black" class="m"/>
  <!-- Air passage through bulkhead -->
  <rect x="255" y="268" width="10" height="14" fill="white" stroke="black" class="m"/>
  
  <!-- Interior demand valve -->
  <rect x="200" y="265" width="42" height="20" rx="4" fill="none" stroke="black" class="m"/>
  <text x="221" y="279" text-anchor="middle" font-size="7">DEMAND</text>
  
  <!-- Exterior first-stage regulator connection -->
  <rect x="278" y="262" width="50" height="26" rx="4" fill="none" stroke="black" class="m"/>
  <text x="303" y="279" text-anchor="middle" font-size="7">1st STAGE</text>
  
  <!-- TANK CRADLE -->
  <path d="M330,160 Q340,150 355,155 L355,400 Q340,410 330,400 Z" fill="none" stroke="black" class="k"/>
  <!-- Snap-lock latch -->
  <rect x="335" y="155" width="25" height="12" rx="2" fill="none" stroke="black" class="m"/>
  <!-- Spring in latch -->
  <path d="M340,160 Q343,157 346,160 Q349,163 352,160" fill="none" stroke="black" class="t"/>
  
  <!-- TANK (0.5L, 15 degree cant) -->
  <g transform="rotate(-15, 430, 280)">
    <rect x="360" y="150" width="50" height="160" rx="25" fill="none" stroke="black" class="k"/>
    <!-- Tank valve -->
    <rect x="375" y="138" width="20" height="15" rx="3" fill="none" stroke="black" class="m"/>
    <!-- Tank markings -->
    <text x="385" y="230" text-anchor="middle" font-size="8">0.5L</text>
    <text x="385" y="245" text-anchor="middle" font-size="7">3000 PSI</text>
    <text x="385" y="260" text-anchor="middle" font-size="7">Al 6061</text>
  </g>
  
  <!-- 15 degree angle indicator -->
  <line x1="350" y1="150" x2="350" y2="400" stroke="gray" stroke-dasharray="4,4" class="t"/>
  <path d="M350,400 L380,170" fill="none" stroke="gray" stroke-dasharray="4,4" class="t"/>
  <text x="360" y="420" font-size="9" fill="gray">15° cant</text>
  
  <!-- Air flow arrows -->
  <defs><marker id="a6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="0.8"/></marker></defs>
  <line x1="328" y1="275" x2="285" y2="275" stroke="black" class="m" marker-end="url(#a6)"/>
  <line x1="240" y1="275" x2="215" y2="275" stroke="black" class="m" marker-end="url(#a6)"/>
  <text x="305" y="295" font-size="8" fill="gray">air flow</text>
  
  <!-- Labels -->
  <text x="50" y="275" class="label">222 — Demand valve</text>
  <line x1="145" y1="275" x2="200" y2="275" stroke="black" class="t"/>
  <text x="50" y="295" class="label">208 — Bulkhead fitting</text>
  <line x1="145" y1="292" x2="240" y2="275" stroke="black" class="t"/>
  <text x="460" y="175" class="label">206 — Tank</text>
  <text x="460" y="330" class="label">216 — Cradle</text>
  <line x1="355" y1="300" x2="455" y2="325" stroke="black" class="t"/>
  <text x="460" y="165" class="label">242 — Tank valve</text>
  <text x="460" y="195" class="label">244 — First-stage reg.</text>
  <line x1="328" y1="275" x2="455" y2="192" stroke="black" class="t"/>
  <text x="50" y="258" class="label">246 — O-ring seals</text>
  <line x1="145" y1="258" x2="248" y2="270" stroke="black" class="t"/>
  
  <text x="50" y="500" class="caption" font-weight="bold">Air Path: Tank (206) → First-stage regulator (244) → Bulkhead fitting (208) with O-ring seals (246) → Demand valve (222) → Interior breathing space</text>
  <text x="50" y="515" class="caption">No external hoses: air routes through the sealed bulkhead in the helmet shell wall. Tank replaceable underwater via snap-lock cradle (216).</text>
</svg>`;
}

function fig7() {
  // Rear view
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 700" width="800" height="700">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 7 — Rear View of DRIFT Helmet</text>
  
  <!-- Helmet shell rear outline -->
  <path d="M400,80 Q520,85 555,150 Q580,220 580,310 Q580,380 565,430 Q545,480 500,520 Q460,545 400,555 Q340,545 300,520 Q255,480 235,430 Q220,380 220,310 Q220,220 245,150 Q280,85 400,80 Z" fill="none" stroke="black" class="k"/>
  
  <!-- Crown strap path -->
  <path d="M300,150 Q310,120 340,100 Q370,85 400,80 Q430,85 460,100 Q490,120 500,150" fill="none" stroke="black" class="m"/>
  <!-- Strap adjustment keeper -->
  <rect x="385" y="88" width="30" height="10" rx="2" fill="none" stroke="black" class="m"/>
  
  <!-- Left magnetic attachment point (crown) -->
  <circle cx="300" cy="150" r="12" fill="none" stroke="black" class="k"/>
  <circle cx="300" cy="150" r="6" fill="none" stroke="black" class="m"/>
  <!-- Right magnetic attachment point (crown) -->
  <circle cx="500" cy="150" r="12" fill="none" stroke="black" class="k"/>
  <circle cx="500" cy="150" r="6" fill="none" stroke="black" class="m"/>
  
  <!-- Chin strap path (going around bottom) -->
  <path d="M280,470 Q300,500 340,520 Q370,535 400,540 Q430,535 460,520 Q500,500 520,470" fill="none" stroke="black" class="m"/>
  <!-- Left magnetic attachment point (chin) -->
  <circle cx="280" cy="470" r="12" fill="none" stroke="black" class="k"/>
  <circle cx="280" cy="470" r="6" fill="none" stroke="black" class="m"/>
  <!-- Right magnetic attachment point (chin) -->
  <circle cx="520" cy="470" r="12" fill="none" stroke="black" class="k"/>
  <circle cx="520" cy="470" r="6" fill="none" stroke="black" class="m"/>
  
  <!-- Diffuser plate position (bottom rear) -->
  <rect x="340" y="545" width="120" height="15" rx="5" fill="none" stroke="black" class="k"/>
  <!-- Holes -->
  <circle cx="355" cy="552" r="2" fill="black"/>
  <circle cx="370" cy="552" r="2" fill="black"/>
  <circle cx="385" cy="552" r="2" fill="black"/>
  <circle cx="400" cy="552" r="2" fill="black"/>
  <circle cx="415" cy="552" r="2" fill="black"/>
  <circle cx="430" cy="552" r="2" fill="black"/>
  <circle cx="445" cy="552" r="2" fill="black"/>
  
  <!-- Communications port (left side) -->
  <circle cx="225" cy="310" r="14" fill="none" stroke="black" class="k"/>
  <circle cx="225" cy="310" r="8" fill="none" stroke="black" class="m"/>
  <!-- Cap detail -->
  <line x1="219" y1="304" x2="231" y2="316" stroke="black" class="t"/>
  <line x1="219" y1="316" x2="231" y2="304" stroke="black" class="t"/>
  <text x="225" y="335" text-anchor="middle" font-size="8" fill="gray">SEALED CAP</text>
  
  <!-- Tank cradle position (right side, rear visible) -->
  <rect x="565" y="250" width="25" height="60" rx="5" fill="none" stroke="black" class="m"/>
  
  <!-- Labels -->
  <line x1="300" y1="138" x2="260" y2="115" stroke="black" class="t"/>
  <text x="180" y="119" class="label">210 — Mag. point</text>
  <line x1="500" y1="138" x2="540" y2="115" stroke="black" class="t"/>
  <text x="545" y="119" class="label">210 — Mag. point</text>
  
  <line x1="360" y1="100" x2="330" y2="90" stroke="black" class="t"/>
  <text x="260" y="85" class="label">248 — Crown strap</text>
  
  <line x1="400" y1="540" x2="440" y2="530" stroke="black" class="t"/>
  <text x="445" y="527" class="label">250 — Chin strap</text>
  
  <line x1="340" y1="552" x2="300" y2="560" stroke="black" class="t"/>
  <text x="200" y="564" class="label">212 — Diffuser plate</text>
  
  <line x1="225" y1="296" x2="180" y2="275" stroke="black" class="t"/>
  <text x="100" y="279" class="label">214 — Comms port</text>
  
  <line x1="590" y1="280" x2="620" y2="275" stroke="black" class="t"/>
  <text x="625" y="279" class="label">216 — Cradle</text>
  
  <text x="50" y="620" class="caption" font-weight="bold">Four magnetic attachment points (210) shown: 2 on crown strap path, 2 on chin strap path.</text>
  <text x="50" y="635" class="caption">Diffuser plate (212) positioned at bottom-rear for optimal bubble dispersion away from camera field of view.</text>
  <text x="50" y="650" class="caption">Communications port (214) sealed with waterproof blanking cap. 4-pin wet-mate connector for future modules.</text>
</svg>`;
}

function fig8() {
  // Visor tint options
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <style>text{font-family:Arial,sans-serif;font-size:11px}.label{font-size:11px;font-weight:bold}.caption{font-size:10px}.t{stroke-width:0.5}.m{stroke-width:1.2}.k{stroke-width:1.8}</style>
  <text x="400" y="25" text-anchor="middle" font-size="14" font-weight="bold">FIG. 8 — Interchangeable Visor Tint System</text>
  
  <!-- Five visor variants shown side by side -->
  <!-- Clear -->
  <path d="M80,100 Q120,90 140,120 Q150,150 148,200 Q145,240 135,265 Q120,290 100,300 Q85,305 80,303 Q75,300 65,290 Q55,265 52,200 Q50,150 60,120 Q70,90 80,100 Z" fill="none" stroke="black" class="m"/>
  <text x="80" y="200" text-anchor="middle" font-size="10" fill="gray">CLEAR</text>
  <text x="80" y="330" text-anchor="middle" font-size="10" font-weight="bold">Clear</text>
  <text x="80" y="345" text-anchor="middle" font-size="8" fill="gray">All conditions</text>
  
  <!-- Smoke -->
  <path d="M220,100 Q260,90 280,120 Q290,150 288,200 Q285,240 275,265 Q260,290 240,300 Q225,305 220,303 Q215,300 205,290 Q195,265 192,200 Q190,150 200,120 Q210,90 220,100 Z" fill="none" stroke="black" class="m"/>
  <!-- Smoke tint pattern -->
  <line x1="205" y1="130" x2="260" y2="130" stroke="gray" class="t"/>
  <line x1="200" y1="150" x2="270" y2="150" stroke="gray" class="t"/>
  <line x1="198" y1="170" x2="275" y2="170" stroke="gray" class="t"/>
  <line x1="196" y1="190" x2="278" y2="190" stroke="gray" class="t"/>
  <line x1="198" y1="210" x2="275" y2="210" stroke="gray" class="t"/>
  <line x1="200" y1="230" x2="270" y2="230" stroke="gray" class="t"/>
  <line x1="205" y1="250" x2="260" y2="250" stroke="gray" class="t"/>
  <text x="220" y="330" text-anchor="middle" font-size="10" font-weight="bold">Smoke</text>
  <text x="220" y="345" text-anchor="middle" font-size="8" fill="gray">Bright sun</text>
  
  <!-- Amber -->
  <path d="M360,100 Q400,90 420,120 Q430,150 428,200 Q425,240 415,265 Q400,290 380,300 Q365,305 360,303 Q355,300 345,290 Q335,265 332,200 Q330,150 340,120 Q350,90 360,100 Z" fill="none" stroke="black" class="m"/>
  <!-- Amber tint pattern (dots) -->
  <circle cx="360" cy="160" r="1.5" fill="gray"/>
  <circle cx="375" cy="170" r="1.5" fill="gray"/>
  <circle cx="350" cy="180" r="1.5" fill="gray"/>
  <circle cx="370" cy="195" r="1.5" fill="gray"/>
  <circle cx="355" cy="210" r="1.5" fill="gray"/>
  <circle cx="380" cy="220" r="1.5" fill="gray"/>
  <circle cx="360" cy="235" r="1.5" fill="gray"/>
  <text x="360" y="330" text-anchor="middle" font-size="10" font-weight="bold">Amber</text>
  <text x="360" y="345" text-anchor="middle" font-size="8" fill="gray">Low light</text>
  
  <!-- Blue Mirror -->
  <path d="M500,100 Q540,90 560,120 Q570,150 568,200 Q565,240 555,265 Q540,290 520,300 Q505,305 500,303 Q495,300 485,290 Q475,265 472,200 Q470,150 480,120 Q490,90 500,100 Z" fill="none" stroke="black" class="m"/>
  <!-- Mirror reflection lines -->
  <path d="M495,140 L520,160" stroke="gray" class="m"/>
  <path d="M490,170 L525,195" stroke="gray" class="m"/>
  <path d="M488,210 L530,240" stroke="gray" class="m"/>
  <text x="500" y="330" text-anchor="middle" font-size="10" font-weight="bold">Blue Mirror</text>
  <text x="500" y="345" text-anchor="middle" font-size="8" fill="gray">Style / glare</text>
  
  <!-- Rose -->
  <path d="M640,100 Q680,90 700,120 Q710,150 708,200 Q705,240 695,265 Q680,290 660,300 Q645,305 640,303 Q635,300 625,290 Q615,265 612,200 Q610,150 620,120 Q630,90 640,100 Z" fill="none" stroke="black" class="m"/>
  <!-- Rose tint (crosshatch) -->
  <line x1="625" y1="140" x2="665" y2="180" stroke="gray" class="t"/>
  <line x1="625" y1="170" x2="680" y2="225" stroke="gray" class="t"/>
  <line x1="620" y1="200" x2="685" y2="260" stroke="gray" class="t"/>
  <line x1="665" y1="140" x2="625" y2="180" stroke="gray" class="t"/>
  <line x1="680" y1="170" x2="625" y2="225" stroke="gray" class="t"/>
  <line x1="685" y1="200" x2="620" y2="260" stroke="gray" class="t"/>
  <text x="640" y="330" text-anchor="middle" font-size="10" font-weight="bold">Rose</text>
  <text x="640" y="345" text-anchor="middle" font-size="8" fill="gray">Contrast</text>
  
  <!-- Arrow showing interchange -->
  <path d="M80,370 L640,370" fill="none" stroke="black" class="t"/>
  <text x="360" y="390" text-anchor="middle" font-size="10">Tool-free visor swap via compression-fit silicone gasket</text>
  
  <!-- Labels -->
  <text x="400" y="440" text-anchor="middle" class="label">202 — Interchangeable visor panels (5 tint options shown)</text>
  <text x="400" y="460" text-anchor="middle" class="caption">All visors: optically clear polycarbonate, anti-fog interior, anti-scratch exterior, UV400 protection.</text>
  <text x="400" y="475" text-anchor="middle" class="caption">User swaps entire visor panel — no tools required. Gasket maintains watertight seal across all variants.</text>
</svg>`;
}

module.exports = { fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8 };
