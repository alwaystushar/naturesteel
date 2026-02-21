"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { CONTACT_FORM_URL } from "../config/contact";

const SERVICES = [
  "Steel Detailing",
  "3D Modeling & BIM",
  "Fabrication Drawings",
  "Erection Drawings",
  "Shop Drawings",
  "General Inquiry",
  "Other",
];

const inputClass = "w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-[var(--ayra)] focus:outline-none";
const labelClass = "mb-1 block text-sm font-medium text-gray-700";

export function useGalleryPopup() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [subheading, setSubheading] = useState("");

  const open = useCallback((src: string, nameStr: string, sub: string) => {
    setImage(src);
    setName(nameStr);
    setSubheading(sub);
    setShow(true);
  }, []);

  const close = useCallback(() => setShow(false), []);

  return { show, image, name, subheading, open, close };
}

export function GalleryPopup({
  show,
  image,
  name,
  subheading,
  close,
}: {
  show: boolean;
  image: string;
  name: string;
  subheading: string;
  close: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "", email: "", contact_number: "", services: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", contact_number: "", services: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="relative max-h-[90vh] w-[90%] max-w-[500px] overflow-y-auto rounded-xl bg-white p-5 text-center shadow-lg" onClick={(e) => e.stopPropagation()}>
        <span className="absolute right-3 top-2 cursor-pointer text-2xl text-[var(--ayra)]" onClick={close} role="button" aria-label="Close">&times;</span>
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <Image src={image} alt={`Project: ${name} - ${subheading}`} width={400} height={300} className="my-2 max-h-[40vh] w-full rounded object-contain" />
        <h4 className="mb-4 text-sm text-gray-600">{subheading}</h4>

        <div className="border-t border-gray-200 pt-4 text-left">
          <h3 className="mb-3 text-base font-semibold text-gray-900">Enquire</h3>
          {status === "success" && <p className="mb-3 text-sm text-green-600">Thank you. We will get back to you soon.</p>}
          {status === "error" && <p className="mb-3 text-sm text-red-600">Something went wrong. Please try again.</p>}
          {status !== "success" && (
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="g-name" className={labelClass}>Name</label>
                <input type="text" className={inputClass} id="g-name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="g-email" className={labelClass}>Email</label>
                <input type="email" className={inputClass} id="g-email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="g-number" className={labelClass}>Number</label>
                <input type="tel" className={inputClass} id="g-number" name="contact_number" placeholder="Your phone number" value={formData.contact_number} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="g-services" className={labelClass}>Services</label>
                <select className={inputClass} id="g-services" name="services" value={formData.services} onChange={handleChange} required>
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="g-message" className={labelClass}>Message</label>
                <textarea className={inputClass + " min-h-[80px] resize-y"} id="g-message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required rows={3} />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="rounded border border-[var(--ayra)] bg-[var(--ayra)] px-4 py-2 text-sm text-white transition-colors hover:bg-black hover:border-black hover:text-[var(--ayra)] disabled:opacity-70" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
