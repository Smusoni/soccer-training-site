'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
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
);

export default function Home() {
  const calendlyMain = "https://calendly.com/hamidsoccertraining";
  const instagram = "https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg==";
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getSectionClass = (id: string) => {
    return visibleSections.has(id)
      ? 'opacity-100'
      : 'opacity-0';
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{backgroundImage: 'url(/hamidslogo.png)', backgroundSize: '70%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-white" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 sm:px-4 py-2 text-white">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs sm:text-sm font-semibold">Elite private & group training</span>
            </div>

            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              <span className="block text-blue-300">Level up fast.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/90">
              High-intensity sessions built to elevate first touch, decision-making, confidence,
              and real game performance — for all ages, college, and pro players.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <a
                href={calendlyMain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Reserve a Spot
              </a>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4 justify-center">
              {[
                { label: "Levels", value: "All Ages, College, Pro" },
                { label: "Session", value: "60 min" },
                { label: "Focus", value: "Game-speed reps" },
                { label: "Goal", value: "Confidence + results" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/10 p-2 sm:p-4 text-white">
                  <div className="text-xs sm:text-xs text-white/80">{s.label}</div>
                  <div className="mt-1 text-sm sm:text-base font-bold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section data-section id="about" className={`mx-auto max-w-6xl px-4 py-12 sm:py-16 transition-opacity duration-700 relative ${getSectionClass('about')} bg-slate-900`}>
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 sm:p-8 md:p-12">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Meet Coach Hamid</h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
                A former pro and college standout, Hamid has domestic and international experience to offer. His coaching methodology is proven to help players reach their potential and fall in love with the game. He has worked with many youth players that have gone on to play at top college programs, MLS teams, and National Teams at a World Cup.
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                His approach combines technical mastery, decision-making, and tactical intelligence—designed to build confidence and transfer directly to game performance.
              </p>
              <div className="mt-6">
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 flex items-center justify-center order-1 md:order-2">
              <Image
                src="/images/hamid-about.jpeg"
                alt="Hamid Shariff"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-section className={`w-full transition-opacity duration-700 relative ${getSectionClass('services')} bg-slate-900`}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">Who it's for</h2>
            <p className="mt-2 text-gray-300">
              Select your age group, train with intensity, and build habits that transfer to games.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "U8–U11 Boys/Girls",
                "U12–U14 Boys/Girls",
                "High School Girls",
                "High School Boys",
                "Pro / College Players",
                "1-on-1 (All levels)",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-700/50 px-4 py-3 font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">What you'll work on</h2>
            <p className="mt-2 text-gray-300">
              A structured approach that develops technical ability and decision-making.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "First touch + receiving under pressure",
                "1v1 moves + tight dribbling",
                "Finishing (both feet) + composure",
                "Passing, scanning, and speed of play",
                "Confidence + game-real reps",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-700/30 px-4 py-3 text-gray-200">
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={calendlyMain}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 transition"
            >
              See Availability
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" data-section className={`w-full transition-opacity duration-700 relative ${getSectionClass('pricing')} bg-slate-900`}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">Pricing</h2>
          <p className="mt-2 text-gray-300">Simple, clear pricing — no confusion.</p>
        </div>

        <div className="mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">1-on-1 Training</h3>
                <p className="mt-2 text-gray-400">Personalized plan built around your needs.</p>
              </div>
              <span className="rounded-full bg-blue-900/30 px-3 py-1 text-sm font-semibold text-blue-300">
                Personal
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-700/30 p-5 border border-white/5">
              <div className="text-sm text-gray-400">Rate</div>
              <div className="text-4xl font-extrabold text-white">$120</div>
              <div className="text-sm text-gray-400">per 1-hour session</div>
            </div>

            <a
              href={calendlyMain}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Book 1-on-1
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Group Training</h3>
                <p className="mt-2 text-gray-400">Bring teammates/friends — pricing is per player.</p>
              </div>
              <span className="rounded-full bg-blue-900/30 px-3 py-1 text-sm font-semibold text-blue-300">
                Best Value
              </span>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl bg-slate-700/30 p-5 border border-white/5">
              <div className="flex items-center justify-between rounded-xl bg-slate-600/50 px-4 py-3">
                <span className="font-semibold text-white">2–3 players</span>
                <span className="font-extrabold text-white">$80</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-600/50 px-4 py-3">
                <span className="font-semibold text-white">4–5 players</span>
                <span className="font-extrabold text-white">$60</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-600/50 px-4 py-3">
                <span className="font-semibold text-white">5–6 players</span>
                <span className="font-extrabold text-white">$50</span>
              </div>
            </div>

            <a
              href={calendlyMain}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 transition"
            >
              Book a Group
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / PROS TRAINED */}
      <section
        id="testimonials"
        data-section
        className={`w-full transition-opacity duration-700 ${getSectionClass("testimonials")} bg-slate-900`}
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                  Pros & Players Trained
                </h2>
                <p className="mt-2 text-gray-300">
                  Testimonials and stories from players Hamid has worked with — from youth to college and pro.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-4">
                <p className="text-sm text-gray-300">
                  Add testimonials from professional players you&apos;ve trained here (for example, copied from CoachUp).
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-4">
                <p className="text-sm text-gray-300">
                  Include quotes from college standouts or youth players who progressed to top programs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-4">
                <p className="text-sm text-gray-300">
                  We can replace this placeholder text with real names, teams, and testimonials once you provide them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-section
        className={`w-full transition-opacity duration-700 ${getSectionClass("contact")} bg-slate-900`}
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Contact
            </h2>
            <p className="mt-2 text-gray-300">
              Have questions about training, groups, or availability? Reach out anytime.
            </p>

            <div className="mt-6 space-y-3 text-gray-200 text-sm sm:text-base">
              <div>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:hamidsoccertraining@gmail.com"
                  className="text-blue-300 hover:underline break-all"
                >
                  hamidsoccertraining@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section data-section className={`w-full transition-opacity duration-700 ${getSectionClass('gallery')} bg-slate-900`}>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-blue-200 bg-white/40 backdrop-blur p-8 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Gallery</h2>
                <p className="mt-2 text-gray-600">
                  Training highlights, player development, and session clips.
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/gallery/"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                  View Gallery
                </Link>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-pink-400 text-pink-400 rounded-lg hover:bg-pink-900/20 transition font-semibold"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
