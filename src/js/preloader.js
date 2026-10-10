import gsap from "gsap";

export function initPreloader(onCompleteCallback) {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  const hasSeenPreloader = sessionStorage.getItem("kr_preloader_seen");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const finishPreloader = () => {
    preloader.classList.add("completed");
    gsap.set(preloader, { display: "none" });
    sessionStorage.setItem("kr_preloader_seen", "true");
    if (onCompleteCallback) onCompleteCallback();
  };

  // Skip if already seen in current session or user prefers reduced motion
  if (hasSeenPreloader || prefersReduced) {
    finishPreloader();
    return;
  }

  // Preloader Elements
  const outerRing = preloader.querySelector(".ring-outer");
  const middleRing = preloader.querySelector(".ring-middle");
  const innerRing = preloader.querySelector(".ring-inner");
  const textChars = preloader.querySelectorAll(".preloader-text-char");
  const stars = preloader.querySelectorAll(".preloader-star");
  const centreArt = preloader.querySelector(".preloader-centre-art");
  const motto = preloader.querySelector(".preloader-motto");
  const counterNumber = preloader.querySelector(".counter-val");
  const sealWrap = preloader.querySelector(".preloader-seal-wrap");
  const skipBtn = preloader.querySelector(".preloader-skip-btn");

  const tl = gsap.timeline({
    onComplete: () => {
      // 6. EXIT: Expand seal into full-screen circular wipe to reveal homepage
      gsap.to(sealWrap, {
        scale: 14,
        duration: 0.85,
        ease: "expo.inOut",
        onComplete: () => {
          finishPreloader();
        },
      });
      gsap.to(preloader, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.85,
        ease: "expo.inOut",
      });
    },
  });

  // Skip button listener
  skipBtn?.addEventListener("click", () => {
    tl.kill();
    finishPreloader();
  });

  // 1. Concentric rings draw themselves
  tl.to(outerRing, { strokeDashoffset: 0, duration: 1.4, ease: "power2.out" }, 0.1)
    .to(middleRing, { strokeDashoffset: 0, duration: 1.4, ease: "power2.out" }, 0.1)
    .to(innerRing, { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }, 0.2);

  // 2. Text letters write themselves around circle + Tamil motto fades up
  tl.to(textChars, {
    opacity: 1,
    stagger: 0.035,
    duration: 0.4,
    ease: "power1.out",
  }, 0.5);

  tl.to(motto, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }, 1.0);

  // 3. Two gold stars pop in with spring + twinkle
  tl.to(stars, {
    scale: 1,
    duration: 0.6,
    ease: "back.out(2)",
    stagger: 0.15,
  }, 1.2)
  .to(stars, {
    opacity: 0.4,
    repeat: 1,
    yoyo: true,
    duration: 0.2,
  }, 1.8);

  // 4. Centre painting revealed by circular clip-path 0% to 50% + zoom 1.2 to 1
  tl.to(centreArt, {
    clipPath: "circle(50% at 50% 50%)",
    scale: 1,
    duration: 1.2,
    ease: "expo.out",
  }, 1.4);

  // 5. Thin percentage counter from 0 to 100
  const counterObj = { val: 0 };
  tl.to(counterObj, {
    val: 100,
    duration: 2.8,
    ease: "power2.inOut",
    onUpdate: () => {
      if (counterNumber) {
        counterNumber.textContent = Math.round(counterObj.val).toString().padStart(2, "0");
      }
    },
  }, 0.2);
}
