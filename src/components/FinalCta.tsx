import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../data/company';
import { Reveal } from './Reveal';

/** Official closing anchor, reused across routes. */
export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-panel">
            <div>
              <p className="eyebrow" style={{ color: '#f0d47c' }}>
                Start Here
              </p>
              <h2 id="final-cta-title" className="cta-title" style={{ marginTop: 14 }}>
                {company.closingLine}
              </h2>
              <p className="cta-spirit">{company.closingSpirit}</p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-gold" to="/contact">
                Start a Conversation <ArrowUpRight aria-hidden="true" />
              </Link>
              <a
                className="btn btn-ghost"
                href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent('Halo TRIVENT Business Solutions, saya ingin memulai percakapan transformasi.')}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" /> WhatsApp Direct
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
