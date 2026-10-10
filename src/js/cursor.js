import gsap from "gsap";

export function initCustomCursor() {
  const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 1024;
  if (isTouch) return;

  const dot = document.querySelector(".custom-cursor-dot");
  const ring = document.querySelector(".custom-cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    }

    gsap.set(dot, { x: mouseX, y: mouseY });
  });

  // Smooth lerp for outer ring
  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    gsap.set(ring, { x: ringX, y: ringY });
  });

  // Scale up ring over interactive targets
  const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, .interactive-hover, .programme-card, .life-item");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  window.addEventListener("mouseleave", () => {
    isVisible = false;
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
  });
}
