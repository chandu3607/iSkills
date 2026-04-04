"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    const elements = document.querySelectorAll("a, button, p, span");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });

      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}