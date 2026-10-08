import { experienceAreas, processSteps } from '../data/company';
import { ImageReveal, Reveal } from '../components/Reveal';

/** Photography-led experience showcase: documentary wide frame, asymmetric
 *  trio, condensed area index, process strip. Shared by Home and Experience. */
export function ExperienceShowcase({ withProcess = true }: { withProcess?: boolean }) {
  return (
    <div className="showcase">
      <Reveal>
        <div className="showcase-lead">
          <ImageReveal
            src="/assets/training-classroom-wide.webp"
            alt="A full classroom of participants following a TRIVENT training session"
            width={1400}
            height={788}
            kicker="Documentary"
            caption="A live session in progress — full room, working material, real facilitation."
          />
          <span className="showcase-label" aria-hidden="true">
            Experience
            <br />
            in Practice
          </span>
        </div>
      </Reveal>

      <div className="showcase-trio">
        <Reveal delay={0.02}>
          <ImageReveal
            src="/assets/training-small-group.webp"
            alt="Participants leaning in during a small-group discussion exercise"
            width={800}
            height={1000}
            kicker="Interaction"
            caption="Small-group discussion — participants working through material together."
          />
        </Reveal>
        <Reveal delay={0.08} className="showcase-trio-offset">
          <ImageReveal
            src="/assets/training-group-discussion.webp"
            alt="Participants exchanging views in a facilitated group discussion"
            width={1200}
            height={675}
            kicker="Dialogue"
            caption="Facilitated dialogue between participants and facilitator."
          />
        </Reveal>
        <Reveal delay={0.14}>
          <ImageReveal
            src="/assets/training-participant-interaction.webp"
            alt="Close interaction between participants during a TRIVENT training session"
            width={1200}
            height={675}
            kicker="Engagement"
            caption="Hands-on engagement — the format behind the outcomes."
          />
        </Reveal>
      </div>

      <div className="showcase-index" role="list" aria-label="Experience areas">
        {experienceAreas.map((area, i) => (
          <Reveal key={area.index} delay={i * 0.04}>
            <article className="showcase-row" role="listitem">
              <span className="showcase-num" aria-hidden="true">
                {area.index}
              </span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.focus}</p>
                <p className="showcase-scope">Scope: {area.scope.join(' · ')}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {withProcess ? (
        <Reveal delay={0.06}>
          <div className="process-strip" role="list" aria-label="TRIVENT delivery process">
            {processSteps.map((step, i) => (
              <div className="step" role="listitem" key={step}>
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </div>
            ))}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
