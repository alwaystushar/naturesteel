"use client";

import { useState } from "react";
import { useBookingPopup, BookingPopup } from "./BookingPopup";
import { CONTACT_FORM_URL } from "../config/contact";
import { WayanadCarousel } from "./WayanadCarousel";
import { VideoBanner } from "./VideoBanner";
import Link from "next/link";
import Image from "next/image";

const SERVICE_SECTIONS = [
  {
    category: "Structural & Modeling",
    items: [
      "3D Modeling using Tekla Structures",
      "Take-Off & Quantity Estimation",
      "Steel Erection Drawings",
      "Shop & Fabrication Drawings",
      "Anchor Bolt Drawings",
      "Embed Plans & Shop Drawings",
    ],
  },
  {
    category: "Connection & Technical",
    items: [
      "Connection Design (IS, BS Euro, AISC)",
      "Joist & Deck Detailing",
      "Miscellaneous Steel (Stairs, Ladders, Handrails, Canopies)",
    ],
  },
  {
    category: "Reports & Deliverables",
    items: [
      "ABM (Advance Bill of Materials)",
      "Bolt Lists",
      "Assembly Lists",
      "NC Files",
      "KISS Files",
      "IFC Files",
      "Fabtrol Reports",
    ],
  },
];

const Philosophy = [
  { img: "/assets/error.jpg", 
    title: "Error-Free Detailing", 
    desc: "We ensure error-free detailing through a rigorous multi-level checking process, verifying every grid, member size, connection, and dimension to eliminate discrepancies before fabrication and erection.", 
    pkg: "Kashmir" },
  { img: "/assets/cost.jpg",
     title: "Optimized Cost Efficiency", 
     desc: "Our detailing approach focuses on accurate quantity estimation and smart structural coordination to minimize material wastage, reduce rework, and improve overall project cost efficiency.",
      pkg: "Rajasthan" },
  { img: "/assets/drawings.jpg", 
    title: "Clear and Comprehensible Drawings", 
    desc: "We produce well-structured, clearly dimensioned, and easy-to-interpret drawings that enable fabricators and site teams to execute work smoothly without confusion or delays.",
     pkg: "Delhi" },
  { img: "/assets/strict.jpg", 
    title: "Strict Compliance with Global Standards", 
    desc: "All projects are executed in alignment with international codes such as IS, BS Euro, and AISC, ensuring safety, technical accuracy, and seamless approval across global projects.", 
    pkg: "Kerala" },
];

const Workflow = [
  { img: "/assets/design.jpg", title: "Receive design inputs & schedules", desc: "We collect architectural and structural drawings, specifications, and project schedules to establish a clear baseline for detailing." },
  { img: "/assets/clarifications.jpg", title: "Identify design gaps & clarifications", desc: "Our team reviews all inputs and raises RFIs to resolve ambiguities before modeling begins, ensuring accuracy from the start." },
  { img: "/assets/structural.jpg", title: "Develop accurate 3D structural model", desc: "Using Tekla Structures, we build a detailed 3D model that reflects the approved design and accommodates all structural requirements." },
  { img: "/assets/cross.jpg", title: "Cross-check grids, sizes, material grades", desc: "We verify grid alignment, member sizes, and material grades against the design documents to prevent costly rework." },
  { img: "/assets/abm.jpg", title: "Generate ABM for procurement", desc: "Advance Bill of Materials is prepared for early procurement, helping streamline supply chain and project timelines." },
  { img: "/assets/connections.jpg", title: "Apply and verify connections", desc: "Connections are designed and detailed per applicable codes (IS, BS, Euro, AISC) and verified for constructability." },
  { img: "/assets/detection.jpg", title: "Run clash detection", desc: "We run clash detection to identify and resolve conflicts with MEP, architecture, and other disciplines before release." },
  { img: "/assets/coordination.jpg", title: "Submit for interdisciplinary coordination", desc: "Drawings and models are shared with other trades for coordination and approval, ensuring a clash-free build." },
  { img: "/assets/fabrication.jpg", title: "Extract fabrication & GA drawings", desc: "Shop drawings, fabrication drawings, and general arrangement (GA) drawings are extracted and formatted for the fabricator." },
  { img: "/assets/cnc.jpg", title: "Deliver customized reports & CNC files", desc: "We deliver bolt lists, assembly lists, NC/KISS/IFC files, Fabtrol reports, and other outputs as per your project requirements." },
];

const Choose = [
  { img: "/assets/detailing.jpg", title: "Precision-driven detailing", desc: "Our multi-layer QC process ensures every grid, member size, and connection is verified before release, minimizing rework and delays." },
  { img: "/assets/delivery.jpg", title: "On-time project delivery", desc: "We work to your schedule with clear milestones and regular updates, so fabrication and erection stay on track." },
  { img: "/assets/optimization.jpg", title: "Cost-effective optimization", desc: "Accurate quantity take-offs and smart coordination help reduce material waste and avoid costly changes during construction." },
  { img: "/assets/global.jpg", title: "Global code compliance", desc: "We detail to IS, BS Euro, AISC and other international standards so your project meets local and global requirements." },
  { img: "/assets/dedicated.jpg", title: "Dedicated project coordination", desc: "A single point of contact keeps design, fabrication, and site teams aligned and issues resolved quickly." },
  { img: "/assets/communication.jpg", title: "Transparent communication", desc: "You get clear status updates, open RFI and clarification logs, and deliverables that are easy to review and approve." },
];

function ContactButton({ packageName, onClick }: { packageName: string; onClick: (p: string) => void }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(packageName); }} className="text-sm font-bold text-[var(--ayra)]">
      Contact Now
    </a>
  );
}

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#contact", label: "Contact Us", cta: true },
];

export function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const booking = useBookingPopup();

  return (
    <>
      <header className="relative min-h-screen">
        <nav className="absolute left-0 right-0 top-0 z-[1100] w-full bg-gradient-to-b from-black/50 to-transparent px-4 py-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="#" className="block">
              <Image src="/assets/logo-white.svg" width={220} height={40} alt="Nature Steel" priority />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded text-white md:hidden"
              onClick={() => setNavOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {navOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
            <ul className={`absolute left-0 right-0 top-full flex flex-col gap-4 bg-black p-5 md:static md:flex md:flex-row md:items-center md:gap-0 md:bg-transparent md:p-0 ${navOpen ? "flex" : "hidden"}`}>
              {navLinks.map((link) => (
                <li key={link.href} className="ml-0 md:ml-3">
                  <Link
                    href={link.href}
                    className={link.cta
                      ? "inline-block rounded border border-[var(--ayra)] bg-[var(--ayra)] px-3 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--ayra)]"
                      : "text-white/80 transition-colors hover:text-orange-400 md:mr-5"}
                    onClick={() => setNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <VideoBanner />
      </header>

      <section id="about" className="my-20 md:my-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex flex-1 flex-col justify-center pt-10 md:pt-20">
              <h2 className="mb-5 text-2xl font-bold text-black/75 md:text-3xl">About <span className="text-[var(--ayra)]">Nature Steel</span></h2>
              <p className="max-w-[84%] text-base leading-relaxed text-black/75">
                Founded in 2020, Nature Steel is a specialized steel detailing company built on precision, reliability, and engineering excellence.
              </p>
              <p className="max-w-[84%] text-base leading-relaxed text-black/75 mt-2">
                With a team of experienced professionals, we provide high-quality structural detailing solutions that transform structural design into build-ready fabrication drawings.
              </p>
              <p className="max-w-[84%] text-base leading-relaxed text-black/75 mt-2">
                We serve commercial and industrial projects internationally, delivering error-free drawings, optimized material usage, and on-time project completion.
              </p>
              <p className="mt-8 max-w-[84%] text-base italic leading-relaxed text-black/75">
                We don’t just detail structures — we engineer clarity for construction.
              </p>

            </div>
            <div className="relative flex-1">
              <div className="relative">
                <Image src="/assets/about.png" alt="Nature Steel team and steel detailing expertise - about us" width={500} height={350} className="w-full rounded-2xl object-cover" />
              </div>
              <div className="animate-float absolute left-0 top-[30%] flex h-[100px] w-[100px] flex-col items-center justify-center rounded-lg bg-white text-center shadow-lg">
                <h4 className="text-2xl font-bold text-[var(--ayra)]">16+</h4>
                <h5 className="text-base text-black/75">Services</h5>
              </div>
              <div className="animate-float absolute left-0 top-[calc(30%+110px)] flex h-[100px] w-[100px] flex-col items-center justify-center rounded-lg bg-white text-center shadow-lg [animation-delay:0.2s]">
                <h4 className="text-2xl font-bold text-[var(--ayra)]">60+</h4>
                <h5 className="text-base text-black/75">Countries</h5>
              </div>
              <div className="animate-float absolute left-0 top-[calc(30%+220px)] flex h-[100px] w-[100px] flex-col items-center justify-center rounded-lg bg-white text-center shadow-lg [animation-delay:0.4s]">
                <h4 className="text-2xl font-bold text-[var(--ayra)]">10+</h4>
                <h5 className="text-base text-black/75">Styles</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="pt-24 md:pt-28" data-aos="fade-up">
            <h2 className="text-2xl font-extrabold md:text-3xl">Our <span className="text-[var(--ayra)]">Philosophy</span></h2>
            <p className="mt-2">Structural detailing demands accuracy, coordination, and deep technical understanding. Our multi-layer quality control system ensures:</p>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {Philosophy.map((p) => (
              <div
                key={p.pkg}
                role="button"
                tabIndex={0}
                onClick={() => booking.openPopup()}
                onKeyDown={(e) => e.key === "Enter" && booking.openPopup()}
                className="group flex w-[85vw] shrink-0 snap-center cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-shadow hover:shadow-xl md:w-auto"
                data-aos="fade-up"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image src={p.img} alt={`${p.title} - ${p.desc.slice(0, 60)}...`} fill sizes="(max-width: 768px) 85vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col border-t border-gray-200 bg-gray-50 p-5 text-left">
                  <h3 className="mb-2 text-lg font-bold text-black">{p.title}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-gray-800">{p.desc}</p>
                  <span className="text-sm font-bold text-[var(--ayra)]">Contact Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingPopup show={booking.show} closePopup={booking.closePopup} status={booking.status} setStatus={booking.setStatus} />

      <section id="services" className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <Image src="/assets/services.jpg" alt="Steel detailing and structural engineering services - Nature Steel" width={500} height={400} className="w-full object-contain" />
          </div>
          <div className="sticky top-0 w-full md:w-1/2" data-aos="fade-up">
            <h3 className="pt-5 text-2xl font-bold md:pt-20">Our <span className="text-[var(--ayra)]">Services</span></h3>
            <p className="mt-2 max-w-[84%] text-sm">We provide end-to-end steel detailing services including:</p>
            <div className="scrollbar-hide mt-4 max-h-[500px] overflow-auto overflow-y-auto p-0" data-aos="fade-right">
              {SERVICE_SECTIONS.map((section) => (
                <div key={section.category} className="mb-5 rounded-lg border-b border-gray-200 bg-[#EEFCFB] p-5 transition-shadow hover:shadow-md last:border-0">
                  <div className="mb-3 font-bold text-gray-900">{section.category}</div>
                  <ul className="list-inside list-disc space-y-1.5 text-gray-600">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="pt-0 md:pt-24" data-aos="fade-up">
            <h2 className="text-2xl font-extrabold">Our <span className="text-[var(--ayra)]">Workflow</span></h2>
            <p className="mt-2">We follow a structured and disciplined execution process:</p>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {Workflow.map((item) => (
              <div
                key={item.title}
                className="group flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-shadow hover:shadow-xl md:w-auto"
                data-aos="fade-up"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image src={item.img} alt={`Workflow: ${item.title} - ${item.desc.slice(0, 50)}...`} fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col border-t border-gray-200 bg-gray-50 p-5 text-left">
                  <h3 className="mb-2 text-base font-bold text-black">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="md:w-7/12">
              <h3 className="text-2xl font-bold text-white md:text-3xl md:w-[90%]">International <span className="text-[var(--ayra)]">Projects</span></h3>
            </div>
            <div className="md:w-5/12">
              <p className="text-sm text-white/80">{`We have successfully supported projects across - Texas, Arizona, Indiana, Canada`}</p>
            </div>
          </div>
          <WayanadCarousel onContactClick={booking.openPopup} />
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mt-10 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-extrabold">Why Choose <span className="text-[var(--ayra)]">Nature Steel?</span></h2>
        </div>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
          {Choose.map((item) => (
            <div key={item.title} className="group flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-shadow hover:shadow-xl md:w-auto" data-aos="fade-up">
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <Image src={item.img} alt={`Why choose Nature Steel: ${item.title} - ${item.desc.slice(0, 50)}...`} fill sizes="(max-width: 768px) 85vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col border-t border-gray-200 bg-gray-50 p-5 text-left">
                <h3 className="mb-2 text-base font-bold text-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-20 min-h-[450px] bg-[url('/assets/steel.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[var(--ayra)]/60" aria-hidden />
        <div className="relative flex min-h-[450px] items-center justify-center px-4 py-8 md:px-[200px]">
          <div className="text-center text-white">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Let’s Build Together</h2>
            <p className="mb-6 text-base max-w-[60%] mx-auto">Whether you’re a fabricator, contractor, or engineering consultant — we’re ready to support your next steel project with accuracy and reliability.</p>
            <a href="#" className="inline-block rounded border border-[var(--ayra)] bg-[var(--ayra)] px-5 py-2.5 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--ayra)]" onClick={(e) => { e.preventDefault(); booking.openPopup(); }}>Get Started</a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="mb-6 text-2xl font-bold text-[var(--ayra)]">Get in touch with our team</h2>
              <div className="mb-5 text-white">
                <h5 className="mb-1 text-sm font-bold text-white/50">OFFICE ADDRESS</h5>
                <p className="text-base">Delhi NCR, India</p>
              </div>
              <div className="mb-5 text-white">
                <h5 className="mb-1 text-sm font-bold text-white/50">PHONE NUMBER</h5>
                <a href="tel:+918882649633" className="text-white no-underline">+91 8882649633</a>
              </div>
              <div className="mb-5 text-white">
                <h5 className="mb-1 text-sm font-bold text-white/50">EMAIL</h5>
                <a href="mailto:Contact@naturesteel.in" className="text-white no-underline">Contact@naturesteel.in</a>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[url('/assets/contact-form-bg.jpg')] bg-cover bg-no-repeat opacity-10" aria-hidden />
                <div className="relative z-10 p-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--ayra)] py-5 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h5 className="text-base">Copyright © 2026 Nature Steel. All Rights Reserved.</h5>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", phone_number: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone_number: "", subject: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full rounded border border-white/30 bg-transparent px-3 py-2 text-white placeholder:text-white/70 focus:border-[var(--ayra)] focus:outline-none";
  const labelClass = "mb-1 block text-sm text-white/70";

  return (
    <form onSubmit={handleSubmit}>
      {status === "success" && <p className="mb-4 text-green-400">Thank you for contacting us. We will get back to you soon!</p>}
      {status === "error" && <p className="mb-4 text-red-400">Sorry, something went wrong. Please try again.</p>}
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="first-name" className={labelClass}>Name</label>
          <input type="text" className={inputClass} id="first-name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input type="email" className={inputClass} id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone-number" className={labelClass}>Phone Number</label>
          <input type="tel" className={inputClass} id="phone-number" name="phone_number" placeholder="Your phone number" value={formData.phone_number} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>Subject</label>
          <input type="text" className={inputClass} id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea className={inputClass} id="message" name="message" rows={5} placeholder="Your message" value={formData.message} onChange={handleChange} required />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="rounded border border-[var(--ayra)] bg-[var(--ayra)] px-5 py-2.5 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--ayra)] disabled:opacity-70" disabled={status === "sending"}>
          {status === "sending" ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
