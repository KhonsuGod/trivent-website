import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import type { PropsWithChildren, RefObject } from 'react';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  /** rise: fade+up. clip: masked line rise for headlines. rule: horizontal scaleX. */
  variant?: 'rise' | 'clip' | 'rule';
}>;

function useRevealTrigger() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return { ref, inView };
}

/** Motion vocabulary with reduced-motion respect. Visibility is driven by an
 *  explicit useInView trigger (deterministic across element types) rather than
 *  relying on per-variant whileInView behavior. */
export function Reveal({ children, className, delay = 0, variant = 'rise' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useRevealTrigger();
  const animate = inView && !reduceMotion;

  if (variant === 'clip') {
    return (
      <span ref={ref as RefObject<HTMLSpanElement>} className={className} style={{ display: 'block', overflow: 'hidden' }}>
        <motion.span
          style={{ display: 'block', willChange: reduceMotion ? undefined : 'transform' }}
          initial={{ y: reduceMotion ? '0%' : '110%' }}
          animate={{ y: animate ? '0%' : '110%' }}
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
        ref={ref}
        className={className}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: animate ? 1 : 0 }}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 }}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  className?: string;
  kicker?: string;
  caption?: string;
};

/** Documentary image reveal: the mask opens while the photograph settles from
 *  a restrained 1.045 scale. Reduced motion renders a static framed image. */
export function ImageReveal({
  src,
  alt,
  width,
  height,
  eager = false,
  className = '',
  kicker,
  caption,
}: ImageRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const animate = inView && !reduceMotion;

  const figcaption = caption ? (
    <figcaption className="photo-caption">
      {kicker ? <strong>{kicker}</strong> : null}
      {caption}
    </figcaption>
  ) : null;

  return (
    <motion.figure
      ref={ref}
      className={`frame-photo img-reveal ${className}`.trim()}
      style={{ margin: 0 }}
      initial={{ clipPath: 'inset(7% 5% 7% 5%)', opacity: reduceMotion ? 1 : 0.35 }}
      animate={
        animate
          ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
          : undefined
      }
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        initial={{ scale: reduceMotion ? 1 : 1.045 }}
        animate={animate ? { scale: 1 } : undefined}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {figcaption}
    </motion.figure>
  );
}
