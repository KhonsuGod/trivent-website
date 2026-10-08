import { industries } from '../../data/company';
import { Reveal } from '../../components/Reveal';

/** Industries as a typographic index — oversized names, quiet descriptions.
 *  No boxes, no pills. */
export function Industries() {
  return (
    <section className="section section--tight" aria-labelledby="industries-title">
      <div className="container">
        <div className="index-head">
          <Reveal>
            <p className="eyebrow">Industries We Serve</p>
            <h2 id="industries-title">
              Different challenges.
              <br />
              <span className="accent-word">Same foundation: people.</span>
            </h2>
          </Reveal>
        </div>
        <ol className="ind-index">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.02}>
              <li className="ind-index-row">
                <span className="ind-index-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.copy}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
