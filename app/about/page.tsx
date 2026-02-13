'use client';

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const calendlyMain = "https://calendly.com/hamidsoccertraining";

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link href="/" className="text-blue-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Hamid</h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
              Hamid Shariff is a professional soccer coach with years of experience coaching elite players at all levels. His coaching philosophy centers on technical mastery, tactical intelligence, and building player confidence.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              With credentials from Columbus Crew SC, Wittenberg University, and UEFA certification, Hamid brings a proven track record of player development and game performance improvement.
            </p>
            <a
              href={calendlyMain}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Book a Session
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 flex items-center justify-center">
            <Image
              src="/images/hamid-about.jpeg"
              alt="Hamid Shariff"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">Coaching Approach</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Technical Development</h3>
              <p className="text-gray-300">
                Building first touch, ball control, and technical skills through game-realistic drills.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Tactical Intelligence</h3>
              <p className="text-gray-300">
                Teaching positioning, decision-making, and game reading for smarter play.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Position-Specific Training</h3>
              <p className="text-gray-300">
                Customized development plans based on player position and goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Confidence Building</h3>
              <p className="text-gray-300">
                Fostering game confidence through high-intensity, game-speed training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
