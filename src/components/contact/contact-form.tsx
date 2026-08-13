"use client";

import { useState, type FormEvent } from "react";
import { FloatingInput, FloatingSelect, FloatingTextarea } from "@/components/contact/floating-field";
import { servicePackages } from "@/data/services";
import { siteInfo } from "@/data/site";

const serviceOptions = servicePackages.map((p) => p.title);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Service: ${data.get("service") || "—"}`,
      `Preferred Date: ${data.get("date") || "—"}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    const subject = encodeURIComponent(`New enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col gap-3 py-12">
        <p className="font-display text-2xl">Your email client should be open now.</p>
        <p className="text-sm text-current/60">
          If nothing happened, email us directly at{" "}
          <a href={`mailto:${siteInfo.email}`} className="underline">
            {siteInfo.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <FloatingInput label="Name" name="name" required />
        <FloatingInput label="Email address" name="email" type="email" required />
        <FloatingInput label="Phone" name="phone" type="tel" />
        <FloatingSelect label="Service" name="service" options={serviceOptions} />
        <FloatingInput label="Preferred Date" name="date" type="date" className="sm:col-span-2" />
      </div>
      <FloatingTextarea label="Message" name="message" required />

      <button
        type="submit"
        data-cursor="hidden"
        className="group mt-4 inline-flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
      >
        <span className="relative">
          Send Message
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
        </span>
        <span aria-hidden className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
