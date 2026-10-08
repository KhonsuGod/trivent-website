import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = '/home/zazouim/TRIVENT-WEBSITE-PROJECT'
const curated = path.join(root, '01-ASSET-CURATION')
const destination = path.join(root, '03-CODEX-WORKSPACE/trivent-web/public/assets')
const logosDestination = path.join(destination, 'logos')

// NOTE: no .withMetadata() anywhere — production derivatives must ship
// with zero EXIF/GPS/camera metadata. Sharp strips metadata by default
// when withMetadata() is never called.
const images: Array<[source: string, output: string, width: number]> = [
  // Hero (art-directed desktop / mobile variants)
  ['02-HERO/desktop-landscape/founder-speaking-01.jpg', 'hero-team-building-desktop.webp', 1800],
  ['02-HERO/desktop-landscape/1787798879559.jpg', 'hero-facilitation-desktop.webp', 1800],
  ['02-HERO/mobile-portrait/1787797157939.jpg', 'hero-facilitation-mobile.webp', 900],
  // Founder
  ['03-FOUNDER/portrait/chandra.jpg', 'founder-principal-consultant.webp', 900],
  ['03-FOUNDER/in-action/1787798519400.jpg', 'founder-in-practice.webp', 1000],
  ['03-FOUNDER/in-action/1787798519603.jpg', 'founder-coaching-session.webp', 1000],
  // Training documentation pool
  ['04-TRAINING-DOCUMENTATION/participant-interaction/1787798199563.jpg', 'training-participant-interaction.webp', 1200],
  ['04-TRAINING-DOCUMENTATION/participant-interaction/1787798199612.jpg', 'training-group-discussion.webp', 1200],
  ['04-TRAINING-DOCUMENTATION/landscape/1787797905531.jpg', 'training-facilitation.webp', 1200],
  ['04-TRAINING-DOCUMENTATION/landscape/1787797905545.jpg', 'training-classroom-wide.webp', 1400],
  ['04-TRAINING-DOCUMENTATION/portrait/1787797905705.jpg', 'training-small-group.webp', 800],
  // Delta Mate selected engagement evidence set
  ['05-SELECTED-ENGAGEMENTS/delta-mate/1787798519260.jpg', 'delta-mate-training.webp', 1200],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/1787798879225.jpg', 'delta-mate-group-photo.webp', 1200],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/WhatsApp Image 2026-09-03 at 11.36.47.jpeg', 'delta-mate-engagement-evidence.webp', 850],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/WhatsApp Image 2026-08-29 at 20.01.57.jpeg', 'delta-mate-plaque.webp', 800],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/Teks paragraf Anda.png', 'delta-mate-certificate.webp', 900],
  ['04-TRAINING-DOCUMENTATION/participant-interaction/1787798199647.jpg', 'delta-mate-discussion.webp', 1000],
]

const logos: Array<[source: string, output: string, width: number]> = [
  ['PT DELTA MATE.png', 'logo-delta-mate.webp', 480],
  ['PT DRAGON PACK.png', 'logo-dragon-pack.webp', 500],
  ['PT GUCCITEX.png', 'logo-guccitex.webp', 440],
  ['PT Trio Rasa Mas.png', 'logo-trio-rasa-mas.webp', 500],
  ['PT-Pan-Brothers-Tbk.jpg', 'logo-pan-brothers.webp', 500],
]

await mkdir(destination, { recursive: true })
await mkdir(logosDestination, { recursive: true })

for (const [source, output, width] of images) {
  await sharp(path.join(curated, source))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(path.join(destination, output))
}

for (const [source, output, width] of logos) {
  await sharp(path.join(curated, '06-PROFESSIONAL-ENGAGEMENT-LOGOS', source))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 88, effort: 5 })
    .toFile(path.join(logosDestination, output))
}

await copyFile(path.join(curated, '01-BRAND/01-TRIVENT-LOGO/trivent-logo-transparent.png'), path.join(destination, 'trivent-logo.png'))
await copyFile(path.join(curated, '01-BRAND/03-TRIVENT-BRAND-ASSETS/favicon.svg'), path.join(destination, 'trivent-favicon.svg'))

console.log(`processed ${images.length} images + ${logos.length} logos — metadata stripped`)
