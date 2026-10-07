import { Plus } from 'lucide-react';
import { processSteps, solutions } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';

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
            index="S"
            eyebrow="Our Solutions"
            title="Integrated human & business solutions."
            lede="We don't just solve problems. We build sustainable solutions that transform people and organizations. Open any line to see its full official service list — every item is usable without hover."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-label="Solution details">
        <div className="container">
          <div className="two-col" style={{ marginBottom: 40 }}>
            <Reveal>
              <figure className="frame-photo" style={{ margin: 0 }}>
                <img
                  src="/assets/training-facilitation.webp"
                  alt="TRIVENT training session in progress, supporting the solutions delivered to organizations"
                  width={1200}
                  height={675}
                  loading="lazy"
                />
                <figcaption className="photo-caption">
                  <strong>Delivery</strong>
                  Solutions delivered through real facilitation and implementation support.
                </figcaption>
              </figure>
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

          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 0.03}>
              <details className="sol-detail" open={i === 0} name="trivent-solutions">
                <summary>
                  <span className="sol-index" aria-hidden="true">
                    {solution.index}
                  </span>
                  <span>
                    <span className="sol-tag">{solution.tagline}</span>
                    <h3>{solution.title}</h3>
                  </span>
                  <span className="sol-plus" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <div className="sol-detail-body">
                  <p>{solution.summary}</p>
                  <ul className="sol-items" aria-label={`Services in ${solution.title}`}>
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
