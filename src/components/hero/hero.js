/**
 * ============================================================================
 * KR Arts And Science College - HERO "KINETIC TYPE" Controller
 * Stack: Vite + vanilla JS + GSAP + ScrollTrigger + Lenis
 * Palette: Mist Blue (Zero pure white)
 * Zero photos. Zero icons. Zero emoji. Zero video.
 * ============================================================================
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "../../js/smooth-scroll.js";

gsap.registerPlugin(ScrollTrigger);

let heroTimeline = null;
let marqueeATween = null;
let marqueeBTween = null;
let magneticRafId = null;

/**
 * Split text content into individual character elements for kinetic animation
 */
function splitTextIntoChars(element) {
  if (!element) return [];
  const text = element.textContent.trim();
  element.innerHTML = "";
  const chars = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const box = document.createElement("span");
    box.className = "kinetic-char-box";

    const span = document.createElement("span");
    span.className = "kinetic-char";
    if (char === " ") {
      span.classList.add("is-space");
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }

    box.appendChild(span);
    element.appendChild(box);
    chars.push(span);
  }

  return chars;
}

export function initHero() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;

  // 1. Split Headline characters in both base and spotlight layer
  const line1Base = heroSection.querySelector(".kinetic-headline .line-1 .headline-line-inner");
  const line2Base = heroSection.querySelector(".kinetic-headline .line-2 .headline-line-inner");
  const line1Spot = heroSection.querySelector("#headlineSpotlight .line-1 .headline-line-inner");
  const line2Spot = heroSection.querySelector("#headlineSpotlight .line-2 .headline-line-inner");

  const charsBase1 = splitTextIntoChars(line1Base);
  const charsBase2 = splitTextIntoChars(line2Base);
  const charsSpot1 = splitTextIntoChars(line1Spot);
  const charsSpot2 = splitTextIntoChars(line2Spot);

  const allBaseChars = [...charsBase1, ...charsBase2];
  const allSpotChars = [...charsSpot1, ...charsSpot2];
  const allChars = [...allBaseChars, ...allSpotChars];

  const eyebrowLines = Array.from(heroSection.querySelectorAll(".eyebrow-line"));
  const eyebrowText = heroSection.querySelector(".eyebrow-text");
  const motto = heroSection.querySelector("#kineticMotto");
  const sentence = heroSection.querySelector(".kinetic-sentence");
  const applyBtn = heroSection.querySelector("#heroApplyBtn");
  const exploreBtn = heroSection.querySelector("#heroExploreBtn");
  const buttons = [applyBtn, exploreBtn].filter(Boolean);
  const bandA = heroSection.querySelector("#marqueeBandA");
  const bandB = heroSection.querySelector("#marqueeBandB");
  const scrollCue = heroSection.querySelector(".kinetic-scroll-cue");

  // If prefers-reduced-motion, set final values immediately
  if (isReducedMotion) {
    if (allChars.length) gsap.set(allChars, { opacity: 1, rotateX: 0, yPercent: 0 });
    if (eyebrowLines.length) gsap.set(eyebrowLines, { scaleX: 1 });
    const otherStatic = [eyebrowText, motto, sentence, ...buttons, bandA, bandB, scrollCue].filter(Boolean);
    if (otherStatic.length) gsap.set(otherStatic, { opacity: 1, y: 0 });
    return;
  }

  // 2. Entrance Animation (~1.8s on desktop, ~1.1s on mobile)
  const durationScale = isTouch ? 0.65 : 1.0;
  const hasPreloader = !!document.getElementById("preloader");
  const shouldWait = hasPreloader && !window.__preloaderDone;

  heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    paused: shouldWait
  });

  if (shouldWait) {
    const handlePreloaderDone = () => {
      window.__preloaderDone = true;
      heroTimeline?.play();
      window.removeEventListener("preloader:done", handlePreloaderDone);
    };
    window.addEventListener("preloader:done", handlePreloaderDone, { once: true });
  }

  // Initial states
  if (allChars.length) {
    gsap.set(allChars, {
      rotateX: -80,
      yPercent: 110,
      opacity: 0,
      transformOrigin: "bottom center"
    });
  }
  if (eyebrowLines.length) {
    gsap.set(eyebrowLines, { scaleX: 0, transformOrigin: "center center" });
  }
  if (eyebrowText) {
    gsap.set(eyebrowText, { opacity: 0, y: 6 });
  }
  if (motto) {
    gsap.set(motto, {
      opacity: 0,
      y: 20,
      clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)"
    });
  }
  if (sentence) {
    gsap.set(sentence, { opacity: 0, y: 16 });
  }
  if (buttons.length) {
    gsap.set(buttons, { opacity: 0, y: 28 });
  }
  if (bandA) {
    gsap.set(bandA, { opacity: 0, xPercent: -20 });
  }
  if (bandB) {
    gsap.set(bandB, { opacity: 0, xPercent: 20 });
  }
  if (scrollCue) {
    gsap.set(scrollCue, { opacity: 0 });
  }

  // Timeline execution
  if (eyebrowLines.length) {
    heroTimeline.to(eyebrowLines, {
      scaleX: 1,
      duration: 0.7 * durationScale,
      ease: "power3.out"
    });
  }
  if (eyebrowText) {
    heroTimeline.to(eyebrowText, {
      opacity: 1,
      y: 0,
      duration: 0.5 * durationScale
    }, "-=0.4");
  }
  if (allChars.length) {
    heroTimeline.to(allChars, {
      rotateX: 0,
      yPercent: 0,
      opacity: 1,
      stagger: isTouch ? 0.012 : 0.02,
      duration: 0.85 * durationScale,
      ease: "power3.out"
    }, "-=0.35");
  }
  if (motto) {
    heroTimeline.to(motto, {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.75 * durationScale,
      ease: "expo.out"
    }, "-=0.4");
  }
  if (sentence) {
    heroTimeline.to(sentence, {
      opacity: 1,
      y: 0,
      duration: 0.6 * durationScale
    }, "-=0.45");
  }
  if (buttons.length) {
    heroTimeline.to(buttons, {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.6 * durationScale
    }, "-=0.35");
  }
  const marqueeBands = [bandA, bandB].filter(Boolean);
  if (marqueeBands.length) {
    heroTimeline.to(marqueeBands, {
      opacity: 1,
      xPercent: 0,
      duration: 0.8 * durationScale,
      ease: "power3.out"
    }, "-=0.4");
  }
  if (scrollCue) {
    heroTimeline.to(scrollCue, {
      opacity: 1,
      duration: 0.5 * durationScale
    }, "-=0.2");
  }

  // 3. Continuous Linear Marquees (40s per loop)
  setupMarquees(heroSection, isTouch);

  // 4. Desktop Cursor Spotlight & Magnetic Letters
  if (!isTouch) {
    setupDesktopSpotlight(heroSection);
    setupMagneticLetters(heroSection, allBaseChars, allSpotChars);
    setupMagneticButtons(heroSection);
  } else {
    setupTouchSpotlight(heroSection);
  }

  // 5. Scroll Out Scrub (lines part away, opacity to 0.2)
  setupScrollOutScrub(heroSection);

  // 6. Page Scroll Progress Bar (2px blue-500)
  setupScrollProgressBar();
}

/**
 * Continuous linear marquee animation with Lenis scroll velocity skew
 */
function setupMarquees(heroSection, isTouch) {
  const bandA = heroSection.querySelector("#marqueeBandA .marquee-track");
  const bandB = heroSection.querySelector("#marqueeBandB .marquee-track");
  if (!bandA || !bandB) return;

  // Band A moves left
  marqueeATween = gsap.to(bandA, {
    xPercent: -50,
    ease: "none",
    duration: 40,
    repeat: -1
  });

  // Band B moves right
  gsap.set(bandB, { xPercent: -50 });
  marqueeBTween = gsap.to(bandB, {
    xPercent: 0,
    ease: "none",
    duration: 40,
    repeat: -1
  });

  // Hover slows marquee to 25%
  const bandAEl = heroSection.querySelector("#marqueeBandA");
  const bandBEl = heroSection.querySelector("#marqueeBandB");

  if (bandAEl) {
    bandAEl.addEventListener("mouseenter", () => marqueeATween && gsap.to(marqueeATween, { timeScale: 0.25, duration: 0.4 }));
    bandAEl.addEventListener("mouseleave", () => marqueeATween && gsap.to(marqueeATween, { timeScale: 1.0, duration: 0.4 }));
  }
  if (bandBEl) {
    bandBEl.addEventListener("mouseenter", () => marqueeBTween && gsap.to(marqueeBTween, { timeScale: 0.25, duration: 0.4 }));
    bandBEl.addEventListener("mouseleave", () => marqueeBTween && gsap.to(marqueeBTween, { timeScale: 1.0, duration: 0.4 }));
  }

  // Lenis Velocity Skew
  const maxSkew = isTouch ? 5 : 8;
  const lenis = getLenis();

  if (lenis) {
    lenis.on("scroll", (e) => {
      const vel = e.velocity || 0;
      const targetSkew = gsap.utils.clamp(-maxSkew, maxSkew, vel * 0.35);
      const targetScale = 1.0 + Math.min(Math.abs(vel) * 0.08, 1.5);

      gsap.to([bandA, bandB], {
        skewX: targetSkew,
        duration: 0.3,
        overwrite: "auto",
        ease: "power2.out"
      });

      // Temporary speed up while scrolling
      if (marqueeATween && marqueeBTween) {
        gsap.to([marqueeATween, marqueeBTween], {
          timeScale: targetScale,
          duration: 0.3,
          overwrite: "auto",
          onComplete: () => {
            gsap.to([marqueeATween, marqueeBTween], { timeScale: 1.0, duration: 0.6, ease: "power2.out" });
          }
        });
      }
    });
  }
}

/**
 * Desktop Spotlight: Follows cursor with quickTo (duration 0.5)
 */
function setupDesktopSpotlight(heroSection) {
  const spotlightLayer = heroSection.querySelector("#headlineSpotlight");
  const headline = heroSection.querySelector("#kineticHeadline");
  if (!spotlightLayer || !headline) return;

  const setSpotX = gsap.quickTo(spotlightLayer, "--spot-x", { duration: 0.5, ease: "power3.out" });
  const setSpotY = gsap.quickTo(spotlightLayer, "--spot-y", { duration: 0.5, ease: "power3.out" });

  heroSection.addEventListener("mouseenter", () => {
    gsap.to(spotlightLayer, { opacity: 1, duration: 0.3 });
  });

  heroSection.addEventListener("mouseleave", () => {
    gsap.to(spotlightLayer, { opacity: 0, duration: 0.5 });
  });

  heroSection.addEventListener("mousemove", (e) => {
    const rect = spotlightLayer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotX(`${x}px`);
    setSpotY(`${y}px`);
  });
}

/**
 * Touch fallback: Slow auto-moving spotlight traveling across headline every 6s
 */
function setupTouchSpotlight(heroSection) {
  const spotlightLayer = heroSection.querySelector("#headlineSpotlight");
  if (!spotlightLayer) return;

  gsap.set(spotlightLayer, { opacity: 0.85 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });
  tl.fromTo(spotlightLayer,
    { "--spot-x": "-100px", "--spot-y": "50%" },
    { "--spot-x": "120%", "--spot-y": "50%", duration: 2.2, ease: "power2.inOut" }
  );
}

/**
 * Desktop Magnetic Letters: Shift up to 10px away from cursor within 120px radius
 */
function setupMagneticLetters(heroSection, baseChars, spotChars) {
  const headline = heroSection.querySelector("#kineticHeadline");
  if (!headline || !baseChars.length) return;

  let mouseX = -9999;
  let mouseY = -9999;
  let isMouseOver = false;

  heroSection.addEventListener("mouseenter", () => { isMouseOver = true; });
  heroSection.addEventListener("mouseleave", () => {
    isMouseOver = false;
    // Spring back all characters
    baseChars.forEach((char, idx) => {
      const targets = [char, spotChars && spotChars[idx]].filter(Boolean);
      gsap.to(targets, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });
    });
  });

  heroSection.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function tick() {
    if (isMouseOver) {
      baseChars.forEach((char, idx) => {
        const spotChar = spotChars && spotChars[idx];
        const rect = char.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dx = mouseX - charCenterX;
        const dy = mouseY - charCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const targets = [char, spotChar].filter(Boolean);

        if (dist < 120 && dist > 0) {
          const force = (1 - dist / 120) * 10;
          const angle = Math.atan2(dy, dx);
          // Shift AWAY from the cursor
          const targetX = -Math.cos(angle) * force;
          const targetY = -Math.sin(angle) * force;

          gsap.to(targets, {
            x: targetX,
            y: targetY,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          // Spring back when outside 120px
          if (char._isPushed) {
            gsap.to(targets, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "elastic.out(1, 0.4)",
              overwrite: "auto"
            });
            char._isPushed = false;
          }
        }

        if (dist < 120) {
          char._isPushed = true;
        }
      });
    }

    magneticRafId = requestAnimationFrame(tick);
  }

  magneticRafId = requestAnimationFrame(tick);
}

/**
 * Desktop Magnetic Buttons: Up to 8px pull towards cursor
 */
function setupMagneticButtons(heroSection) {
  const buttons = heroSection.querySelectorAll(".kinetic-btn-apply, .kinetic-btn-explore");

  buttons.forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.3, ease: "power2.out" });

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      const pullX = gsap.utils.clamp(-8, 8, relX * 0.3);
      const pullY = gsap.utils.clamp(-8, 8, relY * 0.3);

      xTo(pullX);
      yTo(pullY);
    });

    btn.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/**
 * Scroll Out Scrub: Line 1 x -6vw, Line 2 x +6vw, opacity down to 0.2
 */
function setupScrollOutScrub(heroSection) {
  const line1 = heroSection.querySelector(".kinetic-headline .line-1");
  const line2 = heroSection.querySelector(".kinetic-headline .line-2");
  const headline = heroSection.querySelector(".kinetic-headline");
  const motto = heroSection.querySelector(".kinetic-motto");
  const sentence = heroSection.querySelector(".kinetic-sentence");

  if (!line1 || !line2) return;

  const fadeTargets = [headline, motto, sentence].filter(Boolean);

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
    .to(line1, { x: "-6vw", ease: "none" }, 0)
    .to(line2, { x: "6vw", ease: "none" }, 0);

  if (fadeTargets.length) {
    st.to(fadeTargets, { opacity: 0.2, ease: "none" }, 0);
  }
}

/**
 * Scroll progress indicator: 2px blue-500 bar at top of page
 */
function setupScrollProgressBar() {
  const progressBar = document.querySelector(".scroll-progress-bar");
  if (!progressBar) return;

  gsap.set(progressBar, {
    scaleX: 0,
    transformOrigin: "left center",
    background: "var(--blue-500, #2F6BFF)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
    zIndex: 9999
  });

  ScrollTrigger.create({
    trigger: document.documentElement,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      gsap.set(progressBar, { scaleX: self.progress });
    }
  });
}
