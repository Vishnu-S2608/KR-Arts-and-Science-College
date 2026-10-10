/**
 * ============================================================================
 * KR Arts And Science College - Pro Preloader Controller ("SEAL ASSEMBLE")
 * Stack: Vite + GSAP + Lenis
 * Rules: Zero icons, zero emoji, zero video, zero sound.
 * Real loading progress, responsive iris/split exit, accessibility, reduced-motion.
 * ============================================================================
 */

import gsap from "gsap";
import { getLenis } from "../../js/smooth-scroll.js";

export function initPreloader(onCompleteCallback) {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
    window.__preloaderDone = true;
    window.dispatchEvent(new CustomEvent("preloader:done"));
    if (typeof onCompleteCallback === "function") onCompleteCallback();
    return;
  }

  // Session storage check for repeat visits in the same session
  const hasSeenPreloader = sessionStorage.getItem("kr-preloader-seen") === "true";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // Track previous active element for accessibility focus restoration
  const previousActiveElement = document.activeElement;

  // DOM Elements
  const stage = preloader.querySelector("#krPreloaderStage");
  const sealWrap = preloader.querySelector("#krSealWrap");
  const goldDot = preloader.querySelector("#krGoldDot");
  const ringOuter = preloader.querySelector(".kr-ring-outer");
  const ringProgress = preloader.querySelector(".kr-ring-progress");
  const ringMiddle = preloader.querySelector(".kr-ring-middle");
  const ringInner = preloader.querySelector(".kr-ring-inner");
  const textGroup = preloader.querySelector("#krSealTextGroup");
  const textChars = preloader.querySelectorAll(".kr-seal-char");
  const starLeft = preloader.querySelector("#krStarLeft");
  const starRight = preloader.querySelector("#krStarRight");
  const starLeftFlyer = preloader.querySelector("#krStarLeftFlyer");
  const starRightFlyer = preloader.querySelector("#krStarRightFlyer");
  const sparksLeft = preloader.querySelectorAll("#krSparkLeft .kr-spark-line");
  const sparksRight = preloader.querySelectorAll("#krSparkRight .kr-spark-line");
  const paintingWrap = preloader.querySelector("#krPaintingWrap");
  const paintingImg = preloader.querySelector("#krPaintingImg");
  const paintingOverlay = preloader.querySelector("#krPaintingOverlay");
  const paintingShine = preloader.querySelector("#krPaintingShine");
  const shutterContainer = preloader.querySelector("#krShutterContainer");
  const mottoWrap = preloader.querySelector("#krMottoWrap");
  const motto = preloader.querySelector("#krMotto");
  const counterVal = preloader.querySelector("#krCounterVal");
  const counterBox = preloader.querySelector("#krCounter");
  const skipBtn = preloader.querySelector("#krSkipBtn");
  const srStatus = preloader.querySelector("#krSrStatus");
  const curtainTop = preloader.querySelector(".kr-curtain-top");
  const curtainBottom = preloader.querySelector(".kr-curtain-bottom");

  // State flags
  let isExiting = false;
  let isDone = false;
  let isUnlocked = false;
  let hasFiredDoneEvent = false;
  let mainTl = null;
  let idleTextTween = null;
  let failSafeTimer = null;
  let progressProxy = { val: 0 };
  let currentTargetProgress = 0;
  let startTime = performance.now();
  let lastAnnouncedPercent = -1;

  // Circumference constants (viewBox 500x500)
  // Outer ring: r = 238 => C = 2 * PI * 238 ≈ 1495.4
  // Middle ring: r = 211 => C = 2 * PI * 211 ≈ 1325.8
  // Inner ring: r = 130 => C = 2 * PI * 130 ≈ 816.8
  const C_OUTER = 1495.4;
  const C_MIDDLE = 1325.8;
  const C_INNER = 816.8;

  // 1. Lock scrolling & isolate accessibility
  document.documentElement.classList.add("kr-preloader-locked");
  document.body.classList.add("kr-preloader-locked");
  try {
    const lenis = getLenis() || window.__lenis;
    lenis?.stop();
  } catch (e) {
    // ignore
  }

  const mainContent = document.getElementById("main-content") || document.querySelector("main");
  if (mainContent) {
    mainContent.setAttribute("aria-hidden", "true");
  }

  // Unlock function (guaranteed single run with fallback)
  function unlockScrollAndPage() {
    if (isUnlocked) return;
    isUnlocked = true;
    document.documentElement.classList.remove("kr-preloader-locked");
    document.body.classList.remove("kr-preloader-locked");
    try {
      const lenis = getLenis() || window.__lenis;
      lenis?.start();
    } catch (e) {
      // ignore
    }
    if (mainContent) {
      mainContent.removeAttribute("aria-hidden");
    }
  }

  // Trigger preloader:done custom event exactly once
  function notifyDone() {
    if (hasFiredDoneEvent) return;
    hasFiredDoneEvent = true;
    window.__preloaderDone = true;
    window.dispatchEvent(new CustomEvent("preloader:done"));
    if (typeof onCompleteCallback === "function") {
      try {
        onCompleteCallback();
      } catch (err) {
        console.error("Preloader onCompleteCallback error:", err);
      }
    }
  }

  // Teardown preloader completely
  function destroyPreloader() {
    if (isDone) return;
    isDone = true;

    if (failSafeTimer) clearTimeout(failSafeTimer);
    window.removeEventListener("keydown", handleKeyDown);

    if (mainTl) mainTl.kill();
    if (idleTextTween) idleTextTween.kill();
    gsap.killTweensOf(progressProxy);

    unlockScrollAndPage();
    notifyDone();

    // Restore focus to previous active element or main heading
    try {
      if (previousActiveElement && typeof previousActiveElement.focus === "function") {
        previousActiveElement.focus();
      } else {
        const heading = document.querySelector("h1") || mainContent;
        heading?.focus?.();
      }
    } catch (e) {
      // ignore
    }

    // Remove preloader DOM element
    if (preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  }

  // Focus trap on Skip button & keyboard listener (Escape / Enter / Tab)
  function handleKeyDown(e) {
    if (isDone || isExiting) return;
    if (e.key === "Escape" || (e.key === "Enter" && document.activeElement === skipBtn)) {
      e.preventDefault();
      triggerSkip();
    } else if (e.key === "Tab") {
      // Trap focus on Skip button while preloader is active
      if (skipBtn && skipBtn.style.display !== "none" && skipBtn.style.opacity > 0) {
        e.preventDefault();
        skipBtn.focus();
      }
    }
  }
  window.addEventListener("keydown", handleKeyDown);

  // 6s Fail-Safe: Force finish no matter what
  failSafeTimer = setTimeout(() => {
    if (!isDone) {
      console.warn("Preloader 6s fail-safe triggered.");
      triggerExitSequence();
    }
  }, 6000);

  // --------------------------------------------------------------------------
  // Progress Proxy & Visual Update
  // --------------------------------------------------------------------------
  function setProgressVisual(percent) {
    const clamped = Math.min(100, Math.max(0, percent));
    const rounded = Math.floor(clamped);

    // Update Counter (3-digit tabular "000" - "100")
    if (counterVal) {
      counterVal.textContent = rounded.toString().padStart(3, "0");
    }

    // Update Outer Ring Progress (clockwise fill)
    if (ringProgress) {
      const offset = C_OUTER * (1 - clamped / 100);
      ringProgress.style.strokeDashoffset = offset;
    }

    // Accessibility announcement every 10 percent
    const tens = Math.floor(rounded / 10) * 10;
    if (tens !== lastAnnouncedPercent && srStatus) {
      lastAnnouncedPercent = tens;
      srStatus.textContent = `Loading KR Arts And Science College, ${tens} percent`;
    }
  }

  function applyProgressTarget(target) {
    if (target <= currentTargetProgress) return;
    currentTargetProgress = target;

    gsap.to(progressProxy, {
      val: currentTargetProgress,
      duration: 0.4,
      ease: "power1.out",
      onUpdate: () => {
        setProgressVisual(progressProxy.val);
      },
      onComplete: () => {
        if (progressProxy.val >= 100 && !isExiting) {
          checkFinishCondition();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // REAL LOADING TRACKER (Weighted sum)
  // - document.fonts.ready: 20%
  // - critical images: 40% (preload with Image() and decode())
  // - DOM & window load: 30% (DOM ready 15%, load 15%)
  // - GSAP / Lenis init: 10%
  // Min display time 2.6s, max 6s
  // --------------------------------------------------------------------------
  let weights = { fonts: 0, images: 0, dom: 0, win: 0, framework: 10 };

  function recalculateProgress() {
    const rawSum = weights.fonts + weights.images + weights.dom + weights.win + weights.framework;
    const elapsed = performance.now() - startTime;
    // Ensure display time of at least 2.6s for full 100%
    const timeRatio = Math.min(1, elapsed / 2600);
    const smoothedTarget = Math.min(rawSum, Math.round(timeRatio * 100));

    applyProgressTarget(smoothedTarget);
  }

  // Keep pumping progress to smoothly honor the 2.6s minimum display time
  const timerPumper = setInterval(() => {
    if (isExiting || isDone) {
      clearInterval(timerPumper);
      return;
    }
    const elapsed = performance.now() - startTime;
    if (elapsed >= 2600) {
      const rawSum = weights.fonts + weights.images + weights.dom + weights.win + weights.framework;
      if (rawSum >= 100) {
        applyProgressTarget(100);
        clearInterval(timerPumper);
      }
    } else {
      recalculateProgress();
    }
  }, 100);

  // 1. Fonts (20%)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready
      .then(() => { weights.fonts = 20; recalculateProgress(); })
      .catch(() => { weights.fonts = 20; recalculateProgress(); });
  } else {
    weights.fonts = 20;
    recalculateProgress();
  }

  // 2. Critical Images (40%)
  const criticalImages = ["/assets/logo-painting.webp", "/images/hero/hero-bg.png"];
  let loadedCount = 0;
  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
    const done = () => {
      loadedCount++;
      weights.images = Math.round((loadedCount / criticalImages.length) * 40);
      recalculateProgress();
    };
    if (img.decode) {
      img.decode().then(done).catch(done);
    } else {
      img.onload = done;
      img.onerror = done;
    }
  });

  // 3. DOM Ready (15%) & Window Load (15%)
  if (document.readyState === "interactive" || document.readyState === "complete") {
    weights.dom = 15;
    recalculateProgress();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      weights.dom = 15;
      recalculateProgress();
    }, { once: true });
  }

  if (document.readyState === "complete") {
    weights.win = 15;
    recalculateProgress();
  } else {
    window.addEventListener("load", () => {
      weights.win = 15;
      recalculateProgress();
    }, { once: true });
  }

  // --------------------------------------------------------------------------
  // Shutter Iris Blades Construction (10 on desktop, 6 on mobile)
  // --------------------------------------------------------------------------
  function buildShutterBlades() {
    if (!shutterContainer) return;
    shutterContainer.innerHTML = "";
    const bladeCount = isMobile ? 6 : 10;
    const angleStep = 360 / bladeCount;

    for (let i = 0; i < bladeCount; i++) {
      const angle = i * angleStep;
      const blade = document.createElement("div");
      blade.className = "kr-shutter-blade";
      blade.dataset.baseAngle = angle.toString();
      blade.style.transform = `rotate(${angle}deg) scale(1)`;
      shutterContainer.appendChild(blade);
    }
  }

  // --------------------------------------------------------------------------
  // Check Finish Condition
  // --------------------------------------------------------------------------
  function checkFinishCondition() {
    if (isExiting || isDone) return;
    // Condition: progress = 100 AND assembly timeline reached >= 1.60s (or skipped)
    const isTimelineReady = mainTl ? mainTl.time() >= 1.60 : true;
    const isTimeElapsed = (performance.now() - startTime) >= 2600;

    if (progressProxy.val >= 100 && isTimelineReady && isTimeElapsed) {
      triggerExitSequence();
    }
  }

  // --------------------------------------------------------------------------
  // SKIP FUNCTIONALITY
  // --------------------------------------------------------------------------
  function triggerSkip() {
    if (isExiting || isDone) return;
    // Accelerate timeline and jump to finish
    if (mainTl && mainTl.isActive()) {
      mainTl.timeScale(3);
    }
    applyProgressTarget(100);
    setTimeout(() => {
      triggerExitSequence(true);
    }, 150);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", triggerSkip);
  }

  // --------------------------------------------------------------------------
  // FINISH & EXIT SEQUENCE
  // --------------------------------------------------------------------------
  function triggerExitSequence(isSkipped = false) {
    if (isExiting || isDone) return;
    isExiting = true;
    sessionStorage.setItem("kr-preloader-seen", "true");

    // Fast-forward main assembly timeline to completion so all components are fully assembled
    if (mainTl && mainTl.isActive()) {
      mainTl.progress(1);
    }

    const exitTl = gsap.timeline({
      onComplete: () => {
        destroyPreloader();
      }
    });

    // 1. Shine band sweeps across painting (0.8s, power2.inOut)
    if (paintingShine && !isSkipped && !prefersReduced) {
      exitTl.fromTo(paintingShine,
        { transform: "rotate(20deg) translateX(-350%)" },
        { transform: "rotate(20deg) translateX(350%)", duration: 0.8, ease: "power2.inOut" },
        0
      );
    }

    // 2. Counter hits 100, progress ring turns solid
    exitTl.add(() => {
      setProgressVisual(100);
      if (counterVal) counterVal.textContent = "100";
      if (ringProgress) ringProgress.style.strokeDashoffset = "0";
    }, isSkipped ? 0 : 0.5);

    // Hold 0.3s
    const exitStartTime = isSkipped ? 0.1 : 0.8;

    // Check device mode for exit
    if (prefersReduced) {
      // Reduced motion: simple fade out (0.4s)
      exitTl.to(preloader, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onStart: () => {
          setTimeout(notifyDone, 200); // 50% through fade
        }
      }, exitStartTime);
    } else if (isMobile) {
      // MOBILE: Fade out seal elements (0.5s), split curtain slide away (0.9s expo.inOut)
      exitTl.to([sealWrap, mottoWrap, counterBox, skipBtn], {
        scale: 1.08,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, exitStartTime);

      exitTl.to(curtainTop, {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut"
      }, exitStartTime + 0.3);

      exitTl.to(curtainBottom, {
        yPercent: 100,
        duration: 0.9,
        ease: "expo.inOut",
        onStart: () => {
          // Fire preloader:done at 55% of the split slide
          setTimeout(notifyDone, 495); // 0.9 * 0.55 = ~0.495s
        }
      }, exitStartTime + 0.3);
    } else {
      // DESKTOP & TABLET: Iris Open Circular Hole Mask
      exitTl.to([ringOuter, ringProgress, ringMiddle, ringInner, textGroup, starLeft, starRight, mottoWrap, counterBox, skipBtn], {
        scale: 1.08,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "center center"
      }, exitStartTime);

      // Painting circle scales up slightly (1 to 1.12, 0.3s)
      if (paintingWrap) {
        exitTl.to(paintingWrap, {
          scale: 1.12,
          duration: 0.3,
          ease: "power2.out"
        }, exitStartTime);
      }

      // Animate circular hole mask from painting radius to 150vmax
      exitTl.add(() => {
        const sealSize = sealWrap ? sealWrap.offsetWidth : 420;
        const initialRadius = Math.round(sealSize * 0.25);
        const maxRadius = Math.round(Math.max(window.innerWidth, window.innerHeight) * 1.5);

        preloader.classList.add("is-iris-exit");
        preloader.style.setProperty("--r", `${initialRadius}px`);

        // Painting fades out as the hole begins to expand
        if (paintingWrap) {
          gsap.to(paintingWrap, { opacity: 0, duration: 0.35, ease: "power1.in" });
        }

        const maskObj = { r: initialRadius };
        gsap.to(maskObj, {
          r: maxRadius,
          duration: 1.1,
          ease: "expo.inOut",
          onUpdate: () => {
            preloader.style.setProperty("--r", `${Math.round(maskObj.r)}px`);
          }
        });

        // Fire custom event "preloader:done" at 55% of the 1.1s iris animation (0.605s)
        setTimeout(() => {
          notifyDone();
        }, 605);
      }, exitStartTime + 0.3);

      // Hold until iris finishes (1.1s + padding)
      exitTl.to({}, { duration: 1.45 }, exitStartTime + 0.3);
    }
  }

  // --------------------------------------------------------------------------
  // CASE A: PREFERS REDUCED MOTION
  // --------------------------------------------------------------------------
  if (prefersReduced) {
    if (skipBtn) skipBtn.style.display = "none";
    if (goldDot) goldDot.style.display = "none";

    // Set seal fully assembled
    gsap.set([ringOuter, ringMiddle, ringInner], { strokeDashoffset: 0 });
    gsap.set(textChars, { opacity: 1 });
    gsap.set([starLeft, starRight], { opacity: 1 });
    gsap.set(paintingOverlay, { opacity: 0 });
    gsap.set(paintingImg, { scale: 1 });
    if (shutterContainer) shutterContainer.style.display = "none";
    gsap.set(motto, { y: 0, opacity: 1 });
    gsap.set([counterBox, stage], { opacity: 1 });

    // Minimum display 0.8s
    setTimeout(() => {
      applyProgressTarget(100);
      setTimeout(() => {
        triggerExitSequence();
      }, 800);
    }, 200);

    return;
  }

  // --------------------------------------------------------------------------
  // CASE B: REPEAT VISITS (SHORT 1s VERSION)
  // --------------------------------------------------------------------------
  if (hasSeenPreloader) {
    if (skipBtn) skipBtn.style.display = "none";
    if (goldDot) goldDot.style.display = "none";

    // Set seal fully assembled
    gsap.set([ringOuter, ringMiddle, ringInner], { strokeDashoffset: 0 });
    gsap.set(textChars, { opacity: 1 });
    gsap.set([starLeft, starRight], { opacity: 1 });
    gsap.set(paintingOverlay, { opacity: 0 });
    gsap.set(paintingImg, { scale: 1 });
    if (shutterContainer) shutterContainer.style.display = "none";
    gsap.set(motto, { y: 0, opacity: 1 });
    gsap.set(counterBox, { opacity: 1 });

    // Seal fades in (0.25s)
    gsap.fromTo(stage, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });

    // Outer ring fills once & counter counts (0.45s)
    gsap.to(progressProxy, {
      val: 100,
      duration: 0.45,
      delay: 0.2,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgressVisual(progressProxy.val);
      },
      onComplete: () => {
        triggerExitSequence();
      }
    });

    return;
  }

  // --------------------------------------------------------------------------
  // CASE C: FIRST VISIT - FULL "SEAL ASSEMBLE" SEQUENCE (~3.6s GSAP)
  // --------------------------------------------------------------------------
  buildShutterBlades();

  mainTl = gsap.timeline({
    defaults: { ease: "power2.out" },
    onUpdate: () => {
      // Check finish trigger once progress is 100
      if (progressProxy.val >= 100 && !isExiting) {
        checkFinishCondition();
      }
    }
  });

  // 0.00: Center gold dot pulses once (scale 1 to 1.6 to 1, 0.5s)
  mainTl.fromTo(goldDot,
    { scale: 0, opacity: 1 },
    { scale: 1, duration: 0.15, ease: "power2.out" },
    0.00
  );
  mainTl.to(goldDot,
    { scale: 1.6, duration: 0.25, ease: "sine.inOut" },
    0.15
  );
  mainTl.to(goldDot,
    { scale: 1, duration: 0.15, ease: "sine.inOut" },
    0.40
  );

  // 0.30: RINGS DRAW
  // Inner ring clockwise (1.1s expo.inOut)
  mainTl.to(ringInner, {
    strokeDashoffset: 0,
    duration: 1.1,
    ease: "expo.inOut"
  }, 0.30);

  // Gold dot expands into inner ring as it draws and fades out
  mainTl.to(goldDot, {
    scale: 43,
    opacity: 0,
    duration: 0.75,
    ease: "expo.out"
  }, 0.30);

  // Middle ring counter-clockwise (1.1s expo.inOut, stagger 0.15s -> 0.45s)
  mainTl.to(ringMiddle, {
    strokeDashoffset: 0,
    duration: 1.1,
    ease: "expo.inOut"
  }, 0.45);

  // Outer ring clockwise (1.1s expo.inOut, stagger 0.15s -> 0.60s)
  mainTl.to(ringOuter, {
    strokeDashoffset: 0,
    duration: 1.1,
    ease: "expo.inOut"
  }, 0.60);

  // 0.70: SHUTTER OPEN
  // Camera iris blades rotate (0 -> 70deg) & slide outward (scale 1 -> 1.4)
  const blades = shutterContainer ? shutterContainer.querySelectorAll(".kr-shutter-blade") : [];
  blades.forEach((b) => {
    const baseAngle = parseFloat(b.dataset.baseAngle || "0");
    mainTl.to(b, {
      rotation: baseAngle + 70,
      scale: 1.4,
      duration: 1.0,
      ease: "expo.inOut"
    }, 0.70);
  });

  // Underneath: painting scales from 1.3 to 1, brightness overlay opacity 0.6 to 0 (brightness 0.4 to 1)
  if (paintingImg) {
    mainTl.fromTo(paintingImg,
      { scale: 1.3 },
      { scale: 1.0, duration: 1.0, ease: "expo.inOut" },
      0.70
    );
  }
  if (paintingOverlay) {
    mainTl.fromTo(paintingOverlay,
      { opacity: 0.6 },
      { opacity: 0, duration: 1.0, ease: "expo.inOut" },
      0.70
    );
  }

  // Remove shutter blades from DOM when finished opening
  mainTl.add(() => {
    if (shutterContainer && shutterContainer.parentNode) {
      shutterContainer.parentNode.removeChild(shutterContainer);
    }
  }, 1.75);

  // 0.80: Skip button fades in & traps keyboard focus
  if (skipBtn) {
    mainTl.to(skipBtn, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      onStart: () => {
        skipBtn.focus?.();
      }
    }, 0.80);
  }

  // 1.10: RING TEXT WRITES ("KR ARTS AND SCIENCE COLLEGE")
  // Letters appear one by one: opacity 0 -> 1 and outward dy offset -6 -> 0, stagger 0.045s
  if (textChars.length) {
    mainTl.fromTo(textChars,
      { opacity: 0, attr: { dy: -6 } },
      { opacity: 1, attr: { dy: 0 }, stagger: 0.045, duration: 0.4, ease: "power2.out" },
      1.10
    );
  }

  // Whole text ring rotates 20deg over write, then keeps idling at 40s per turn
  if (textGroup) {
    mainTl.fromTo(textGroup,
      { rotation: -10, transformOrigin: "250px 250px" },
      {
        rotation: 10,
        transformOrigin: "250px 250px",
        duration: 1.25,
        ease: "power1.inOut",
        onComplete: () => {
          idleTextTween = gsap.to(textGroup, {
            rotation: "+=360",
            transformOrigin: "250px 250px",
            duration: 40,
            ease: "none",
            repeat: -1
          });
        }
      },
      1.10
    );
  }

  // 1.40: STARS FLY IN
  // Fly in along curved paths from screen edges, rotating 360deg, land at 9 and 3 o'clock (1.0s, power3.out)
  if (starLeftFlyer) {
    mainTl.fromTo(starLeftFlyer,
      { x: -window.innerWidth * 0.6, y: -60, rotation: -360, opacity: 0 },
      { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
      1.40
    );
  }
  if (starRightFlyer) {
    mainTl.fromTo(starRightFlyer,
      { x: window.innerWidth * 0.6, y: -60, rotation: 360, opacity: 0 },
      { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
      1.40
    );
  }

  // On landing (2.40s): 8 short gold lines burst outward and fade (0.5s)
  if (sparksLeft.length) {
    mainTl.fromTo(sparksLeft,
      { scaleY: 0, opacity: 1 },
      { scaleY: 1, opacity: 0, duration: 0.5, stagger: 0.02, ease: "power2.out" },
      2.40
    );
  }
  if (sparksRight.length) {
    mainTl.fromTo(sparksRight,
      { scaleY: 0, opacity: 1 },
      { scaleY: 1, opacity: 0, duration: 0.5, stagger: 0.02, ease: "power2.out" },
      2.40
    );
  }

  // 1.60: MOTTO & COUNTER
  // Motto reveals from mask (yPercent 110 -> 0, 0.8s power3.out)
  if (motto) {
    gsap.set(motto, { yPercent: 110, y: 0 });
    mainTl.fromTo(motto,
      { yPercent: 110, y: 0 },
      { yPercent: 0, y: 0, duration: 0.8, ease: "power3.out" },
      1.60
    );
  }

  // Counter fades in (0.5s)
  if (counterBox) {
    mainTl.to(counterBox, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 1.60);
  }
}
