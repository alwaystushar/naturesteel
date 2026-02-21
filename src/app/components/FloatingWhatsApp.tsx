"use client";

import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-0 right-0 z-[99999]">
      <a
        href="https://api.whatsapp.com/send?phone=919539333220&text=Hello%21%20."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-[99999] flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#25D366] text-center shadow-none transition-shadow duration-300 hover:shadow-lg"
      >
        <Image src="/assets/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="h-[49%] w-auto" />
      </a>
    </div>
  );
}
