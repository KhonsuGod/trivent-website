import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { solutions } from '../data/company';

/** Editorial interactive solutions: selectable list on one side, sticky detail
 *  with supporting photography on the other. Buttons — fully usable by tap,
 *  keyboard, and screen readers; nothing is hover-only. */
export function SolutionExplorer() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = solutions[active] ?? solutions[0];

  return (
    <div className="sol-explorer">
      <div className="sol-ex-list" role="tablist" aria-label="Solution lines">
        {solutions.map((solution, i) => {
          const selected = i === active;
          return (
            <button
              key={solution.title}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="solution-panel"
              id={`solution-tab-${i}`}
              className={`sol-ex-item${selected ? ' selected' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="sol-ex-num" aria-hidden="true">
                {solution.index}
              </span>
              <span className="sol-ex-titles">
                <span className="sol-ex-name">{solution.title}</span>
                <span className="sol-ex-tag">{solution.tagline}</span>
              </span>
              <span className="sol-ex-bar" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div
        className="sol-ex-panel"
        role="tabpanel"
        id="solution-panel"
        aria-labelledby={`solution-tab-${active}`}
        tabIndex={0}
      >
        <div className="sol-ex-photo">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <span className="sol-ex-count" aria-hidden="true">
            {current.index} / 04
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="sol-tag">{current.tagline}</p>
            <h3>{current.title}</h3>
            <p className="sol-ex-summary">{current.summary}</p>
            <ul className="sol-ex-items" aria-label={`Services in ${current.title}`}>
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
