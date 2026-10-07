import { Check } from 'lucide-react';
import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

const scope = [
  'Leadership Development Program',
  'Employee Development Program',
  'Facilitated training sessions with participant interaction',
  'Appreciation plaque — partnership and engagement evidence',
];

export function DeltaMate() {
  return (
    <section className="section" aria-labelledby="delta-title">
      <div className="container">
        <SectionHead
          index="05"
          eyebrow="Selected Engagement · Project Highlight"
          title="PT Delta Mate — leadership in practice."
          lede="One of the most complete evidence sets available: training documentation, participant interaction, and a partnership plaque. Presented as project evidence — not a case study, not a testimonial."
        />
        <Reveal>
          <div className="delta-panel">
            <div className="delta-media">
              <figure className="frame-photo" style={{ margin: 0 }}>
                <img
                  src="/assets/delta-mate-training.webp"
                  alt="Leadership training session at the PT Delta Mate program, facilitated by TRIVENT"
                  width={1200}
                  height={750}
                  loading="lazy"
                />
                <figcaption className="photo-caption">
                  <strong>Session</strong>
                  Facilitated training at the PT Delta Mate program.
                </figcaption>
              </figure>
              <figure className="delta-evidence" style={{ margin: 0 }}>
                <img
                  src="/assets/delta-mate-engagement-evidence.webp"
                  alt="A PT Delta Mate representative holding the appreciation plaque for the strategic partnership with TRIVENT"
                  width={850}
                  height={1020}
                  loading="lazy"
                />
                <figcaption>Partnership plaque — engagement evidence, not a testimonial.</figcaption>
              </figure>
            </div>
            <div className="delta-body">
              <p className="eyebrow">Engagement scope</p>
              <h3 id="delta-title">Leadership Development &amp; Employee Development Program</h3>
              <ul className="delta-scope">
                {scope.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="evidence-note">
                The Certificate of Completion from this program is project and program
                evidence. The appreciation plaque documents the partnership. No
                outcomes are claimed beyond what the material supports.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
