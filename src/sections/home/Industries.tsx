import { industries } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function Industries() {
  return (
    <section className="section section--tight" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead
          index="06"
          eyebrow="Industries We Serve"
          title="Every industry has unique challenges. Every organization shares the same foundation: people."
        />
        <div className="ind-grid">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={(i % 4) * 0.06}>
              <article className="ind-item">
                <span className="ind-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 id={i === 0 ? 'industries-title' : undefined}>{industry.name}</h3>
                <p>{industry.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
