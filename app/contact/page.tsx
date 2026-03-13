"use client";

import { useEffect } from "react";

export default function ContactRedirectPage() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);

  return (
    <main className="min-h-[40vh] bg-slate-900 text-white flex items-center justify-center px-4 text-center">
      <p>
        Redirecting to contact section...
      </p>
    </main>
  );
}
