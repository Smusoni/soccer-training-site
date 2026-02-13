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
