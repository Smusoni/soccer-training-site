import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const instagramLink = "https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg==";
  const calendlyMain = "https://calendly.com/hamidsoccertraining";
  
  const images = [
    "/gallery/gallery-1.jpeg",
    "/gallery/gallery-2.jpeg",
    "/gallery/gallery-3.jpeg",
    "/gallery/gallery-4.jpeg",
    "/gallery/training-session-indoor-1.jpeg",
    "/gallery/training-session-outdoor-1.jpeg",
    "/gallery/1v1-dribbling-session.jpeg",
    "/gallery/speed-agility-drill.jpeg",
    "/gallery/technical-training-indoor.jpeg",
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Training Gallery</h1>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 border border-pink-400 text-pink-400 rounded-lg hover:bg-pink-900/20 transition font-semibold text-sm sm:text-base"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Training photo ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:underline text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
