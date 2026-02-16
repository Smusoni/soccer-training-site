"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const instagram = "https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg==";

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border bg-white">
            <Image
              src="/hamidslogo.png"
              alt="Hamid Soccer Training logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Hamid Soccer Training</div>
            <div className="text-xs text-gray-600">Private • Group • Pro/College</div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {/* Instagram icon */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-pink-400 text-pink-500 p-2 hover:bg-pink-50 transition"
            aria-label="Hamid Soccer Training on Instagram"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                ry="5"
                className="fill-none stroke-current"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                className="fill-none stroke-current"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
            </svg>
          </a>

          {/* Hamburger menu */}
          <button
            className="inline-flex flex-col items-center justify-center rounded-lg border p-2 shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-5 bg-black mb-1" />
            <span className="block h-0.5 w-5 bg-black mb-1" />
            <span className="block h-0.5 w-5 bg-black" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t bg-white px-4 py-3">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-2 font-semibold text-gray-900 hover:bg-gray-100"
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
