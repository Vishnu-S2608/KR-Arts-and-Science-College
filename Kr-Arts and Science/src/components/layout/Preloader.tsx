"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = containerRef.current;
    if (!preloader) {
      window.dispatchEvent(new CustomEvent("preloader:done"));
      (window as unknown as { __preloaderDone: boolean }).__preloaderDone = true;
      return;
    }

    const hasSeen = sessionStorage.getItem("kr-preloader-seen") === "true";
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeen || prefersReduced) {
      requestAnimationFrame(() => {
        setVisible(false);
      });
      window.dispatchEvent(new CustomEvent("preloader:done"));
      (window as unknown as { __preloaderDone: boolean }).__preloaderDone = true;
      return;
    }

    const goldDot = preloader.querySelector<HTMLElement>("#krGoldDot");
    const ringOuter = preloader.querySelector<SVGCircleElement>(".kr-ring-outer");
    const ringProgress = preloader.querySelector<SVGCircleElement>(".kr-ring-progress");
    const ringMiddle = preloader.querySelector<SVGCircleElement>(".kr-ring-middle");
    const ringInner = preloader.querySelector<SVGCircleElement>(".kr-ring-inner");
    const textChars = preloader.querySelectorAll<SVGTSpanElement>(".kr-seal-char");
    const starLeft = preloader.querySelector<HTMLElement>("#krStarLeft");
    const starRight = preloader.querySelector<HTMLElement>("#krStarRight");
    const paintingWrap = preloader.querySelector<HTMLElement>("#krPaintingWrap");
    const paintingImg = preloader.querySelector<HTMLElement>("#krPaintingImg");
    const paintingShine = preloader.querySelector<HTMLElement>("#krPaintingShine");
    const mottoWrap = preloader.querySelector<HTMLElement>("#krMottoWrap");
    const counterVal = preloader.querySelector<HTMLElement>("#krCounterVal");
    const skipBtn = preloader.querySelector<HTMLElement>("#krSkipBtn");
    const curtainTop = preloader.querySelector<HTMLElement>(".kr-curtain-top");
    const curtainBottom = preloader.querySelector<HTMLElement>(".kr-curtain-bottom");

    const C_OUTER = 1495.4;
    const C_MIDDLE = 1325.8;
    const C_INNER = 816.8;

    // Set initial dasharrays
    if (ringOuter) {
      ringOuter.style.strokeDasharray = `${C_OUTER}`;
      ringOuter.style.strokeDashoffset = `${C_OUTER}`;
    }
    if (ringProgress) {
      ringProgress.style.strokeDasharray = `${C_OUTER}`;
      ringProgress.style.strokeDashoffset = `${C_OUTER}`;
    }
    if (ringMiddle) {
      ringMiddle.style.strokeDasharray = `${C_MIDDLE}`;
      ringMiddle.style.strokeDashoffset = `${-C_MIDDLE}`;
    }
    if (ringInner) {
      ringInner.style.strokeDasharray = `${C_INNER}`;
      ringInner.style.strokeDashoffset = `${C_INNER}`;
    }

    // Lock page scroll during assemble
    document.documentElement.classList.add("kr-preloader-locked");
    document.body.classList.add("kr-preloader-locked");

    const tl = gsap.timeline({
      onComplete: finishPreloader,
    });

    // 1. Initial 6px gold dot pulse
    tl.to(goldDot, {
      scale: 1,
      opacity: 1,
      duration: 0.35,
      ease: "back.out(2)",
    });

    // 2. Rings draw
    tl.to(
      ringOuter,
      {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "power2.inOut",
      },
      "-=0.1"
    );

    tl.to(
      ringMiddle,
      {
        strokeDashoffset: 0,
        duration: 0.95,
        ease: "power2.inOut",
      },
      "<+0.1"
    );

    tl.to(
      ringInner,
      {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<+0.1"
    );

    // 3. Arc text reveal
    if (textChars && textChars.length > 0) {
      tl.fromTo(
        textChars,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.02,
          duration: 0.45,
          ease: "power1.out",
        },
        "-=0.6"
      );
    }

    // 4. Stars fly in with burst
    tl.fromTo(
      [starLeft, starRight],
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(2.5)",
      },
      "-=0.3"
    );

    // 5. Center painting reveal & shine
    tl.fromTo(
      paintingWrap,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    if (paintingImg) {
      tl.fromTo(
        paintingImg,
        { filter: "brightness(0.3)" },
        { filter: "brightness(1)", duration: 0.5, ease: "power1.out" },
        "<"
      );
    }

    if (paintingShine) {
      tl.fromTo(
        paintingShine,
        { x: "-100%", opacity: 0 },
        { x: "200%", opacity: 0.8, duration: 0.8, ease: "power2.inOut" },
        "-=0.2"
      );
    }

    // 6. Tamil motto
    tl.fromTo(
      mottoWrap,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    );

    // 7. Counter animation from 000 to 100
    const countProxy = { val: 0 };
    gsap.to(countProxy, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const rounded = Math.floor(countProxy.val);
        if (counterVal) counterVal.textContent = rounded.toString().padStart(3, "0");
        if (ringProgress) {
          const offset = C_OUTER * (1 - rounded / 100);
          ringProgress.style.strokeDashoffset = `${offset}`;
        }
      },
    });

    // Fade in skip button
    if (skipBtn) {
      gsap.to(skipBtn, { opacity: 1, duration: 0.4, delay: 0.5 });
    }

    function finishPreloader() {
      sessionStorage.setItem("kr-preloader-seen", "true");

      // Split curtain / circular iris exit
      const exitTl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("kr-preloader-locked");
          document.body.classList.remove("kr-preloader-locked");
          setVisible(false);
          (window as unknown as { __preloaderDone: boolean }).__preloaderDone = true;
          window.dispatchEvent(new CustomEvent("preloader:done"));
        },
      });

      if (curtainTop && curtainBottom) {
        exitTl.to(curtainTop, { y: "-100%", duration: 0.7, ease: "expo.inOut" }, 0);
        exitTl.to(curtainBottom, { y: "100%", duration: 0.7, ease: "expo.inOut" }, 0);
      }

      exitTl.to(
        preloader,
        {
          clipPath: "circle(0% at 50% 50%)",
          opacity: 0,
          duration: 0.75,
          ease: "expo.inOut",
        },
        0
      );
    }

    const handleSkip = () => {
      tl.progress(0.95);
      finishPreloader();
    };

    skipBtn?.addEventListener("click", handleSkip);

    return () => {
      tl.kill();
      skipBtn?.removeEventListener("click", handleSkip);
      document.documentElement.classList.remove("kr-preloader-locked");
      document.body.classList.remove("kr-preloader-locked");
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className="kr-preloader" ref={containerRef} role="status" aria-label="Loading KR Arts And Science College">
      <div className="kr-curtain kr-curtain-top" aria-hidden="true"></div>
      <div className="kr-curtain kr-curtain-bottom" aria-hidden="true"></div>

      <div className="kr-gold-dot" id="krGoldDot" aria-hidden="true"></div>

      <div className="kr-preloader-stage" id="krPreloaderStage">
        <div className="kr-seal-wrap" id="krSealWrap">
          <svg className="kr-seal-svg" id="krSealSvg" viewBox="0 0 500 500" aria-hidden="true">
            <defs>
              <path id="krSealTextArc" d="M 80, 250 A 170, 170 0 0, 1 420, 250" fill="none" />
            </defs>

            <circle className="kr-ring kr-ring-outer" cx="250" cy="250" r="238" />
            <circle className="kr-ring kr-ring-progress" cx="250" cy="250" r="238" />
            <circle className="kr-ring kr-ring-middle" cx="250" cy="250" r="211" />
            <circle className="kr-ring kr-ring-inner" cx="250" cy="250" r="130" />

            <g className="kr-seal-text-group" id="krSealTextGroup">
              <text className="kr-seal-text">
                <textPath href="#krSealTextArc" startOffset="50%" textAnchor="middle">
                  {"KR ARTS AND SCIENCE COLLEGE".split("").map((char, idx) => (
                    <tspan key={idx} className="kr-seal-char">
                      {char === " " ? "\u00A0" : char}
                    </tspan>
                  ))}
                </textPath>
              </text>
            </g>

            <g className="kr-star-group kr-star-left" id="krStarLeft">
              <g className="kr-star-anchor" transform="translate(80, 250)">
                <g className="kr-star-flyer" id="krStarLeftFlyer">
                  <polygon
                    className="kr-star-poly"
                    points="0,-14 3.23,-4.45 13.31,-4.33 5.23,1.70 8.23,11.33 0,5.5 -8.23,11.33 -5.23,1.70 -13.31,-4.33 -3.23,-4.45"
                  />
                </g>
                <g className="kr-spark-group" id="krSparkLeft">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                    <line key={idx} className="kr-spark-line" x1="0" y1="-12" x2="0" y2="-22" transform={`rotate(${angle})`} />
                  ))}
                </g>
              </g>
            </g>

            <g className="kr-star-group kr-star-right" id="krStarRight">
              <g className="kr-star-anchor" transform="translate(420, 250)">
                <g className="kr-star-flyer" id="krStarRightFlyer">
                  <polygon
                    className="kr-star-poly"
                    points="0,-14 3.23,-4.45 13.31,-4.33 5.23,1.70 8.23,11.33 0,5.5 -8.23,11.33 -5.23,1.70 -13.31,-4.33 -3.23,-4.45"
                  />
                </g>
                <g className="kr-spark-group" id="krSparkRight">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                    <line key={idx} className="kr-spark-line" x1="0" y1="-12" x2="0" y2="-22" transform={`rotate(${angle})`} />
                  ))}
                </g>
              </g>
            </g>
          </svg>

          <div className="kr-painting-wrap" id="krPaintingWrap">
            <img
              src="/assets/logo-painting.webp"
              alt="KR College Emblem Painting"
              className="kr-painting-img"
              id="krPaintingImg"
              width="250"
              height="250"
            />
            <div className="kr-painting-overlay" id="krPaintingOverlay" aria-hidden="true"></div>
            <div className="kr-painting-shine" id="krPaintingShine" aria-hidden="true"></div>
            <div className="kr-shutter-container" id="krShutterContainer" aria-hidden="true"></div>
          </div>
        </div>

        <div className="kr-motto-wrap" id="krMottoWrap">
          <div className="kr-motto" id="krMotto" lang="ta">
            உள்ளுவதெல்லாம் உயர்வுள்ளல்
          </div>
        </div>
      </div>

      <div className="kr-bottom-bar" id="krBottomBar">
        <div className="kr-counter" id="krCounter" aria-hidden="true">
          <span className="kr-counter-val" id="krCounterVal">000</span>
        </div>
        <button type="button" className="kr-skip-btn" id="krSkipBtn" aria-label="Skip introduction animation">
          Skip
        </button>
      </div>

      <div className="kr-sr-status sr-only" id="krSrStatus" aria-live="polite">
        Loading KR Arts And Science College
      </div>
    </div>
  );
}
