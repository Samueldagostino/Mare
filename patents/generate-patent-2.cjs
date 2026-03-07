const {
  Document, Packer, Paragraph, TextRun, Header, Footer,
  AlignmentType, PageNumber, ImageRun, PageBreak
} = require("docx");
const fs = require("fs");
const sharp = require("sharp");

async function svgToPng(svgString, width = 1600) {
  return await sharp(Buffer.from(svgString, "utf-8")).resize(width).png().toBuffer();
}

// ============================================================
// PATENT 2: HydroHarness — Dual-Tank Body-Mounted Harness
// ============================================================

function generateFig1SVG() {
  // Front view of complete harness worn on user's torso
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 1 — Front View of HydroHarness (Worn by User)</text>

  <!-- User torso outline (dashed - not part of invention) -->
  <path d="M300,100 Q400,80 500,100 L530,200 Q540,350 520,500 L480,550 Q400,570 320,550 L280,500 Q260,350 270,200 Z" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Shoulders -->
  <path d="M300,100 Q250,110 220,160" fill="none" stroke="black" stroke-dasharray="8,4" class="thin"/>
  <path d="M500,100 Q550,110 580,160" fill="none" stroke="black" stroke-dasharray="8,4" class="thin"/>
  <!-- Head outline for tube destination -->
  <ellipse cx="400" cy="70" rx="45" ry="35" fill="none" stroke="black" stroke-dasharray="8,4" class="thin"/>

  <!-- WAIST BELT (wraps fully around torso) -->
  <path d="M220,380 L300,372 L350,369 L400,368 L450,369 L500,372 L580,380" fill="none" stroke="black" class="thick"/>
  <path d="M220,408 L300,400 L350,397 L400,396 L450,397 L500,400 L580,408" fill="none" stroke="black" class="thick"/>
  <!-- Belt webbing texture lines -->
  <line x1="250" y1="385" x2="250" y2="403" stroke="black" class="thin"/>
  <line x1="290" y1="378" x2="290" y2="396" stroke="black" class="thin"/>
  <line x1="510" y1="378" x2="510" y2="396" stroke="black" class="thin"/>
  <line x1="550" y1="385" x2="550" y2="403" stroke="black" class="thin"/>

  <!-- Neoprene comfort padding (cross-hatch on interior) -->
  <line x1="340" y1="372" x2="345" y2="394" stroke="gray" class="thin"/>
  <line x1="360" y1="371" x2="365" y2="393" stroke="gray" class="thin"/>
  <line x1="440" y1="371" x2="445" y2="393" stroke="gray" class="thin"/>
  <line x1="460" y1="372" x2="465" y2="394" stroke="gray" class="thin"/>

  <!-- QUICK-RELEASE BUCKLE (center front, side-squeeze type) -->
  <rect x="382" y="369" width="36" height="28" rx="4" fill="none" stroke="black" class="thick"/>
  <!-- Side-squeeze release indicators -->
  <path d="M385,375 L385,391" stroke="black" class="medium"/>
  <path d="M415,375 L415,391" stroke="black" class="medium"/>
  <!-- Center split line -->
  <line x1="400" y1="369" x2="400" y2="397" stroke="black" class="thin" stroke-dasharray="3,2"/>
  <!-- Squeeze arrows -->
  <path d="M379,383 L385,383" stroke="black" class="thin"/>
  <path d="M415,383 L421,383" stroke="black" class="thin"/>

  <!-- D-RING attachment points -->
  <path d="M330,375 Q320,370 315,378 Q310,386 320,390 L330,393" fill="none" stroke="black" class="medium"/>
  <path d="M470,375 Q480,370 485,378 Q490,386 480,390 L470,393" fill="none" stroke="black" class="medium"/>

  <!-- LEFT TANK CRADLE (fabric webbing loop on belt, left-front hip) -->
  <!-- Outer fabric loop strap wrapping around tank -->
  <path d="M280,396 L280,410 Q280,540 280,545 Q280,555 290,555 L310,555 Q320,555 320,545 L320,410 L320,396" fill="none" stroke="black" class="thick"/>
  <!-- Inner fabric loop strap (second tank) -->
  <path d="M335,396 L335,410 Q335,540 335,545 Q335,555 345,555 L365,555 Q375,555 375,545 L375,410 L375,396" fill="none" stroke="black" class="thick"/>
  <!-- Fabric texture (stitching lines on loops) -->
  <line x1="283" y1="420" x2="283" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="317" y1="420" x2="317" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="338" y1="420" x2="338" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="372" y1="420" x2="372" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>

  <!-- LEFT TANK (Tank 1 — in left fabric loop) -->
  <rect x="282" y="405" width="36" height="140" rx="18" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve top (silver metallic cap) -->
  <rect x="290" y="392" width="20" height="16" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- Pressure gauge dial -->
  <circle cx="300" cy="395" r="5" fill="none" stroke="black" class="thin"/>
  <line x1="300" y1="393" x2="303" y2="391" stroke="black" class="thin"/>
  <text x="300" y="530" text-anchor="middle" font-size="7">0.5L</text>

  <!-- RIGHT TANK (Tank 2 — in right fabric loop, side by side) -->
  <rect x="337" y="405" width="36" height="140" rx="18" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve top -->
  <rect x="345" y="392" width="20" height="16" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- Pressure gauge dial -->
  <circle cx="355" cy="395" r="5" fill="none" stroke="black" class="thin"/>
  <line x1="355" y1="393" x2="358" y2="391" stroke="black" class="thin"/>
  <text x="355" y="530" text-anchor="middle" font-size="7">0.5L</text>

  <!-- Y-VALVE MANIFOLD (metal Y-junction connecting both tank tops) -->
  <!-- Left input arm from Tank 1 valve -->
  <line x1="300" y1="392" x2="315" y2="378" stroke="black" class="thick"/>
  <!-- Right input arm from Tank 2 valve -->
  <line x1="355" y1="392" x2="340" y2="378" stroke="black" class="thick"/>
  <!-- Junction body (where Y merges) -->
  <circle cx="327" cy="375" r="8" fill="none" stroke="black" class="thick"/>
  <text x="327" y="378" text-anchor="middle" font-size="6" font-weight="bold">Y</text>

  <!-- Single breathing tube from Y-valve up to face/mouthpiece -->
  <path d="M327,367 Q327,340 335,300 Q345,250 370,200 Q385,170 395,140 Q398,120 400,105" fill="none" stroke="black" class="medium"/>
  <!-- Tube texture (smooth tube with periodic rings) -->
  <ellipse cx="340" cy="280" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="360" cy="230" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="385" cy="170" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <!-- Mouthpiece at end -->
  <ellipse cx="400" cy="103" rx="8" ry="5" fill="none" stroke="black" class="medium"/>

  <!-- STABILIZER STRAP (secondary strap below belt, wraps around upper left thigh) -->
  <path d="M270,408 L265,480 Q260,530 265,560 Q270,580 290,585 Q320,590 350,585 Q370,580 375,560 Q380,530 375,480 L375,408" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <!-- Stabilizer buckle -->
  <rect x="305" y="578" width="20" height="10" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- REFERENCE LABELS -->
  <!-- 100 — Quick-release buckle -->
  <line x1="418" y1="383" x2="465" y2="400" stroke="black" class="thin"/>
  <text x="470" y="404" class="label">100</text>

  <!-- 102 — Waist belt -->
  <line x1="230" y1="394" x2="175" y2="385" stroke="black" class="thin"/>
  <text x="110" y="389" class="label">102</text>

  <!-- 104 — Snap-lock latch (now fabric loop retention) -->
  <line x1="280" y1="470" x2="240" y2="470" stroke="black" class="thin"/>
  <text x="195" y="474" class="label">104</text>

  <!-- 106 — D-ring attachment -->
  <line x1="315" y1="382" x2="315" y2="360" stroke="black" class="thin"/>
  <text x="308" y="355" class="label">106</text>

  <!-- 108 — Tank cradle (fabric loop) -->
  <line x1="375" y1="475" x2="420" y2="475" stroke="black" class="thin"/>
  <text x="425" y="479" class="label">108</text>

  <!-- 110 — 0.5L tank -->
  <line x1="282" y1="510" x2="230" y2="520" stroke="black" class="thin"/>
  <text x="175" y="524" class="label">110</text>

  <!-- 112 — Y-valve manifold -->
  <line x1="335" y1="375" x2="380" y2="360" stroke="black" class="thin"/>
  <text x="385" y="358" class="label">112</text>

  <!-- 114 — Stabilizer strap -->
  <line x1="290" y1="585" x2="245" y2="600" stroke="black" class="thin"/>
  <text x="185" y="604" class="label">114</text>

  <!-- 116 — Neoprene comfort padding -->
  <line x1="345" y1="393" x2="345" y2="360" stroke="black" class="thin"/>
  <text x="338" y="355" class="label">116</text>

  <!-- 140 — Breathing tube -->
  <line x1="360" y1="230" x2="410" y2="230" stroke="black" class="thin"/>
  <text x="415" y="234" class="label">140</text>

  <!-- Legend -->
  <text x="50" y="700" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="715" class="caption">100 — Quick-release belt buckle (side-squeeze)  |  102 — Waist belt (50mm webbing)  |  104 — Fabric loop retention</text>
  <text x="50" y="730" class="caption">106 — D-ring attachment  |  108 — Tank cradle (webbing loop)  |  110 — 0.5L tank  |  112 — Y-valve manifold</text>
  <text x="50" y="745" class="caption">114 — Stabilizer strap (upper thigh)  |  116 — Neoprene comfort padding  |  140 — Breathing tube</text>
</svg>`;
}

function generateFig2SVG() {
  // Exploded view of a single tank cradle
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
    .hatch { stroke-width: 0.4; stroke: gray; }
  </style>
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 2 — Exploded View of Tank Cradle Assembly</text>

  <!-- BELT MOUNTING CLIPS (top, separated) -->
  <rect x="180" y="80" width="60" height="30" rx="4" fill="none" stroke="black" class="thick"/>
  <rect x="195" y="85" width="30" height="20" rx="2" fill="none" stroke="black" class="medium"/>
  <rect x="560" y="80" width="60" height="30" rx="4" fill="none" stroke="black" class="thick"/>
  <rect x="575" y="85" width="30" height="20" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Dashed connection lines -->
  <line x1="210" y1="110" x2="270" y2="180" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <line x1="590" y1="110" x2="530" y2="180" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- CRADLE BODY (main piece, center) -->
  <rect x="230" y="200" width="340" height="120" rx="16" fill="none" stroke="black" class="thick"/>
  <!-- Interior cylindrical recess (dashed - interior feature) -->
  <ellipse cx="400" cy="260" rx="55" ry="25" fill="none" stroke="black" stroke-dasharray="4,2" class="medium"/>
  <!-- Anti-rotation ridges (interior) -->
  <line x1="350" y1="240" x2="350" y2="290" stroke="black" class="medium"/>
  <line x1="450" y1="240" x2="450" y2="290" stroke="black" class="medium"/>
  <!-- Material cross-hatch (glass-reinforced nylon) -->
  <line x1="240" y1="210" x2="260" y2="230" class="hatch"/>
  <line x1="260" y1="210" x2="280" y2="230" class="hatch"/>
  <line x1="520" y1="210" x2="540" y2="230" class="hatch"/>
  <line x1="540" y1="210" x2="560" y2="230" class="hatch"/>
  <!-- Belt clip receivers -->
  <rect x="245" y="190" width="30" height="15" rx="2" fill="none" stroke="black" class="medium"/>
  <rect x="525" y="190" width="30" height="15" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- SPRING-LOADED LATCH (separated above cradle) -->
  <rect x="355" y="140" width="90" height="30" rx="5" fill="none" stroke="black" class="thick"/>
  <!-- Spring inside latch -->
  <path d="M370,150 Q375,145 380,150 Q385,155 390,150 Q395,145 400,150 Q405,155 410,150 Q415,145 420,150 Q425,155 430,150" fill="none" stroke="black" class="thin"/>
  <!-- Latch hook -->
  <path d="M400,170 L400,185 Q395,195 390,190" fill="none" stroke="black" class="medium"/>
  <!-- Dashed assembly line -->
  <line x1="400" y1="170" x2="400" y2="200" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- RELEASE TAB (separated to right) -->
  <path d="M620,230 L660,230 Q670,230 670,240 L670,270 Q670,280 660,280 L620,280 Z" fill="none" stroke="black" class="thick"/>
  <text x="645" y="260" text-anchor="middle" font-size="9" font-weight="bold">TAB</text>
  <!-- Connection line -->
  <line x1="570" y1="260" x2="620" y2="260" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- TANK (below cradle, separated) -->
  <rect x="365" y="380" width="70" height="180" rx="35" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve -->
  <rect x="385" y="365" width="30" height="20" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- Tank neck ring -->
  <ellipse cx="400" cy="395" rx="40" ry="8" fill="none" stroke="black" class="medium"/>
  <text x="400" y="475" text-anchor="middle" font-size="9">0.5L / 3000 PSI</text>
  <!-- Dashed assembly arrow -->
  <line x1="400" y1="365" x2="400" y2="320" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <path d="M395,325 L400,315 L405,325" fill="none" stroke="black" class="thin"/>

  <!-- REFERENCE LABELS -->
  <line x1="210" y1="95" x2="155" y2="80" stroke="black" class="thin"/>
  <text x="70" y="84" class="label">120 — Belt clips</text>

  <line x1="400" y1="155" x2="470" y2="130" stroke="black" class="thin"/>
  <text x="475" y="134" class="label">104 — Spring latch</text>

  <line x1="570" y1="260" x2="570" y2="310" stroke="black" class="thin"/>
  <text x="495" y="318" class="label">122 — Release tab</text>

  <line x1="230" y1="260" x2="170" y2="275" stroke="black" class="thin"/>
  <text x="60" y="279" class="label">108 — Cradle body</text>

  <line x1="350" y1="265" x2="300" y2="290" stroke="black" class="thin"/>
  <text x="190" y="300" class="label">124 — Anti-rotation ridges</text>

  <line x1="400" y1="395" x2="480" y2="385" stroke="black" class="thin"/>
  <text x="485" y="389" class="label">126 — Tank neck ring</text>

  <line x1="400" y1="480" x2="480" y2="490" stroke="black" class="thin"/>
  <text x="485" y="494" class="label">110 — 0.5L tank</text>

  <!-- Legend -->
  <text x="50" y="620" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="635" class="caption">104 — Spring-loaded snap-lock latch  |  108 — Cradle body (glass-reinforced nylon)  |  110 — 0.5L tank</text>
  <text x="50" y="650" class="caption">120 — Belt mounting clips  |  122 — Release tab  |  124 — Anti-rotation ridges  |  126 — Tank neck ring</text>
</svg>`;
}

function generateFig3SVG() {
  // Detail cross-section of Y-valve manifold
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
    .hatch { stroke-width: 0.4; stroke: gray; }
  </style>
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 3 — Cross-Section of Y-Valve Manifold</text>

  <!-- MANIFOLD BODY (cross section - outer wall) -->
  <path d="M150,200 L150,350 Q150,380 180,380 L620,380 Q650,380 650,350 L650,200 Q650,170 620,170 L180,170 Q150,170 150,200 Z" fill="none" stroke="black" class="thick"/>

  <!-- Cross-hatch material (brass body) -->
  <line x1="155" y1="180" x2="175" y2="200" class="hatch"/>
  <line x1="155" y1="200" x2="175" y2="220" class="hatch"/>
  <line x1="155" y1="220" x2="175" y2="240" class="hatch"/>
  <line x1="625" y1="180" x2="645" y2="200" class="hatch"/>
  <line x1="625" y1="200" x2="645" y2="220" class="hatch"/>
  <line x1="625" y1="220" x2="645" y2="240" class="hatch"/>
  <line x1="155" y1="320" x2="175" y2="340" class="hatch"/>
  <line x1="155" y1="340" x2="175" y2="360" class="hatch"/>
  <line x1="625" y1="320" x2="645" y2="340" class="hatch"/>
  <line x1="625" y1="340" x2="645" y2="360" class="hatch"/>

  <!-- LEFT INPUT PORT (Tank 1) -->
  <rect x="80" y="250" width="70" height="40" rx="4" fill="none" stroke="black" class="thick"/>
  <!-- Thread lines -->
  <line x1="85" y1="258" x2="95" y2="258" stroke="black" class="thin"/>
  <line x1="85" y1="265" x2="95" y2="265" stroke="black" class="thin"/>
  <line x1="85" y1="272" x2="95" y2="272" stroke="black" class="thin"/>
  <line x1="85" y1="279" x2="95" y2="279" stroke="black" class="thin"/>
  <!-- Internal passage left -->
  <rect x="150" y="258" width="130" height="24" fill="none" stroke="black" class="medium"/>

  <!-- LEFT CHECK VALVE -->
  <path d="M280,258 L280,282" stroke="black" class="thick"/>
  <path d="M280,258 L300,270 L280,282" fill="none" stroke="black" class="medium"/>
  <circle cx="290" cy="270" r="3" fill="black"/>
  <!-- Spring -->
  <path d="M300,262 Q305,265 300,268 Q295,271 300,274 Q305,277 300,280" fill="none" stroke="black" class="thin"/>

  <!-- CENTRAL MERGE CHAMBER -->
  <rect x="310" y="240" width="180" height="60" rx="8" fill="none" stroke="black" class="thick"/>
  <!-- Flow arrows -->
  <defs><marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="0.8"/></marker></defs>
  <line x1="305" y1="270" x2="310" y2="270" stroke="black" class="medium" marker-end="url(#arr)"/>
  <line x1="495" y1="270" x2="490" y2="270" stroke="black" class="medium" marker-end="url(#arr)"/>

  <!-- RIGHT CHECK VALVE -->
  <path d="M520,258 L520,282" stroke="black" class="thick"/>
  <path d="M520,282 L500,270 L520,258" fill="none" stroke="black" class="medium"/>
  <circle cx="510" cy="270" r="3" fill="black"/>
  <path d="M500,262 Q495,265 500,268 Q505,271 500,274 Q495,277 500,280" fill="none" stroke="black" class="thin"/>

  <!-- RIGHT INPUT PORT (Tank 2) -->
  <rect x="650" y="250" width="70" height="40" rx="4" fill="none" stroke="black" class="thick"/>
  <line x1="705" y1="258" x2="715" y2="258" stroke="black" class="thin"/>
  <line x1="705" y1="265" x2="715" y2="265" stroke="black" class="thin"/>
  <line x1="705" y1="272" x2="715" y2="272" stroke="black" class="thin"/>
  <line x1="705" y1="279" x2="715" y2="279" stroke="black" class="thin"/>
  <!-- Internal passage right -->
  <rect x="520" y="258" width="130" height="24" fill="none" stroke="black" class="medium"/>

  <!-- SINGLE OUTPUT PORT (top) -->
  <rect x="375" y="130" width="50" height="40" rx="4" fill="none" stroke="black" class="thick"/>
  <!-- Thread lines -->
  <line x1="380" y1="135" x2="420" y2="135" stroke="black" class="thin"/>
  <line x1="380" y1="142" x2="420" y2="142" stroke="black" class="thin"/>
  <!-- Passage from merge chamber to output -->
  <rect x="388" y="170" width="24" height="70" fill="none" stroke="black" class="medium"/>
  <!-- Flow arrow up -->
  <line x1="400" y1="250" x2="400" y2="175" stroke="black" class="medium" marker-end="url(#arr)"/>
  <text x="430" y="220" font-size="9" fill="gray">to regulator</text>

  <!-- REFERENCE LABELS -->
  <line x1="80" y1="270" x2="50" y2="270" stroke="black" class="thin"/>
  <text x="10" y="265" class="label">130</text>

  <line x1="290" y1="255" x2="290" y2="225" stroke="black" class="thin"/>
  <text x="275" y="220" class="label">132</text>

  <line x1="400" y1="270" x2="400" y2="310" stroke="black" class="thin"/>
  <text x="385" y="325" class="label">134</text>

  <line x1="510" y1="255" x2="510" y2="225" stroke="black" class="thin"/>
  <text x="495" y="220" class="label">132</text>

  <line x1="720" y1="270" x2="750" y2="270" stroke="black" class="thin"/>
  <text x="755" y="274" class="label">136</text>

  <line x1="400" y1="130" x2="440" y2="110" stroke="black" class="thin"/>
  <text x="445" y="114" class="label">138</text>

  <!-- Legend -->
  <text x="50" y="450" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="465" class="caption">130 — Left input port (M18×1.5 thread, Tank 1)  |  132 — Check valves (×2)  |  134 — Central merge chamber</text>
  <text x="50" y="480" class="caption">136 — Right input port (M18×1.5 thread, Tank 2)  |  138 — Single output port (to LP hose/regulator)</text>
  <text x="50" y="500" class="caption">Flow direction: Both tanks feed into central chamber → single output to breathing apparatus</text>
  <text x="50" y="515" class="caption">Check valves prevent backflow when one tank is depleted or disconnected</text>
</svg>`;
}

function generateFig4SVG() {
  // Side profile view of harness worn by user
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900" width="800" height="900">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 4 — Side Profile View (Harness Worn by User)</text>

  <!-- User torso side view (dashed) -->
  <path d="M350,100 Q380,90 400,100 L420,150 Q430,250 425,380 Q420,450 410,500 Q400,550 380,600 L360,620" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Back -->
  <path d="M350,100 L340,150 Q330,250 335,380 Q340,450 345,500 Q350,550 355,600 L360,620" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Leg (partial) -->
  <path d="M360,620 Q350,660 345,720 Q342,780 345,830" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <path d="M360,620 Q380,660 385,720 Q388,780 385,830" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>

  <!-- WAIST BELT (side view) -->
  <path d="M310,390 Q335,385 365,383 Q395,382 425,385 Q440,388 450,390" fill="none" stroke="black" class="thick"/>
  <path d="M310,410 Q335,405 365,403 Q395,402 425,405 Q440,408 450,410" fill="none" stroke="black" class="thick"/>

  <!-- Neoprene padding cross-section -->
  <line x1="350" y1="387" x2="350" y2="401" stroke="gray" class="thin"/>
  <line x1="370" y1="385" x2="370" y2="400" stroke="gray" class="thin"/>
  <line x1="390" y1="384" x2="390" y2="400" stroke="gray" class="thin"/>

  <!-- TANK CRADLE (on hip) -->
  <rect x="420" y="395" width="50" height="35" rx="6" fill="none" stroke="black" class="thick"/>
  <!-- Snap lock -->
  <rect x="435" y="390" width="20" height="8" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- TANK (hanging from cradle) -->
  <rect x="428" y="430" width="36" height="130" rx="18" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve -->
  <rect x="438" y="418" width="16" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Tank angle ~15 degrees -->
  <text x="400" y="500" font-size="7" fill="gray">15°</text>

  <!-- THIGH STRAP -->
  <path d="M440,410 Q445,500 440,600 Q435,650 430,700 Q425,720 430,730 Q440,740 455,730 Q465,720 460,700 Q455,650 450,600 Q447,500 445,430" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <rect x="430" y="718" width="25" height="10" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- BREATHING TUBE going up from manifold -->
  <path d="M446,418 Q450,380 450,350 Q450,300 445,250 Q440,200 435,160" fill="none" stroke="black" class="medium"/>
  <!-- Tube corrugation -->
  <path d="M443,300 Q455,305 443,310" fill="none" stroke="black" class="thin"/>
  <path d="M444,260 Q456,265 444,270" fill="none" stroke="black" class="thin"/>

  <!-- Profile dimension arrow showing minimal bulk -->
  <line x1="325" y1="450" x2="470" y2="450" stroke="black" class="thin"/>
  <line x1="325" y1="440" x2="325" y2="460" stroke="black" class="thin"/>
  <line x1="470" y1="440" x2="470" y2="460" stroke="black" class="thin"/>
  <text x="397" y="468" text-anchor="middle" font-size="8">~12cm profile</text>

  <!-- REFERENCE LABELS -->
  <line x1="350" y1="395" x2="290" y2="385" stroke="black" class="thin"/>
  <text x="210" y="389" class="label">102 — Belt</text>

  <line x1="445" y1="412" x2="510" y2="400" stroke="black" class="thin"/>
  <text x="515" y="404" class="label">108 — Cradle</text>

  <line x1="464" y1="500" x2="510" y2="500" stroke="black" class="thin"/>
  <text x="515" y="504" class="label">110 — Tank</text>

  <line x1="455" y1="730" x2="510" y2="740" stroke="black" class="thin"/>
  <text x="515" y="744" class="label">114 — Thigh strap</text>

  <line x1="455" y1="260" x2="510" y2="250" stroke="black" class="thin"/>
  <text x="515" y="254" class="label">140 — Breathing tube</text>

  <!-- Legend -->
  <text x="50" y="840" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="855" class="caption">102 — Waist belt  |  108 — Tank cradle  |  110 — 0.5L tank  |  114 — Thigh strap  |  140 — Breathing tube to regulator</text>
</svg>`;
}

function generateFig5SVG() {
  // Sequence diagram: tank insertion
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 5 — Tank Insertion Sequence</text>

  <!-- STEP A: Tank approaching cradle -->
  <text x="133" y="65" text-anchor="middle" font-size="12" font-weight="bold">(a) Approach</text>
  <!-- Cradle -->
  <rect x="80" y="130" width="106" height="50" rx="8" fill="none" stroke="black" class="thick"/>
  <rect x="113" y="123" width="40" height="12" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Latch open -->
  <path d="M133,123 L133,105" fill="none" stroke="black" class="medium"/>
  <path d="M125,108 L133,100 L141,108" fill="none" stroke="black" class="thin"/>
  <!-- Tank above (approaching) -->
  <rect x="108" y="210" width="50" height="120" rx="25" fill="none" stroke="black" class="thick"/>
  <rect x="120" y="198" width="26" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Arrow showing direction -->
  <line x1="133" y1="198" x2="133" y2="185" stroke="black" class="medium"/>
  <path d="M128,190 L133,180 L138,190" fill="none" stroke="black" class="medium"/>

  <!-- STEP B: Tank partially inserted -->
  <text x="400" y="65" text-anchor="middle" font-size="12" font-weight="bold">(b) Engaging</text>
  <rect x="347" y="130" width="106" height="50" rx="8" fill="none" stroke="black" class="thick"/>
  <!-- Latch partially closing -->
  <path d="M400,125 L400,115 Q395,110 390,115" fill="none" stroke="black" class="medium"/>
  <!-- Tank partially in -->
  <rect x="375" y="160" width="50" height="120" rx="25" fill="none" stroke="black" class="thick"/>
  <rect x="387" y="148" width="26" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Contact indicator -->
  <text x="470" y="170" font-size="9" fill="gray">latch engaging</text>
  <text x="470" y="185" font-size="9" fill="gray">neck ring</text>

  <!-- STEP C: Tank fully seated and locked -->
  <text x="667" y="65" text-anchor="middle" font-size="12" font-weight="bold">(c) Locked</text>
  <rect x="614" y="130" width="106" height="50" rx="8" fill="none" stroke="black" class="thick"/>
  <!-- Latch closed and locked -->
  <rect x="647" y="123" width="40" height="12" rx="2" fill="none" stroke="black" class="thick"/>
  <text x="667" y="132" text-anchor="middle" font-size="7" font-weight="bold">CLICK</text>
  <!-- Tank fully seated -->
  <rect x="642" y="175" width="50" height="120" rx="25" fill="none" stroke="black" class="thick"/>
  <rect x="654" y="163" width="26" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Locked indicators -->
  <line x1="640" y1="155" x2="640" y2="175" stroke="black" class="medium"/>
  <line x1="692" y1="155" x2="692" y2="175" stroke="black" class="medium"/>
  <!-- Check mark -->
  <path d="M730,170 L740,185 L760,155" fill="none" stroke="black" class="thick"/>

  <!-- Legend -->
  <text x="50" y="400" class="caption" font-weight="bold">Tank Insertion Sequence:</text>
  <text x="50" y="415" class="caption">(a) Tank approaches cradle from below with spring-loaded latch in open position</text>
  <text x="50" y="430" class="caption">(b) Tank neck ring contacts latch mechanism, which begins to engage around the tank's neck flange</text>
  <text x="50" y="445" class="caption">(c) Tank fully seated — latch snaps closed with audible click, anti-rotation ridges prevent tank from spinning</text>
  <text x="50" y="465" class="caption">Removal: Press release tab (122) and pull tank downward. Total removal time: under 2 seconds.</text>
</svg>`;
}

async function buildPatent2() {
  // Save SVGs
  const svgs = [generateFig1SVG(), generateFig2SVG(), generateFig3SVG(), generateFig4SVG(), generateFig5SVG()];
  for (let i = 0; i < svgs.length; i++) {
    fs.writeFileSync(`/home/user/Mare/patents/fig${i+1}_hydroharness.svg`, svgs[i]);
  }
  const pngs = await Promise.all(svgs.map(s => svgToPng(s, 1600)));

  const FONT = "Arial";
  const HS = 28, BS = 24, SS = 18;

  function heading(t) { return new Paragraph({ spacing: { before: 360, after: 120, line: 360 }, children: [new TextRun({ text: t, font: FONT, size: HS, bold: true })] }); }
  function body(t, o={}) { return new Paragraph({ spacing: { after: 120, line: 360 }, indent: o.indent ? { left: 720 } : undefined, children: [new TextRun({ text: t, font: FONT, size: BS, ...o })] }); }
  function bodyBold(l, t) { return new Paragraph({ spacing: { after: 120, line: 360 }, children: [new TextRun({ text: l, font: FONT, size: BS, bold: true }), new TextRun({ text: t, font: FONT, size: BS })] }); }
  function bullet(t) { return new Paragraph({ spacing: { after: 80, line: 360 }, indent: { left: 720, hanging: 360 }, children: [new TextRun({ text: "\u2022  " + t, font: FONT, size: BS })] }); }
  function emptyLine() { return new Paragraph({ spacing: { after: 120 }, children: [] }); }

  const doc = new Document({
    sections: [{
      properties: {
        page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
      },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: "Provisional Patent Application \u2014 Dual-Tank Body-Mounted Harness System for Portable Underwater Breathing Apparatus", font: FONT, size: SS, italics: true, color: "666666" })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Page ", font: FONT, size: SS }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: SS })] })] }) },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 480 }, children: [new TextRun({ text: "PROVISIONAL PATENT APPLICATION", font: FONT, size: 32, bold: true })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Filed under 35 U.S.C. \u00A7111(b)", font: FONT, size: BS, italics: true })] }),
        emptyLine(),

        heading("1. TITLE OF THE INVENTION"),
        body("Dual-Tank Body-Mounted Harness System for Portable Underwater Breathing Apparatus"),
        emptyLine(),

        heading("2. CROSS-REFERENCE TO RELATED APPLICATIONS"),
        body("This application is related to a co-pending provisional patent application entitled \"Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator\" (the \"AquaPulse\" system) by the same inventor. The present harness system is designed to be used in conjunction with the AquaPulse breathing system, although it may also be used with other compatible portable underwater breathing apparatus."),
        emptyLine(),

        heading("3. FIELD OF THE INVENTION"),
        body("The present invention relates to wearable body-mounted harness systems for portable underwater breathing apparatus, and more particularly to a lightweight waist-belt harness with dual tank cradles and an integrated Y-valve manifold for hands-free use of mini compressed air cylinders during recreational underwater activities."),
        emptyLine(),

        heading("4. BACKGROUND OF THE INVENTION"),
        body("Existing portable underwater breathing devices that utilize small compressed air cylinders (typically 0.5 to 1.0 liters) require the user to hold the air tank by hand during use. This hand-held requirement presents significant limitations:"),
        emptyLine(),
        bullet("One hand is permanently occupied holding the tank, reducing the user's ability to swim efficiently, operate a camera, hold objects, or maintain balance underwater."),
        bullet("Users who wish to document their underwater experience (a rapidly growing demographic of content creators) cannot simultaneously hold a tank and operate recording equipment."),
        bullet("Hand fatigue during extended use limits practical dive duration below the actual air supply capacity."),
        bullet("A dropped tank may be difficult to retrieve, creating both an inconvenience and a potential safety hazard."),
        emptyLine(),
        body("Traditional scuba buoyancy compensator devices (BCDs) do provide body-mounted tank carrying capability. However, BCDs are designed for full-size scuba tanks (11 to 15 liters), typically weigh 3 to 5 kilograms, cost $300 to $800, and include buoyancy compensation bladders and associated inflation/deflation mechanisms that are unnecessary for shallow-water recreational use with mini tanks. No BCD or harness product exists that is purpose-designed for the mounting of one or two 0.5-liter mini compressed air cylinders."),
        emptyLine(),
        body("Furthermore, no existing consumer product provides a manifold system that connects two mini tanks to a single regulator, enabling extended dive duration with automatic tank switching. Users of existing portable systems are limited to the air supply of a single tank per dive, typically 5 to 10 minutes."),
        emptyLine(),
        body("Accordingly, there exists a need for a lightweight, purpose-built body harness that: (a) mounts one or two 0.5-liter mini tanks on the user's waist; (b) provides a manifold connection allowing both tanks to feed a single regulator; (c) frees both hands for swimming, photography, and exploration; (d) enables emergency doffing in under three seconds; and (e) weighs under 500 grams. The present invention addresses this need."),
        emptyLine(),

        heading("5. SUMMARY OF THE INVENTION"),
        body("The present invention provides a wearable harness system comprising the following principal components:"),
        bullet("An adjustable waist belt (102) constructed from 50mm marine-grade webbing with neoprene comfort padding (116) and a quick-release buckle (100);"),
        bullet("Two injection-molded tank cradles (108), each configured to receive a standard 0.5-liter compressed air cylinder (110) via a snap-lock retention mechanism (104) with a release tab (122);"),
        bullet("A Y-valve manifold (112) with dual input ports (130, 136), integrated check valves (132), and a single output port (138), allowing simultaneous connection of two tanks to a single breathing regulator;"),
        bullet("An optional thigh strap (114) for stability during active swimming;"),
        bullet("Total dry weight of approximately 400 grams;"),
        bullet("Emergency doffing capability: complete system separation in under three seconds via quick-release buckle and tank release tabs."),
        emptyLine(),

        heading("6. DETAILED DESCRIPTION OF THE INVENTION"),
        body("The following detailed description refers to the accompanying drawings (FIGS. 1\u20135), which form a part hereof. Like reference numerals refer to like elements throughout the several views."),
        emptyLine(),

        heading("6.1 Waist Belt Assembly"),
        body("Referring to FIGS. 1 and 4, the waist belt (102) comprises a 50-millimeter (2-inch) wide belt constructed from high-tenacity polyester or nylon webbing rated for a minimum tensile strength of 500 kg. The belt is adjustable from 60 centimeters to 130 centimeters in circumference, accommodating waist sizes from approximately 24 inches to 52 inches."),
        emptyLine(),
        body("A quick-release buckle (100) is positioned at the front center of the belt. The buckle is constructed from marine-grade 316 stainless steel or engineering-grade Delrin (polyoxymethylene) for corrosion resistance in saltwater environments. The buckle mechanism is a side-squeeze release type, operable with one hand, requiring a deliberate two-point squeeze to release \u2014 preventing accidental opening during use while enabling rapid emergency doffing."),
        emptyLine(),
        body("Neoprene comfort padding (116) lines the interior contact surface of the belt in the areas that contact the user's body. The padding comprises 3-millimeter closed-cell neoprene bonded to the interior face of the webbing. The closed-cell construction prevents water absorption, which would add weight during use."),
        emptyLine(),
        body("Two D-ring attachment points (106) are sewn into the belt at the 10 o'clock and 2 o'clock positions (relative to the front buckle). These D-rings provide accessory mounting points for equipment clips, safety lanyards, or additional accessories. The D-rings are constructed from 316 stainless steel wire, 4mm gauge, with a working load limit of 50 kg each."),
        emptyLine(),
        bodyBold("Weight: ", "Approximately 120 grams (belt assembly including buckle, padding, and D-rings)."),
        emptyLine(),

        heading("6.2 Tank Cradle System"),
        body("Referring to FIGS. 1, 2, and 5, each tank cradle (108) is an injection-molded component constructed from glass-reinforced nylon (PA66-GF30, 30% glass fiber content) for high strength-to-weight ratio and corrosion resistance. Two cradles are provided, positioned on the left and right hips of the belt for balanced weight distribution."),
        emptyLine(),
        body("Each cradle (108) defines a semi-cylindrical recess configured to accommodate a standard 0.5-liter aluminum compressed air cylinder having an outside diameter of approximately 63 millimeters. The recess includes two anti-rotation ridges (124) molded into the interior wall. These ridges engage longitudinal features on the tank body (such as the tank's base ring or valve assembly), preventing the tank from rotating during use."),
        emptyLine(),
        body("A snap-lock retention mechanism (104) is integrated into the upper portion of each cradle. The mechanism comprises a spring-loaded latch that engages the tank's neck ring or base flange (126) when the tank is inserted. The spring is a stainless steel compression spring providing approximately 3 to 5 kg of retention force \u2014 sufficient to securely hold the tank during swimming and surface activities, but releasable by the user's deliberate action."),
        emptyLine(),
        body("A release tab (122) is positioned on the outboard side of each cradle. When pressed inward, the release tab disengages the spring-loaded latch, allowing the tank to be removed with a downward pull. The tab requires a deliberate press-and-pull action, preventing accidental release."),
        emptyLine(),
        body("Referring to FIG. 5, the tank insertion sequence is as follows: (a) the user positions the tank below the cradle with the valve end upward; (b) the user pushes the tank upward into the cradle \u2014 the spring-loaded latch contacts the tank's neck ring and begins to engage; (c) continued upward pressure seats the tank fully in the cradle, at which point the latch snaps closed with an audible click, confirming secure retention."),
        emptyLine(),
        body("Each cradle is attached to the waist belt via belt mounting clips (120) that thread onto the belt webbing. The clips allow the cradle position to be adjusted along the belt for optimal fit."),
        emptyLine(),
        bodyBold("Weight per cradle: ", "Approximately 65 grams."),
        emptyLine(),

        heading("6.3 Y-Valve Manifold"),
        body("Referring to FIG. 3, the Y-valve manifold (112) is a dual-input, single-output brass manifold that connects two tank first-stage regulators to a single breathing tube and second-stage regulator."),
        emptyLine(),
        body("The manifold body is machined from marine-grade brass (CZ121 or equivalent) and comprises: two input ports (130, 136) each having standard M18\u00D71.5 internal threads for connection to standard first-stage regulator LP hose outputs; a central merge chamber (134) where air from both inputs converges; and a single output port (138) with a standard LP hose connection for routing to the breathing regulator."),
        emptyLine(),
        body("Critically, each input port incorporates an integrated check valve (132). Each check valve comprises a spring-loaded ball or poppet valve that permits airflow from the input port into the central merge chamber but prevents reverse flow from the merge chamber back through the input port. These check valves serve two essential functions:"),
        emptyLine(),
        bullet("When one tank is depleted before the other, the check valve on the depleted side prevents air from the full tank from flowing backward through the manifold and out through the depleted tank's regulator."),
        bullet("When the manifold is used in single-tank mode (one tank connected, one port empty), the check valve on the empty port seals that port, preventing air loss."),
        emptyLine(),
        body("In dual-tank operation, the manifold enables sequential depletion: the user breathes normally, drawing air from whichever tank has higher intermediate pressure. As the first tank depletes, intermediate pressure drops, and airflow automatically transitions to the second tank. This transition is seamless and requires no user action."),
        emptyLine(),
        bodyBold("Weight: ", "Approximately 85 grams."),
        emptyLine(),

        heading("6.4 Thigh Strap (Optional)"),
        body("Referring to FIGS. 1 and 4, an optional thigh strap (114) is provided. The thigh strap comprises a single adjustable strap constructed from 25-millimeter webbing that loops from the waist belt to the upper thigh of the user. The strap prevents the waist belt from riding upward during vigorous kicking or inverted swimming positions."),
        emptyLine(),
        body("The thigh strap incorporates a quick-release buckle for emergency removal. The strap is adjustable in length and can be worn on either leg or omitted entirely based on user preference and activity level."),
        emptyLine(),
        bodyBold("Weight: ", "Approximately 30 grams."),
        emptyLine(),

        heading("6.5 System Integration and Method of Use"),
        body("Referring to FIGS. 1 and 4, the complete harness system is used as follows:"),
        emptyLine(),
        body("Step 1: The user wraps the waist belt (102) around the natural waistline and secures the quick-release buckle (100)."),
        body("Step 2: One or two 0.5-liter compressed air tanks (110) are inserted into the cradles (108) using the snap-lock mechanism as described in Section 6.2 and FIG. 5."),
        body("Step 3: First-stage regulators on each tank are connected to the Y-valve manifold (112) input ports via standard LP hoses."),
        body("Step 4: The manifold output port (138) is connected to the breathing tube of the AquaPulse system (or compatible breathing apparatus) via a standard LP hose."),
        body("Step 5: The user opens both tank valves and enters the water."),
        body("Step 6: During diving, the user breathes normally. With two tanks at 3,000 PSI, total air supply is approximately 500 liters at surface pressure, providing approximately 10 to 20 minutes of breathing time at shallow depth."),
        body("Step 7: Emergency doffing: In any emergency, the user presses the belt buckle (100) to release the belt. Both tank release tabs (122) can be pressed simultaneously to separate the tanks from the cradles. Complete system separation is achievable in under three seconds."),
        emptyLine(),

        heading("7. BRIEF DESCRIPTION OF THE DRAWINGS"),
        body("FIG. 1 is a front view of the complete HydroHarness system as worn on a user's torso, showing the waist belt (102), quick-release buckle (100), left and right tank cradles (108), tanks (110), Y-valve manifold (112), D-ring attachments (106), and optional thigh strap (114)."),
        body("FIG. 2 is an exploded view of a single tank cradle assembly showing the cradle body (108), belt mounting clips (120), spring-loaded latch (104), release tab (122), anti-rotation ridges (124), and tank (110) with neck ring (126)."),
        body("FIG. 3 is a cross-section view of the Y-valve manifold showing dual input ports (130, 136), check valves (132), central merge chamber (134), and single output port (138)."),
        body("FIG. 4 is a side profile view of the harness worn by a user, showing belt (102), cradle (108), tank (110), thigh strap (114), and breathing tube (140) routing."),
        body("FIG. 5 is a sequence diagram showing the tank insertion process in three stages: (a) approach, (b) engaging, (c) locked."),
        emptyLine(),

        heading("8. ABSTRACT"),
        body("A body-mounted harness system for portable underwater breathing apparatus, comprising an adjustable waist belt with dual injection-molded tank cradles configured to receive standard 0.5-liter compressed air cylinders via a snap-lock retention mechanism. A Y-valve manifold with integrated check valves connects two tanks to a single breathing regulator, enabling extended underwater breathing duration with automatic tank switching. The system weighs approximately 400 grams dry and provides hands-free operation, with a quick-release buckle and tank release tabs enabling complete emergency doffing in under three seconds."),
        emptyLine(),

        heading("INVENTOR"),
        body("Samuel D\u2019Agostino"),
        body("Miami, Florida, United States"),
        emptyLine(),

        heading("DISCLAIMER"),
        body("This provisional patent application establishes a filing date and priority for the described invention. It does not constitute a granted patent. A corresponding non-provisional utility patent application must be filed within twelve (12) months of this provisional filing date to preserve the priority date.", { italics: true }),
        emptyLine(),

        new Paragraph({ children: [new PageBreak()] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 }, children: [new TextRun({ text: "DRAWINGS", font: FONT, size: HS, bold: true })] }),
        emptyLine(),

        // FIG 1
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ data: pngs[0], transformation: { width: 530, height: 663 } })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 360 }, children: [new TextRun({ text: "FIG. 1 \u2014 Front View of HydroHarness (Worn by User)", font: FONT, size: BS, bold: true })] }),
        new Paragraph({ children: [new PageBreak()] }),

        // FIG 2
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ data: pngs[1], transformation: { width: 530, height: 530 } })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 360 }, children: [new TextRun({ text: "FIG. 2 \u2014 Exploded View of Tank Cradle Assembly", font: FONT, size: BS, bold: true })] }),
        new Paragraph({ children: [new PageBreak()] }),

        // FIG 3
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ data: pngs[2], transformation: { width: 530, height: 398 } })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 360 }, children: [new TextRun({ text: "FIG. 3 \u2014 Cross-Section of Y-Valve Manifold", font: FONT, size: BS, bold: true })] }),
        new Paragraph({ children: [new PageBreak()] }),

        // FIG 4
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ data: pngs[3], transformation: { width: 530, height: 596 } })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 360 }, children: [new TextRun({ text: "FIG. 4 \u2014 Side Profile View (Harness Worn by User)", font: FONT, size: BS, bold: true })] }),
        new Paragraph({ children: [new PageBreak()] }),

        // FIG 5
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ data: pngs[4], transformation: { width: 550, height: 344 } })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 360 }, children: [new TextRun({ text: "FIG. 5 \u2014 Tank Insertion Sequence", font: FONT, size: BS, bold: true })] }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = "/home/user/Mare/patents/MARE_Provisional_Patent_2_HydroHarness.docx";
  fs.writeFileSync(outputPath, buffer);
  console.log("Patent 2 (HydroHarness) generated:", outputPath);
  console.log("File size:", (buffer.length / 1024).toFixed(1), "KB");
}

buildPatent2().catch(err => { console.error("Error:", err); process.exit(1); });
