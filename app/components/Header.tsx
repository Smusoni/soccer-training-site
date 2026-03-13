"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/#contact" },
];

const instagram =
  "https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg==";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <rect
        x="3" y="3" width="18" height="18" rx="5" ry="5"
        className="fill-none stroke-current" strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" className="fill-none stroke-current" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center" aria-label="Hamid Soccer Training home">
          <span className="relative h-8 w-8 overflow-hidden rounded-md">
            <Image
              src="/logo.svg"
              alt="Hamid Soccer Training logo"
              fill
              className="object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-blue-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] hover:text-blue-300 transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/50 text-white p-2 hover:bg-white/20 transition"
            aria-label="Hamid Soccer Training on Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile: Instagram icon + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/50 text-white p-2 hover:bg-white/20 transition"
            aria-label="Hamid Soccer Training on Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <button
            className="inline-flex flex-col items-center justify-center rounded-lg border border-white/50 bg-black/20 p-2 shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="mb-1 block h-0.5 w-5 bg-white" />
            <span className="mb-1 block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-slate-950/95 px-4 py-3">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-2 font-semibold text-white hover:bg-white/20"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
