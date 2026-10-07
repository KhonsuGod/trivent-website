import { whyTrivent, workPrinciples } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function WhyTrivent() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow="Why Choose TRIVENT"
          title="More than a consultant — a transformation partner."
          lede="Successful transformation is achieved through practical experience, trusted partnerships, and measurable results."
        />
        <div className="why-grid">
          <div className="why-items">
            {whyTrivent.map((item, i) => (
              <Reveal key={item.index} delay={i * 0.04}>
                <article className="why-item">
                  <span className="why-num" aria-hidden="true">
                    {item.index}
                  </span>
                  <div>
                    <h3 id={i === 0 ? 'why-title' : undefined}>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <aside className="why-side" aria-label="How TRIVENT works">
              <h3>How we work</h3>
              <p>Four principles shape every decision, every partnership, and every transformation delivered.</p>
              <ul className="traits">
                {workPrinciples.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
              <p className="why-quote">
                “We don’t just deliver services. We build trust, develop people, and
                transform organizations.”
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
