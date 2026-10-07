import { Link } from 'react-router-dom';
import { engagementDisclaimer, engagements, experienceAreas } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';

export function Experience() {
  return (
    <>
      <Seo
        title="Experience | Selected Engagements — TRIVENT"
        description="TRIVENT experience: leadership development, HR systems, process improvement, organizational development — plus the PT Delta Mate selected engagement and professional engagements."
        path="/experience"
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            index="E"
            eyebrow="Experience"
            title="Turning experience into organizational excellence."
            lede="Our experience is built through real organizational challenges, practical solutions, and measurable improvements. Every organization has different challenges — our role is not to provide generic answers, but to design practical solutions that create lasting impact."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-label="Experience areas in detail">
        <div className="container">
          {experienceAreas.map((area, i) => (
            <Reveal key={area.index} delay={i * 0.03}>
              <article className="xp-block">
                <div className="xp-head">
                  <span className="xp-num" aria-hidden="true">
                    {area.index}
                  </span>
                  <h3>{area.title}</h3>
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

          <Reveal delay={0.06}>
            <figure className="frame-photo" style={{ margin: '40px 0 0' }}>
              <img
                src="/assets/training-participant-interaction.webp"
                alt="Participant interaction during a TRIVENT training session"
                width={1200}
                height={675}
                loading="lazy"
              />
              <figcaption className="photo-caption">
                <strong>Evidence</strong>
                Participant interaction in a facilitated session — experience documented, not staged.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section tone-dark" aria-labelledby="exp-engagements">
        <div className="container">
          <SectionHead
            index="F"
            eyebrow="Professional Engagements"
            title="Selected professional engagements."
          />
          <Reveal>
            <div className="eng-list">
              {engagements.map((engagement) => (
                <div className="eng-row" key={engagement.organization}>
                  <span className="eng-org">{engagement.organization}</span>
                  <span className="eng-area">{engagement.area}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="disclaimer">{engagementDisclaimer}</p>
            <p style={{ marginTop: 22 }}>
              <Link className="back-link" to="/" style={{ color: 'var(--text-muted)' }}>
                See the PT Delta Mate selected engagement on Home →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
