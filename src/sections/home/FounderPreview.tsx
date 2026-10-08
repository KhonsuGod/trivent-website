import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founder } from '../../data/company';
import { ImageReveal, Reveal } from '../../components/Reveal';

/** Senior principal profile preview: oversized name, portrait with gold edge,
 *  credential highlight, field image. */
export function FounderPreview() {
  return (
    <section className="section tone-dark founder-preview" aria-labelledby="founder-preview-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Founder &amp; Principal Consultant</p>
        </Reveal>
        <div className="founder-split">
          <Reveal className="founder-photo">
            <ImageReveal
              src="/assets/founder-principal-consultant.webp"
              alt="Studio portrait of Chandra B. Zain, Founder and Principal Consultant of TRIVENT Business Solutions"
              width={900}
              height={1020}
              kicker="Principal"
              caption={founder.displayName}
            />
            <ImageReveal
              src="/assets/founder-coaching-session.webp"
              alt="Chandra B. Zain coaching a participant one-to-one during a session"
              width={1000}
              height={625}
              className="founder-photo-second"
              kicker="In Practice"
              caption="One-to-one coaching during a live session."
            />
          </Reveal>
          <Reveal className="founder-body" delay={0.1}>
            <p className="role">{founder.role}</p>
            <h2 id="founder-preview-title" className="founder-name">
              Chandra B. Zain,
              <br />
              S.T., M.M., CHRO
            </h2>
            <span className="founder-badge">{founder.experienceBadge}</span>
            <p className="founder-summary">{founder.summary}</p>
            <div className="cred-highlight" aria-label="Principal credential">
              <span className="cred-highlight-mark" aria-hidden="true">
                CHRO
              </span>
              <p>
                <strong>Certified Human Resources Officer</strong> — the principal
                credential behind TRIVENT’s HR, organizational, and leadership
                practice.
              </p>
            </div>
            <blockquote className="founder-quote">“{founder.belief}”</blockquote>
            <p style={{ marginTop: 26 }}>
              <Link className="btn btn-gold" to="/founder">
                Full Founder Profile <ArrowUpRight aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
