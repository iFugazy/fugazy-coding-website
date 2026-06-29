import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fugazy Coding — BIM software, 3D modeling, applied AI",
    template: "%s · Fugazy Coding",
  },
  description:
    "Fugazy Coding builds plugins, tooling, and AI workflows for the BIM industry. Revit add-ins, IFC pipelines, Three.js viewers, and high-LOD 3D modeling.",
  metadataBase: new URL("https://fugazycoding.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fugazy Coding",
    description:
      "BIM plugins, 3D modeling, and applied AI for the AEC industry.",
    url: "https://fugazycoding.com",
    siteName: "Fugazy Coding",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#18181b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Nav />
        {/* Pull content up under the sticky nav so the hero bg reaches the
            very top of the page (the hero adds matching top padding back). */}
        <main className="[margin-top:calc(-1*var(--nav-h))]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
