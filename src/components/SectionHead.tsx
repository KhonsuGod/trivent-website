import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

type SectionHeadProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  wide?: boolean;
  backToHome?: boolean;
  /** Page-level heroes render an H1; section headers render H2. */
  level?: 1 | 2;
};

export function SectionHead({ index, eyebrow, title, lede, wide = false, backToHome = false, level = 2 }: SectionHeadProps) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <div className={`section-head${wide ? ' section-head--wide' : ''}`}>
      <Reveal>
        {backToHome ? (
          <Link className="back-link" to="/" style={{ marginBottom: 18 }}>
            <ArrowLeft aria-hidden="true" /> Back to Home
          </Link>
        ) : null}
        <p className="eyebrow">{eyebrow}</p>
        <Heading style={{ marginTop: 14 }}>
          <span className="sec-index" aria-hidden="true" style={{ display: 'block', marginBottom: 6 }}>
            {index}
          </span>
          {title}
        </Heading>
      </Reveal>
      {lede ? (
        <Reveal delay={0.08}>
          <p className="sec-lede">{lede}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
