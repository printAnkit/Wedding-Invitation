import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

const symphony = localFont({
  variable: "--font-symphony",
  src: "../public/symphony-pro-regular/symphony-pro-regular.otf",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-label",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meharvan & Snjyot | Wedding Celebrations",
  description:
    "With immense joy and grateful hearts, we invite you to the wedding celebrations of Meharvan and Snjyot — 16 to 18 November 2026, Spara Boutique Resort.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Meharvan & Snjyot | Wedding Celebrations",
    description:
      "With immense joy and grateful hearts, we invite you to the wedding celebrations of Meharvan and Snjyot — 16 to 18 November 2026, Spara Boutique Resort.",
    images: [
      {
        url: "/OG-Banner.png",
        width: 1200,
        height: 630,
        alt: "Meharvan & Snjyot Wedding Invitation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meharvan & Snjyot | Wedding Celebrations",
    description:
      "With immense joy and grateful hearts, we invite you to the wedding celebrations of Meharvan and Snjyot — 16 to 18 November 2026, Spara Boutique Resort.",
    images: ["/OG-Banner.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${symphony.variable} ${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
