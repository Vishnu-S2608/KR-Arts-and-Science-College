/**
 * ============================================================================
 * KR Arts And Science College - PLACEMENTS Controller
 * Concept: 3 Running Rows Marquee (Edge-to-Edge) + Lenis Scroll Boost
 * Stack: Vite + vanilla JS + GSAP + ScrollTrigger + Lenis
 * Palette: Mist Blue (Zero pure white)
 * ============================================================================
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placementsData from "../../data/placements.json";
import { getLenis } from "../../js/smooth-scroll.js";

gsap.registerPlugin(ScrollTrigger);

/**
 * Generate 2-character initials for fallback photo block
 * e.g., "Kasi Raja" -> "KR", "Deepa" -> "DE"
 */
function getInitials(fullName) {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Create a student card DOM element
 */
function createStudentElement(student, isDuplicate = false) {
  const item = document.createElement("div");
  item.className = "student-item";

  if (isDuplicate) {
    item.setAttribute("aria-hidden", "true");
    item.setAttribute("tabindex", "-1");
  } else {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "listitem");
  }

  const offersText = student.offers === 1 ? "1 offer" : `${student.offers} offers`;
  const initials = getInitials(student.name);

  item.innerHTML = `
    <div class="student-photo-frame">
      <img 
        class="student-photo" 
        src="${student.photo}" 
        alt="${isDuplicate ? "" : `${student.name}, placed student`}"
        width="400" 
        height="500" 
        loading="lazy" 
      />
      <div class="student-initials" style="display: none;" aria-hidden="true">
        ${initials}
      </div>
    </div>
    <h3 class="student-name">${student.name}</h3>
    <p class="student-offers">${offersText}</p>
  `;

  // Fallback to initials block when photo is missing or fails
  const img = item.querySelector(".student-photo");
  const initialsBox = item.querySelector(".student-initials");

  if (img && initialsBox) {
    img.addEventListener("error", () => {
      img.style.display = "none";
      initialsBox.style.display = "flex";
    });
  }

  return item;
}

/**
 * Main Placements Controller
 */
export function initPlacements() {
  const section = document.getElementById("placements");
  if (!section) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Data Sorting: Highest offers first, ties alphabetical
  // Published figures: 18 students placed, 70 offer letters
  // TODO: confirm 70 vs 72 with the college (Individual offers sum to 72)
  const rawList = Array.isArray(placementsData) ? placementsData : [];
  const sortedStudents = [...rawList].sort((a, b) => {
    if (b.offers !== a.offers) return b.offers - a.offers;
    return a.name.localeCompare(b.name);
  });

  // 2. Setup Numbers Count-Up (18 Placed, 70 Offers)
  setupStatsCountUp(section, isReducedMotion);

  // 3. Render Static Grid for Reduced-Motion Users
  const staticGrid = section.querySelector("#placementsStaticGrid");
  if (staticGrid) {
    staticGrid.innerHTML = "";
    sortedStudents.forEach((student) => {
      const li = createStudentElement(student, false);
      staticGrid.appendChild(li);
    });
  }

  if (isReducedMotion) {
    return;
  }

  // 4. Setup Running Rows Marquee
  setupRunningRows(section, sortedStudents);
}

/**
 * Setup Odometer-style plain number count-up: 0 to 18 and 0 to 70 in 1.2s (power2.out)
 */
function setupStatsCountUp(section, isReducedMotion) {
  const placedEl = section.querySelector("#placementsPlacedNum");
  const offersEl = section.querySelector("#placementsOffersNum");
  if (!placedEl || !offersEl) return;

  const targetPlaced = 18;
  const targetOffers = 70;

  if (isReducedMotion) {
    placedEl.textContent = String(targetPlaced);
    offersEl.textContent = String(targetOffers);
    return;
  }

  placedEl.textContent = "0";
  offersEl.textContent = "0";

  const header = section.querySelector(".placements-header");
  if (!header) return;

  ScrollTrigger.create({
    trigger: header,
    start: "top 85%",
    once: true,
    onEnter: () => {
      const stats = { placed: 0, offers: 0 };
      gsap.to(stats, {
        placed: targetPlaced,
        offers: targetOffers,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          placedEl.textContent = String(Math.round(stats.placed));
          offersEl.textContent = String(Math.round(stats.offers));
        }
      });
    }
  });
}

/**
 * Setup 3 Running Rows Marquee with GSAP continuous loop & interactive controls
 */
function setupRunningRows(section, sortedStudents) {
  const marqueeArea = section.querySelector("#placementsMarqueeArea");
  if (!marqueeArea) return;

  let rowTweens = [];
  let isUserPaused = false;
  let isSectionVisible = false;
  let hasEntered = false;

  function buildRows() {
    // Kill existing tweens if rebuilding
    rowTweens.forEach((t) => t && t.kill());
    rowTweens = [];

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    const isLandscapeMobile =
      window.innerWidth <= 920 &&
      window.innerHeight <= 500 &&
      window.innerWidth > window.innerHeight;

    let rowsConfig = [];
    const row3Wrap = section.querySelector('[data-row="3"]');

    if (isLandscapeMobile) {
      rowsConfig = [
        { id: "marqueeTrack1", dir: "left", students: sortedStudents.slice(0, 9) },
        { id: "marqueeTrack2", dir: "right", students: sortedStudents.slice(9, 18) }
      ];
      if (row3Wrap) row3Wrap.style.display = "none";
    } else {
      rowsConfig = [
        { id: "marqueeTrack1", dir: "left", students: sortedStudents.slice(0, 6) },
        { id: "marqueeTrack2", dir: "right", students: sortedStudents.slice(6, 12) },
        { id: "marqueeTrack3", dir: "left", students: sortedStudents.slice(12, 18) }
      ];
      if (row3Wrap) row3Wrap.style.display = "block";
    }

    const itemWidth = isMobile ? 140 : isTablet ? 180 : 217;
    const itemGap = isMobile ? 16 : isTablet ? 20 : 24;
    const unitWidth = itemWidth + itemGap;

    rowsConfig.forEach((cfg) => {
      const track = section.querySelector(`#${cfg.id}`);
      if (!track) return;

      track.innerHTML = "";

      // Real items (tabindex 0, role listitem)
      cfg.students.forEach((student) => {
        track.appendChild(createStudentElement(student, false));
      });

      // Duplicates for seamless loop (aria-hidden, tabindex -1)
      cfg.students.forEach((student) => {
        track.appendChild(createStudentElement(student, true));
      });

      const baseSpeed = cfg.dir === "right" ? (isMobile ? 25 : 34) : (isMobile ? 30 : 40);
      const halfWidth = cfg.students.length * unitWidth;
      const duration = halfWidth / baseSpeed;

      let tween;
      if (cfg.dir === "left") {
        tween = gsap.to(track, {
          xPercent: -50,
          duration: duration,
          ease: "none",
          repeat: -1,
          paused: !hasEntered || isUserPaused || !isSectionVisible
        });
      } else {
        tween = gsap.fromTo(
          track,
          { xPercent: -50 },
          {
            xPercent: 0,
            duration: duration,
            ease: "none",
            repeat: -1,
            paused: !hasEntered || isUserPaused || !isSectionVisible
          }
        );
      }

      rowTweens.push(tween);

      const rowWrapper = track.closest(".marquee-row-wrapper");
      if (rowWrapper && !rowWrapper._hasListeners) {
        rowWrapper._hasListeners = true;

        // Hover: smooth slow-to-stop in 0.5s, resume in 0.5s
        rowWrapper.addEventListener("mouseenter", () => {
          if (!isUserPaused) {
            const currentTween = rowTweens.find((t) => t.targets().includes(track));
            if (currentTween) gsap.to(currentTween, { timeScale: 0, duration: 0.5, ease: "power1.out" });
          }
        });

        rowWrapper.addEventListener("mouseleave", () => {
          if (!isUserPaused) {
            const currentTween = rowTweens.find((t) => t.targets().includes(track));
            if (currentTween) gsap.to(currentTween, { timeScale: 1, duration: 0.5, ease: "power1.in" });
          }
        });

        // Focus / blur
        rowWrapper.addEventListener("focusin", () => {
          if (!isUserPaused) {
            const currentTween = rowTweens.find((t) => t.targets().includes(track));
            if (currentTween) gsap.to(currentTween, { timeScale: 0, duration: 0.4, ease: "power1.out" });
          }
        });

        rowWrapper.addEventListener("focusout", () => {
          if (!isUserPaused) {
            const currentTween = rowTweens.find((t) => t.targets().includes(track));
            if (currentTween) gsap.to(currentTween, { timeScale: 1, duration: 0.4, ease: "power1.in" });
          }
        });

        // Touch hold / release
        rowWrapper.addEventListener(
          "touchstart",
          () => {
            if (!isUserPaused) {
              const currentTween = rowTweens.find((t) => t.targets().includes(track));
              if (currentTween) gsap.to(currentTween, { timeScale: 0, duration: 0.3, ease: "power1.out" });
            }
          },
          { passive: true }
        );

        rowWrapper.addEventListener(
          "touchend",
          () => {
            if (!isUserPaused) {
              const currentTween = rowTweens.find((t) => t.targets().includes(track));
              if (currentTween) gsap.to(currentTween, { timeScale: 1, duration: 0.3, ease: "power1.in" });
            }
          },
          { passive: true }
        );

        rowWrapper.addEventListener(
          "touchcancel",
          () => {
            if (!isUserPaused) {
              const currentTween = rowTweens.find((t) => t.targets().includes(track));
              if (currentTween) gsap.to(currentTween, { timeScale: 1, duration: 0.3, ease: "power1.in" });
            }
          },
          { passive: true }
        );
      }
    });
  }

  // Initial build
  buildRows();

  // Rebuild on resize/orientation change if layout tier changes
  let resizeTimer;
  let lastWasLandscape =
    window.innerWidth <= 920 &&
    window.innerHeight <= 500 &&
    window.innerWidth > window.innerHeight;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const isLandscapeMobile =
        window.innerWidth <= 920 &&
        window.innerHeight <= 500 &&
        window.innerWidth > window.innerHeight;
      if (isLandscapeMobile !== lastWasLandscape) {
        lastWasLandscape = isLandscapeMobile;
        buildRows();
      }
    }, 150);
  });

  // 5. Entrance Fade-Up (start "top 80%", once)
  gsap.set(marqueeArea, { opacity: 0, y: 24 });

  ScrollTrigger.create({
    trigger: section,
    start: "top 80%",
    once: true,
    onEnter: () => {
      hasEntered = true;
      gsap.to(marqueeArea, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        onComplete: () => {
          if (!isUserPaused && isSectionVisible) {
            rowTweens.forEach((t) => t.play());
          }
        }
      });
    }
  });

  // 6. Pause when Section is off-screen (IntersectionObserver)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isSectionVisible = entry.isIntersecting;
        if (!isSectionVisible) {
          rowTweens.forEach((t) => t.pause());
        } else if (!isUserPaused && hasEntered) {
          rowTweens.forEach((t) => t.play());
        }
      });
    },
    { threshold: 0.05 }
  );
  observer.observe(section);

  // 7. Pause when Tab is Hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      rowTweens.forEach((t) => t.pause());
    } else if (isSectionVisible && !isUserPaused && hasEntered) {
      rowTweens.forEach((t) => t.play());
    }
  });

  // 8. Scroll Link: Lenis Scroll Velocity (speeds up to 2.5x, eases back to 1 within 0.6s)
  const lenis = getLenis() || window.__lenis;
  if (lenis && typeof lenis.on === "function") {
    lenis.on("scroll", ({ velocity }) => {
      if (isUserPaused || !isSectionVisible) return;
      const vel = Math.abs(velocity || 0);
      if (vel > 0.1) {
        const boost = Math.min(2.5, 1 + vel * 0.14);
        rowTweens.forEach((t) => {
          if (t && t.isActive()) {
            t.timeScale(boost);
            gsap.to(t, { timeScale: 1, duration: 0.6, ease: "power1.out", overwrite: "auto" });
          }
        });
      }
    });
  } else {
    // Window scroll velocity fallback
    let lastScrollY = window.scrollY;
    window.addEventListener(
      "scroll",
      () => {
        if (isUserPaused || !isSectionVisible) return;
        const delta = Math.abs(window.scrollY - lastScrollY);
        lastScrollY = window.scrollY;
        if (delta > 2) {
          const boost = Math.min(2.5, 1 + delta * 0.04);
          rowTweens.forEach((t) => {
            if (t && t.isActive()) {
              t.timeScale(boost);
              gsap.to(t, { timeScale: 1, duration: 0.6, ease: "power1.out", overwrite: "auto" });
            }
          });
        }
      },
      { passive: true }
    );
  }

  // 9. Accessibility Pause / Play Toggle Button
  const toggleBtn = section.querySelector("#marqueeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isUserPaused = !isUserPaused;
      toggleBtn.setAttribute("aria-pressed", String(isUserPaused));
      toggleBtn.textContent = isUserPaused ? "Play" : "Pause";

      rowTweens.forEach((t) => {
        if (t) {
          if (isUserPaused) {
            gsap.to(t, {
              timeScale: 0,
              duration: 0.3,
              onComplete: () => t.pause()
            });
          } else {
            t.play();
            gsap.to(t, { timeScale: 1, duration: 0.3 });
          }
        }
      });
    });
  }
}
