import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ChatBot from "./components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamid Soccer Training",
  description: "Elite private & group soccer training sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ChatBot />
        <footer className="bg-slate-950 border-t border-white/10 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-white text-sm">Hamid Soccer Training</p>
                <p className="mt-1 text-sm text-gray-400">Columbus, Ohio</p>
                <p className="text-sm text-gray-400">Private &amp; Group Sessions</p>
              </div>

              <div>
                <p className="font-semibold text-white text-sm">Contact</p>
                <a
                  href="mailto:hamidsoccertraining@gmail.com"
                  className="mt-1 block text-sm text-blue-300 hover:underline break-all"
                >
                  hamidsoccertraining@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white text-sm">Links</p>
                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="https://calendly.com/hamidsoccertraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 hover:underline"
                  >
                    Reserve a Spot
                  </a>
                  <a
                    href="https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-pink-400 hover:underline"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5">
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" className="fill-none stroke-current" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" className="fill-none stroke-current" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
              &copy; 2026 Hamid Soccer Training. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
