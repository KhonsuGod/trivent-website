import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { Reveal } from '../../components/Reveal';

export function Hero() {
  return (
    <section className="hero hero--stage tone-dark" aria-labelledby="hero-title">
      <div className="hero-stage-media" aria-hidden="false">
        <picture>
          <source media="(max-width: 860px)" srcSet="/assets/hero-facilitation-mobile.webp" />
          <img
            src="/assets/hero-team-building-desktop.webp"
            alt="The TRIVENT Founder leading an interactive team-building exercise, speaking into a microphone while participants take part in the session"
            width={1800}
            height={1013}
            fetchPriority="high"
          />
        </picture>
        <p className="hero-stage-caption">Live facilitation — Leadership Development Program</p>
      </div>

      <div className="container hero-stage-copy">
        <Reveal>
          <p className="hero-kicker">
            <span className="k-rule" aria-hidden="true" />
            {company.positioning} · Est. {company.established}
          </p>
        </Reveal>
        <h1 id="hero-title" className="hero-title hero-title--stage">
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
        <Reveal delay={0.28}>
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

      <div className="container">
        <Reveal delay={0.1} variant="rule">
          <div className="hero-meta hero-meta--stage">
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
