import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlotHub - Trusted Land Discovery & Commerce",
  description: "The easiest and most trusted way to discover, showcase and enquire about land and plots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <TooltipProvider>
          <header className="border-b border-border bg-background">
            <div className="mx-auto flex h-16 max-w-[1440px] items-center px-6">
              <Link href="/">
                <Logo variant="horizontal" theme="primary" size={24} />
              </Link>
            </div>
          </header>
          <main className="mx-auto w-full max-w-[1440px] flex-1">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
