import { Reveal } from '../../components/Reveal';
import { SolutionExplorer } from '../../components/SolutionExplorer';

export function SolutionsOverview() {
  return (
    <section className="section tone-ivory" aria-labelledby="solutions-overview-title">
      <div className="container">
        <div className="sol-overview-head">
          <Reveal>
            <p className="eyebrow">Integrated Human &amp; Business Solutions</p>
            <h2 id="solutions-overview-title">
              Four lines.
              <br />
              <span className="accent-word">One integrated logic.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-lede">
              People, learning, evidence, and transformation — designed around your
              organization, not a template. Select any line to inspect its full
              official service list.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <SolutionExplorer />
        </Reveal>
      </div>
    </section>
  );
}
