import { Check } from 'lucide-react';
import { ImageReveal, Reveal } from '../../components/Reveal';

const scope = [
  'Leadership Development Program',
  'Employee Development Program',
  'Facilitated sessions with participant interaction',
  'Program Certificate of Completion — Leadership Development Program 2026',
];

export function DeltaMate() {
  return (
    <section className="section delta-doc" aria-labelledby="delta-title">
      <div className="container">
        <div className="delta-doc-head">
          <Reveal>
            <p className="eyebrow">Selected Engagement · Project Highlight</p>
            <h2 id="delta-title">
              PT Delta Mate —<br />
              <span className="accent-word">leadership, documented.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-lede">
              Leadership Development &amp; Employee Development Program, delivered
              on site and documented end to end: the room, the participants, the
              discussion, and the partnership it produced.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ImageReveal
            src="/assets/delta-mate-group-photo.webp"
            alt="Program participants and facilitators of the PT Delta Mate Leadership Development Program posing with their certificates"
            width={1200}
            height={675}
            kicker="Cohort"
            caption="The program cohort with certificates of completion."
          />
        </Reveal>

        <div className="delta-doc-grid">
          <Reveal>
            <ImageReveal
              src="/assets/delta-mate-training.webp"
              alt="Facilitated training session at the PT Delta Mate program"
              width={1200}
              height={750}
              kicker="Session"
              caption="Facilitated training at the PT Delta Mate program."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ImageReveal
              src="/assets/delta-mate-discussion.webp"
              alt="Participants in discussion during the PT Delta Mate program"
              width={1000}
              height={625}
              kicker="Discussion"
              caption="Participant discussion during the program."
            />
          </Reveal>
        </div>

        <div className="delta-evidence-row">
          <Reveal className="delta-cert">
            <ImageReveal
              src="/assets/delta-mate-certificate.webp"
              alt="Certificate of Completion for the Leadership Development Program 2026, organized with PT Delta Mate Majalengka"
              width={900}
              height={636}
              kicker="Program Evidence"
              caption="Certificate of Completion — Leadership Development Program 2026."
            />
          </Reveal>
          <div className="delta-evidence-stack">
            <Reveal delay={0.06}>
              <ImageReveal
                src="/assets/delta-mate-plaque.webp"
                alt="Appreciation plaque for the strategic partnership between PT Delta Mate and TRIVENT"
                width={800}
                height={1000}
                kicker="Partnership"
                caption="Appreciation plaque for the strategic partnership."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ImageReveal
                src="/assets/delta-mate-engagement-evidence.webp"
                alt="Founder Chandra B. Zain holding the appreciation plaque from the PT Delta Mate program"
                width={850}
                height={1020}
                kicker="Recognition"
                caption="Chandra B. Zain with the appreciation plaque from the program."
              />
            </Reveal>
          </div>
          <Reveal delay={0.08} className="delta-scope-col">
            <p className="eyebrow">Engagement scope</p>
            <h3>Leadership Development &amp; Employee Development Program</h3>
            <ul className="delta-scope">
              {scope.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="evidence-note">
              The completion certificate records the program delivered; the plaque
              records the partnership. Scope and evidence above come from program
              material — no outcomes beyond it are claimed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
