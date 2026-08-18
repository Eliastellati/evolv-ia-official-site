"use client";

import { useEffect, useRef } from "react";

// Hero background video. The whole page palette is derived from this
// footage (measured: hue 195-201 throughout, highlight #66B9D6, white
// #E8E9E6), so it is the one saturated element on the page and everything
// else stays out of its way.
//
// Under prefers-reduced-motion the video never plays: the poster frame is
// shown instead, which carries the same colour without the movement.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function apply() {
      const el = ref.current;
      if (!el) return;
      if (reduce.matches) {
        el.pause();
        el.removeAttribute("autoplay");
        return;
      }
      // Autoplay can be refused even for muted video (power saving, iOS
      // low-power, strict autoplay policies) and it rejects silently. The
      // poster carries the frame meanwhile, and the retries below pick it
      // up as soon as the browser allows playback.
      void el.play().catch(() => {});
    }

    function retryOnce() {
      const el = ref.current;
      if (!el || reduce.matches || !el.paused) return;
      void el.play().catch(() => {});
    }

    apply();

    video.addEventListener("canplay", retryOnce);
    // First user activation of any kind lifts the autoplay block.
    window.addEventListener("pointerdown", retryOnce, { once: true, passive: true });
    window.addEventListener("scroll", retryOnce, { once: true, passive: true });
    window.addEventListener("keydown", retryOnce, { once: true });
    reduce.addEventListener("change", apply);

    return () => {
      video.removeEventListener("canplay", retryOnce);
      window.removeEventListener("pointerdown", retryOnce);
      window.removeEventListener("scroll", retryOnce);
      window.removeEventListener("keydown", retryOnce);
      reduce.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={ref}
        className="hero-media-video"
        poster="/hero-poster.webp"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-media-scrim" />
    </div>
  );
}
