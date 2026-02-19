"use client";

import { useState, useRef, useEffect } from "react";

interface FaqEntry {
  keywords: string[];
  question: string;
  answer: string;
}

const faqs: FaqEntry[] = [
  {
    keywords: ["price", "cost", "how much", "rate", "pricing", "pay", "money", "fee"],
    question: "How much does training cost?",
    answer:
      "1-on-1 sessions are $120 per hour. Group rates per player: 2\u20133 players $80, 4\u20135 players $60, 5\u20136 players $50.",
  },
  {
    keywords: ["book", "reserve", "schedule", "sign up", "calendly", "appointment", "session"],
    question: "How do I book a session?",
    answer:
      'You can reserve a spot through Calendly: https://calendly.com/hamidsoccertraining \u2014 pick a date and time that works for you.',
  },
  {
    keywords: ["cancel", "reschedule", "change", "refund"],
    question: "What is the cancellation policy?",
    answer:
      "Please reach out to hamidsoccertraining@gmail.com as early as possible if you need to cancel or reschedule.",
  },
  {
    keywords: ["where", "location", "field", "address", "place", "columbus", "ohio"],
    question: "Where does training take place?",
    answer:
      "Training sessions are held in the Columbus, Ohio area. Exact field details are shared when you book your session.",
  },
  {
    keywords: ["age", "level", "u8", "u10", "u12", "u14", "high school", "college", "pro", "young", "kid", "adult", "beginner"],
    question: "What ages and skill levels do you train?",
    answer:
      "All ages and levels: U8\u2013U11, U12\u2013U14, High School Boys & Girls, College, Pro, and 1-on-1 at any level.",
  },
  {
    keywords: ["bring", "wear", "gear", "equipment", "cleat", "shin", "ball", "water", "what to"],
    question: "What should I bring to a session?",
    answer:
      "Bring cleats, shin guards, a water bottle, and a soccer ball. Wear comfortable athletic clothing appropriate for the weather.",
  },
  {
    keywords: ["group", "team", "friends", "teammates"],
    question: "Can I bring friends or teammates?",
    answer:
      "Absolutely! Group sessions are available and the per-player price drops as you add more players. Check pricing for details.",
  },
  {
    keywords: ["contact", "email", "reach", "question", "talk"],
    question: "How can I contact Coach Hamid?",
    answer:
      "Email hamidsoccertraining@gmail.com anytime \u2014 or DM on Instagram @hamid_soccertraining.",
  },
];

const FALLBACK =
  "I don\u2019t have an answer for that. Email hamidsoccertraining@gmail.com and Coach Hamid will get back to you!";

interface Message {
  from: "user" | "bot";
  text: string;
}

function matchFaq(input: string): string {
  const lower = input.toLowerCase();
  let best: FaqEntry | null = null;
  let bestScore = 0;

  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return best ? best.answer : FALLBACK;
}

const quickPicks = [
  "Pricing",
  "How to book",
  "Location",
  "Age groups",
  "What to bring",
  "Contact",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I can help with common questions about training. Pick a topic below or type your question.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { from: "user", text: text.trim() };
    const botMsg: Message = { from: "bot", text: matchFaq(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Open chat"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <path d="M7 9h10v2H7zm0-3h10v2H7z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 flex w-[340px] max-w-[calc(100vw-2.5rem)] flex-col rounded-2xl border border-white/10 bg-slate-900 shadow-2xl sm:w-[370px]">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-blue-600 px-4 py-3">
            <span className="text-sm font-semibold text-white">
              Hamid Soccer Training
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition"
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex flex-col gap-2 overflow-y-auto px-4 py-3"
            style={{ maxHeight: "320px", minHeight: "180px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  msg.from === "bot"
                    ? "self-start bg-slate-800 text-gray-200"
                    : "self-end bg-blue-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick picks */}
          <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-4 py-2">
            {quickPicks.map((label) => (
              <button
                key={label}
                onClick={() => handleSend(label)}
                className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-gray-300 hover:bg-white/10 transition"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex gap-2 border-t border-white/10 px-4 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 rounded-lg bg-slate-800 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
