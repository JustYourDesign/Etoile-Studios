import type { Metadata } from "next";
import { siteInfo } from "@/data/site";
import { RevealText } from "@/components/ui/reveal-text";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Etoile Studios — Johannesburg photography and videography.",
};

export default function ContactPage() {
  return (
    <main>
      <section data-nav-theme="dark" className="flex min-h-[45vh] flex-col justify-end bg-ink px-6 pb-14 pt-40 text-paper md:px-10">
        <RevealText as="h1" className="font-display text-balance text-[13vw] leading-[0.9] tracking-tight md:text-[6.5vw]">
          Let&apos;s create something timeless.
        </RevealText>
      </section>

      <section data-nav-theme="light" className="bg-paper px-6 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <FadeIn className="flex flex-col gap-8 text-sm">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50">Location</span>
                <p className="mt-2">
                  {siteInfo.address.line1}
                  <br />
                  {siteInfo.address.line2}
                  <br />
                  {siteInfo.address.city}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50">Email</span>
                <p className="mt-2">
                  <a href={`mailto:${siteInfo.email}`} className="hover:opacity-70">
                    {siteInfo.email}
                  </a>
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50">Phone</span>
                <p className="mt-2">
                  <a href={siteInfo.phoneHref} className="hover:opacity-70">
                    {siteInfo.phone}
                  </a>
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-ink/50">Instagram</span>
                <div className="mt-2 flex flex-col gap-1">
                  {siteInfo.instagram.map((ig) => (
                    <a key={ig.handle} href={ig.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                      {ig.handle}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
