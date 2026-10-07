import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = '/home/zazouim/TRIVENT-WEBSITE-PROJECT'
const curated = path.join(root, '01-ASSET-CURATION')
const destination = path.join(root, '03-CODEX-WORKSPACE/trivent-web/public/assets')

const images: Array<[source: string, output: string, width: number]> = [
  ['02-HERO/desktop-landscape/1787798879559.jpg', 'hero-facilitation-desktop.webp', 1800],
  ['02-HERO/mobile-portrait/1787797157939.jpg', 'hero-facilitation-mobile.webp', 900],
  ['03-FOUNDER/portrait/chandra.jpg', 'founder-principal-consultant.webp', 900],
  ['03-FOUNDER/in-action/1787798519400.jpg', 'founder-in-practice.webp', 1000],
  ['04-TRAINING-DOCUMENTATION/participant-interaction/1787798199563.jpg', 'training-participant-interaction.webp', 1200],
  ['04-TRAINING-DOCUMENTATION/landscape/1787797905531.jpg', 'training-facilitation.webp', 1200],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/1787798519260.jpg', 'delta-mate-training.webp', 1200],
  ['05-SELECTED-ENGAGEMENTS/delta-mate/WhatsApp Image 2026-09-03 at 11.36.47.jpeg', 'delta-mate-engagement-evidence.webp', 850],
]

await mkdir(destination, { recursive: true })
for (const [source, output, width] of images) {
  await sharp(path.join(curated, source)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).withMetadata({}).toFile(path.join(destination, output))
}
await copyFile(path.join(curated, '01-BRAND/01-TRIVENT-LOGO/trivent-logo-transparent.png'), path.join(destination, 'trivent-logo.png'))
await copyFile(path.join(curated, '01-BRAND/03-TRIVENT-BRAND-ASSETS/favicon.svg'), path.join(destination, 'trivent-favicon.svg'))
