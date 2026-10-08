import { Award } from 'lucide-react';
import { founder } from '../data/company';
import { FinalCta } from '../components/FinalCta';
import { ImageReveal, Reveal } from '../components/Reveal';
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
            level={1}
            index="P"
            eyebrow="Founder & Principal Consultant"
            title="Experience, integrity, and a passion for developing people."
            lede="A senior principal-consultant profile: biography, areas of expertise, education, and credentials — with field credibility shown through real facilitation."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-labelledby="founder-name">
        <div className="container">
          <div className="founder-split">
            <Reveal className="founder-photo">
              <ImageReveal
                src="/assets/founder-principal-consultant.webp"
                alt="Studio portrait of Chandra B. Zain, Founder and Principal Consultant of TRIVENT Business Solutions"
                width={900}
                height={1020}
                eager
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
              <ImageReveal
                src="/assets/founder-in-practice.webp"
                alt="The Founder facilitating a training session in the field"
                width={1000}
                height={625}
                className="founder-photo-second"
                kicker="Facilitation"
                caption="Facilitation in the field."
              />
            </Reveal>

            <Reveal className="founder-body" delay={0.08}>
              <p className="role">{founder.role}</p>
              <h2 id="founder-name" className="founder-name">
                Chandra Budiman Zain,
                <br />
                S.T., M.M., CHRO
              </h2>
              <span className="founder-badge">{founder.experienceBadge}</span>
              <p className="founder-summary">{founder.summary}</p>
              <p className="founder-summary">{founder.trackRecord}</p>
              <p className="founder-summary">{founder.foundingNote}</p>

              <blockquote className="founder-quote">“{founder.belief}”</blockquote>

              <div className="cred-highlight cred-highlight--page" aria-label="Principal credential">
                <span className="cred-highlight-mark" aria-hidden="true">
                  CHRO
                </span>
                <p>
                  <strong>Certified Human Resources Officer</strong> — the principal
                  credential behind TRIVENT’s HR, organizational, and leadership
                  practice, alongside Professional HR Practitioner and Leadership
                  Development Facilitator designations.
                </p>
              </div>

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
                    Certificates are listed by name from the official company
                    profile and credential records; identifiers and codes are not
                    published.
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
