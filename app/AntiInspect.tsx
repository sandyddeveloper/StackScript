"use client";
import { useEffect } from "react";

export default function AntiInspect() {
  useEffect(() => {
    // Disable Right-Click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
      if (
        e.ctrlKey &&
        ["u", "s", "p", "Shift"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
      ) {
        e.preventDefault();
        alert("DevTools are disabled!");
      }
    });

    // Detect DevTools
    const detectDevTools = () => {
      if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        alert("DevTools detected! Redirecting...");
        window.location.href = "about:blank"; // More effective than `window.close()`
      }
    };
    window.addEventListener("resize", detectDevTools);

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", (e) => e.preventDefault());
      window.removeEventListener("resize", detectDevTools);
    };
  }, []);

  return null;
}
