"use client";

import { useEffect } from "react";

// Arms [data-reveal] elements after mount, then reveals them on scroll via
// IntersectionObserver. Content is visible by default in the markup, so a
// no-JS visitor (or a crawler) sees everything immediately — the hidden
// state only exists once this component has confirmed it can un-hide it
// again. Skipped entirely under prefers-reduced-motion.
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    targets.forEach((el, index) => {
      if (el.dataset.reveal === "item") {
        el.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      }
      el.classList.add("reveal-armed");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
