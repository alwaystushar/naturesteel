"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceRef = useRef<HTMLSourceElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const source = sourceRef.current;
    if (!video || !source) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const src = source.getAttribute("data-src");
            if (src) {
              source.src = src;
              video.load();
              video.play();
            }
            observer.unobserve(video);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.25 }
    );
    observer.observe(video);
  }, []);

  useEffect(() => {
    const arrow = arrowRef.current;
    const btn = btnRef.current;
    if (!arrow || !btn) return;
    const onEnter = () => gsap.to(arrow, { x: 10, duration: 0.5, ease: "power1.out" });
    const onLeave = () => gsap.to(arrow, { x: 0, duration: 0.5, ease: "power1.out" });
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <video
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover -z-10"
        id="lazyVideo"
        ref={videoRef}
      >
        <source data-src="/assets/bg.webm" type="video/mp4" ref={sourceRef} />
        Your browser does not support HTML5 video.
      </video>
      <div
        className="absolute inset-0 z-[1] bg-black/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/70"
        aria-hidden
      />
      <div className="absolute left-[40%] top-1/2 z-[1000] w-[80%] max-w-xl -translate-x-1/2 -translate-y-1/2 text-left text-white pl-4">
        <h1 className="mb-4 text-3xl font-semibold md:text-4xl xl:text-5xl">
        Precision in Steel. Excellence in Execution.
        </h1>
        <p className="mb-8 text-sm md:text-base xl:text-lg">
        India-based Steel Detailing Company delivering global standards to Commercial & Industrial projects across USA & Canada.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded border border-[var(--ayra)] bg-[var(--ayra)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[var(--ayra)]"
          ref={btnRef}
        >
          Our Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            ref={arrowRef}
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
