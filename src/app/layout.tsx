import type { Metadata } from "next";
import { display, sans } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import { PageTransition } from "@/components/layout/page-transition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://etoilestudios.co.za"),
  title: {
    default: "Etoile Studios — Photography & Videography",
    template: "%s — Etoile Studios",
  },
  description:
    "Etoile Studios is a Johannesburg multimedia studio specialising in photography, videography and content creation — events, portraits, graduations, real estate and fashion.",
  openGraph: {
    title: "Etoile Studios — Photography & Videography",
    description:
      "Photography that captures the moment and story. Events, portraits, graduations, real estate and fashion — shot in Johannesburg.",
    siteName: "Etoile Studios",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etoile Studios — Photography & Videography",
    description: "Photography that captures the moment and story.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-paper">
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
