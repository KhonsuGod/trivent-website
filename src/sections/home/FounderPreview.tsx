import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founder } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function FounderPreview() {
  return (
    <section className="section tone-dark" aria-labelledby="founder-preview-title">
      <div className="container">
        <SectionHead
          index="07"
          eyebrow="Founder & Principal Consultant"
          title="Led by a practitioner, not a persona."
        />
        <div className="founder-split">
          <Reveal className="founder-photo">
            <figure className="frame-photo frame-photo--portrait" style={{ margin: 0 }}>
              <img
                src="/assets/founder-principal-consultant.webp"
                alt="Studio portrait of Chandra B. Zain, Founder and Principal Consultant of TRIVENT Business Solutions"
                width={900}
                height={1020}
                loading="lazy"
              />
              <figcaption className="photo-caption">
                <strong>Principal</strong>
                {founder.displayName}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="founder-body" delay={0.1}>
            <p className="role">{founder.role}</p>
            <h2 id="founder-preview-title">{founder.displayName}</h2>
            <span className="founder-badge">{founder.experienceBadge}</span>
            <p className="founder-summary">{founder.summary}</p>
            <ul className="cred-chips" aria-label="Founder credentials">
              {founder.certifications.map((cert) => (
                <li key={cert}>
                  <strong>◆</strong> {cert}
                </li>
              ))}
            </ul>
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
