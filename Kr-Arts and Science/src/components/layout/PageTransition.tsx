"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // On pathname change, wipe out
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

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
  }, [pathname]);

  // Intercept links for elegant circular clip-path wipe transition
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("http") ||
        target.target === "_blank" ||
        href === pathname
      ) {
        return;
      }

      e.preventDefault();
      overlay.style.pointerEvents = "all";

      gsap.to(overlay, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.55,
        ease: "expo.inOut",
        onComplete: () => {
          router.push(href);
        },
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  return <div className="page-wipe-overlay" ref={overlayRef} aria-hidden="true" />;
}
