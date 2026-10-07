import { engagementDisclaimer, engagements } from '../../data/company';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

export function Engagements() {
  return (
    <section className="section section--tight" aria-labelledby="engagements-title">
      <div className="container">
        <SectionHead
          index="08"
          eyebrow="Professional Engagements"
          title="Selected professional engagements."
          lede="Organizations connected to the Founder's professional engagements throughout his career — consulting, leadership development, organizational transformation, corporate training, and strategic HR initiatives."
        />
        <Reveal>
          <div className="eng-list">
            {engagements.map((engagement) => (
              <div className="eng-row" key={engagement.organization}>
                <span className="eng-org" id={engagement.organization === engagements[0].organization ? 'engagements-title' : undefined}>
                  {engagement.organization}
                </span>
                <span className="eng-area">{engagement.area}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="disclaimer">{engagementDisclaimer} We value every partnership and maintain the confidentiality of each client’s strategic information.</p>
        </Reveal>
      </div>
    </section>
  );
}
