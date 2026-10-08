import { Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { company } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import { FinalCta } from '../components/FinalCta';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';

export function Contact() {
  return (
    <>
      <Seo
        title="Contact — Start a Conversation | TRIVENT"
        description="Contact PT TRIVENT SOLUSI BISNIS — start a conversation, discuss your needs, or request a consultation via WhatsApp or email. Bandung Barat, Indonesia."
        path="/contact"
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            level={1}
            index="C"
            eyebrow="Contact · Start a Conversation"
            title={company.closingLine}
            lede="Whether you are strengthening your Human Resources, developing future leaders, improving organizational performance, or driving business transformation — share your context, and the conversation continues on TRIVENT's official channels."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-label="Contact channels and inquiry form">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)' }}>Direct channels</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: 12 }}>
                Prefer to reach out directly? Use any channel below — no forms, no
                waiting, no backend in between.
              </p>
              <ul className="channel-list">
                <li>
                  <a href={`https://wa.me/${company.whatsappNumber}`} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    <span>
                      {company.whatsappDisplay}
                      <small>Phone / WhatsApp — fastest response</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`}>
                    <Mail aria-hidden="true" />
                    <span>
                      {company.email}
                      <small>Email — for longer briefs and documents</small>
                    </span>
                  </a>
                </li>
                <li>
                  <span className="channel-static">
                    <Linkedin aria-hidden="true" />
                    <span>
                      {company.linkedinLabel}
                      <small>LinkedIn — professional presence</small>
                    </span>
                  </span>
                </li>
                <li>
                  <span style={{ display: 'flex', gap: 14, alignItems: 'center', background: 'var(--surface-secondary)', padding: '16px 20px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <MapPin aria-hidden="true" />
                    <span>
                      {company.location}
                      <small style={{ display: 'block', fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>{company.website}</small>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
