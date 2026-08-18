"use client";

// Immersive / interactive building blocks for the redesigned homepage.
// All effects are scroll- or pointer-driven and degrade gracefully:
// under prefers-reduced-motion they render in their settled, readable
// state with no transforms. Built on the framer-motion already in the
// project — no new dependencies (keeps the Cloudflare/vinext build safe).

import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/* Header chrome: the fixed site-header itself, sliding out of view on */
/* scroll-down and back in on scroll-up. The animation is applied      */
/* directly to the fixed element (not a wrapper) — transforming an     */
/* ancestor of a `position: fixed` element makes that ancestor its new */
/* containing block, which would break the fixed positioning entirely. */
/* ------------------------------------------------------------------ */
export function HeaderChrome({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (reduce) return;
    const diff = y - lastY.current;
    if (y < 80) {
      setHidden(false);
    } else if (diff > 4) {
      setHidden(true);
    } else if (diff < -4) {
      setHidden(false);
    }
    lastY.current = y;
  });

  return (
    <motion.header
      className="site-header"
      aria-label="Navigazione principale"
      animate={{ y: hidden ? "-140%" : "0%" }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.header>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll progress bar (fixed, top of viewport)                        */
/* ------------------------------------------------------------------ */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Magic / spotlight card — pointer-follow radial glow + tilt-free.    */
/* Renders as <a> when href is given, else <div>.                      */
/* ------------------------------------------------------------------ */
export function MagicCard({
  children,
  className = "",
  href,
  target,
  rel,
  style,
  glow = "blue",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  glow?: "blue" | "mineral" | "violet";
}) {
  const ref = useRef<HTMLElement | null>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const props = {
    ref: ref as never,
    className: `magic-card magic-${glow} ${className}`.trim(),
    onMouseMove: handleMove,
    style,
  };

  if (href) {
    return (
      <a {...props} href={href} target={target} rel={rel}>
        <span className="magic-card-inner">{children}</span>
      </a>
    );
  }
  return (
    <div {...props}>
      <span className="magic-card-inner">{children}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Infinite marquee — CSS-driven, pauses on hover + reduced motion.    */
/* ------------------------------------------------------------------ */
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  // Duplicated track so the translateX(-50%) loop is seamless.
  const track = [...items, ...items];
  return (
    <div className={`marquee ${className}`.trim()} aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Word-by-word scroll text reveal.                                    */
/* ------------------------------------------------------------------ */
function RevealWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number]; }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span className="reveal-word" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export function ScrollTextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.32"],
  });
  const words = text.split(" ");

  // The ref must stay attached in every branch: framer-motion's useScroll
  // warns ("target ref is defined but not hydrated") if the element it was
  // given never mounts, which is what an early return would cause.
  if (reduce) {
    return (
      <p ref={ref} className={`scroll-reveal-text ${className}`.trim()}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={`scroll-reveal-text ${className}`.trim()}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <RevealWord key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word + (i < words.length - 1 ? " " : "")}
          </RevealWord>
        );
      })}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Count-up number, fires when scrolled into view.                     */
/* ------------------------------------------------------------------ */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1600,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Reduced motion needs no animation at all — the final value is derived
    // during render below rather than pushed through state here, which keeps
    // this effect free of the synchronous setState that triggers cascading
    // renders (react-hooks/set-state-in-effect).
    if (!inView || reduce) return;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, durationMs, reduce]);

  return (
    <span ref={ref} className="counter">
      {prefix}
      {reduce ? to : value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-scrubbed flow: nodes light up in sequence as you scroll.     */
/* ------------------------------------------------------------------ */
export function FlowScroll({ steps }: { steps: [string, string][] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const [active, setActive] = useState(reduce ? steps.length - 1 : -1);

  useEffect(() => {
    if (reduce) return;
    return scrollYProgress.on("change", (p) => {
      // Map 0..1 to -1..steps-1 so nothing is lit before the section arrives.
      setActive(Math.min(steps.length - 1, Math.floor(p * (steps.length + 0.4)) - 0));
    });
  }, [scrollYProgress, steps.length, reduce]);

  const lineScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div className="flow-scroll" ref={ref}>
      <div className="flow-scroll-rail" aria-hidden="true">
        <motion.div
          className="flow-scroll-fill"
          style={reduce ? { scaleX: 1 } : { scaleX: lineScale }}
        />
      </div>
      <ol className="flow-scroll-steps">
        {steps.map(([label, value], i) => (
          <li
            key={label}
            className={`flow-scroll-step${i <= active ? " is-lit" : ""}`}
          >
            <span className="flow-scroll-node" aria-hidden="true" />
            <span className="flow-scroll-label">{label}</span>
            <strong>{value}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky-scroll narrative for the method (01 -> 04).                  */
/* The section is tall; an inner panel pins while the active step      */
/* crossfades. Degrades to a plain stacked list on mobile / reduced.   */
/* ------------------------------------------------------------------ */
export function StickyProcess({
  steps,
}: {
  steps: [string, string, string][];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const animatingRef = useRef(false);
  const animLockTimer = useRef<number | undefined>(undefined);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce || !isDesktop) return;
    return scrollYProgress.on("change", (p) => {
      const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
      const next = Math.max(0, idx);
      activeRef.current = next;
      setActive(next);
    });
  }, [scrollYProgress, steps.length, reduce, isDesktop]);

  // One wheel notch — big or small — advances exactly one step instead of
  // scrolling the pinned panel proportionally. Only while the panel is
  // actually pinned (container spans past both viewport edges); outside
  // that range the wheel is left alone so entering/leaving the section
  // still scrolls normally. Steps at either end let the native scroll
  // continue past the section instead of trapping it.
  useEffect(() => {
    if (reduce || !isDesktop) return;

    function onWheel(e: WheelEvent) {
      const container = ref.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const pinned = rect.top <= 0 && rect.bottom > window.innerHeight;
      if (!pinned) return;

      if (animatingRef.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = activeRef.current + direction;
      if (nextIndex < 0 || nextIndex >= steps.length) return;

      e.preventDefault();
      animatingRef.current = true;
      activeRef.current = nextIndex;
      setActive(nextIndex);

      const containerTop = rect.top + window.scrollY;
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const p = (nextIndex + 0.5) / steps.length;
      window.scrollTo({ top: containerTop + p * scrollableHeight, behavior: "smooth" });

      window.clearTimeout(animLockTimer.current);
      animLockTimer.current = window.setTimeout(() => {
        animatingRef.current = false;
      }, 650);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.clearTimeout(animLockTimer.current);
    };
  }, [reduce, isDesktop, steps.length]);

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Stacked, non-pinned fallback: every step always visible. The ref stays
  // attached here too — framer-motion's useScroll warns ("target ref is
  // defined but not hydrated") if the element it was handed never mounts,
  // and this branch is what renders on the very first client pass.
  if (reduce || !isDesktop) {
    return (
      <div className="sticky-process is-static" ref={ref}>
        <div className="process-track">
          {steps.map(([num, title, text]) => (
            <article className="process-step" key={num} data-reveal="item">
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="sticky-process"
      ref={ref}
      style={{ height: `${steps.length * 78}vh` }}
    >
      <div className="sticky-process-panel">
        <div className="sticky-process-rail" aria-hidden="true">
          <motion.div className="sticky-process-fill" style={{ scaleY: progressScale }} />
          {steps.map(([num], i) => (
            <span
              key={num}
              className={`sticky-process-tick${i <= active ? " is-lit" : ""}`}
            />
          ))}
        </div>

        <div className="sticky-process-stage">
          {steps.map(([num, title, text], i) => (
            <motion.article
              key={num}
              className="sticky-process-card"
              aria-hidden={i !== active}
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 24,
                filter: i === active ? "blur(0px)" : "blur(6px)",
                pointerEvents: i === active ? "auto" : "none",
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="sticky-process-num">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="sticky-process-index" aria-hidden="true">
          {steps.map(([num], i) => (
            <span key={num} className={i === active ? "is-active" : ""}>
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax wrapper — subtle scroll translate for hero layers.        */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  amount = 60,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, amount]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { y, opacity }}
    >
      {children}
    </motion.div>
  );
}
