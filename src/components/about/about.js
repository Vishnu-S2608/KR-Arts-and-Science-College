/**
 * ============================================================================
 * KR Arts And Science College - ABOUT SECTION "SPLIT PANEL" Controller
 * Scene 1: Split Panel (Solid blue left panel + photo accordion right + seam seal + bottom ribbon)
 * Scene 2: Pinned photo window expanding to 100vw x 100svh + caption card
 * Scene 3: Three facts cross grid with count-up
 * Stack: Vite + vanilla JS + GSAP + ScrollTrigger + Lenis
 * Palette: Mist Blue & Solid Blue-700 / Navy-900 (Zero pure white)
 * ============================================================================
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BRAND_COPY = {
  eyebrow: "ABOUT US",
  headlineLine1: "We build futures",
  headlineLine2: "in Peraiyur,",
  headlineLine3: "for everyone.",
  screenReaderHeadline: "We build futures in Peraiyur, for everyone.",
  subline: "KR Arts And Science College · Madurai Kamaraj University · Est. 2023",
  ctaText: "Our story",
  captionTag: "PERAIYUR, MADURAI",
  captionHeading: "Where KR Arts and Science College stands.",
  facts: [
    { number: "2023", label: "Founded" },
    { number: "11", label: "Programmes" },
    { number: "100%", label: "Placement" }
  ]
};

export function initAbout() {
  const section = document.getElementById("about");
  if (!section) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  setupImageFallbacks(section);

  if (isReducedMotion) {
    initReducedMotion(section);
    return;
  }

  setupScene1(section);
  setupScene2(section);
  setupScene3(section);

  ScrollTrigger.refresh();
}

/**
 * Image Fallbacks:
 * Missing photo means that strip is dropped (minimum 2 strips);
 * fewer than 2 means the photo area is hidden and the panel goes full width.
 */
function setupImageFallbacks(section) {
  const stripsContainer = section.querySelector("#splitRightStrips");
  const leftPanel = section.querySelector("#splitLeftPanel");
  const strips = Array.from(section.querySelectorAll(".photo-strip"));
  let failedCount = 0;
  const totalStrips = strips.length;

  strips.forEach((strip) => {
    const img = strip.querySelector(".strip-photo");
    if (!img) return;

    function handleFail() {
      strip.remove();
      failedCount++;
      const remaining = totalStrips - failedCount;
      if (remaining < 2) {
        if (stripsContainer) stripsContainer.style.display = "none";
        if (leftPanel) {
          leftPanel.style.width = "100%";
          leftPanel.style.maxWidth = "100%";
        }
      }
      ScrollTrigger.refresh();
    }

    if (img.complete && img.naturalWidth === 0) {
      handleFail();
    } else {
      img.addEventListener("error", handleFail);
    }
  });

  const heroImg = section.querySelector("#windowHeroImg");
  const scene2 = section.querySelector("#windowsScene2");
  if (heroImg && scene2) {
    heroImg.addEventListener("error", () => {
      scene2.style.display = "none";
      ScrollTrigger.refresh();
    });
  }
}

/**
 * SCENE 1: SPLIT PANEL Controller
 * Entrance (ScrollTrigger start "top 70%", once, ~1.5s):
 *  0.00 blue panel wipes in from the left (clip-path inset(0 100% 0 0) to inset(0), 1s expo.inOut)
 *  0.30 eyebrow line draws, headline words rise from masks (stagger .06s)
 *  0.50 photo strips rise from the bottom one by one (clip-path inset(100% 0 0 0) to inset(0), stagger .15s, 1.1s expo.inOut); inner photo scale 1.3 to 1
 *  0.80 wavy underline draws, facts fade up and count, link fades up
 *  1.10 seal badge scales 0.6 to 1; ribbon slides in
 * Scroll (desktop): the three strips drift at different speeds (yPercent -4, 0, +4, scrubbed),
 * the seal badge rotation speeds up slightly with scroll velocity.
 */
function setupScene1(section) {
  const scene1 = section.querySelector("#windowsScene1");
  if (!scene1) return;

  const leftPanel = scene1.querySelector("#splitLeftPanel");
  const eyebrowLine = scene1.querySelector("#splitEyebrowLine");
  const eyebrowText = scene1.querySelector("#splitEyebrowText");
  const headlineWords = scene1.querySelectorAll("#splitHeadline .word-mask .word");
  const wavyPath = scene1.querySelector("#splitWavyUnderlinePath");
  const subline = scene1.querySelector("#splitSubline");
  const factsRow = scene1.querySelector("#splitFactsRow");
  const link = scene1.querySelector("#splitLink");

  const stripsContainer = scene1.querySelector("#splitRightStrips");
  const strips = Array.from(scene1.querySelectorAll(".photo-strip"));
  const stripPhotos = scene1.querySelectorAll(".strip-photo");

  const seamSeal = scene1.querySelector("#splitSeamSeal");
  const bottomRibbon = scene1.querySelector("#splitBottomRibbon");
  const ribbonTrack = scene1.querySelector("#splitRibbonTrack");

  const isMobile = window.innerWidth < 750;

  // 1. Prepare SVG Wavy Underline
  let pathLen = 180;
  if (wavyPath) {
    try {
      pathLen = wavyPath.getTotalLength() || 180;
      gsap.set(wavyPath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
    } catch (e) {
      gsap.set(wavyPath, { strokeDasharray: 180, strokeDashoffset: 180 });
    }
  }

  // Initial States
  if (leftPanel) gsap.set(leftPanel, { clipPath: "inset(0% 100% 0% 0%)" });
  if (eyebrowLine) gsap.set(eyebrowLine, { scaleX: 0 });
  if (eyebrowText) gsap.set(eyebrowText, { opacity: 0, y: 6 });
  if (headlineWords.length) gsap.set(headlineWords, { yPercent: 110 });
  if (subline) gsap.set(subline, { opacity: 0, y: 16 });
  if (factsRow) gsap.set(factsRow, { opacity: 0, y: 16 });
  if (link) gsap.set(link, { opacity: 0, y: 16 });

  strips.forEach((strip) => {
    gsap.set(strip, { clipPath: "inset(100% 0% 0% 0%)" });
  });
  stripPhotos.forEach((photo) => {
    gsap.set(photo, { scale: 1.3 });
  });

  if (seamSeal) gsap.set(seamSeal, { scale: 0.6, opacity: 0 });
  if (bottomRibbon) gsap.set(bottomRibbon, { opacity: 0, y: 24 });

  // Entrance Timeline (triggered once when Scene 1 hits top 70%)
  const enterTl = gsap.timeline({
    scrollTrigger: {
      trigger: scene1,
      start: "top 70%",
      once: true
    }
  });

  // 0.00: Blue panel wipes in from the left (1s expo.inOut)
  if (leftPanel) {
    enterTl.to(leftPanel, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.0,
      ease: "expo.inOut"
    }, 0.0);
  }

  // 0.30: Eyebrow line draws, headline words rise from masks (stagger 0.06s)
  if (eyebrowLine) {
    enterTl.to(eyebrowLine, { scaleX: 1, duration: 0.6, ease: "power3.out" }, 0.30);
  }
  if (eyebrowText) {
    enterTl.to(eyebrowText, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.32);
  }
  if (headlineWords.length) {
    enterTl.to(headlineWords, {
      yPercent: 0,
      duration: 0.75,
      stagger: 0.06,
      ease: "power3.out"
    }, 0.30);
  }

  // 0.50: Photo strips rise from bottom one by one (clip-path inset(100% 0 0 0) to inset(0), stagger .15s, 1.1s expo.inOut); inner photo scale 1.3 to 1
  strips.forEach((strip, idx) => {
    const photo = strip.querySelector(".strip-photo");
    const startTime = 0.50 + idx * 0.15;
    enterTl.to(strip, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.1,
      ease: "expo.inOut"
    }, startTime);
    if (photo) {
      enterTl.to(photo, {
        scale: 1.0,
        duration: 1.1,
        ease: "expo.inOut"
      }, startTime);
    }
  });

  // 0.80: Wavy underline draws, facts fade up and count, link fades up
  if (wavyPath) {
    enterTl.to(wavyPath, {
      strokeDashoffset: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.80);
  }

  if (subline) {
    enterTl.to(subline, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.75);
  }
  if (factsRow) {
    enterTl.to(factsRow, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.80);
    enterTl.add(() => {
      animateFactNumbers(factsRow);
    }, 0.80);
  }
  if (link) {
    enterTl.to(link, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.85);
  }

  // 1.10: Seal badge scales 0.6 to 1; ribbon slides in
  if (seamSeal) {
    enterTl.to(seamSeal, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.5)"
    }, 1.10);
  }

  if (bottomRibbon) {
    enterTl.to(bottomRibbon, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, 1.10);
  }

  // 2. Fact Numbers Count-up (1.2s power2.out)
  function animateFactNumbers(rowEl) {
    if (!rowEl) return;
    const cols = rowEl.querySelectorAll(".fact-col");
    cols.forEach((col) => {
      const numEl = col.querySelector(".fact-number");
      const targetStr = col.getAttribute("data-target");
      const suffix = col.getAttribute("data-suffix") || "";
      if (!numEl || !targetStr) return;
      const targetVal = parseInt(targetStr, 10);
      const counter = { val: 0 };
      gsap.to(counter, {
        val: targetVal,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          numEl.textContent = `${Math.round(counter.val)}${suffix}`;
        }
      });
    });
  }

  // 3. Strips Accordion Controller with 4s Autoplay
  let currentIndex = 0;
  let progressTween = null;
  let isAutoplayPaused = false;

  function setActiveStrip(index, userInitiated = false) {
    if (index === currentIndex && !userInitiated) return;
    strips.forEach((s, idx) => {
      const isTarget = idx === index;
      s.classList.toggle("is-active", isTarget);
      s.setAttribute("aria-selected", isTarget ? "true" : "false");
      s.setAttribute("tabindex", isTarget ? "0" : "-1");

      const fill = s.querySelector(".strip-progress-fill");
      if (fill && !isTarget) {
        gsap.set(fill, { scaleX: 0 });
      }
    });

    currentIndex = index;

    if (!isAutoplayPaused) {
      startProgressBar();
    }
  }

  function startProgressBar() {
    if (progressTween) progressTween.kill();
    if (strips.length < 2) return;

    const activeStrip = strips[currentIndex];
    if (!activeStrip) return;
    const fill = activeStrip.querySelector(".strip-progress-fill");
    if (!fill) return;

    gsap.set(fill, { scaleX: 0 });
    progressTween = gsap.to(fill, {
      scaleX: 1,
      duration: 4.0,
      ease: "none",
      onComplete: () => {
        const nextIdx = (currentIndex + 1) % strips.length;
        setActiveStrip(nextIdx);
      }
    });
  }

  function pauseAutoplay() {
    isAutoplayPaused = true;
    if (progressTween) progressTween.pause();
  }

  function resumeAutoplay() {
    isAutoplayPaused = false;
    startProgressBar();
  }

  // Strip event listeners (Click & Hover activates strip and pauses autoplay)
  strips.forEach((strip, idx) => {
    strip.addEventListener("mouseenter", () => {
      pauseAutoplay();
      setActiveStrip(idx, true);
    });

    strip.addEventListener("click", () => {
      pauseAutoplay();
      setActiveStrip(idx, true);
    });

    // Keyboard navigation (Arrow keys)
    strip.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const nextIdx = (currentIndex + 1) % strips.length;
        strips[nextIdx]?.focus();
        setActiveStrip(nextIdx, true);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prevIdx = (currentIndex - 1 + strips.length) % strips.length;
        strips[prevIdx]?.focus();
        setActiveStrip(prevIdx, true);
      }
    });
  });

  if (stripsContainer) {
    stripsContainer.addEventListener("mouseleave", () => {
      resumeAutoplay();
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    stripsContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
      pauseAutoplay();
    }, { passive: true });

    stripsContainer.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          // Swiped left: next
          const nextIdx = (currentIndex + 1) % strips.length;
          setActiveStrip(nextIdx, true);
        } else {
          // Swiped right: prev
          const prevIdx = (currentIndex - 1 + strips.length) % strips.length;
          setActiveStrip(prevIdx, true);
        }
      }
      resumeAutoplay();
    }, { passive: true });
  }

  // Start initial autoplay
  startProgressBar();

  // 4. Desktop Scroll Drift (yPercent -4, 0, +4)
  if (!isMobile) {
    if (strips[0]) {
      gsap.to(strips[0], {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: scene1,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
    if (strips[2]) {
      gsap.to(strips[2], {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: scene1,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  }

  // 5. Bottom Ribbon Marquee (40s loop moving left, hover slows to 25%, scroll velocity speeds up)
  let ribbonTween = null;
  if (ribbonTrack) {
    ribbonTween = gsap.to(ribbonTrack, {
      xPercent: -50,
      duration: 40,
      repeat: -1,
      ease: "none"
    });

    if (bottomRibbon) {
      bottomRibbon.addEventListener("mouseenter", () => {
        gsap.to(ribbonTween, { timeScale: 0.25, duration: 0.4, ease: "power2.out" });
      });
      bottomRibbon.addEventListener("mouseleave", () => {
        gsap.to(ribbonTween, { timeScale: 1.0, duration: 0.4, ease: "power2.out" });
      });
    }
  }

  // 6. Scroll Velocity effect: ribbon speeds up (up to 2.5), seal badge rotation speeds up
  let velResetTimer = null;
  ScrollTrigger.create({
    trigger: scene1,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const vel = Math.abs(self.getVelocity() || 0);
      if (vel > 100) {
        const speedMultiplier = Math.min(2.5, 1 + vel / 1000);
        if (ribbonTween) ribbonTween.timeScale(speedMultiplier);

        if (seamSeal) {
          gsap.to(seamSeal, {
            rotation: `+=${(vel / 60) * (self.direction > 0 ? 1 : -1)}`,
            duration: 0.25,
            ease: "power1.out",
            overwrite: "auto"
          });
        }

        clearTimeout(velResetTimer);
        velResetTimer = setTimeout(() => {
          if (ribbonTween) gsap.to(ribbonTween, { timeScale: 1.0, duration: 0.6, ease: "power2.out" });
        }, 150);
      }
    },
    onToggle: (self) => {
      if (!self.isActive) {
        if (ribbonTween) ribbonTween.pause();
        pauseAutoplay();
      } else {
        if (ribbonTween) ribbonTween.play();
        resumeAutoplay();
      }
    }
  });

  // Pause everything when document is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (ribbonTween) ribbonTween.pause();
      pauseAutoplay();
    } else {
      if (ribbonTween) ribbonTween.play();
      resumeAutoplay();
    }
  });
}
/**
 * SCENE 2: The Window Opens (Pinned Full Screen Window + Caption)
 */
function setupScene2(section) {
  const scene2 = section.querySelector("#windowsScene2");
  if (!scene2) return;

  const revealBox = scene2.querySelector("#windowRevealBox");
  const heroImg = scene2.querySelector("#windowHeroImg");
  const captionCard = scene2.querySelector("#windowCaptionCard");
  const progressBar = scene2.querySelector("#windowProgressBar");
  const curtain = scene2.querySelector("#sceneTransitionCurtain");

  const isLandscapePhone = window.innerHeight < 500 && window.innerWidth > window.innerHeight;

  if (isLandscapePhone) {
    // Landscape phone: skip pin, static full-width presentation
    gsap.set(revealBox, { clipPath: "inset(0svh 0vw round 0px)" });
    gsap.set(heroImg, { scale: 1 });
    gsap.set(captionCard, { opacity: 1, y: 0 });
    return;
  }

  ScrollTrigger.matchMedia({
    // Desktop (>= 768px): 160% pin height
    "(min-width: 768px)": function () {
      const startClip = "inset(24svh 31vw round 28px)";
      const endClip = "inset(0svh 0vw round 0px)";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scene2,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=160%",
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Window grows to 100vw x 100svh, radius goes to 0
      tl.fromTo(
        revealBox,
        { clipPath: startClip },
        { clipPath: endClip, ease: "none", duration: 0.8 },
        0
      );

      // Inner photo scales from 1.25 to 1.0
      tl.fromTo(
        heroImg,
        { scale: 1.25 },
        { scale: 1.0, ease: "none", duration: 0.8 },
        0
      );

      // Bottom 2px progress line grows along screen bottom
      tl.fromTo(
        progressBar,
        { scaleX: 0 },
        { scaleX: 1, ease: "none", duration: 1 },
        0
      );

      // Caption card fades in at 55% progress (0.52 to 0.68)
      tl.fromTo(
        captionCard,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.16 },
        0.52
      );

      // Caption card fades out at 85% progress
      tl.to(
        captionCard,
        { opacity: 0, y: -10, ease: "power2.in", duration: 0.1 },
        0.85
      );

      // Slide-up curtain (bg-alt) at unpin to smoothly bridge into Scene 3
      tl.fromTo(
        curtain,
        { yPercent: 100 },
        { yPercent: 0, ease: "power2.inOut", duration: 0.15 },
        0.85
      );
    },

    // Mobile (< 768px): 120% pin height
    "(max-width: 767px)": function () {
      const startClip = "inset(26svh 14vw round 20px)";
      const endClip = "inset(0svh 0vw round 0px)";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scene2,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          anticipatePin: 1
        }
      });

      tl.fromTo(
        revealBox,
        { clipPath: startClip },
        { clipPath: endClip, ease: "none", duration: 0.8 },
        0
      );

      tl.fromTo(
        heroImg,
        { scale: 1.2 },
        { scale: 1.0, ease: "none", duration: 0.8 },
        0
      );

      tl.fromTo(
        progressBar,
        { scaleX: 0 },
        { scaleX: 1, ease: "none", duration: 1 },
        0
      );

      tl.fromTo(
        captionCard,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.16 },
        0.5
      );

      tl.to(
        captionCard,
        { opacity: 0, y: -8, ease: "power2.in", duration: 0.1 },
        0.85
      );

      tl.fromTo(
        curtain,
        { yPercent: 100 },
        { yPercent: 0, ease: "power2.inOut", duration: 0.15 },
        0.85
      );
    }
  });
}

/**
 * SCENE 3: At A Glance & Facts Grid
 * Only 2 motions: fade-up on scroll and a single count-up (power2.out, 1.2s).
 */
function setupScene3(section) {
  const scene3 = section.querySelector("#windowsScene3");
  if (!scene3) return;

  const leftCol = scene3.querySelector(".scene-3-left");
  const factCells = scene3.querySelectorAll(".fact-cell");

  ScrollTrigger.create({
    trigger: scene3,
    start: "top 80%",
    once: true,
    onEnter: () => {
      // 1. Quiet fade-up entrance for left column and facts
      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
      }

      if (factCells.length > 0) {
        gsap.fromTo(
          factCells,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" }
        );
      }

      // 2. Single count-up for numbers (power2.out, 1.2s)
      factCells.forEach((cell) => {
        const numEl = cell.querySelector(".fact-number");
        if (!numEl) return;

        const target = parseFloat(cell.getAttribute("data-target") || "0");
        const suffix = cell.getAttribute("data-suffix") || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            numEl.textContent = `${Math.round(counter.val)}${suffix}`;
          }
        });
      });
    }
  });
}

/**
 * Reduced Motion Fallback: Show final static state with gentle fade
 */
function initReducedMotion(section) {
  const leftPanel = section.querySelector("#splitLeftPanel");
  const eyebrowLine = section.querySelector("#splitEyebrowLine");
  const eyebrowText = section.querySelector("#splitEyebrowText");
  const words = section.querySelectorAll("#splitHeadline .word-mask .word");
  const wavyPath = section.querySelector("#splitWavyUnderlinePath");
  const subline = section.querySelector("#splitSubline");
  const factsRow = section.querySelector("#splitFactsRow");
  const link = section.querySelector("#splitLink");
  const strips = section.querySelectorAll(".photo-strip");
  const seamSeal = section.querySelector("#splitSeamSeal");
  const bottomRibbon = section.querySelector("#splitBottomRibbon");

  if (leftPanel) gsap.set(leftPanel, { clipPath: "inset(0% 0% 0% 0%)" });
  if (eyebrowLine) gsap.set(eyebrowLine, { scaleX: 1 });
  if (eyebrowText) gsap.set(eyebrowText, { opacity: 1, y: 0 });
  if (words.length) gsap.set(words, { yPercent: 0 });
  if (wavyPath) gsap.set(wavyPath, { strokeDashoffset: 0 });
  if (subline) gsap.set(subline, { opacity: 1, y: 0 });
  if (factsRow) gsap.set(factsRow, { opacity: 1, y: 0 });
  if (link) gsap.set(link, { opacity: 1, y: 0 });

  strips.forEach((strip) => {
    gsap.set(strip, { clipPath: "inset(0% 0% 0% 0%)" });
  });

  if (seamSeal) gsap.set(seamSeal, { scale: 1, opacity: 1 });
  if (bottomRibbon) gsap.set(bottomRibbon, { opacity: 1, y: 0 });

  if (factsRow) {
    const cols = factsRow.querySelectorAll(".fact-col");
    cols.forEach((col) => {
      const numEl = col.querySelector(".fact-number");
      const targetStr = col.getAttribute("data-target") || "";
      const suffix = col.getAttribute("data-suffix") || "";
      if (numEl && targetStr) {
        numEl.textContent = `${targetStr}${suffix}`;
      }
    });
  }

  const revealBox = section.querySelector("#windowRevealBox");
  const heroImg = section.querySelector("#windowHeroImg");
  const captionCard = section.querySelector("#windowCaptionCard");
  const leftCol = section.querySelector(".scene-3-left");
  const factCells = section.querySelectorAll(".fact-cell");

  if (revealBox) gsap.set(revealBox, { clipPath: "inset(0svh 0vw round 0px)" });
  if (heroImg) gsap.set(heroImg, { scale: 1 });
  if (captionCard) gsap.set(captionCard, { opacity: 1, y: 0 });

  if (leftCol) gsap.set(leftCol, { opacity: 1, y: 0 });
  factCells.forEach((cell) => {
    gsap.set(cell, { opacity: 1, y: 0 });
    const numEl = cell.querySelector(".fact-number");
    const target = cell.getAttribute("data-target") || "";
    const suffix = cell.getAttribute("data-suffix") || "";
    if (numEl && target) {
      numEl.textContent = `${target}${suffix}`;
    }
  });

  gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.3 });
}
