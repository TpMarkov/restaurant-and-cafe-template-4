"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely in client environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroClient() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Use gsap.matchMedia to reduce motion on small screens and provide different timings
      const mm = gsap.matchMedia();

      mm.add(
        { isMobile: "(max-width: 767px)", isDesktop: "(min-width: 768px)" },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };

          // Staggered word reveal — adjusted timings for mobile
          const title = el.querySelectorAll(".hero-word");
          gsap.fromTo(
            title,
            { y: 26, opacity: 0, skewY: 6 },
            {
              y: 0,
              opacity: 1,
              skewY: 0,
              duration: isMobile ? 0.7 : 0.95,
              ease: isMobile ? "power2.out" : "power4.out",
              stagger: isMobile ? 0.06 : 0.08,
            },
          );

          // Parallax: only enable subtle parallax on desktop to improve mobile performance
          if (!isMobile) {
            gsap.to(".hero-layer-1", {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top top",
                scrub: 0.6,
              },
            });

            gsap.to(".hero-layer-2", {
              y: -60,
              rotation: 0.4,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top top",
                scrub: 0.9,
              },
            });
          }
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen grid items-center">
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <div className="z-20">
          <p className="section-subtitle">Seasonal Tasting</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-brand-ink">
            <span className="block hero-word">Cinematic</span>
            <span className="block hero-word">Dining</span>
            <span className="block hero-word">Moments</span>
          </h1>
          <p className="mt-4 text-brand-muted">
            A contemporary template built for storytelling — bold typography,
            generous whitespace, and motion that reveals content organically.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#reservations" className="btn-primary">
              Reserve
            </a>
            <a href="#about" className="btn-ghost">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Decorative layered shapes — use these instead of using the original images.
              Clients should replace with original-asset URLs or leave as abstract graphics. */}
          <div className="hero-layer-2 absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-accent/20 to-brand-primary/10 transform -translate-y-4 -translate-x-4" />
          <div className="hero-layer-1 absolute inset-4 rounded-xl bg-gradient-to-br from-brand-surface/60 to-brand-warm/10" />

          <div className="relative h-64 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Unsplash hero ambience — landscape editorial interior (replace if client provides assets) */}
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wide interior ambience"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute text-center">
              <p className="text-sm text-brand-muted">
                Replace with a wide ambience photo (editorial, not close-up).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
