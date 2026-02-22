"use client";

import Image from "next/image";

// Existing images from public/assets (same as used elsewhere on the site)
const ASSET_IMAGES = [
  "/assets/design.jpg",
  "/assets/structural.jpg",
  "/assets/fabrication.jpg",
  "/assets/detailing.jpg",
  "/assets/delivery.jpg",
  "/assets/steel.jpg",
  "/assets/services.jpg",
  "/assets/coordination.jpg",
  "/assets/connections.jpg",
  "/assets/cnc.jpg",
  "/assets/about.png",
];

function pickImageFromAssets(title: string): string {
  let n = 0;
  for (let i = 0; i < title.length; i++) n = (n * 31 + title.charCodeAt(i)) >>> 0;
  return ASSET_IMAGES[n % ASSET_IMAGES.length];
}

const PROJECTS = [
  { title: "High School Phase-2 (TX, USA)" },
  { title: "Skysong Building #4" },
  { title: "Volvo Cars Arrowhead" },
  { title: "YMCA of SW Indiana" },
  { title: "Abrazo Central Hospital" },
  { title: "Multiple commercial & industrial facilities" },
].map((p) => ({ ...p, img: pickImageFromAssets(p.title) }));

type OnContactClick = (pkg: string) => void;

export function WayanadCarousel({ onContactClick }: { onContactClick: OnContactClick }) {
  const duplicated = [...PROJECTS, ...PROJECTS];

  return (
    <div className="group/marquee mt-12 overflow-hidden">
      <div className="flex w-max animate-marquee gap-8 group-hover/marquee:[animation-play-state:paused]">
        {duplicated.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            className="flex w-[280px] shrink-0 flex-col overflow-hidden rounded-lg bg-white/5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 truncate text-center text-sm font-medium text-white">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
