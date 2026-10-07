import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutions } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function SolutionsOverview() {
  return (
    <section className="section tone-ivory" aria-labelledby="solutions-overview-title">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow="Integrated Human & Business Solutions"
          title="We don't just solve problems. We build sustainable solutions."
          lede="Four solution lines, one integrated logic: people, learning, evidence, and transformation — designed around your organization, not a template."
        />
        <div className="sol-list">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 0.05}>
              <Link className="sol-row" to="/solutions" aria-label={`${solution.title} — view detail`}>
                <span className="sol-index" aria-hidden="true">
                  {solution.index}
                </span>
                <span className="sol-main">
                  <span className="sol-tag">{solution.tagline}</span>
                  <h3 id={i === 0 ? 'solutions-overview-title' : undefined}>{solution.title}</h3>
                  <p>{solution.summary}</p>
                </span>
                <span className="sol-link">
                  Detail <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
