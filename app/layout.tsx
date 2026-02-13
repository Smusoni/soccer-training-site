import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
        <footer className="bg-slate-950 border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2025 Hamid Soccer Training. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
