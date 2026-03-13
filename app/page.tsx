'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const calendlyMain = "https://calendly.com/hamidsoccertraining";
  const instagram = "https://www.instagram.com/hamid_soccertraining?igsh=MTVzcnVuMHFkdnk1eg==";
  const heroNav = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/#contact" },
  ];
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [
    "/gallery/gallery-1.jpeg",
    "/gallery/training-session-outdoor-1.jpeg",
    "/gallery/gallery-3.jpeg",
    "/gallery/1v1-dribbling-session.jpeg",
    "/gallery/speed-agility-drill.jpeg",
    "/gallery/technical-training-indoor.jpeg",
  ];
  const featuredPlayers = [
    { name: "Lincoln Justice", club: "College" },
    { name: "Zach Lloyd", club: "College" },
    { name: "Chase Adams", club: "Pro/National Team" },
    { name: "Tristan Brown", club: "Brown" },
    { name: "Cole Mrowka", club: "Pro" },
    { name: "Nuukele Gboe", club: "Pro" },
  ];
  const trainingPrograms = [
    {
      title: "Team Training",
      desc: "Game-speed team reps focused on chemistry, movement, and execution.",
      image: "/gallery/speed-agility-drill.jpeg",
    },
    {
      title: "Online Player Consaltent",
      desc: "Where we help players with the recruiting process.",
      image: "/gallery/training-session-outdoor-1.jpeg",
    },
    {
      title: "Camps",
      desc: "Compete and grow with teammates in high-tempo group sessions.",
      image: "/gallery/gallery-4.jpeg",
    },
    {
      title: "1-on-1 Private",
      desc: "Custom session plans based on your exact development needs.",
      image: "/gallery/technical-training-indoor.jpeg",
    },
    {
      title: "College / Pro Prep",
      desc: "High-intensity training for elite players and returners.",
      image: "/gallery/1v1-dribbling-session.jpeg",
    },
    {
      title: "Small Group Training",
      desc: "Train with teammates in small groups focused on game-speed reps and decision-making.",
      image: "/gallery/gallery-2.jpeg",
    },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const getSectionClass = (id: string) => {
    return visibleSections.has(id)
      ? 'opacity-100'
      : 'opacity-0';
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-semibold">
          Spring sessions are live - registration is open.
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] bg-black">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: heroSlide === i ? 1 : 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 min-h-[92vh] flex flex-col items-center justify-center text-center">
          <div className="hero-cta-smooth mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
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
            {heroNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm sm:text-base font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] hover:text-gray-200 transition"
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
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
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
                <circle cx="12" cy="12" r="4" className="fill-none stroke-current" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
              </svg>
            </a>
          </div>

          <h1 className="hero-logo-smooth text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Hamid Soccer Training
          </h1>

          <p className="hero-cta-smooth mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
            Every training session is tailored to the individual needs of each player, helping them develop the skills and confidence needed to reach their goals.
          </p>

          <a
            href={calendlyMain}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-smooth mt-8 sm:mt-10 inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 shadow-lg"
          >
            Reserve a Spot
          </a>
        </div>
      </section>

      {/* PROGRAMS / SERVICES */}
      <section id="services" data-section className={`w-full transition-opacity duration-700 relative ${getSectionClass('services')} bg-slate-900`}>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Training Programs</h2>
            <p className="mt-2 text-gray-300">Choose the format that fits your goals and schedule.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program) => (
              <a
                key={program.title}
                href={calendlyMain}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/15 min-h-52"
                style={{
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 group-hover:from-black/70 transition" />
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white">{program.title}</h3>
                  <p className="mt-2 text-sm text-gray-100">{program.desc}</p>
                  <span className="mt-4 inline-flex w-fit rounded-md bg-blue-600 px-3 py-1 text-xs font-semibold text-white group-hover:bg-blue-500 transition">
                    Book this program
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section data-section id="about" className={`mx-auto max-w-6xl px-4 py-12 sm:py-16 transition-opacity duration-700 relative ${getSectionClass('about')} bg-slate-900`}>
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/10 backdrop-blur p-6 sm:p-8 md:p-12">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Meet Coach Hamid</h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4">
                A former pro and college standout, Hamid has domestic and international experience to offer. His coaching methodology is proven to help players reach their potential and fall in love with the game.
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
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ATHLETES */}
      <section id="featured" data-section className={`w-full transition-opacity duration-700 ${getSectionClass('featured')} bg-slate-900`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">Featured Athletes</h2>
          <p className="mt-2 text-gray-300">Players progressing through high-level training and competition.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {featuredPlayers.map((player) => (
              <div key={player.name} className="rounded-2xl border border-white/10 bg-slate-800/50 p-4">
                <p className="font-semibold text-white">{player.name}</p>
                <p className="text-sm text-gray-300">{player.club}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" data-section className={`w-full transition-opacity duration-700 ${getSectionClass('testimonials')} bg-slate-900`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">What Parents Are Saying</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                <p className="text-sm text-gray-200">
                  "Hamid and his sessions built confidence and sharper decisions in games. The development has been obvious week to week."
                </p>
                <p className="mt-3 text-xs font-semibold text-blue-300">- Parent, U13 Player</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                <p className="text-sm text-gray-200">
                  "The pace and detail are excellent. Training transfers directly to game performance."
                </p>
                <p className="mt-3 text-xs font-semibold text-blue-300">- High School Athlete</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                <p className="text-sm text-gray-200">
                  "Professional environment, challenging reps, and real accountability. Exactly what we were looking for."
                </p>
                <p className="mt-3 text-xs font-semibold text-blue-300">- College Player</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-section className={`w-full transition-opacity duration-700 ${getSectionClass('contact')} bg-slate-900`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">Contact</h2>
            <p className="mt-2 text-gray-300">
              Have questions about training, groups, or availability? Reach out anytime.
            </p>
            <div className="mt-6 space-y-3 text-gray-200 text-sm sm:text-base">
              <div>
                <span className="font-semibold">Email: </span>
                <a href="mailto:hamidsoccertraining@gmail.com" className="text-blue-300 hover:underline break-all">
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
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" className="fill-none stroke-current" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" className="fill-none stroke-current" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
                  </svg>
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
