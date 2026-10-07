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
};

export function SectionHead({ index, eyebrow, title, lede, wide = false, backToHome = false }: SectionHeadProps) {
  return (
    <div className={`section-head${wide ? ' section-head--wide' : ''}`}>
      <Reveal>
        {backToHome ? (
          <Link className="back-link" to="/" style={{ marginBottom: 18 }}>
            <ArrowLeft aria-hidden="true" /> Back to Home
          </Link>
        ) : null}
        <p className="eyebrow">{eyebrow}</p>
        <h2 style={{ marginTop: 14 }}>
          <span className="sec-index" aria-hidden="true" style={{ display: 'block', marginBottom: 6 }}>
            {index}
          </span>
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.08}>
          <p className="sec-lede">{lede}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
