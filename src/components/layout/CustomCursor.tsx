"use client";

import React, {
  useEffect,
  useState,
  useRef,
  useSyncExternalStore,
} from "react";

function subscribePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return !window.matchMedia("(pointer: fine)").matches;
}

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isTouch = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    () => true,
  );

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouch) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          // The arrow SVG tip is at (16, 1) in a 32x32 box.
          // Sized to w-[22px] h-[22px], the tip is at (11px, 1px).
          // Translating by (targetX - 11px, targetY - 1px) places the tip exactly at the mouse hotspot.
          cursorRef.current.style.transform = `translate3d(${targetX - 11}px, ${targetY - 1}px, 0)`;
        }
      });

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, [role='button'], [role='option'], li[role='option'], input, textarea, select, label, summary, [tabindex]:not([tabindex='-1']), .curzr-hover",
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] transition-opacity duration-150 will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <div
        className="transition-all duration-150 ease-out"
        style={{
          transformOrigin: "11px 1px",
          transform: `${isClicked ? "scale(0.9)" : isHovered ? "scale(1.15)" : "scale(1)"} rotate(-30deg)`,
        }}
      >
        {/* Curzr Arrow Pointer — Static Slanted / Cross Angle (No GPS Rotation) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-[22px] h-[22px] drop-shadow-[0_2px_5px_rgba(3,52,160,0.30)]"
        >
          {/* Inner Fill: Option 1 — Solid Royal Blue on Click, Cream on Hover, White when Resting */}
          <path
            className="transition-colors duration-150"
            d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z"
            fill={isClicked ? "#0334A0" : isHovered ? "#FBF2D4" : "#FFFFFF"}
          />
          {/* Outer Border: College Brand Royal Blue */}
          <path
            className="transition-colors duration-150"
            d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z"
            fill="#0334A0"
          />
        </svg>
      </div>
    </div>
  );
}
