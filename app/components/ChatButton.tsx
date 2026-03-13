"use client";

export default function ChatButton() {
  return (
    <button
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      aria-label="Open chat"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
        <path d="M7 9h10v2H7zm0-3h10v2H7z" />
      </svg>
    </button>
  );
}
