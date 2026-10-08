import { Link } from 'react-router-dom';
import { Reveal } from '../../components/Reveal';

const statements = [
  {
    text: 'Humanizing People',
    def: 'People are the heart of every successful organization.',
  },
  {
    text: 'Strengthening Organizations',
    def: 'Strong organizations are built through great leadership, culture, and systems.',
  },
  {
    text: 'Creating Impact',
    def: 'Every transformation must deliver measurable value and lasting results.',
  },
];

/** Philosophy as a typographic statement — oversized lines, staggered clip
 *  reveals, definitions set small to the side. No boxes. */
export function Philosophy() {
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our Philosophy</p>
        </Reveal>
        <h2 id="philosophy-title" className="philo-statement">
          {statements.map((item, i) => (
            <span className="philo-line" key={item.text}>
              <Reveal variant="clip" delay={i * 0.1}>
                <span className="philo-text">{item.text}</span>
              </Reveal>
              <Reveal delay={0.15 + i * 0.1}>
                <span className="philo-def">{item.def}</span>
              </Reveal>
            </span>
          ))}
        </h2>
        <Reveal delay={0.2}>
          <p className="philo-foot">
            One philosophy. One commitment. One TRIVENT.{' '}
            <Link className="back-link" to="/about" style={{ display: 'inline-flex' }}>
              How it shapes our vision →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
