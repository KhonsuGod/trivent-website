import { Award } from 'lucide-react';
import { founder } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';

export function Founder() {
  return (
    <>
      <Seo
        title="Founder — Chandra B. Zain, S.T., M.M., CHRO | TRIVENT"
        description="Chandra Budiman Zain, Founder & Principal Consultant of TRIVENT — HR and business transformation practitioner, expertise, education, and professional certifications."
        path="/founder"
        includePerson
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            index="P"
            eyebrow="Founder & Principal Consultant"
            title="Leading transformation through experience and integrity."
            lede="A senior principal-consultant profile: professional biography, areas of expertise, education, and credentials — with field credibility shown selectively."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-labelledby="founder-name">
        <div className="container">
          <div className="founder-split">
            <Reveal className="founder-photo">
              <figure className="frame-photo frame-photo--portrait" style={{ margin: 0 }}>
                <img
                  src="/assets/founder-principal-consultant.webp"
                  alt="Studio portrait of Chandra B. Zain, Founder and Principal Consultant of TRIVENT Business Solutions"
                  width={900}
                  height={1020}
                />
                <figcaption className="photo-caption">
                  <strong>Principal</strong>
                  {founder.displayName}
                </figcaption>
              </figure>
              <figure className="frame-photo" style={{ margin: '20px 0 0' }}>
                <img
                  src="/assets/founder-in-practice.webp"
                  alt="The Founder facilitating a training session in the field"
                  width={1000}
                  height={625}
                  loading="lazy"
                />
                <figcaption className="photo-caption">
                  <strong>In Practice</strong>
                  Facilitation in the field.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal className="founder-body" delay={0.08}>
              <p className="role">{founder.role}</p>
              <h2 id="founder-name">{founder.displayName}</h2>
              <span className="founder-badge">{founder.experienceBadge}</span>
              <p className="founder-summary">{founder.summary}</p>
              <p className="founder-summary">{founder.trackRecord}</p>
              <p className="founder-summary">{founder.foundingNote}</p>

              <blockquote className="founder-quote">“{founder.belief}”</blockquote>

              <div className="detail-rows">
                <div>
                  <h4>Areas of Expertise</h4>
                  <ul className="cred-chips" style={{ marginTop: 12 }}>
                    {founder.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Education</h4>
                  <ul>
                    {founder.education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>
                    <Award aria-hidden="true" style={{ width: 15, height: 15, verticalAlign: -2 }} /> Professional
                    Certifications
                  </h4>
                  <ul>
                    {founder.certifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 10, fontSize: '0.85rem' }}>
                    The Certified Human Resources Officer (CHRO) designation is the
                    principal credential highlight. Certificates are listed by name;
                    identifiers and codes are intentionally not published.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
