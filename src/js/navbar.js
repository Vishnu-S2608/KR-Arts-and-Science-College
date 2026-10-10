import gsap from "gsap";

export function initNavbar() {
  const navbar = document.querySelector(".navbar-wrapper");
  const navMenu = document.querySelector(".nav-menu");
  const indicator = document.querySelector(".nav-sliding-indicator");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const magneticButtons = document.querySelectorAll(".magnetic-btn");

  let lastScrollY = window.scrollY;

  // 1. Hide on scroll down, show on scroll up
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 120 && currentScrollY > lastScrollY) {
      navbar?.classList.add("nav-hidden");
    } else {
      navbar?.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // 2. Sliding underline indicator
  if (navMenu && indicator) {
    const navLinks = navMenu.querySelectorAll(".nav-link");

    const moveIndicator = (element) => {
      const rect = element.getBoundingClientRect();
      const menuRect = navMenu.getBoundingClientRect();
      const left = rect.left - menuRect.left;
      const width = rect.width;

      indicator.style.width = `${width}px`;
      indicator.style.left = `${left}px`;
      indicator.style.opacity = "1";
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => moveIndicator(link));
    });

    navMenu.addEventListener("mouseleave", () => {
      // Find active page or hide
      const activeLink = navMenu.querySelector(".nav-link.active");
      if (activeLink) {
        moveIndicator(activeLink);
      } else {
        indicator.style.opacity = "0";
      }
    });

    const initialActive = navMenu.querySelector(".nav-link.active");
    if (initialActive) {
      moveIndicator(initialActive);
    }
  }

  // 3. Mobile menu clip-path toggle
  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileOverlay.classList.contains("active");
      if (isOpen) {
        mobileOverlay.classList.remove("active");
        document.body.style.overflow = "";
      } else {
        mobileOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });

    const mobileLinks = mobileOverlay.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // 4. Magnetic pull effect for CTA buttons
  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.28,
        y: y * 0.28,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });
}
