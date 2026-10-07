import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { Reveal } from '../../components/Reveal';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div>
            <Reveal>
              <p className="hero-kicker">
                <span className="k-rule" aria-hidden="true" />
                {company.positioning} · Est. {company.established}
              </p>
            </Reveal>
            <h1 id="hero-title" className="hero-title">
              <span className="line">
                <Reveal variant="clip">Stronger people.</Reveal>
              </span>
              <span className="line">
                <Reveal variant="clip" delay={0.1}>
                  Stronger organizations.
                </Reveal>
              </span>
              <span className="line accent-line">
                <Reveal variant="clip" delay={0.2}>
                  Lasting impact.
                </Reveal>
              </span>
            </h1>
            <Reveal delay={0.25}>
              <p className="hero-lede">
                TRIVENT integrates people development with organizational transformation —
                practical, experience-driven consulting for leadership, culture, human
                capital, and sustainable business performance.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-gold" to="/contact">
                  Start a Conversation <ArrowUpRight aria-hidden="true" />
                </Link>
                <Link className="btn btn-ghost" to="/solutions">
                  Explore Solutions <ArrowDownRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-figure" delay={0.15}>
            <figure className="frame-photo" style={{ margin: 0 }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/assets/hero-facilitation-mobile.webp" />
                <img
                  src="/assets/hero-facilitation-desktop.webp"
                  alt="The TRIVENT Founder facilitating a leadership training session on leadership background, with participants seated and following the material"
                  width={1800}
                  height={1013}
                  fetchPriority="high"
                />
              </picture>
              <figcaption className="photo-caption">
                <strong>Field Evidence</strong>
                Leadership facilitation in practice — real session, real participants.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="hero-meta">
            <div className="meta-cell">
              <strong>Humanizing People</strong>
              <span>People are the heart of every successful organization.</span>
            </div>
            <div className="meta-cell">
              <strong>Strengthening Organizations</strong>
              <span>Built through great leadership, culture, and systems.</span>
            </div>
            <div className="meta-cell">
              <strong>Creating Impact</strong>
              <span>Every transformation must deliver measurable value.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
