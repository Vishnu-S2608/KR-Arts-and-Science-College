import { initSmoothScroll } from "./smooth-scroll.js";
import { initPreloader } from "../components/preloader/preloader.js";
import { initNavbar } from "./navbar.js";
import { initMotion, initHeadingSplits } from "./motion.js";
import { initCustomCursor } from "./cursor.js";
import { initPageTransitions } from "./page-transitions.js";
import { initHero } from "../components/hero/hero.js";
import { initAbout } from "../components/about/about.js";
import { initPlacements } from "../components/placements/placements.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lenis Smooth Scroll
  initSmoothScroll();

  // 2. Custom Cursor (Desktop)
  initCustomCursor();

  // 3. Navbar Navigation & Magnetic Buttons
  initNavbar();

  // 4. Page Transitions
  initPageTransitions();

  // 5. Page Component Initializations (Hero pauses entrance until preloader:done)
  initHero();
  initAbout();
  initPlacements();
  initMotion();
  initHeadingSplits();

  // 6. Preloader Initiation
  initPreloader();
});
