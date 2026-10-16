import { ImageReveal, Reveal } from '../../components/Reveal';

type HighlightPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  kicker: string;
  caption: string;
};

type Highlight = {
  organization: string;
  program: string;
  scopeNote: string;
  lead: HighlightPhoto;
  support: [HighlightPhoto, HighlightPhoto];
};

const highlights: Highlight[] = [
  {
    organization: 'PT Camiloplas Jaya Makmur',
    program: 'Human Resources Transformation, Leadership Development, KPI System & Organizational Development',
    scopeNote:
      'Scope documented in program material: HR transformation, leadership development, KPI system, and organizational development.',
    lead: {
      src: '/assets/camiloplas-facilitation.webp',
      alt: 'Facilitator presenting to participants seated around the table during the PT Camiloplas Jaya Makmur program',
      width: 1200,
      height: 903,
      kicker: 'Session',
      caption: 'Facilitated session with participants around the table.',
    },
    support: [
      {
        src: '/assets/camiloplas-session.webp',
        alt: 'Presenter leading a material session with projected content at the PT Camiloplas Jaya Makmur program',
        width: 900,
        height: 1196,
        kicker: 'Material',
        caption: 'Material-led session with projected content.',
      },
      {
        src: '/assets/camiloplas-group.webp',
        alt: 'Participants in discussion around the table at the PT Camiloplas Jaya Makmur program',
        width: 1200,
        height: 903,
        kicker: 'Discussion',
        caption: 'Participants working through the material together.',
      },
    ],
  },
  {
    organization: 'PT Trio Rasa Mas',
    program: 'Leadership Development Program',
    scopeNote:
      'Scope documented in program material: leadership development program delivered across production teams.',
    lead: {
      src: '/assets/trio-rasa-mas-briefing.webp',
      alt: 'Outdoor morning briefing with production teams at the PT Trio Rasa Mas facility',
      width: 1200,
      height: 900,
      kicker: 'Field Briefing',
      caption: 'Outdoor briefing with production teams at the facility.',
    },
    support: [
      {
        src: '/assets/trio-rasa-mas-session.webp',
        alt: 'Indoor training session with projected material for teams at PT Trio Rasa Mas',
        width: 1200,
        height: 900,
        kicker: 'Session',
        caption: 'Indoor session with projected material for the shift teams.',
      },
      {
        src: '/assets/trio-rasa-mas-group.webp',
        alt: 'Production teams seated for a session on the PT Trio Rasa Mas factory floor',
        width: 1200,
        height: 900,
        kicker: 'Cohort',
        caption: 'Production teams attending the session on the factory floor.',
      },
    ],
  },
];

export function EngagementHighlights() {
  return (
    <section className="section section--tight" aria-labelledby="more-engagements-title">
      <div className="container">
        <div className="index-head">
          <Reveal>
            <p className="eyebrow">More Selected Engagements</p>
            <h2 id="more-engagements-title">
              Further evidence, <span className="accent-word">from the field.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="sec-lede">
              Two more documented programs from the engagement archive — selected
              frames only, presented with the scope each program covered.
            </p>
          </Reveal>
        </div>

        <div className="highlight-list">
          {highlights.map((item, i) => (
            <article className="highlight-panel" key={item.organization} aria-label={`${item.organization} engagement`}>
              <Reveal>
                <p className="eyebrow">
                  {String(i + 1).padStart(2, '0')} — {item.organization}
                </p>
                <h3>{item.program}</h3>
              </Reveal>
              <Reveal delay={0.05}>
                <ImageReveal
                  src={item.lead.src}
                  alt={item.lead.alt}
                  width={item.lead.width}
                  height={item.lead.height}
                  kicker={item.lead.kicker}
                  caption={item.lead.caption}
                />
              </Reveal>
              <div className="highlight-duo">
                {item.support.map((photo, j) => (
                  <Reveal key={photo.src} delay={0.05 + j * 0.05}>
                    <ImageReveal
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      kicker={photo.kicker}
                      caption={photo.caption}
                    />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.05}>
                <p className="evidence-note">{item.scopeNote}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
