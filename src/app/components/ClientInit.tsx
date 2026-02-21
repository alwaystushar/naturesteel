"use client";

import { useEffect } from "react";
import AOS from "aos";

export function ClientInit() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (href && href !== "#") {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);
  return null;
}
