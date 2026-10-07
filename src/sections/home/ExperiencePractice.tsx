import { Link } from 'react-router-dom';
import { experienceAreas, processSteps } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function ExperiencePractice() {
  return (
    <section className="section tone-ivory" aria-labelledby="experience-practice-title">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow="Experience in Practice"
          title="Built through real organizational challenges."
          lede="Practical solutions and measurable improvements — organized in four experience lines, delivered through one disciplined process."
          wide
        />
        <div>
          {experienceAreas.map((area, i) => (
            <Reveal key={area.index} delay={i * 0.04}>
              <article className="xp-block">
                <div className="xp-head">
                  <span className="xp-num" aria-hidden="true">
                    {area.index}
                  </span>
                  <h3 id={i === 0 ? 'experience-practice-title' : undefined}>{area.title}</h3>
                </div>
                <div>
                  <p className="xp-focus">{area.focus}</p>
                  <ul className="scope-tags" aria-label={`Scope of ${area.title}`}>
                    {area.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.08}>
          <div className="process-strip" role="list" aria-label="TRIVENT delivery process">
            {processSteps.map((step, i) => (
              <div className="step" role="listitem" key={step}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ marginTop: 22 }}>
            <Link className="back-link" to="/experience" aria-label="See full experience and selected engagement">
              Full experience &amp; selected engagement →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
