import { processSteps } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { ImageReveal, Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';
import { SolutionExplorer } from '../components/SolutionExplorer';

export function Solutions() {
  return (
    <>
      <Seo
        title="Solutions | Consulting, Learning, Assessment, Transformation — TRIVENT"
        description="TRIVENT's four official solution lines: Consulting Services, Learning & Development, Assessment & Certification, and Business Transformation — with full service lists."
        path="/solutions"
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            level={1}
            index="S"
            eyebrow="Our Solutions"
            title="Integrated human & business solutions."
            lede="We don't just solve problems. We build sustainable solutions that transform people and organizations. Select any line — the detail and supporting photography update alongside it."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-label="Solution explorer">
        <div className="container">
          <Reveal>
            <SolutionExplorer />
          </Reveal>
          <div className="two-col" style={{ marginTop: 48 }}>
            <Reveal>
              <ImageReveal
                src="/assets/training-facilitation.webp"
                alt="TRIVENT training session in progress, supporting the solutions delivered to organizations"
                width={1200}
                height={675}
                kicker="Delivery"
                caption="Solutions delivered through live facilitation and implementation support."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">How delivery works</p>
              <h2 style={{ marginTop: 14, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                Listen. Analyze. Design. Implement. Evaluate. Improve.
              </h2>
              <ol className="check-list" style={{ listStyle: 'decimal', paddingLeft: 22 }}>
                {processSteps.map((step) => (
                  <li key={step} style={{ display: 'list-item' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
