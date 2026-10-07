import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Every Dev Event",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={cn(
              "min-h-screen antialiased font-sans",
              geist.variable,
              schibstedGrotesk.variable,
              martianMono.variable
          )}
      >
      <body className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.8}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
        />
      </div>
      <main>{children}</main>
      </body>
      </html>
  );
}