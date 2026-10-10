import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initMotion() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Scroll Progress Bar
  const progressBar = document.querySelector(".scroll-progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }, { passive: true });
  }

  if (prefersReduced) {
    // If reduced motion, just reveal elements immediately
    document.querySelectorAll(".split-line-inner").forEach((el) => {
      el.style.transform = "none";
      el.style.opacity = "1";
    });
    return;
  }

  // 2. Heading Split-Text Revealer
  initHeadingSplits();

  // 3. About Section is now handled by modular src/components/about/about.js
  // initAboutPinnedFill();

  // 4. Programmes Horizontal Scroll-Pinned Gallery & 3D Tilt
  initProgrammesHorizontalScroll();

  // 5. Stat Numbers Counter Animation
  initStatCounters();

  // 6. Life At KR Hover-List with Photo Swap
  initLifeAtKR();

  // 7. Clubs Marquee Scroll Direction Reversal
  initClubsMarquee();

  // 8. Recruiter Ticker Animation
  initRecruiterTicker();

  // 9. Giant Footer Text Reveal
  initFooterReveal();
}

/**
 * 2. Heading Split-Line Entrance Animation
 */
export function initHeadingSplits() {
  const splitInners = document.querySelectorAll(".split-line-inner");
  splitInners.forEach((line) => {
    gsap.to(line, {
      y: "0%",
      opacity: 1,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

/**
 * 3. About Section: Pinned Text lines fill in from light gray to deep blue
 */
function initAboutPinnedFill() {
  const aboutSection = document.querySelector(".about-section");
  const fillSpans = document.querySelectorAll(".about-fill-text span");
  if (!aboutSection || fillSpans.length === 0) return;

  ScrollTrigger.create({
    trigger: aboutSection,
    start: "top 60%",
    end: "bottom 70%",
    scrub: 1,
    onUpdate: (self) => {
      const count = fillSpans.length;
      const activeIndex = Math.floor(self.progress * count);
      fillSpans.forEach((span, i) => {
        if (i <= activeIndex) {
          span.classList.add("active");
        } else {
          span.classList.remove("active");
        }
      });
    },
  });
}

/**
 * 4. Programmes Horizontal Scroll-Pinned Gallery
 */
function initProgrammesHorizontalScroll() {
  const container = document.querySelector(".programmes-container");
  const track = document.querySelector(".programmes-track");
  if (!container || !track) return;

  // Horizontal scroll on desktop
  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function () {
      const totalScroll = track.scrollWidth - container.clientWidth;
      if (totalScroll > 0) {
        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 20%",
            end: () => `+=${totalScroll + 300}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }
  });

  // 3D Tilt on hover for programme cards
  const cards = document.querySelectorAll(".programme-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotationY: x * 8,
        rotationX: -y * 8,
        transformPerspective: 800,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

/**
 * 5. Animated Numbers Scroll Counters
 */
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-num[data-target]");
  statNumbers.forEach((stat) => {
    const target = parseFloat(stat.getAttribute("data-target") || "0");
    const suffix = stat.getAttribute("data-suffix") || "";

    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: target,
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: stat,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        stat.textContent = `${Math.round(counterObj.val)}${suffix}`;
      },
    });
  });
}

/**
 * 6. Life At KR Hover-List with Photo Swap
 */
function initLifeAtKR() {
  const items = document.querySelectorAll(".life-item");
  const layers = document.querySelectorAll(".life-photo-layer");
  if (items.length === 0 || layers.length === 0) return;

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const targetIndex = item.getAttribute("data-index");
      if (!targetIndex) return;

      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      layers.forEach((layer) => {
        if (layer.getAttribute("data-index") === targetIndex) {
          layer.classList.add("active");
          gsap.fromTo(
            layer,
            { clipPath: "circle(0% at 50% 50%)" },
            { clipPath: "circle(100% at 50% 50%)", duration: 0.6, ease: "power2.out" }
          );
        } else {
          layer.classList.remove("active");
        }
      });
    });
  });
}

/**
 * 7. Clubs Marquee: Reverses direction on scroll
 */
function initClubsMarquee() {
  const marqueeTrack = document.querySelector(".clubs-marquee-track");
  if (!marqueeTrack) return;

  let currentX = 0;
  let speed = -1.2;

  gsap.ticker.add(() => {
    currentX += speed;
    if (Math.abs(currentX) >= marqueeTrack.scrollWidth / 2) {
      currentX = 0;
    }
    marqueeTrack.style.transform = `translateX(${currentX}px)`;
  });

  ScrollTrigger.create({
    onUpdate: (self) => {
      // If scrolling downwards, move left; if scrolling upwards, reverse direction to move right!
      speed = self.direction === 1 ? -2.5 : 2.5;
    },
  });
}

/**
 * 8. Recruiter Ticker Animation
 */
function initRecruiterTicker() {
  const track = document.querySelector(".recruiters-track");
  if (!track) return;

  let currentX = 0;
  gsap.ticker.add(() => {
    currentX -= 1.0;
    if (Math.abs(currentX) >= track.scrollWidth / 2) {
      currentX = 0;
    }
    track.style.transform = `translateX(${currentX}px)`;
  });
}

/**
 * 9. Giant Footer Text Outline Reveal
 */
function initFooterReveal() {
  const giantTitle = document.querySelector(".footer-giant-title");
  if (!giantTitle) return;

  gsap.fromTo(
    giantTitle,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: giantTitle,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    }
  );
}
