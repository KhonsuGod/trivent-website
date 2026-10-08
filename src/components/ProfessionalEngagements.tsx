import { engagementDisclaimer, engagementLogos, engagements } from '../data/company';
import { Reveal } from './Reveal';

/** Restrained editorial treatment: supplied organization marks in uniform
 *  cells, engagement rows, and the accurate scope disclaimer. Never labeled
 *  as direct clients. */
export function ProfessionalEngagements() {
  return (
    <div className="eng-block">
      <Reveal>
        <ul className="eng-logos" aria-label="Supplied organization marks from the Founder's professional engagements">
          {engagementLogos.map((logo) => (
            <li key={logo.file} className="eng-logo-cell">
              <img src={logo.file} alt={`${logo.picturedName} — organization mark as supplied`} width={440} height={220} loading="lazy" />
              <span>{logo.picturedName}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="eng-list">
          {engagements.map((engagement) => (
            <div className="eng-row" key={engagement.organization}>
              <span className="eng-org">{engagement.organization}</span>
              <span className="eng-area">{engagement.area}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="disclaimer">
          {engagementDisclaimer} We value every partnership and maintain the
          confidentiality of each client’s strategic information.
        </p>
      </Reveal>
    </div>
  );
}
