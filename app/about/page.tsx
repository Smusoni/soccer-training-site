'use client';

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link href="/" className="text-blue-600 font-semibold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Coach Hamid</h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
              A former pro and college standout, Hamid has domestic and international experience to offer. His coaching methodology is proven to help players reach their potential and fall in love with the game.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              He has worked with many youth players that have gone on to play at top college programs, MLS teams, and National Teams at a World Cup.
            </p>

            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Over 10 Years of Coaching Experience
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                  <li>Wittenberg University Men&apos;s Soccer</li>
                  <li>Northwest FC Director of Coaching</li>
                  <li>Columbus Crew Academy local scout</li>
                  <li>SD Huesca Academy Coach (Spain)</li>
                  <li>ODP Coach</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Education &amp; Licensing
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  UEFA Coaching License (Spain)
                </p>
              </div>
            </div>
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
          <h2 className="text-2xl font-bold text-white mb-4">Training Philosophy</h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
            Every session is designed specifically to meet the needs of the player. My focus is to
            build a strong foundation of technical skill, decision-making, and tactical intelligence.
          </p>
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
