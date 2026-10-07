import { SectionHead } from '../../components/SectionHead';
import { Reveal } from '../../components/Reveal';

const blocks = [
  {
    num: 'P—01',
    title: 'Humanizing People',
    copy: 'People are the heart of every successful organization.',
  },
  {
    num: 'P—02',
    title: 'Strengthening Organizations',
    copy: 'Strong organizations are built through great leadership, culture, and systems.',
  },
  {
    num: 'P—03',
    title: 'Creating Impact',
    copy: 'Every transformation must deliver measurable value and lasting results.',
  },
];

export function Philosophy() {
  return (
    <section className="section" aria-labelledby="philosophy-title">
      <div className="container">
        <SectionHead
          index="01"
          eyebrow="Our Philosophy"
          title="One philosophy. One commitment. One TRIVENT."
        />
        <div className="philo-grid">
          {blocks.map((block, i) => (
            <Reveal key={block.num} delay={i * 0.07}>
              <article className="philo-block" aria-label={block.title}>
                <span className="philo-num">{block.num}</span>
                <h3 id={i === 0 ? 'philosophy-title' : undefined}>{block.title}</h3>
                <p>{block.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
