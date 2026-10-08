import { useEffect, useRef, useState } from 'react';

const SEEN_KEY = 'trivent-intro-seen';
const INTRO_RUN_MS = 3500;

/** Brand intro overlay: canonical 16:9 logo reveal in a contained editorial
 *  frame (never stretched over mobile). Non-blocking — the site is already
 *  rendered behind it. Plays once per session; skipped for reduced motion. */
export function BrandIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) return;
    setVisible(true);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setLeaving(true);
      window.setTimeout(() => setVisible(false), 480);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        /* session-only fallback */
      }
    };

    const timer = window.setTimeout(finish, INTRO_RUN_MS);
    const video = videoRef.current;
    const onEnded = () => finish();
    const onError = () => finish();
    video?.addEventListener('ended', onEnded);
    video?.addEventListener('error', onError);
    video?.play().catch(() => undefined);

    return () => {
      window.clearTimeout(timer);
      video?.removeEventListener('ended', onEnded);
      video?.removeEventListener('error', onError);
    };
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 480);
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={`brand-intro${leaving ? ' leaving' : ''}`} role="dialog" aria-label="TRIVENT brand introduction">
      <div className="intro-frame">
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          poster="/assets/trivent-brand-intro-poster.jpg"
          aria-label="TRIVENT logo reveal animation"
        >
          <source src="/assets/trivent-brand-intro.mp4" type="video/mp4" />
        </video>
        <button type="button" className="intro-skip" onClick={dismiss}>
          Skip intro
        </button>
      </div>
    </div>
  );
}
