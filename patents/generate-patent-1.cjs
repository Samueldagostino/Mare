const {
  Document, Packer, Paragraph, TextRun, Header, Footer,
  AlignmentType, PageNumber, NumberFormat, Tab, TabStopType,
  ImageRun, HeadingLevel, BorderStyle, SectionType,
  PageBreak, LineRuleType
} = require("docx");
const fs = require("fs");

// ============================================================
// PATENT 1: AquaPulse — Portable Open-Mask Underwater Breathing System
// ============================================================

// --- SVG Drawing Generation ---

function generateFigure1SVG() {
  // Figure 1: Exploded isometric view — all major components separated but in spatial alignment
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>

  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 1 — Exploded Isometric View</text>

  <!-- MASK ASSEMBLY (top) -->
  <!-- Mask frame - dual lens -->
  <ellipse cx="400" cy="180" rx="140" ry="80" fill="none" stroke="black" class="thick"/>
  <line x1="400" y1="100" x2="400" y2="260" stroke="black" class="medium"/>
  <!-- Left lens -->
  <ellipse cx="340" cy="175" rx="50" ry="55" fill="none" stroke="black" class="medium"/>
  <!-- Right lens -->
  <ellipse cx="460" cy="175" rx="50" ry="55" fill="none" stroke="black" class="medium"/>
  <!-- Nose pocket -->
  <path d="M385,210 Q400,250 415,210" fill="none" stroke="black" class="medium"/>
  <!-- Face seal perimeter (dashed - soft component) -->
  <ellipse cx="400" cy="180" rx="148" ry="88" fill="none" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <!-- Strap attachment points -->
  <circle cx="255" cy="170" r="6" fill="none" stroke="black" class="medium"/>
  <circle cx="545" cy="170" r="6" fill="none" stroke="black" class="medium"/>

  <!-- HEAD STRAP (offset above/right) -->
  <path d="M570,120 Q620,80 640,120 Q660,200 640,240 Q620,280 570,240" fill="none" stroke="black" class="medium"/>
  <!-- Quick-release buckle on strap -->
  <rect x="625" y="155" width="30" height="20" rx="3" fill="none" stroke="black" class="medium"/>
  <line x1="640" y1="155" x2="640" y2="175" stroke="black" class="thin"/>

  <!-- BREATHING TUBE (middle section) -->
  <!-- Corrugated tube -->
  <path d="M400,290 L400,310 Q395,315 400,320 Q405,325 400,330 Q395,335 400,340 Q405,345 400,350 Q395,355 400,360 Q405,365 400,370 Q395,375 400,380 Q405,385 400,390 Q395,395 400,400 Q405,405 400,410 Q395,415 400,420 L400,440" fill="none" stroke="black" class="medium"/>
  <!-- Tube walls -->
  <path d="M388,290 L388,310 Q383,315 388,320 Q393,325 388,330 Q383,335 388,340 Q393,345 388,350 Q383,355 388,360 Q393,365 388,370 Q383,375 388,380 Q393,385 388,390 Q383,395 388,400 Q393,405 388,410 Q383,415 388,420 L388,440" fill="none" stroke="black" class="thin"/>
  <path d="M412,290 L412,310 Q417,315 412,320 Q407,325 412,330 Q417,335 412,340 Q407,345 412,350 Q417,355 412,360 Q407,365 412,370 Q417,375 412,380 Q407,385 412,390 Q417,395 412,400 Q407,405 412,410 Q417,415 412,420 L412,440" fill="none" stroke="black" class="thin"/>

  <!-- MOUTHPIECE (offset left of tube top) -->
  <path d="M300,280 Q310,265 340,268 Q360,270 370,285 L370,300 Q360,310 340,312 Q310,310 300,300 Z" fill="none" stroke="black" class="medium"/>
  <!-- Bite flanges -->
  <path d="M310,285 Q330,278 355,282" fill="none" stroke="black" class="thin"/>
  <path d="M310,295 Q330,302 355,298" fill="none" stroke="black" class="thin"/>
  <!-- Connection to tube -->
  <line x1="370" y1="292" x2="388" y2="292" stroke="black" stroke-dasharray="4,2" class="thin"/>

  <!-- REGULATOR BODY (below tube) -->
  <ellipse cx="400" cy="500" rx="55" ry="40" fill="none" stroke="black" class="thick"/>
  <!-- Diaphragm housing (dome on top) -->
  <path d="M355,480 Q400,445 445,480" fill="none" stroke="black" class="medium"/>
  <!-- Purge button -->
  <circle cx="400" cy="515" r="12" fill="none" stroke="black" class="medium"/>
  <text x="400" y="519" text-anchor="middle" font-size="7">PURGE</text>
  <!-- LP hose connection -->
  <rect x="448" y="490" width="30" height="14" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- Connection to tube (dashed = separated) -->
  <line x1="400" y1="460" x2="400" y2="440" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- TANK CONNECTION POINT (bottom) -->
  <!-- First-stage regulator housing -->
  <rect x="370" y="600" width="60" height="35" rx="5" fill="none" stroke="black" class="thick"/>
  <!-- Yoke/DIN connection -->
  <path d="M385,635 L385,660 Q400,670 415,660 L415,635" fill="none" stroke="black" class="medium"/>
  <!-- Thread detail -->
  <line x1="388" y1="645" x2="412" y2="645" stroke="black" class="thin"/>
  <line x1="388" y1="650" x2="412" y2="650" stroke="black" class="thin"/>
  <line x1="388" y1="655" x2="412" y2="655" stroke="black" class="thin"/>
  <!-- HP hose to regulator -->
  <line x1="400" y1="600" x2="400" y2="540" stroke="black" stroke-dasharray="6,3" class="thin"/>
  <!-- LP hose output -->
  <rect x="430" y="608" width="25" height="12" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- 0.5L TANK (bottom, outline) -->
  <rect x="365" y="700" width="70" height="160" rx="35" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve -->
  <rect x="385" y="685" width="30" height="20" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- Tank markings -->
  <text x="400" y="780" text-anchor="middle" font-size="8">0.5L</text>
  <text x="400" y="795" text-anchor="middle" font-size="7">3000 PSI</text>
  <!-- Connection dashed line -->
  <line x1="400" y1="685" x2="400" y2="670" stroke="black" stroke-dasharray="6,3" class="thin"/>

  <!-- REFERENCE NUMERAL LABELS -->
  <!-- 10 - Mask assembly -->
  <line x1="260" y1="130" x2="295" y2="155" stroke="black" class="thin"/>
  <text x="210" y="128" class="label">10</text>
  <!-- 12 - Tempered glass lenses -->
  <line x1="285" y1="175" x2="295" y2="175" stroke="black" class="thin"/>
  <text x="240" y="179" class="label">12</text>
  <!-- 14 - Silicone face seal -->
  <line x1="258" y1="210" x2="275" y2="200" stroke="black" class="thin"/>
  <text x="195" y="214" class="label">14</text>
  <!-- 16 - Nose pocket -->
  <line x1="420" y1="240" x2="450" y2="255" stroke="black" class="thin"/>
  <text x="455" y="259" class="label">16</text>
  <!-- 18 - Strap attachment -->
  <line x1="545" y1="160" x2="575" y2="145" stroke="black" class="thin"/>
  <text x="580" y="149" class="label">18</text>
  <!-- 20 - Head strap -->
  <line x1="650" y1="180" x2="680" y2="180" stroke="black" class="thin"/>
  <text x="685" y="184" class="label">20</text>
  <!-- 22 - Quick-release buckle -->
  <line x1="655" y1="165" x2="690" y2="150" stroke="black" class="thin"/>
  <text x="695" y="154" class="label">22</text>
  <!-- 24 - Mouthpiece -->
  <line x1="300" y1="270" x2="260" y2="260" stroke="black" class="thin"/>
  <text x="210" y="264" class="label">24</text>
  <!-- 26 - Breathing tube -->
  <line x1="415" y1="360" x2="450" y2="360" stroke="black" class="thin"/>
  <text x="455" y="364" class="label">26</text>
  <!-- 28 - Regulator body -->
  <line x1="455" y1="500" x2="490" y2="500" stroke="black" class="thin"/>
  <text x="495" y="504" class="label">28</text>
  <!-- 30 - Purge button -->
  <line x1="412" y1="515" x2="470" y2="530" stroke="black" class="thin"/>
  <text x="475" y="534" class="label">30</text>
  <!-- 32 - First-stage regulator -->
  <line x1="430" y1="618" x2="470" y2="618" stroke="black" class="thin"/>
  <text x="475" y="622" class="label">32</text>
  <!-- 34 - Tank valve connection -->
  <line x1="415" y1="695" x2="470" y2="688" stroke="black" class="thin"/>
  <text x="475" y="692" class="label">34</text>
  <!-- 36 - 0.5L tank -->
  <line x1="435" y1="780" x2="470" y2="780" stroke="black" class="thin"/>
  <text x="475" y="784" class="label">36</text>

  <!-- Legend -->
  <text x="50" y="920" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="935" class="caption">10 — Mask assembly  |  12 — Tempered glass lenses  |  14 — Silicone face seal  |  16 — Nose pocket</text>
  <text x="50" y="950" class="caption">18 — Strap attachment points  |  20 — Head strap  |  22 — Quick-release buckle  |  24 — Mouthpiece</text>
  <text x="50" y="965" class="caption">26 — Breathing tube  |  28 — Regulator body  |  30 — Purge button  |  32 — First-stage regulator</text>
  <text x="50" y="980" class="caption">34 — Tank valve connection  |  36 — 0.5L compressed air tank</text>
</svg>`;
}

function generateFigure2SVG() {
  // Figure 2: Side profile view of the complete system as worn on a user's head
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900" width="800" height="900">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>

  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 2 — Side Profile View (System Worn by User)</text>

  <!-- User head outline (side profile) -->
  <path d="M350,120 Q300,100 280,140 Q255,180 260,230 Q260,280 275,310 Q290,350 310,370 Q330,390 340,400 L360,400 Q380,390 390,370 Q400,340 400,310 Q405,280 400,250 Q395,200 380,170 Q365,140 350,120 Z" fill="none" stroke="black" stroke-dasharray="8,4" class="medium"/>
  <!-- Ear -->
  <path d="M260,220 Q245,215 243,235 Q242,255 258,255" fill="none" stroke="black" stroke-dasharray="4,2" class="thin"/>

  <!-- MASK on face (solid - product component) -->
  <path d="M380,175 Q420,160 435,190 Q445,220 440,260 Q435,290 420,310 Q400,330 375,335 Q360,335 355,325" fill="none" stroke="black" class="thick"/>
  <!-- Visor surface -->
  <path d="M385,185 Q415,175 425,200 Q432,225 428,260 Q425,285 415,300 Q400,315 382,318" fill="none" stroke="black" class="medium"/>
  <!-- Face seal against skin -->
  <path d="M378,170 Q370,175 365,200 Q360,240 362,280 Q365,310 375,335" fill="none" stroke="black" stroke-dasharray="4,2" class="thin"/>

  <!-- Head strap going over crown -->
  <path d="M382,170 Q370,130 340,110 Q310,100 280,120 Q265,140 260,180" fill="none" stroke="black" class="medium"/>
  <!-- Strap buckle at back of head -->
  <rect x="268" y="155" width="20" height="14" rx="2" fill="none" stroke="black" class="medium"/>

  <!-- MOUTHPIECE in mouth area -->
  <path d="M395,310 L420,305 Q430,308 432,318 L432,325 Q430,332 420,335 L395,338" fill="none" stroke="black" class="thick"/>
  <!-- Bite flanges shown -->
  <line x1="400" y1="312" x2="425" y2="309" stroke="black" class="thin"/>
  <line x1="400" y1="335" x2="425" y2="332" stroke="black" class="thin"/>

  <!-- BREATHING TUBE routing down from mouthpiece -->
  <path d="M432,322 Q460,325 475,345 Q490,370 490,400 Q490,430 485,460 Q480,490 475,520 Q470,545 468,560" fill="none" stroke="black" class="medium"/>
  <!-- Tube corrugation detail -->
  <path d="M483,380 Q495,385 483,390" fill="none" stroke="black" class="thin"/>
  <path d="M482,410 Q494,415 482,420" fill="none" stroke="black" class="thin"/>
  <path d="M480,440 Q492,445 480,450" fill="none" stroke="black" class="thin"/>
  <path d="M478,470 Q490,475 478,480" fill="none" stroke="black" class="thin"/>
  <path d="M476,500 Q488,505 476,510" fill="none" stroke="black" class="thin"/>

  <!-- HAND holding tank -->
  <!-- Forearm and hand outline -->
  <path d="M520,520 Q510,540 500,560 Q495,575 490,590 Q485,600 488,610 Q492,620 500,625 Q510,630 520,625 Q530,620 535,610 Q540,590 535,570 Q530,550 525,530" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <!-- Fingers wrapped around tank -->
  <path d="M488,610 Q480,615 478,625 Q478,640 485,650" fill="none" stroke="black" stroke-dasharray="4,2" class="thin"/>
  <path d="M500,625 Q495,635 493,650" fill="none" stroke="black" stroke-dasharray="4,2" class="thin"/>

  <!-- TANK in hand -->
  <rect x="478" y="595" width="45" height="130" rx="22" fill="none" stroke="black" class="thick"/>
  <!-- Tank valve at top -->
  <rect x="490" y="582" width="22" height="16" rx="3" fill="none" stroke="black" class="medium"/>
  <!-- First-stage regulator on tank -->
  <rect x="475" y="560" width="52" height="25" rx="4" fill="none" stroke="black" class="medium"/>

  <!-- Exhaled bubbles (indicating open mask exhale) -->
  <circle cx="430" cy="280" r="4" fill="none" stroke="black" class="thin"/>
  <circle cx="445" cy="265" r="3" fill="none" stroke="black" class="thin"/>
  <circle cx="437" cy="248" r="5" fill="none" stroke="black" class="thin"/>
  <circle cx="450" cy="230" r="3.5" fill="none" stroke="black" class="thin"/>

  <!-- REFERENCE LABELS -->
  <line x1="435" y1="190" x2="500" y2="170" stroke="black" class="thin"/>
  <text x="505" y="174" class="label">10</text>

  <line x1="425" y1="240" x2="500" y2="230" stroke="black" class="thin"/>
  <text x="505" y="234" class="label">12</text>

  <line x1="370" y1="250" x2="330" y2="260" stroke="black" class="thin"/>
  <text x="290" y="264" class="label">14</text>

  <line x1="345" y1="110" x2="310" y2="85" stroke="black" class="thin"/>
  <text x="275" y="85" class="label">20</text>

  <line x1="278" y1="162" x2="240" y2="155" stroke="black" class="thin"/>
  <text x="200" y="159" class="label">22</text>

  <line x1="420" y1="322" x2="460" y2="310" stroke="black" class="thin"/>
  <text x="465" y="305" class="label">24</text>

  <line x1="490" y1="450" x2="540" y2="440" stroke="black" class="thin"/>
  <text x="545" y="444" class="label">26</text>

  <line x1="527" y1="572" x2="570" y2="560" stroke="black" class="thin"/>
  <text x="575" y="564" class="label">28/32</text>

  <line x1="523" y1="660" x2="570" y2="660" stroke="black" class="thin"/>
  <text x="575" y="664" class="label">36</text>

  <line x1="445" y1="265" x2="490" y2="255" stroke="black" class="thin"/>
  <text x="495" y="250" class="label">38</text>

  <!-- Legend -->
  <text x="50" y="810" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="825" class="caption">10 — Mask assembly  |  12 — Visor  |  14 — Face seal  |  20 — Head strap  |  22 — Buckle</text>
  <text x="50" y="840" class="caption">24 — Mouthpiece  |  26 — Breathing tube  |  28/32 — Regulator/first-stage  |  36 — Tank  |  38 — Exhaled bubbles</text>
</svg>`;
}

function generateFigure3SVG() {
  // Figure 3: Detail view of the mouthpiece regulator assembly
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 700" width="800" height="700">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
    .hatch { stroke-width: 0.4; stroke: black; }
  </style>

  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 3 — Mouthpiece Regulator Assembly (Cross-Section Detail)</text>

  <!-- REGULATOR BODY — cross section -->
  <!-- Outer housing -->
  <path d="M200,250 Q200,180 280,160 L520,160 Q600,180 600,250 L600,400 Q600,460 520,480 L280,480 Q200,460 200,400 Z" fill="none" stroke="black" class="thick"/>

  <!-- Diaphragm housing dome (top) -->
  <path d="M250,160 Q400,80 550,160" fill="none" stroke="black" class="thick"/>
  <!-- Diaphragm membrane -->
  <path d="M270,160 Q400,110 530,160" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>
  <!-- Cross-hatch the diaphragm dome interior -->
  <line x1="290" y1="155" x2="310" y2="130" class="hatch"/>
  <line x1="330" y1="155" x2="350" y2="120" class="hatch"/>
  <line x1="370" y1="155" x2="390" y2="110" class="hatch"/>
  <line x1="410" y1="155" x2="420" y2="112" class="hatch"/>
  <line x1="450" y1="155" x2="455" y2="120" class="hatch"/>
  <line x1="490" y1="155" x2="490" y2="130" class="hatch"/>

  <!-- Demand lever mechanism inside -->
  <line x1="400" y1="145" x2="400" y2="220" stroke="black" class="medium"/>
  <circle cx="400" cy="220" r="8" fill="none" stroke="black" class="medium"/>
  <!-- Spring -->
  <path d="M395,228 Q390,238 395,248 Q400,258 395,268 Q390,278 395,288" fill="none" stroke="black" class="thin"/>

  <!-- Valve seat -->
  <rect x="380" y="290" width="40" height="15" rx="2" fill="none" stroke="black" class="medium"/>
  <!-- Hatching for valve seat (solid material) -->
  <line x1="383" y1="293" x2="393" y2="303" class="hatch"/>
  <line x1="393" y1="293" x2="403" y2="303" class="hatch"/>
  <line x1="403" y1="293" x2="413" y2="303" class="hatch"/>

  <!-- Air flow chamber below valve -->
  <rect x="360" y="310" width="80" height="50" fill="none" stroke="black" class="medium"/>
  <!-- Flow arrows -->
  <path d="M340,335 L360,335" fill="none" stroke="black" class="thin" marker-end="url(#arrow)"/>
  <path d="M440,335 L460,335" fill="none" stroke="black" class="thin" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="0.8"/></marker></defs>

  <!-- PURGE BUTTON (front/bottom) -->
  <circle cx="400" cy="450" r="25" fill="none" stroke="black" class="thick"/>
  <circle cx="400" cy="450" r="20" fill="none" stroke="black" class="medium"/>
  <!-- Spring behind purge -->
  <path d="M400,425 Q395,418 400,411 Q405,404 400,397 Q395,390 400,383" fill="none" stroke="black" class="thin"/>

  <!-- LP HOSE CONNECTION (right side) -->
  <rect x="600" y="300" width="80" height="30" rx="5" fill="none" stroke="black" class="medium"/>
  <!-- Hose barb threads -->
  <line x1="680" y1="305" x2="695" y2="305" stroke="black" class="thin"/>
  <line x1="680" y1="310" x2="698" y2="310" stroke="black" class="thin"/>
  <line x1="680" y1="315" x2="698" y2="315" stroke="black" class="thin"/>
  <line x1="680" y1="320" x2="698" y2="320" stroke="black" class="thin"/>
  <line x1="680" y1="325" x2="695" y2="325" stroke="black" class="thin"/>
  <!-- Hose -->
  <path d="M698,315 L760,315" fill="none" stroke="black" class="medium"/>

  <!-- MOUTHPIECE (left side, extended) -->
  <path d="M200,340 L140,340 Q100,340 90,355 Q80,370 85,385 L85,395 Q80,410 90,420 Q100,430 140,430 L200,430" fill="none" stroke="black" class="thick"/>
  <!-- Bite tabs (upper) -->
  <path d="M130,345 L130,360 Q120,360 120,352 Q120,345 130,345" fill="none" stroke="black" class="medium"/>
  <!-- Bite tabs (lower) -->
  <path d="M130,415 L130,425 Q120,425 120,420 Q120,415 130,415" fill="none" stroke="black" class="medium"/>
  <!-- Lip flange -->
  <path d="M95,350 Q70,360 65,385 Q70,410 95,420" fill="none" stroke="black" class="medium"/>
  <!-- Air passage through mouthpiece -->
  <rect x="100" y="370" width="100" height="30" fill="none" stroke="black" stroke-dasharray="4,2" class="thin"/>

  <!-- TUBE CONNECTION (top of mouthpiece area) -->
  <circle cx="200" cy="310" r="15" fill="none" stroke="black" class="medium"/>
  <circle cx="200" cy="310" r="10" fill="none" stroke="black" class="thin"/>

  <!-- REFERENCE LABELS -->
  <line x1="400" y1="80" x2="500" y2="60" stroke="black" class="thin"/>
  <text x="505" y="64" class="label">40 — Diaphragm</text>

  <line x1="400" y1="220" x2="500" y2="210" stroke="black" class="thin"/>
  <text x="505" y="214" class="label">42 — Demand lever</text>

  <line x1="400" y1="297" x2="500" y2="285" stroke="black" class="thin"/>
  <text x="505" y="289" class="label">44 — Valve seat</text>

  <line x1="400" y1="450" x2="500" y2="460" stroke="black" class="thin"/>
  <text x="505" y="464" class="label">30 — Purge button</text>

  <line x1="640" y1="300" x2="640" y2="275" stroke="black" class="thin"/>
  <text x="610" y="270" class="label">46 — LP hose port</text>

  <line x1="90" y1="385" x2="50" y2="385" stroke="black" class="thin"/>
  <text x="10" y="379" class="label">24 — Mouthpiece</text>

  <line x1="120" y1="352" x2="50" y2="340" stroke="black" class="thin"/>
  <text x="10" y="337" class="label">48 — Bite flanges</text>

  <line x1="75" y1="385" x2="50" y2="410" stroke="black" class="thin"/>
  <text x="10" y="418" class="label">50 — Lip flange</text>

  <line x1="200" y1="310" x2="160" y2="280" stroke="black" class="thin"/>
  <text x="80" y="275" class="label">52 — Tube connector</text>

  <line x1="400" y1="335" x2="500" y2="340" stroke="black" class="thin"/>
  <text x="505" y="344" class="label">54 — Air flow chamber</text>

  <!-- Legend -->
  <text x="50" y="580" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="595" class="caption">24 — Mouthpiece  |  30 — Purge button  |  40 — Diaphragm  |  42 — Demand lever  |  44 — Valve seat</text>
  <text x="50" y="610" class="caption">46 — LP hose port  |  48 — Bite flanges  |  50 — Lip flange  |  52 — Tube connector  |  54 — Air flow chamber</text>
</svg>`;
}

function generateFigure4SVG() {
  // Figure 4: Front view of the mask
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <style>
    text { font-family: Arial, sans-serif; font-size: 11px; }
    .label { font-size: 11px; font-weight: bold; }
    .caption { font-size: 10px; }
    .thin { stroke-width: 0.5; }
    .medium { stroke-width: 1.2; }
    .thick { stroke-width: 1.8; }
  </style>

  <text x="400" y="30" text-anchor="middle" font-size="14" font-weight="bold">FIG. 4 — Front View of Mask Assembly</text>

  <!-- Outer face seal perimeter -->
  <path d="M400,100 Q530,100 560,170 Q580,230 575,300 Q570,370 550,420 Q530,470 480,510 Q440,540 400,550 Q360,540 320,510 Q270,470 250,420 Q230,370 225,300 Q220,230 240,170 Q270,100 400,100 Z" fill="none" stroke="black" stroke-dasharray="6,3" class="medium"/>

  <!-- Mask frame (rigid) -->
  <path d="M400,120 Q510,120 535,180 Q555,230 550,290 Q545,350 530,390 Q510,440 470,475 Q440,500 400,508 Q360,500 330,475 Q290,440 270,390 Q255,350 250,290 Q245,230 265,180 Q290,120 400,120 Z" fill="none" stroke="black" class="thick"/>

  <!-- Bridge/nose divider -->
  <line x1="400" y1="160" x2="400" y2="400" stroke="black" class="medium"/>

  <!-- Left lens -->
  <path d="M390,165 Q340,165 310,200 Q280,245 278,300 Q280,350 300,385 Q325,420 370,440 L390,400 Q390,300 390,165 Z" fill="none" stroke="black" class="medium"/>

  <!-- Right lens -->
  <path d="M410,165 Q460,165 490,200 Q520,245 522,300 Q520,350 500,385 Q475,420 430,440 L410,400 Q410,300 410,165 Z" fill="none" stroke="black" class="medium"/>

  <!-- Nose pocket -->
  <path d="M375,400 Q380,430 400,450 Q420,430 425,400" fill="none" stroke="black" class="medium"/>
  <!-- Nose pocket interior dashed -->
  <path d="M382,405 Q390,425 400,435 Q410,425 418,405" fill="none" stroke="black" stroke-dasharray="3,2" class="thin"/>

  <!-- Strap attachment points (left and right) -->
  <circle cx="225" cy="270" r="8" fill="none" stroke="black" class="medium"/>
  <line x1="217" y1="270" x2="190" y2="270" stroke="black" class="medium"/>
  <circle cx="575" cy="270" r="8" fill="none" stroke="black" class="medium"/>
  <line x1="583" y1="270" x2="610" y2="270" stroke="black" class="medium"/>

  <!-- Strap fragments going to sides -->
  <path d="M190,270 L150,260 Q140,258 135,265 L135,275 Q140,282 150,280 L190,270" fill="none" stroke="black" class="medium"/>
  <path d="M610,270 L650,260 Q660,258 665,265 L665,275 Q660,282 650,280 L610,270" fill="none" stroke="black" class="medium"/>

  <!-- Breathing tube entry point (bottom center) -->
  <circle cx="400" cy="520" r="12" fill="none" stroke="black" class="thick"/>
  <circle cx="400" cy="520" r="7" fill="none" stroke="black" class="medium"/>
  <!-- Tube going down -->
  <path d="M393,532 L393,570 Q388,575 393,580 Q398,585 393,590" fill="none" stroke="black" class="medium"/>
  <path d="M407,532 L407,570 Q412,575 407,580 Q402,585 407,590" fill="none" stroke="black" class="medium"/>

  <!-- Anti-fog coating indicator (interior detail) -->
  <text x="335" y="310" font-size="8" fill="gray" font-style="italic">anti-fog</text>
  <text x="335" y="322" font-size="8" fill="gray" font-style="italic">coating</text>
  <text x="445" y="310" font-size="8" fill="gray" font-style="italic">anti-fog</text>
  <text x="445" y="322" font-size="8" fill="gray" font-style="italic">coating</text>

  <!-- REFERENCE LABELS -->
  <line x1="300" y1="120" x2="250" y2="90" stroke="black" class="thin"/>
  <text x="170" y="94" class="label">10 — Mask frame</text>

  <line x1="310" y1="250" x2="220" y2="220" stroke="black" class="thin"/>
  <text x="115" y="224" class="label">12 — Left lens</text>

  <line x1="490" y1="250" x2="580" y2="220" stroke="black" class="thin"/>
  <text x="585" y="224" class="label">12 — Right lens</text>

  <line x1="560" y1="170" x2="620" y2="140" stroke="black" class="thin"/>
  <text x="625" y="144" class="label">14 — Face seal</text>

  <line x1="400" y1="450" x2="480" y2="470" stroke="black" class="thin"/>
  <text x="485" y="474" class="label">16 — Nose pocket</text>

  <line x1="225" y1="262" x2="200" y2="235" stroke="black" class="thin"/>
  <text x="100" y="239" class="label">18 — Strap point</text>

  <line x1="400" y1="508" x2="490" y2="530" stroke="black" class="thin"/>
  <text x="495" y="534" class="label">56 — Tube entry</text>

  <line x1="400" y1="235" x2="440" y2="200" stroke="black" class="thin"/>
  <text x="445" y="197" class="label">58 — Bridge</text>

  <!-- Legend -->
  <text x="50" y="680" class="caption" font-weight="bold">Reference Numerals:</text>
  <text x="50" y="695" class="caption">10 — Mask frame  |  12 — Tempered glass lenses (×2)  |  14 — Silicone face seal (dashed)  |  16 — Nose pocket</text>
  <text x="50" y="710" class="caption">18 — Strap attachment points  |  56 — Breathing tube entry point  |  58 — Nose bridge divider</text>
</svg>`;
}

// --- Convert SVG to PNG Buffer via sharp ---
const sharp = require("sharp");

async function svgToPng(svgString, width = 1600) {
  const buf = Buffer.from(svgString, "utf-8");
  return await sharp(buf).resize(width).png().toBuffer();
}

// --- Build the DOCX ---
async function buildPatent1() {
  // Save SVGs as files
  fs.writeFileSync("/home/user/Mare/patents/fig1_aquapulse.svg", generateFigure1SVG());
  fs.writeFileSync("/home/user/Mare/patents/fig2_aquapulse.svg", generateFigure2SVG());
  fs.writeFileSync("/home/user/Mare/patents/fig3_aquapulse.svg", generateFigure3SVG());
  fs.writeFileSync("/home/user/Mare/patents/fig4_aquapulse.svg", generateFigure4SVG());

  // Convert to PNG
  const fig1 = await svgToPng(generateFigure1SVG(), 1600);
  const fig2 = await svgToPng(generateFigure2SVG(), 1600);
  const fig3 = await svgToPng(generateFigure3SVG(), 1600);
  const fig4 = await svgToPng(generateFigure4SVG(), 1600);

  const FONT = "Arial";
  const HEADING_SIZE = 28; // 14pt
  const BODY_SIZE = 24;    // 12pt
  const SMALL_SIZE = 18;   // 9pt

  function heading(text) {
    return new Paragraph({
      spacing: { before: 360, after: 120, line: 360 },
      children: [new TextRun({ text, font: FONT, size: HEADING_SIZE, bold: true })],
    });
  }

  function body(text, opts = {}) {
    return new Paragraph({
      spacing: { after: 120, line: 360 },
      indent: opts.indent ? { left: 720 } : undefined,
      children: [new TextRun({ text, font: FONT, size: BODY_SIZE, ...opts })],
    });
  }

  function bodyBold(label, text) {
    return new Paragraph({
      spacing: { after: 120, line: 360 },
      children: [
        new TextRun({ text: label, font: FONT, size: BODY_SIZE, bold: true }),
        new TextRun({ text, font: FONT, size: BODY_SIZE }),
      ],
    });
  }

  function bullet(text) {
    return new Paragraph({
      spacing: { after: 80, line: 360 },
      indent: { left: 720, hanging: 360 },
      children: [new TextRun({ text: "\u2022  " + text, font: FONT, size: BODY_SIZE })],
    });
  }

  function emptyLine() {
    return new Paragraph({ spacing: { after: 120 }, children: [] });
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 }, // US Letter in twentieths of a point
            margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: "Provisional Patent Application \u2014 Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator",
                    font: FONT,
                    size: SMALL_SIZE,
                    italics: true,
                    color: "666666",
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "Page ", font: FONT, size: SMALL_SIZE }),
                  new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: SMALL_SIZE }),
                ],
              }),
            ],
          }),
        },
        children: [
          // TITLE
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 480 },
            children: [
              new TextRun({ text: "PROVISIONAL PATENT APPLICATION", font: FONT, size: 32, bold: true }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({ text: "Filed under 35 U.S.C. \u00A7111(b)", font: FONT, size: BODY_SIZE, italics: true }),
            ],
          }),
          emptyLine(),

          // 1. TITLE OF THE INVENTION
          heading("1. TITLE OF THE INVENTION"),
          body("Portable Open-Mask Underwater Breathing System with Mouthpiece Regulator"),
          emptyLine(),

          // 2. CROSS-REFERENCE
          heading("2. CROSS-REFERENCE TO RELATED APPLICATIONS"),
          body("Not applicable. This is a standalone provisional patent application."),
          emptyLine(),

          // 3. FIELD OF THE INVENTION
          heading("3. FIELD OF THE INVENTION"),
          body("The present invention relates to portable underwater breathing apparatus, and more particularly to a lightweight, consumer-oriented open-mask breathing system with an integrated mouthpiece regulator designed for recreational shallow-water use by non-certified users. The invention is classified within the field of underwater breathing apparatus (IPC: B63C 11/02) and personal diving equipment."),
          emptyLine(),

          // 4. BACKGROUND OF THE INVENTION
          heading("4. BACKGROUND OF THE INVENTION"),
          body("Recreational exploration of underwater environments has historically been limited by the complexity, cost, and training requirements associated with existing breathing apparatus. The following deficiencies exist in the prior art:"),
          emptyLine(),
          body("Traditional self-contained underwater breathing apparatus (SCUBA) requires formal certification through organizations such as PADI (Professional Association of Diving Instructors) or SSI (Scuba Schools International). A complete SCUBA system, comprising buoyancy compensator, regulator set, tank, wetsuit, and accessories, typically weighs between 15 and 25 kilograms and costs between $1,500 and $5,000. This equipment burden and training requirement excludes the vast majority of casual ocean enthusiasts from underwater exploration beyond breath-hold capabilities."),
          emptyLine(),
          body("Existing portable underwater breathing devices, such as those marketed by SMACO and DEDEPU, provide small compressed air cylinders (typically 0.5 to 1.0 liters) with basic regulator assemblies. However, these systems require the user to hold a separate mouthpiece in one hand while wearing a separate dive or snorkel mask. This two-component approach presents several disadvantages: (a) the user must continuously grip the mouthpiece regulator, occupying one hand; (b) there is no integration between the breathing apparatus and the vision system, requiring the user to manage two separate pieces of equipment; (c) the mouthpiece can easily be dislodged during active swimming, creating a safety concern; and (d) the overall user experience is cumbersome and unintuitive for non-divers."),
          emptyLine(),
          body("Full-face snorkel masks designed for recreational surface use (such as the Tribord Easybreath and similar products) provide an integrated mask-and-breathing solution, but these devices are designed exclusively for surface snorkeling. They do not accept compressed air input and cannot provide underwater breathing capability. Furthermore, reported safety concerns with CO2 buildup in some full-face snorkel designs have limited their adoption."),
          emptyLine(),
          body("Professional full-face diving masks (such as those manufactured by Kirby Morgan, Ocean Technology Systems, and Interspiro) do provide integrated mask-and-breathing functionality with compressed air. However, these systems are designed for commercial, military, and technical diving applications. They typically weigh 800 to 1,800 grams for the mask alone, cost $1,500 to $4,000 or more, and are engineered for working depths of 30 to 300+ meters \u2014 far exceeding the needs of recreational shallow-water users."),
          emptyLine(),
          body("Accordingly, there exists a significant unmet need in the market for an integrated underwater breathing and vision system that: (a) combines mask and breathing apparatus into a single, cohesive system; (b) interfaces with widely available mini compressed air tanks; (c) requires no dive certification or specialized training; (d) weighs under 900 grams excluding tank; (e) is priced accessibly for the consumer market; and (f) is designed specifically for casual shallow-water exploration at depths of 1 to 5 meters. The present invention addresses this gap."),
          emptyLine(),

          // 5. SUMMARY OF THE INVENTION
          heading("5. SUMMARY OF THE INVENTION"),
          body("The present invention provides a portable underwater breathing system comprising the following principal components:"),
          bullet("An open-frame dive mask (10) with a tempered glass dual-lens visor (12) and a medical-grade liquid silicone rubber face seal (14);"),
          bullet("A low-profile mouthpiece regulator assembly comprising a second-stage demand regulator (28) integrated with an orthodontic-style mouthpiece (24) via a flexible corrugated breathing tube (26);"),
          bullet("Compatibility with standard commercially available 0.5-liter mini compressed air tanks (36) operating at pressures up to 3,000 PSI (200 bar);"),
          bullet("A tank retention system allowing the compressed air tank to be held by hand or mounted to the user's body via an optional waist belt harness (described in a related provisional application);"),
          bullet("A total dry weight under 900 grams excluding the compressed air tank;"),
          bullet("An open-mask breathing architecture wherein the user inhales through the mouthpiece and exhales through the nose or around the mouthpiece, with exhaled air exiting naturally through the unsealed lower portion of the mask;"),
          bullet("No dive certification required for intended shallow-water recreational use at depths of 1 to 5 meters."),
          emptyLine(),
          body("In one embodiment, the system is configured such that the mask is worn on the user's face in the conventional manner, the breathing tube routes from the regulator mounted on the tank to the mouthpiece positioned within the mask frame, and the user holds the tank in one hand during use. In an alternative embodiment, the tank is mounted to the user's waist via an optional body-mounted harness system, freeing both hands for swimming, photography, or other activities."),
          emptyLine(),

          // 6. DETAILED DESCRIPTION
          heading("6. DETAILED DESCRIPTION OF THE INVENTION"),
          body("The following detailed description refers to the accompanying drawings, which form a part hereof. Like reference numerals refer to like elements throughout the several views. The description provides specific details for a thorough understanding of the invention, but it will be understood by those skilled in the art that the invention may be practiced without these specific details."),
          emptyLine(),

          // 6.1
          heading("6.1 Open-Frame Mask Assembly"),
          body("Referring to FIGS. 1 and 4, the mask assembly (10) comprises a rigid frame constructed from injection-molded polycarbonate (PC). The frame defines a low-profile housing that conforms to the facial geometry of the intended user population. The frame is configured to receive two tempered glass lenses (12) in a dual-lens configuration, with a central nose bridge (58) separating the left and right viewing areas."),
          emptyLine(),
          body("Each lens (12) is constructed from tempered soda-lime glass conforming to EN 16805 or equivalent safety standards. The lenses are set into the frame via compression-fit silicone gaskets that provide a watertight seal while allowing lens replacement for maintenance. An anti-fog hydrophilic coating is applied to the interior surface of each lens to minimize condensation during use."),
          emptyLine(),
          body("A face seal (14) constructed from medical-grade liquid silicone rubber (LSR, durometer Shore A 30\u201340) is bonded to the perimeter of the mask frame. The face seal is anatomically contoured to conform to the orbital, nasal, and cheek regions of the face, providing a comfortable watertight seal across a range of facial geometries. The LSR material is hypoallergenic, resistant to UV degradation, and maintains elasticity across a temperature range of -20\u00B0C to +60\u00B0C."),
          emptyLine(),
          body("A nose pocket (16) is integrated into the face seal, extending inward from the lower-central portion of the seal. The nose pocket allows the user to pinch the nose through the soft silicone material, enabling Valsalva maneuver equalization of middle ear pressure during descent. The nose pocket volume is approximately 15 to 25 mL."),
          emptyLine(),
          body("Strap attachment points (18) are molded into the left and right lateral aspects of the mask frame. Each attachment point comprises a slot-and-tab connector configured to receive the head strap (20). The head strap (20) is constructed from medical-grade silicone rubber and is adjustable in length to accommodate head circumferences from approximately 52 cm to 62 cm. A quick-release buckle (22) is positioned at the rear of the head strap, enabling single-hand removal of the mask in emergency situations."),
          emptyLine(),
          body("A breathing tube entry point (56) is located at the lower-central portion of the mask frame. This port is configured to receive the proximal end of the breathing tube (26) and route it to the mouthpiece (24) position within the interior of the mask frame. The open-mask design means the mask frame does not create an airtight seal around the mouth \u2014 the lower portion of the mask remains open to allow natural exhale path for exhaled air (38) to exit as bubbles."),
          emptyLine(),
          bodyBold("Materials: ", "Polycarbonate frame (PC, Makrolon or equivalent), tempered soda-lime glass lenses, LSR face seal (Wacker Elastosil or equivalent), silicone rubber head strap, Delrin or stainless steel buckle hardware."),
          emptyLine(),
          bodyBold("Total mask weight: ", "Approximately 180 to 250 grams, depending on configuration."),
          emptyLine(),

          // 6.2
          heading("6.2 Mouthpiece Regulator System"),
          body("Referring to FIGS. 1 and 3, the mouthpiece regulator system comprises a second-stage demand regulator (28), a flexible corrugated breathing tube (26), and an orthodontic-style mouthpiece (24)."),
          emptyLine(),
          body("The second-stage demand regulator (28) is a balanced diaphragm type regulator configured to deliver air on demand in response to the user's inhalation effort. The regulator body is constructed from glass-reinforced nylon (PA66-GF30) for corrosion resistance and lightweight performance. Internal components, including the demand lever (42), valve seat (44), and associated springs, are constructed from chrome-plated brass or marine-grade stainless steel (316L)."),
          emptyLine(),
          body("The regulator operates on the balanced downstream principle. When the user inhales, reduced pressure in the air flow chamber (54) causes the diaphragm (40) to deflect inward, actuating the demand lever (42), which opens the valve seat (44) to admit air from the intermediate-pressure supply. When the user ceases inhalation, the spring bias returns the diaphragm and lever to the closed position, stopping airflow. This demand-actuated delivery system optimizes air consumption by delivering air only when the user is actively inhaling."),
          emptyLine(),
          body("A purge button (30) is positioned on the front face of the regulator body. When depressed, the purge button manually deflects the diaphragm (40), opening the valve seat (44) and allowing a free flow of air into the breathing chamber. This purge function allows the user to clear water from the regulator housing and breathing tube without inhalation effort."),
          emptyLine(),
          body("The regulator is compatible with standard CGA-346 (yoke) or DIN 300 (G5/8\u2033 thread) first-stage connections via a low-pressure (LP) hose port (46). Operating parameters are as follows:"),
          bullet("Intermediate pressure input: 125\u2013150 PSI (8.5\u201310.3 bar) from first-stage regulator"),
          bullet("Breathing resistance: target less than 1.2 joules per liter at 10-meter depth equivalent"),
          bullet("Maximum operating depth: 10 meters (33 feet) \u2014 intended use range: 1 to 5 meters"),
          bullet("Free-flow rate on purge: minimum 400 liters per minute at surface"),
          emptyLine(),
          body("The flexible corrugated breathing tube (26) connects the LP hose port (46) of the regulator to the tube connector (52) at the mask entry point. The tube is constructed from medical-grade silicone rubber with corrugated walls for flexibility without kinking. The tube length is approximately 30 to 45 centimeters, providing sufficient reach for the user to hold the tank at waist or arm level while wearing the mask on the face. The interior diameter of the tube is approximately 22 millimeters, providing low breathing resistance."),
          emptyLine(),
          body("The mouthpiece (24) is constructed from medical-grade silicone rubber in an orthodontic bite-tab configuration. Upper and lower bite flanges (48) allow the user to grip the mouthpiece with the teeth, while a lip flange (50) creates a comfortable seal against the inner surface of the lips. The mouthpiece is connected to the breathing tube via the tube connector (52) and is positioned within the open area of the mask frame, below the nose pocket (16). The user breathes by inhaling through the mouthpiece and exhaling through the nose (with exhaled air exiting the open lower portion of the mask) or around the mouthpiece."),
          emptyLine(),

          // 6.3
          heading("6.3 Tank Interface"),
          body("Referring to FIGS. 1 and 2, the system is configured to interface with commercially available 0.5-liter aluminum compressed air cylinders (36). These cylinders are widely available from manufacturers including SMACO and DEDEPU, and are typically pre-certified to DOT (Department of Transportation) and/or CE (Conformit\u00E9 Europ\u00E9enne) standards for compressed gas containers."),
          emptyLine(),
          body("The tank (36) connects to a first-stage regulator (32) via standard M18\u00D71.5 thread connection (34) at the tank valve. The first-stage regulator (32) reduces tank pressure from the storage pressure of up to 3,000 PSI (200 bar) to the intermediate pressure of 125\u2013150 PSI required by the second-stage demand regulator (28)."),
          emptyLine(),
          body("A single 0.5-liter tank at 3,000 PSI provides approximately 250 liters of air at surface pressure. At shallow depths (1\u20135 meters) with normal breathing rates of approximately 15\u201320 liters per minute, this provides approximately 5 to 10 minutes of breathing time. Breathing duration varies with depth, water temperature, exertion level, and individual physiology."),
          emptyLine(),
          body("It is expressly noted that the compressed air tank itself is NOT part of the present invention. The tank is a commercially available, independently certified pressure vessel. The present invention relates to the integrated mask, regulator, and breathing tube system that interfaces with such tanks."),
          emptyLine(),

          // 6.4
          heading("6.4 System Integration and Method of Use"),
          body("Referring to FIG. 2, the complete system is used as follows:"),
          emptyLine(),
          body("Step 1: The user dons the mask (10) by placing it over the eyes and nose, pressing the face seal (14) against the skin to establish a watertight seal, and adjusting the head strap (20) for a snug but comfortable fit."),
          emptyLine(),
          body("Step 2: The user places the mouthpiece (24) between the teeth, biting gently on the bite flanges (48) and sealing the lips around the lip flange (50)."),
          emptyLine(),
          body("Step 3: The user opens the valve on the compressed air tank (36), pressurizing the first-stage regulator (32) and LP hose."),
          emptyLine(),
          body("Step 4: The user holds the tank (36) in one hand (or mounts it to an optional body harness) and enters the water."),
          emptyLine(),
          body("Step 5: During submersion, the user inhales through the mouthpiece (24). The demand regulator (28) delivers air on each inhalation. The user exhales through the nose; exhaled air exits through the open lower area of the mask frame and rises as bubbles (38) to the surface."),
          emptyLine(),
          body("Step 6: When the air supply is depleted, the user surfaces normally. The mask provides clear vision during ascent. The user can continue to breathe naturally through the nose once at the surface with the lower mask area above water."),
          emptyLine(),
          body("The open-mask architecture provides a critical safety advantage: in the event of regulator malfunction or air depletion, the user can immediately breathe normally through the nose (at surface) or hold breath and ascend safely from shallow depth. There is no sealed airspace trapping the user's face, as would be the case with a full-face sealed mask."),
          emptyLine(),

          // 7. DRAWINGS
          heading("7. BRIEF DESCRIPTION OF THE DRAWINGS"),
          body("FIG. 1 is an exploded isometric view showing all major components of the portable open-mask underwater breathing system in spatial alignment, including the mask assembly (10), head strap (20), mouthpiece (24), breathing tube (26), second-stage regulator (28), first-stage regulator (32), and compressed air tank (36)."),
          emptyLine(),
          body("FIG. 2 is a side profile view of the complete system as worn on a user's head, showing the mask (10) on the face, the breathing tube (26) routing from the regulator assembly to the mouthpiece (24), and the tank (36) held in the user's hand, with exhaled bubbles (38) shown exiting the open mask area."),
          emptyLine(),
          body("FIG. 3 is a cross-section detail view of the mouthpiece regulator assembly, showing the diaphragm (40), demand lever (42), valve seat (44), purge button (30), LP hose port (46), mouthpiece (24) with bite flanges (48) and lip flange (50), tube connector (52), and air flow chamber (54)."),
          emptyLine(),
          body("FIG. 4 is a front view of the mask assembly showing the dual-lens configuration (12), face seal perimeter (14), nose pocket (16), strap attachment points (18), breathing tube entry point (56), and nose bridge (58)."),
          emptyLine(),

          // 8. ABSTRACT
          heading("8. ABSTRACT"),
          body("A portable underwater breathing system comprising an open-frame dive mask with a dual-lens tempered glass visor and silicone face seal, integrated with a mouthpiece-style second-stage demand regulator via a flexible breathing tube. The system interfaces with commercially available 0.5-liter compressed air mini tanks to provide short-duration underwater breathing capability for recreational shallow-water use without requiring dive certification. The open-mask design allows a natural exhale path while the demand regulator delivers air only on inhalation, optimizing air consumption. Total system weight excluding tank is under 900 grams."),
          emptyLine(),
          emptyLine(),

          // INVENTOR
          heading("INVENTOR"),
          body("Samuel D\u2019Agostino"),
          body("Miami, Florida, United States"),
          emptyLine(),

          // DISCLAIMER
          heading("DISCLAIMER"),
          body("This provisional patent application establishes a filing date and priority for the described invention. It does not constitute a granted patent. A corresponding non-provisional utility patent application must be filed within twelve (12) months of this provisional filing date to preserve the priority date.", { italics: true }),
          emptyLine(),

          // PAGE BREAK before figures
          new Paragraph({ children: [new PageBreak()] }),

          // FIGURES PAGES
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
            children: [new TextRun({ text: "DRAWINGS", font: FONT, size: HEADING_SIZE, bold: true })],
          }),
          emptyLine(),

          // FIG 1
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new ImageRun({
                data: fig1,
                transformation: { width: 550, height: 688 },
                
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 480 },
            children: [new TextRun({ text: "FIG. 1 \u2014 Exploded Isometric View of AquaPulse System", font: FONT, size: BODY_SIZE, bold: true })],
          }),

          new Paragraph({ children: [new PageBreak()] }),

          // FIG 2
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new ImageRun({
                data: fig2,
                transformation: { width: 550, height: 619 },
                
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 480 },
            children: [new TextRun({ text: "FIG. 2 \u2014 Side Profile View (System Worn by User)", font: FONT, size: BODY_SIZE, bold: true })],
          }),

          new Paragraph({ children: [new PageBreak()] }),

          // FIG 3
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new ImageRun({
                data: fig3,
                transformation: { width: 550, height: 481 },
                
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 480 },
            children: [new TextRun({ text: "FIG. 3 \u2014 Cross-Section Detail of Mouthpiece Regulator Assembly", font: FONT, size: BODY_SIZE, bold: true })],
          }),

          new Paragraph({ children: [new PageBreak()] }),

          // FIG 4
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new ImageRun({
                data: fig4,
                transformation: { width: 550, height: 550 },
                
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 240 },
            children: [new TextRun({ text: "FIG. 4 \u2014 Front View of Mask Assembly", font: FONT, size: BODY_SIZE, bold: true })],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = "/home/user/Mare/patents/MARE_Provisional_Patent_1_AquaPulse.docx";
  fs.writeFileSync(outputPath, buffer);
  console.log("Patent 1 (AquaPulse) generated:", outputPath);
  console.log("File size:", (buffer.length / 1024).toFixed(1), "KB");
}

buildPatent1().catch(err => { console.error("Error:", err); process.exit(1); });
