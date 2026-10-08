import { Link } from 'react-router-dom';
import { ExperienceShowcase } from '../ExperienceShowcase';
import { Reveal } from '../../components/Reveal';

export function ExperiencePractice() {
  return (
    <section className="section tone-ivory" aria-labelledby="experience-practice-title">
      <div className="container">
        <div className="showcase-head">
          <Reveal>
            <p className="eyebrow">Experience in Practice</p>
            <h2 id="experience-practice-title">
              The work happens <span className="accent-word">in real rooms</span>, with real
              people.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-lede">
              Built through real organizational challenges, practical solutions, and
              measurable improvements — photographed where it happens.
            </p>
          </Reveal>
        </div>
        <ExperienceShowcase />
        <Reveal delay={0.08}>
          <p style={{ marginTop: 26 }}>
            <Link className="back-link" to="/experience" aria-label="See full experience and professional engagements">
              Full experience &amp; professional engagements →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
