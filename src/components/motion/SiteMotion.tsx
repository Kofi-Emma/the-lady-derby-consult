"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const motionEase = "power4.out";
const snapEase = "back.out(1.45)";

export function SiteMotion() {
  useGSAP(() => {
    const preloader = document.querySelector<HTMLElement>(
      "[data-motion-preloader]",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (preloader) {
        preloader.style.display = "none";
      }

      return;
    }

    gsap.config({ nullTargetWarn: false });

    const cleanupCallbacks: Array<() => void> = [];
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const introDelay = preloader ? 1.45 : 0.1;

    if (preloader) {
      const preloaderMark = preloader.querySelector<HTMLElement>(
        "[data-motion-preloader-mark]",
      );

      gsap
        .timeline()
        .set(document.body, { overflow: "hidden" })
        .from(preloaderMark, {
          autoAlpha: 0,
          duration: 0.42,
          ease: motionEase,
          y: 18,
        })
        .to(preloader, {
          clipPath: "inset(0 0 100% 0)",
          delay: 0.18,
          duration: 0.82,
          ease: "power4.inOut",
        })
        .set(preloader, { display: "none" })
        .set(document.body, { clearProps: "overflow" });
    }

    const header = document.querySelector("header");
    if (header) {
      gsap.from(header, {
        autoAlpha: 0,
        delay: Math.max(0, introDelay - 0.25),
        duration: 0.7,
        ease: motionEase,
        y: -16,
      });
    }

    const hero = document.querySelector<HTMLElement>("[data-motion-hero]");
    if (hero) {
      const heroCopy = hero.querySelector<HTMLElement>(
        "[data-motion-hero-copy]",
      );
      const heroActions = hero.querySelectorAll<HTMLElement>(
        "[data-motion-hero-actions] [data-motion-button]",
      );
      const heroVisual = hero.querySelector<HTMLElement>(
        "[data-motion-hero-visual]",
      );
      const heroTimeline = gsap.timeline({
        delay: introDelay,
        defaults: { ease: motionEase },
      });
      const revealHeroActions = () => {
        if (!heroActions.length) {
          return;
        }

        gsap.set(heroActions, {
          autoAlpha: 1,
          clearProps: "opacity,visibility,transform",
          scale: 1,
          y: 0,
        });
      };

      if (heroCopy) {
        heroTimeline.from(heroCopy.children, {
          autoAlpha: 0,
          duration: 0.95,
          stagger: 0.09,
          y: 46,
        });
      }

      if (heroVisual) {
        heroTimeline.from(
          heroVisual,
          {
            autoAlpha: 0,
            duration: 1,
            ease: snapEase,
            scale: 0.9,
            y: 58,
          },
          "-=0.92",
        );

        if (heroActions.length) {
          heroTimeline.fromTo(
            heroActions,
            {
              autoAlpha: 0,
              scale: 0.92,
              y: 24,
            },
            {
              autoAlpha: 1,
              clearProps: "opacity,visibility,transform",
              duration: 0.46,
              scale: 1,
              stagger: 0,
              y: 0,
            },
            "<",
          );
        }

        gsap.to(heroVisual, {
          ease: "none",
          scrollTrigger: {
            end: "bottom top",
            scrub: 0.8,
            start: "top top",
            trigger: hero,
          },
          yPercent: -8,
        });
      } else if (heroActions.length) {
        heroTimeline.fromTo(
          heroActions,
          {
            autoAlpha: 0,
            scale: 0.92,
            y: 24,
          },
          {
            autoAlpha: 1,
            clearProps: "opacity,visibility,transform",
            duration: 0.46,
            scale: 1,
            stagger: 0,
            y: 0,
          },
          ">",
        );
      }

      heroTimeline.eventCallback("onComplete", revealHeroActions);
      const heroActionsFallback = window.setTimeout(
        revealHeroActions,
        introDelay * 1000 + 2200,
      );
      cleanupCallbacks.push(() => window.clearTimeout(heroActionsFallback));
    }

    gsap.utils
      .toArray<HTMLElement>("[data-motion-heading]")
      .forEach((heading) => {
        if (heading.closest("[data-motion-hero]")) {
          return;
        }

        gsap.from(heading.children, {
          autoAlpha: 0,
          duration: 0.78,
          ease: motionEase,
          stagger: 0.06,
          scrollTrigger: {
            once: true,
            start: "top 84%",
            trigger: heading,
          },
          y: 34,
        });
      });

    const revealSelector = [
      "[data-motion-card]",
      "[data-motion-chip]",
      "[data-motion-panel]",
      "main section:not(#home) blockquote",
      "main section:not(#home) form",
    ].join(", ");
    const revealTargets = gsap.utils.toArray<HTMLElement>(revealSelector);

    if (revealTargets.length) {
      gsap.set(revealTargets, {
        autoAlpha: 0,
        scale: isDesktop ? 0.92 : 1,
        y: isDesktop ? 32 : 28,
      });

      if (isDesktop) {
        ScrollTrigger.batch(revealTargets, {
          batchMax: 16,
          interval: 0.02,
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              clearProps: "transform",
              duration: 0.48,
              ease: motionEase,
              scale: 1,
              stagger: 0,
              y: 0,
            });
          },
          start: "top 88%",
        });
      } else {
        const groupedTargets = new WeakSet<HTMLElement>();

        gsap.utils
          .toArray<HTMLElement>("main [data-motion-section]")
          .forEach((section) => {
            const sectionTargets = revealTargets.filter(
              (target) =>
                target.matches("[data-motion-card]") &&
                target.closest("[data-motion-section]") === section,
            );

            if (!sectionTargets.length) {
              return;
            }

            sectionTargets.forEach((target) => groupedTargets.add(target));

            ScrollTrigger.create({
              once: true,
              onEnter: () => {
                gsap.to(sectionTargets, {
                  autoAlpha: 1,
                  clearProps: "transform",
                  duration: 0.44,
                  ease: "power3.out",
                  scale: 1,
                  stagger: 0,
                  y: 0,
                });
              },
              start: "top 82%",
              trigger: section,
            });
          });

        const looseTargets = revealTargets.filter(
          (target) => !groupedTargets.has(target),
        );

        ScrollTrigger.batch(looseTargets, {
          batchMax: 8,
          interval: 0.04,
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              clearProps: "transform",
              duration: 0.44,
              ease: "power3.out",
              scale: 1,
              stagger: 0,
              y: 0,
            });
          },
          start: "top 88%",
        });
      }
    }

    const listItems = gsap.utils.toArray<HTMLElement>(
      "main section:not(#home) li",
    );

    if (listItems.length) {
      gsap.set(listItems, {
        autoAlpha: 0,
        y: 16,
      });

      ScrollTrigger.batch(listItems, {
        batchMax: 8,
        interval: 0.05,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            duration: 0.52,
            ease: motionEase,
            stagger: 0.035,
            y: 0,
          });
        },
        start: "top 90%",
      });
    }

    const floatingAccents = gsap.utils.toArray<HTMLElement>(
      "[data-motion-float]",
    );
    floatingAccents.forEach((accent, index) => {
      gsap.to(accent, {
        duration: 4.4 + index * 0.2,
        ease: "sine.inOut",
        repeat: -1,
        rotate: index % 2 === 0 ? 1.1 : -1.1,
        y: index % 2 === 0 ? -7 : 7,
        yoyo: true,
      });
    });

    const horizontalTracks = gsap.utils.toArray<HTMLElement>(
      "[data-motion-horizontal]",
    );
    horizontalTracks.forEach((track) => {
      if (!isDesktop || !track.children.length) {
        return;
      }

      gsap.fromTo(
        track,
        { x: 80 },
        {
          ease: "none",
          scrollTrigger: {
            end: "bottom top",
            scrub: true,
            start: "top bottom",
            trigger: track,
          },
          x: -80,
        },
      );
    });

    const buttons = gsap.utils.toArray<HTMLElement>("[data-motion-button]");
    buttons.forEach((button) => {
      const onPointerEnter = () => {
        gsap.to(button, {
          duration: 0.22,
          ease: snapEase,
          overwrite: "auto",
          scale: 1.055,
        });
      };
      const onPointerLeave = () => {
        gsap.to(button, {
          duration: 0.36,
          ease: snapEase,
          overwrite: "auto",
          scale: 1,
        });
      };
      const onPointerDown = () => {
        gsap.to(button, {
          duration: 0.12,
          ease: "power2.out",
          overwrite: "auto",
          scale: 0.97,
        });
      };

      button.addEventListener("pointerenter", onPointerEnter);
      button.addEventListener("pointerleave", onPointerLeave);
      button.addEventListener("pointerdown", onPointerDown);
      button.addEventListener("pointerup", onPointerEnter);

      cleanupCallbacks.push(() => {
        button.removeEventListener("pointerenter", onPointerEnter);
        button.removeEventListener("pointerleave", onPointerLeave);
        button.removeEventListener("pointerdown", onPointerDown);
        button.removeEventListener("pointerup", onPointerEnter);
      });
    });

    if (isDesktop) {
      const tactileCards = gsap.utils.toArray<HTMLElement>(
        "[data-motion-card], [data-motion-panel]",
      );
      tactileCards.forEach((card) => {
        const onPointerEnter = () => {
          gsap.to(card, {
            duration: 0.32,
            ease: snapEase,
            overwrite: "auto",
            scale: 1.018,
            y: -7,
          });
        };
        const onPointerLeave = () => {
          gsap.to(card, {
            duration: 0.42,
            ease: snapEase,
            overwrite: "auto",
            scale: 1,
            y: 0,
          });
        };

        card.addEventListener("pointerenter", onPointerEnter);
        card.addEventListener("pointerleave", onPointerLeave);

        cleanupCallbacks.push(() => {
          card.removeEventListener("pointerenter", onPointerEnter);
          card.removeEventListener("pointerleave", onPointerLeave);
        });
      });
    }

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);

    return () => {
      window.clearTimeout(refresh);
      cleanupCallbacks.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-brand-charcoal text-brand-gold-soft"
      data-motion-preloader=""
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div
        className="font-script text-5xl leading-none sm:text-6xl"
        data-motion-preloader-mark=""
      >
        The Lady Derby
      </div>
    </div>
  );
}
