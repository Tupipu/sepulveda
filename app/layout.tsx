import type { Metadata, Viewport } from "next";
import { Poppins, Alice } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import QuickNav from "@/components/quickNav";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sepulveda Escrow Corporation | California Escrow Services",
  description:
    "Trusted California escrow services for real estate, business, liquor license, mobile home, and private loan transactions.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${alice.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <NavBar />
        <QuickNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
