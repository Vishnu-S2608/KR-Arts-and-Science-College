import gsap from "gsap";

export function initPageTransitions() {
  const overlay = document.querySelector(".page-wipe-overlay");
  if (!overlay) return;

  // On page load, wipe out if it was a transition
  gsap.fromTo(
    overlay,
    { clipPath: "circle(150% at 50% 50%)" },
    {
      clipPath: "circle(0% at 50% 50%)",
      duration: 0.65,
      ease: "expo.out",
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      },
    }
  );

  // Intercept local HTML links for elegant page transition
  const links = document.querySelectorAll('a[href$=".html"], a[href^="/"], a[href^="./"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetUrl = link.getAttribute("href");
      if (
        !targetUrl ||
        targetUrl.startsWith("#") ||
        targetUrl.startsWith("tel:") ||
        targetUrl.startsWith("mailto:") ||
        targetUrl.startsWith("http") ||
        link.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();
      overlay.style.pointerEvents = "all";

      gsap.to(overlay, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.6,
        ease: "expo.inOut",
        onComplete: () => {
          window.location.href = targetUrl;
        },
      });
    });
  });
}
