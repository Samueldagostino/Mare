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

  <!-- WAIST BELT (wraps fully around torso at waist level) -->
  <!-- Front belt runs across entire waist -->
  <path d="M220,380 L280,373 L330,370 L400,368 L470,370 L520,373 L580,380" fill="none" stroke="black" class="thick"/>
  <path d="M220,408 L280,401 L330,398 L400,396 L470,398 L520,401 L580,408" fill="none" stroke="black" class="thick"/>
  <!-- Belt wraps behind (shown curving at sides) -->
  <path d="M220,380 Q200,385 195,394 Q200,403 220,408" fill="none" stroke="black" class="thick"/>
  <path d="M580,380 Q600,385 605,394 Q600,403 580,408" fill="none" stroke="black" class="thick"/>
  <!-- Belt webbing texture lines -->
  <line x1="250" y1="385" x2="250" y2="403" stroke="black" class="thin"/>
  <line x1="290" y1="378" x2="290" y2="396" stroke="black" class="thin"/>
  <line x1="510" y1="378" x2="510" y2="396" stroke="black" class="thin"/>
  <line x1="550" y1="385" x2="550" y2="403" stroke="black" class="thin"/>

  <!-- Neoprene comfort padding (cross-hatch pattern on belt interior) -->
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

  <!-- D-RING attachment points on belt -->
  <path d="M330,375 Q320,370 315,378 Q310,386 320,390 L330,393" fill="none" stroke="black" class="medium"/>
  <path d="M470,375 Q480,370 485,378 Q490,386 480,390 L470,393" fill="none" stroke="black" class="medium"/>

  <!-- TANK CRADLE — Fabric webbing loops sewn onto belt at left-front hip -->
  <!-- Loop 1 (outer, for Tank 1): fabric strap hangs from belt, wraps under tank, back up -->
  <path d="M275,398 L275,420 L275,540 Q275,558 290,558 L305,558 Q320,558 320,540 L320,420 L320,398" fill="none" stroke="black" class="thick"/>
  <!-- Loop 2 (inner, for Tank 2): adjacent fabric strap -->
  <path d="M330,398 L330,420 L330,540 Q330,558 345,558 L360,558 Q375,558 375,540 L375,420 L375,398" fill="none" stroke="black" class="thick"/>
  <!-- Stitching at belt attachment (double-stitch reinforcement) -->
  <line x1="275" y1="400" x2="320" y2="400" stroke="black" class="thin"/>
  <line x1="275" y1="403" x2="320" y2="403" stroke="black" class="thin"/>
  <line x1="330" y1="400" x2="375" y2="400" stroke="black" class="thin"/>
  <line x1="330" y1="403" x2="375" y2="403" stroke="black" class="thin"/>
  <!-- Fabric texture (stitching lines on loops) -->
  <line x1="278" y1="420" x2="278" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="317" y1="420" x2="317" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="333" y1="420" x2="333" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="372" y1="420" x2="372" y2="540" stroke="gray" class="thin" stroke-dasharray="3,2"/>

  <!-- TANK 1 (left, in outer fabric loop) — white cylindrical 0.5L tank, vertical -->
  <rect x="280" y="410" width="36" height="140" rx="18" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve top (silver/metallic cap with profile) -->
  <rect x="287" y="393" width="22" height="18" rx="3" fill="none" stroke="black" class="medium"/>
  <line x1="287" y1="400" x2="309" y2="400" stroke="black" class="thin"/>
  <!-- Pressure gauge dial on valve -->
  <circle cx="298" cy="397" r="5" fill="none" stroke="black" class="thin"/>
  <line x1="298" y1="395" x2="301" y2="393" stroke="black" class="thin"/>
  <text x="298" y="535" text-anchor="middle" font-size="7">0.5L</text>

  <!-- TANK 2 (right, in inner fabric loop — side by side, close together) -->
  <rect x="335" y="410" width="36" height="140" rx="18" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve top -->
  <rect x="342" y="393" width="22" height="18" rx="3" fill="none" stroke="black" class="medium"/>
  <line x1="342" y1="400" x2="364" y2="400" stroke="black" class="thin"/>
  <!-- Pressure gauge dial -->
  <circle cx="353" cy="397" r="5" fill="none" stroke="black" class="thin"/>
  <line x1="353" y1="395" x2="356" y2="393" stroke="black" class="thin"/>
  <text x="353" y="535" text-anchor="middle" font-size="7">0.5L</text>

  <!-- Y-VALVE MANIFOLD (metal Y-shaped junction connecting both tank valve tops) -->
  <!-- Left input arm from Tank 1 valve top -->
  <line x1="298" y1="393" x2="314" y2="376" stroke="black" class="thick"/>
  <!-- Right input arm from Tank 2 valve top -->
  <line x1="353" y1="393" x2="338" y2="376" stroke="black" class="thick"/>
  <!-- Junction body (where Y merges into single output) -->
  <circle cx="326" cy="373" r="9" fill="none" stroke="black" class="thick"/>
  <text x="326" y="376" text-anchor="middle" font-size="6" font-weight="bold">Y</text>

  <!-- Single breathing tube from Y-valve output UP to mouthpiece at face -->
  <path d="M326,364 Q326,340 334,300 Q342,260 360,220 Q378,185 392,155 Q398,130 400,105" fill="none" stroke="black" class="medium"/>
  <!-- Tube rings (smooth tube with periodic reinforcement rings) -->
  <ellipse cx="338" cy="285" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="355" cy="240" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="378" cy="185" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="393" cy="148" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <!-- Mouthpiece at end (at mouth level) -->
  <ellipse cx="400" cy="103" rx="8" ry="5" fill="none" stroke="black" class="medium"/>
  <line x1="394" y1="108" x2="394" y2="115" stroke="black" class="thin"/>
  <line x1="406" y1="108" x2="406" y2="115" stroke="black" class="thin"/>

  <!-- STABILIZER STRAP (secondary strap below belt, wraps around upper left thigh for stability) -->
  <path d="M265,410 L260,470 Q255,520 260,560 Q265,580 285,588 Q315,595 345,588 Q365,580 370,560 Q375,520 370,470 L368,410" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <!-- Stabilizer adjustment buckle -->
  <rect x="300" y="582" width="22" height="10" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Stabilizer connects to belt via loops -->
  <line x1="265" y1="410" x2="265" y2="398" stroke="black" class="thin"/>
  <line x1="368" y1="410" x2="368" y2="398" stroke="black" class="thin"/>

  <!-- REFERENCE LABELS -->
  <!-- 100 — Quick-release buckle -->
  <line x1="418" y1="383" x2="470" y2="400" stroke="black" class="thin"/>
  <text x="475" y="404" class="label">100</text>

  <!-- 102 — Waist belt -->
  <line x1="540" y1="394" x2="590" y2="385" stroke="black" class="thin"/>
  <text x="595" y="389" class="label">102</text>

  <!-- 104 — Fabric loop retention -->
  <line x1="275" y1="480" x2="230" y2="480" stroke="black" class="thin"/>
  <text x="185" y="484" class="label">104</text>

  <!-- 106 — D-ring attachment -->
  <line x1="315" y1="382" x2="280" y2="355" stroke="black" class="thin"/>
  <text x="255" y="350" class="label">106</text>

  <!-- 108 — Tank cradle (fabric webbing loop) -->
  <line x1="375" y1="480" x2="425" y2="480" stroke="black" class="thin"/>
  <text x="430" y="484" class="label">108</text>

  <!-- 110 — 0.5L tank -->
  <line x1="280" y1="520" x2="225" y2="530" stroke="black" class="thin"/>
  <text x="170" y="534" class="label">110</text>

  <!-- 112 — Y-valve manifold -->
  <line x1="335" y1="373" x2="390" y2="355" stroke="black" class="thin"/>
  <text x="395" y="353" class="label">112</text>

  <!-- 114 — Stabilizer strap -->
  <line x1="285" y1="588" x2="235" y2="605" stroke="black" class="thin"/>
  <text x="170" y="609" class="label">114</text>

  <!-- 116 — Neoprene comfort padding -->
  <line x1="450" y1="393" x2="490" y2="356" stroke="black" class="thin"/>
  <text x="495" y="354" class="label">116</text>

  <!-- 140 — Breathing tube -->
  <line x1="358" y1="235" x2="415" y2="235" stroke="black" class="thin"/>
  <text x="420" y="239" class="label">140</text>

  <!-- Legend -->
  <text x="50" y="700" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="715" class="caption">100 — Quick-release belt buckle (side-squeeze)  |  102 — Waist belt (50mm webbing)  |  104 — Fabric loop retention</text>
  <text x="50" y="730" class="caption">106 — D-ring attachment  |  108 — Tank cradle (webbing loop)  |  110 — 0.5L tank  |  112 — Y-valve manifold</text>
  <text x="50" y="745" class="caption">114 — Stabilizer strap (upper thigh)  |  116 — Neoprene comfort padding  |  140 — Breathing tube</text>
</svg>`;
}

function generateFig2SVG() {
  // Exploded view of a single tank cradle (fabric webbing loop design)
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

  <!-- BELT SECTION (top, shown as a horizontal band, separated) -->
  <rect x="150" y="70" width="500" height="35" rx="3" fill="none" stroke="black" class="thick"/>
  <!-- Belt webbing texture -->
  <line x1="200" y1="75" x2="200" y2="100" stroke="black" class="thin"/>
  <line x1="300" y1="75" x2="300" y2="100" stroke="black" class="thin"/>
  <line x1="500" y1="75" x2="500" y2="100" stroke="black" class="thin"/>
  <line x1="600" y1="75" x2="600" y2="100" stroke="black" class="thin"/>
  <!-- Belt threading slots where loop attaches -->
  <rect x="340" y="95" width="50" height="10" rx="2" fill="none" stroke="black" class="medium"/>
  <rect x="410" y="95" width="50" height="10" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Dashed assembly lines from belt down to loop -->
  <line x1="365" y1="105" x2="340" y2="170" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <line x1="435" y1="105" x2="460" y2="170" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- FABRIC WEBBING LOOP (main cradle piece — U-shaped strap) -->
  <!-- The loop is a single continuous strap that threads through belt slots -->
  <!-- Left side of strap going up to belt -->
  <path d="M310,180 L310,200" fill="none" stroke="black" class="thick"/>
  <!-- U-shape: down left side, across bottom, up right side -->
  <path d="M310,200 L310,480 Q310,510 340,510 L460,510 Q490,510 490,480 L490,200" fill="none" stroke="black" class="thick"/>
  <!-- Right side going up to belt -->
  <path d="M490,200 L490,180" fill="none" stroke="black" class="thick"/>
  <!-- Inner edge of fabric strap (showing strap width ~25mm) -->
  <path d="M335,200 L335,470 Q335,490 355,490 L445,490 Q465,490 465,470 L465,200" fill="none" stroke="black" class="medium"/>
  <!-- Fabric texture — stitching lines along strap -->
  <line x1="315" y1="220" x2="315" y2="470" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="485" y1="220" x2="485" y2="470" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <!-- Double-stitch reinforcement at top where strap meets belt -->
  <line x1="310" y1="205" x2="335" y2="205" stroke="black" class="thin"/>
  <line x1="310" y1="210" x2="335" y2="210" stroke="black" class="thin"/>
  <line x1="465" y1="205" x2="490" y2="205" stroke="black" class="thin"/>
  <line x1="465" y1="210" x2="490" y2="210" stroke="black" class="thin"/>
  <!-- Cross-stitch reinforcement at bottom curve -->
  <line x1="340" y1="495" x2="355" y2="510" class="hatch"/>
  <line x1="355" y1="495" x2="370" y2="510" class="hatch"/>
  <line x1="430" y1="495" x2="445" y2="510" class="hatch"/>
  <line x1="445" y1="495" x2="460" y2="510" class="hatch"/>

  <!-- ELASTIC RETENTION STRAP (crosses front of loop to hold tank in) -->
  <path d="M310,300 L490,300" fill="none" stroke="black" class="medium" stroke-dasharray="8,3"/>
  <path d="M310,310 L490,310" fill="none" stroke="black" class="medium" stroke-dasharray="8,3"/>
  <!-- Snap button on retention strap -->
  <circle cx="490" cy="305" r="6" fill="none" stroke="black" class="medium"/>
  <circle cx="490" cy="305" r="2" fill="black"/>

  <!-- TANK (separated below, showing insertion path) -->
  <rect x="355" y="580" width="90" height="180" rx="45" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve top -->
  <rect x="380" y="562" width="40" height="22" rx="4" fill="none" stroke="black" class="medium"/>
  <line x1="380" y1="572" x2="420" y2="572" stroke="black" class="thin"/>
  <!-- Pressure gauge -->
  <circle cx="400" cy="568" r="6" fill="none" stroke="black" class="thin"/>
  <line x1="400" y1="565" x2="404" y2="562" stroke="black" class="thin"/>
  <!-- Tank neck ring -->
  <ellipse cx="400" cy="595" rx="50" ry="8" fill="none" stroke="black" class="medium"/>
  <text x="400" y="680" text-anchor="middle" font-size="9">0.5L / 3000 PSI</text>

  <!-- Dashed assembly arrow (tank slides UP into loop) -->
  <line x1="400" y1="560" x2="400" y2="520" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <path d="M395,525 L400,513 L405,525" fill="none" stroke="black" class="thin"/>

  <!-- REFERENCE LABELS -->
  <line x1="400" y1="70" x2="400" y2="50" stroke="black" class="thin"/>
  <text x="375" y="47" class="label">120 — Belt</text>

  <line x1="310" y1="350" x2="250" y2="350" stroke="black" class="thin"/>
  <text x="115" y="354" class="label">108 — Webbing loop</text>

  <line x1="490" y1="305" x2="550" y2="305" stroke="black" class="thin"/>
  <text x="555" y="309" class="label">104 — Retention strap</text>

  <line x1="335" y1="210" x2="265" y2="218" stroke="black" class="thin"/>
  <text x="135" y="222" class="label">124 — Stitch reinforcement</text>

  <line x1="400" y1="595" x2="480" y2="595" stroke="black" class="thin"/>
  <text x="485" y="599" class="label">126 — Tank neck ring</text>

  <line x1="445" y1="680" x2="510" y2="690" stroke="black" class="thin"/>
  <text x="515" y="694" class="label">110 — 0.5L tank</text>

  <line x1="370" y1="100" x2="330" y2="130" stroke="black" class="thin"/>
  <text x="220" y="140" class="label">122 — Belt threading slot</text>

  <!-- Legend -->
  <text x="50" y="730" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="745" class="caption">104 — Elastic retention strap (snap closure)  |  108 — Webbing loop cradle (fabric)  |  110 — 0.5L tank</text>
  <text x="50" y="760" class="caption">120 — Waist belt (50mm webbing)  |  122 — Belt threading slot  |  124 — Stitch reinforcement  |  126 — Tank neck ring</text>
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
  // Side profile view of harness worn by user — tanks at front-hip, tube going up
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

  <!-- User torso side view (dashed - not part of invention) -->
  <!-- Front of body (right side of drawing = front) -->
  <path d="M380,100 Q400,90 420,100 L440,150 Q450,250 445,380 Q440,450 430,520 Q420,570 400,620 L385,650" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Back of body -->
  <path d="M380,100 L365,150 Q355,250 358,380 Q362,450 368,520 Q372,570 378,620 L385,650" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Head (side profile) -->
  <path d="M380,100 Q395,60 420,55 Q445,55 450,75 Q450,90 440,100" fill="none" stroke="black" stroke-dasharray="8,4" class="thin"/>
  <!-- Leg (partial, upper thigh) -->
  <path d="M385,650 Q375,690 372,740 Q370,790 372,840" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <path d="M385,650 Q400,690 403,740 Q405,790 403,840" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>

  <!-- WAIST BELT (side view — wraps around torso) -->
  <!-- Belt shown as two lines wrapping from front to back -->
  <path d="M340,390 Q365,385 390,383 Q415,382 440,384 Q455,387 465,390" fill="none" stroke="black" class="thick"/>
  <path d="M340,412 Q365,407 390,405 Q415,404 440,406 Q455,409 465,412" fill="none" stroke="black" class="thick"/>
  <!-- Belt end wrapping behind body -->
  <path d="M340,390 Q330,394 330,401 Q330,408 340,412" fill="none" stroke="black" class="thick"/>
  <!-- Belt end at front -->
  <path d="M465,390 Q475,394 475,401 Q475,408 465,412" fill="none" stroke="black" class="thick"/>

  <!-- Neoprene padding (cross-section marks on belt interior) -->
  <line x1="370" y1="388" x2="370" y2="404" stroke="gray" class="thin"/>
  <line x1="390" y1="386" x2="390" y2="403" stroke="gray" class="thin"/>
  <line x1="410" y1="385" x2="410" y2="403" stroke="gray" class="thin"/>

  <!-- FABRIC WEBBING LOOP CRADLE (hanging from front of belt, at hip) -->
  <!-- Side view: shows the fabric loop as a narrow profile hanging down -->
  <path d="M450,406 L450,420 L450,550 Q450,565 458,565 L468,565 Q476,565 476,550 L476,420 L476,406" fill="none" stroke="black" class="thick"/>
  <!-- Fabric stitching texture -->
  <line x1="453" y1="425" x2="453" y2="550" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <line x1="473" y1="425" x2="473" y2="550" stroke="gray" class="thin" stroke-dasharray="3,2"/>
  <!-- Stitch reinforcement at belt attachment -->
  <line x1="450" y1="408" x2="476" y2="408" stroke="black" class="thin"/>
  <line x1="450" y1="411" x2="476" y2="411" stroke="black" class="thin"/>

  <!-- TANKS (two side-by-side, seen from side — one visible, second peeking behind) -->
  <!-- Front tank (fully visible in side view) -->
  <rect x="452" y="425" width="22" height="130" rx="11" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve on top -->
  <rect x="456" y="415" width="14" height="12" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Pressure gauge (side view — small circle) -->
  <circle cx="463" cy="419" r="4" fill="none" stroke="black" class="thin"/>
  <line x1="463" y1="417" x2="465" y2="415" stroke="black" class="thin"/>
  <!-- Second tank partially visible behind (offset slightly) -->
  <rect x="458" y="427" width="22" height="130" rx="11" fill="none" stroke="black" class="medium" stroke-dasharray="4,2"/>

  <!-- Y-VALVE (seen from side — compact junction piece on tank tops) -->
  <ellipse cx="467" cy="413" rx="8" ry="5" fill="none" stroke="black" class="medium"/>

  <!-- BREATHING TUBE from Y-valve going up along body to mouth -->
  <path d="M467,408 Q470,380 470,350 Q468,300 462,250 Q455,200 448,160 Q445,130 445,105" fill="none" stroke="black" class="medium"/>
  <!-- Tube rings -->
  <ellipse cx="468" cy="310" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="460" cy="250" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <ellipse cx="450" cy="180" rx="4" ry="2" fill="none" stroke="black" class="thin"/>
  <!-- Mouthpiece (side view at mouth) -->
  <ellipse cx="445" cy="103" rx="6" ry="4" fill="none" stroke="black" class="medium"/>

  <!-- STABILIZER STRAP (wraps around upper thigh below tanks) -->
  <path d="M445,415 Q440,500 438,580 Q435,630 438,670 Q442,690 455,695 Q470,695 478,685 Q482,660 480,580 Q478,500 476,415" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <!-- Stabilizer buckle -->
  <rect x="448" y="684" width="20" height="9" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- Profile dimension arrow showing minimal bulk from body -->
  <line x1="350" y1="480" x2="490" y2="480" stroke="black" class="thin"/>
  <line x1="350" y1="470" x2="350" y2="490" stroke="black" class="thin"/>
  <line x1="490" y1="470" x2="490" y2="490" stroke="black" class="thin"/>
  <text x="420" y="498" text-anchor="middle" font-size="8">~12cm profile</text>

  <!-- REFERENCE LABELS -->
  <line x1="370" y1="400" x2="300" y2="390" stroke="black" class="thin"/>
  <text x="220" y="394" class="label">102 — Belt</text>

  <line x1="476" y1="470" x2="530" y2="460" stroke="black" class="thin"/>
  <text x="535" y="464" class="label">108 — Cradle</text>

  <line x1="474" y1="510" x2="530" y2="510" stroke="black" class="thin"/>
  <text x="535" y="514" class="label">110 — Tank</text>

  <line x1="478" y1="690" x2="530" y2="700" stroke="black" class="thin"/>
  <text x="535" y="704" class="label">114 — Thigh strap</text>

  <line x1="462" y1="250" x2="520" y2="240" stroke="black" class="thin"/>
  <text x="525" y="244" class="label">140 — Tube</text>

  <line x1="467" y1="413" x2="520" y2="413" stroke="black" class="thin"/>
  <text x="525" y="417" class="label">112 — Y-valve</text>

  <!-- Legend -->
  <text x="50" y="840" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="855" class="caption">102 — Waist belt  |  108 — Tank cradle (webbing loop)  |  110 — 0.5L tank  |  112 — Y-valve manifold  |  114 — Thigh strap  |  140 — Breathing tube</text>
</svg>`;
}

function generateFig5SVG() {
  // Sequence diagram: tank insertion into fabric webbing loop
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

  <!-- STEP A: Loop open, tank approaching from below -->
  <text x="133" y="60" text-anchor="middle" font-size="12" font-weight="bold">(a) Loop Open</text>
  <!-- Belt section -->
  <rect x="75" y="85" width="116" height="16" rx="2" fill="none" stroke="black" class="thick"/>
  <!-- Fabric webbing loop hanging open from belt -->
  <path d="M100,101 L100,115 L100,240 Q100,258 118,258 L148,258 Q166,258 166,240 L166,115 L166,101" fill="none" stroke="black" class="thick"/>
  <!-- Retention strap unsnapped (hanging loose to side) -->
  <path d="M100,170 L85,170" fill="none" stroke="black" class="medium"/>
  <circle cx="85" cy="170" r="4" fill="none" stroke="black" class="thin"/>
  <text x="133" y="275" text-anchor="middle" font-size="8" fill="gray">loop open</text>
  <!-- Tank below (approaching upward) -->
  <rect x="112" y="310" width="42" height="110" rx="21" fill="none" stroke="black" class="thick"/>
  <rect x="121" y="298" width="24" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Arrow showing upward direction -->
  <line x1="133" y1="298" x2="133" y2="278" stroke="black" class="medium"/>
  <path d="M128,284 L133,274 L138,284" fill="none" stroke="black" class="medium"/>

  <!-- STEP B: Tank sliding into loop -->
  <text x="400" y="60" text-anchor="middle" font-size="12" font-weight="bold">(b) Sliding In</text>
  <!-- Belt section -->
  <rect x="342" y="85" width="116" height="16" rx="2" fill="none" stroke="black" class="thick"/>
  <!-- Fabric loop (slightly stretched around tank) -->
  <path d="M367,101 L367,115 L367,240 Q367,258 385,258 L415,258 Q433,258 433,240 L433,115 L433,101" fill="none" stroke="black" class="thick"/>
  <!-- Tank partially inside loop (top portion in, bottom sticking out) -->
  <rect x="379" y="130" width="42" height="110" rx="21" fill="none" stroke="black" class="thick"/>
  <rect x="388" y="118" width="24" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Retention strap still open -->
  <path d="M367,170 L352,170" fill="none" stroke="black" class="medium"/>
  <circle cx="352" cy="170" r="4" fill="none" stroke="black" class="thin"/>
  <!-- Arrow showing continued upward motion -->
  <line x1="400" y1="118" x2="400" y2="108" stroke="black" class="thin"/>
  <path d="M396,112 L400,105 L404,112" fill="none" stroke="black" class="thin"/>
  <!-- Annotation -->
  <text x="450" y="165" font-size="9" fill="gray">tank slides</text>
  <text x="450" y="178" font-size="9" fill="gray">into loop</text>

  <!-- STEP C: Tank fully seated, retention strap snapped closed -->
  <text x="667" y="60" text-anchor="middle" font-size="12" font-weight="bold">(c) Secured</text>
  <!-- Belt section -->
  <rect x="609" y="85" width="116" height="16" rx="2" fill="none" stroke="black" class="thick"/>
  <!-- Fabric loop snug around tank -->
  <path d="M634,101 L634,115 L634,240 Q634,258 652,258 L682,258 Q700,258 700,240 L700,115 L700,101" fill="none" stroke="black" class="thick"/>
  <!-- Tank fully seated inside loop -->
  <rect x="646" y="110" width="42" height="110" rx="21" fill="none" stroke="black" class="thick"/>
  <rect x="655" y="98" width="24" height="14" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Retention strap snapped closed across front of tank -->
  <path d="M634,170 L700,170" fill="none" stroke="black" class="thick"/>
  <path d="M634,176 L700,176" fill="none" stroke="black" class="thick"/>
  <!-- Snap button closed -->
  <circle cx="700" cy="173" r="5" fill="none" stroke="black" class="medium"/>
  <circle cx="700" cy="173" r="2" fill="black"/>
  <!-- Check mark indicating secure -->
  <path d="M718,160 L726,175 L745,148" fill="none" stroke="black" class="thick"/>
  <!-- Secure label -->
  <text x="667" y="195" text-anchor="middle" font-size="8" fill="gray">strap secured</text>

  <!-- Legend -->
  <text x="50" y="390" class="caption" font-weight="bold">Tank Insertion Sequence:</text>
  <text x="50" y="405" class="caption">(a) Fabric webbing loop hangs open from belt; retention strap unsnapped. Tank approaches from below, valve end first.</text>
  <text x="50" y="420" class="caption">(b) Tank slides upward into the fabric loop until valve clears the top of the loop and tank body rests inside.</text>
  <text x="50" y="435" class="caption">(c) Tank fully seated in loop — elastic retention strap snaps closed across tank front, securing it in place.</text>
  <text x="50" y="455" class="caption">Removal: Unsnap retention strap and slide tank downward out of loop. Total removal time: under 2 seconds.</text>
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
