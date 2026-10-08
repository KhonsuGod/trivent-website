import { Link } from 'react-router-dom';
import { company, companyValues, missions, vision, vision2030 } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';

export function About() {
  return (
    <>
      <Seo
        title="About TRIVENT | Human & Business Transformation Company"
        description="About PT TRIVENT SOLUSI BISNIS — positioning, philosophy, vision, mission, TRIVENT values, and the 2030 vision. Bandung Barat, Indonesia."
        path="/about"
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            level={1}
            index="A"
            eyebrow="About TRIVENT"
            title="A Human & Business Transformation Company."
            lede={`${company.legalName} (${company.brandName}) is a consulting firm dedicated to integrating people development with organizational transformation — ${company.tagline.toLowerCase()}.`}
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-labelledby="about-positioning">
        <div className="container two-col">
          <Reveal>
            <p className="eyebrow">Positioning</p>
            <h2 id="about-positioning" style={{ marginTop: 14, fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
              Sustainable growth happens when business strategy evolves in harmony with the growth of people.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ color: 'var(--text-muted)' }}>
              TRIVENT was founded on the belief that an organization’s success is not
              defined solely by business strategies, advanced technologies, or
              operational systems — but by the quality of the people who bring those
              elements to life.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Through practical, experience-driven, and results-oriented solutions,
              TRIVENT commits to becoming a trusted strategic partner for
              organizations seeking a strong workplace culture, effective leaders,
              optimized human capital, and sustainable business performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section tone-navy" aria-labelledby="about-vision">
        <div className="container">
          <SectionHead index="B" eyebrow="Vision & Mission" title="Where TRIVENT is heading." />
          <div className="two-col">
            <Reveal>
              <div className="frame" style={{ background: 'rgba(243,238,225,0.04)' }}>
                <span className="frame-label">Vision</span>
                <p id="about-vision" style={{ fontSize: '1.08rem', lineHeight: 1.7 }}>{vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="frame" style={{ background: 'rgba(243,238,225,0.04)' }}>
                <span className="frame-label">Mission · 05</span>
                <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 12, color: 'var(--text-muted)' }}>
                  {missions.map((mission) => (
                    <li key={mission}>{mission}</li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-values">
        <div className="container">
          <SectionHead
            index="C"
            eyebrow="Core Values"
            title="The values that define who we are."
            lede="Our values are not just words. They are principles that shape every decision, every partnership, and every transformation we deliver."
          />
          <div className="values-grid">
            <Reveal className="value-block value-block--lead">
              <span className="value-letter" aria-hidden="true">
                07
              </span>
              <div>
                <h3 id="about-values">TRIVENT, spelled out</h3>
                <p>Seven letters, seven working principles — in the company’s official order.</p>
              </div>
              <div>
                <p>
                  <strong>Humanizing People. Strengthening Organizations. Creating Impact.</strong>
                </p>
              </div>
            </Reveal>
            {companyValues.map((value, i) => (
              <Reveal key={value.letter} delay={(i % 2) * 0.06}>
                <article className="value-block">
                  <span className="value-letter" aria-hidden="true">
                    {value.letter}
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>
                      {value.en}
                      <span className="value-id" lang="id">
                        {value.id}
                      </span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tone-ivory" aria-labelledby="about-2030">
        <div className="container two-col">
          <Reveal>
            <p className="eyebrow">2030 Vision</p>
            <h2 id="about-2030" style={{ marginTop: 14, fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
              One of the most trusted partners in transforming people and organizations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ color: 'var(--text-muted)' }}>{vision2030}</p>
            <p style={{ marginTop: 18 }}>
              <Link className="btn btn-navy" to="/solutions">
                See what we do
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="about-corporate">
        <div className="container">
          <Reveal>
            <div className="frame">
              <span className="frame-label">Corporate Profile</span>
              <div className="two-col">
                <div>
                  <h2 id="about-corporate" style={{ fontSize: '1.4rem' }}>{company.legalName}</h2>
                  <p style={{ color: 'var(--text-muted)', marginTop: 10 }}>
                    Established {company.established} · {company.location}
                    <br />
                    {company.ahu}
                    <br />
                    KBLI {company.kbli.join(' · ')}
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', letterSpacing: '0.14em' }}>CONTACT</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: 10 }}>
                    {company.website} · {company.email} · {company.whatsappDisplay}
                    <br />
                    LinkedIn: {company.linkedinLabel}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
