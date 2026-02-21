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

export function useBookingPopup() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const openPopup = useCallback(() => {
    setShow(true);
    setStatus("idle");
  }, []);

  const closePopup = useCallback(() => setShow(false), []);

  return { show, openPopup, closePopup, status, setStatus };
}

const inputClass = "w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-[var(--ayra)] focus:outline-none";
const labelClass = "mb-1 block text-sm font-medium text-gray-700";

export function BookingPopup({
  show,
  closePopup,
  status,
  setStatus,
}: {
  show: boolean;
  closePopup: () => void;
  status: string;
  setStatus: (v: "idle" | "sending" | "success" | "error") => void;
}) {
  const [formData, setFormData] = useState({
    name: "", email: "", contact_number: "", services: "", message: "",
  });

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
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80"
      onClick={(e) => e.target === e.currentTarget && closePopup()}
    >
      <div
        className="relative w-[90%] max-w-[500px] rounded-xl bg-white p-5 text-left shadow-lg transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute right-3 top-3 cursor-pointer text-2xl text-gray-700 hover:text-gray-900"
          onClick={closePopup}
          role="button"
          aria-label="Close"
        >
          &times;
        </span>
        <Image src="/assets/logo.svg" alt="Nature Steel" width={100} height={40} className="mb-5 max-w-[100px]" />
        <h3 className="mb-2 text-lg font-bold text-gray-900">Contact Us for <span className="text-[var(--ayra)]">Booking</span></h3>
        <p className="mb-4 text-sm text-gray-700">Please fill out the form below. Our team will get back to you soon.</p>
        {status === "success" && <p className="mb-4 text-green-600">Thank you for your enquiry. We will get back to you soon.</p>}
        {status === "error" && <p className="mb-4 text-red-600">Sorry, something went wrong. Please try again.</p>}
        {status !== "success" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className={labelClass}>Name</label>
              <input type="text" className={inputClass} id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className={labelClass}>Email</label>
              <input type="email" className={inputClass} id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="contact-number" className={labelClass}>Number</label>
              <input type="tel" className={inputClass} id="contact-number" name="contact_number" placeholder="Enter your phone number" value={formData.contact_number} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="services" className={labelClass}>Services</label>
              <select
                className={inputClass}
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                className={inputClass + " min-h-[80px] resize-y"}
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="rounded border border-[var(--ayra)] bg-[var(--ayra)] px-5 py-2.5 text-sm text-white transition-colors hover:bg-black hover:border-black hover:text-[var(--ayra)] disabled:opacity-70" disabled={status === "sending"}>
                {status === "sending" ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
