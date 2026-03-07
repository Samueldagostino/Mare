#!/usr/bin/env node
/**
 * Rebuild patent .docx files by replacing images with improved SVG-based PNGs.
 * This script:
 * 1. Reads improved SVGs from patents/svgs/
 * 2. Converts each to PNG via sharp
 * 3. Unzips each .docx, replaces images in order, re-zips
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

const PATENTS_DIR = path.join(__dirname);
const SVGS_DIR = path.join(PATENTS_DIR, 'svgs');

async function svgToPng(svgPath, width = 1600) {
  const svgBuf = fs.readFileSync(svgPath);
  return await sharp(svgBuf).resize(width).png().toBuffer();
}

async function replaceDocxImages(docxPath, pngBuffers) {
  const tmpDir = path.join('/tmp', 'docx_rebuild_' + path.basename(docxPath, '.docx'));

  // Clean up if exists
  if (fs.existsSync(tmpDir)) {
    execSync(`rm -rf "${tmpDir}"`);
  }
  fs.mkdirSync(tmpDir, { recursive: true });

  // Copy docx and unzip
  const zipPath = path.join(tmpDir, 'doc.zip');
  fs.copyFileSync(docxPath, zipPath);
  execSync(`cd "${tmpDir}" && unzip -o doc.zip -d extracted > /dev/null`);

  // Read the relationships file to get image file mapping
  const relsPath = path.join(tmpDir, 'extracted', 'word', '_rels', 'document.xml.rels');
  const relsContent = fs.readFileSync(relsPath, 'utf-8');

  // Find all image relationships in order (rId9, rId10, etc.)
  const imageRels = [];
  const relRegex = /Relationship Id="(rId\d+)"[^>]*Type="[^"]*image"[^>]*Target="([^"]+)"/g;
  let match;
  while ((match = relRegex.exec(relsContent)) !== null) {
    imageRels.push({ id: match[1], target: match[2] });
  }

  // Sort by rId number
  imageRels.sort((a, b) => {
    const numA = parseInt(a.id.replace('rId', ''));
    const numB = parseInt(b.id.replace('rId', ''));
    return numA - numB;
  });

  console.log(`  Found ${imageRels.length} images in ${path.basename(docxPath)}`);

  if (imageRels.length !== pngBuffers.length) {
    throw new Error(`Image count mismatch: ${imageRels.length} in docx vs ${pngBuffers.length} provided`);
  }

  // Replace each image file
  for (let i = 0; i < imageRels.length; i++) {
    const imgPath = path.join(tmpDir, 'extracted', 'word', imageRels[i].target);
    fs.writeFileSync(imgPath, pngBuffers[i]);
    console.log(`  Replaced ${imageRels[i].id} → ${imageRels[i].target}`);
  }

  // Re-zip as docx
  const outputPath = docxPath; // Overwrite original
  execSync(`cd "${tmpDir}/extracted" && zip -r "${outputPath}" . > /dev/null`);

  // Cleanup
  execSync(`rm -rf "${tmpDir}"`);

  console.log(`  ✓ Rebuilt ${path.basename(docxPath)}`);
}

async function main() {
  console.log('=== Rebuilding patent drawings ===\n');

  // Patent 1: AquaPulse (4 figures)
  console.log('Patent 1: AquaPulse');
  const ap_pngs = await Promise.all([
    svgToPng(path.join(SVGS_DIR, 'fig1_aquapulse.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig2_aquapulse.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig3_aquapulse.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig4_aquapulse.svg')),
  ]);
  await replaceDocxImages(
    path.join(PATENTS_DIR, 'MARE_Provisional_Patent_1_AquaPulse.docx'),
    ap_pngs
  );

  // Patent 2: HydroHarness (5 figures)
  console.log('\nPatent 2: HydroHarness');
  const hh_pngs = await Promise.all([
    svgToPng(path.join(SVGS_DIR, 'fig1_hydroharness.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig2_hydroharness.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig3_hydroharness.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig4_hydroharness.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig5_hydroharness.svg')),
  ]);
  await replaceDocxImages(
    path.join(PATENTS_DIR, 'MARE_Provisional_Patent_2_HydroHarness.docx'),
    hh_pngs
  );

  // Patent 3: DRIFT (8 figures)
  console.log('\nPatent 3: DRIFT');
  const dr_pngs = await Promise.all([
    svgToPng(path.join(SVGS_DIR, 'fig1_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig2_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig3_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig4_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig5_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig6_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig7_drift.svg')),
    svgToPng(path.join(SVGS_DIR, 'fig8_drift.svg')),
  ]);
  await replaceDocxImages(
    path.join(PATENTS_DIR, 'MARE_Provisional_Patent_3_DRIFT.docx'),
    dr_pngs
  );

  // Also copy the improved SVGs to the main patents directory (replacing old ones)
  console.log('\nCopying improved SVGs to patents directory...');
  const svgFiles = fs.readdirSync(SVGS_DIR).filter(f => f.endsWith('.svg'));
  for (const f of svgFiles) {
    fs.copyFileSync(path.join(SVGS_DIR, f), path.join(PATENTS_DIR, f));
  }

  console.log('\n=== All patent drawings rebuilt successfully ===');
}

main().catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
