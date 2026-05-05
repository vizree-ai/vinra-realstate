"use client";

import { useState, useEffect, useRef } from "react";

export default function DeferredSection({
  children,
  minHeightClass = "min-h-[200px]",
}) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !("IntersectionObserver" in window);
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={sectionRef} className={isVisible ? "" : minHeightClass}>
      {isVisible ? children : null}
    </div>
  );
}
