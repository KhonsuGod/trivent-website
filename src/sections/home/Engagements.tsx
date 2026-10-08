import { ProfessionalEngagements } from '../../components/ProfessionalEngagements';
import { Reveal } from '../../components/Reveal';

export function Engagements() {
  return (
    <section className="section section--tight" aria-labelledby="engagements-title">
      <div className="container">
        <div className="index-head">
          <Reveal>
            <p className="eyebrow">Professional Engagements</p>
            <h2 id="engagements-title">
              Selected professional <span className="accent-word">engagements.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="sec-lede">
              Organizations connected to the Founder’s professional engagements
              throughout his career — consulting, leadership development,
              organizational transformation, corporate training, and strategic HR
              initiatives.
            </p>
          </Reveal>
        </div>
        <ProfessionalEngagements />
      </div>
    </section>
  );
}
