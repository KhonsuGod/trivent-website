import { motion, useReducedMotion } from 'motion/react';
import type { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  /** rise: fade+up. clip: masked line rise for headlines. rule: horizontal scaleX. */
  variant?: 'rise' | 'clip' | 'rule';
}>;

/** Salvaged from the archived baseline: motion reveal with reduced-motion respect,
 *  extended with clip + rule variants for the editorial motion vocabulary. */
export function Reveal({ children, className, delay = 0, variant = 'rise' }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (variant === 'clip') {
    return (
      <span className={className} style={{ display: 'block', overflow: 'hidden' }}>
        <motion.span
          style={{ display: 'block' }}
          initial={{ y: '110%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
        >
          {children}
        </motion.span>
      </span>
    );
  }

  if (variant === 'rule') {
    return (
      <motion.div
        className={className}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
