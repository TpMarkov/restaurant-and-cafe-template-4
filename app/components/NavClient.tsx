"use client";

import { useEffect, useState } from "react";

export default function NavClient() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition ${scrolled ? "backdrop-blur-sm bg-brand-surface/60 shadow" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-3 text-brand-ink">
            <div className="w-9 h-9 rounded-md bg-brand-primary flex items-center justify-center text-brand-surface font-bold">
              H&O
            </div>
            <span className="hidden sm:inline-block font-semibold">
              Harbor & Oak
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#menu"
              className="text-sm text-brand-muted hover:text-brand-ink"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm text-brand-muted hover:text-brand-ink"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-sm text-brand-muted hover:text-brand-ink"
            >
              Gallery
            </a>
            <a href="#reservations" className="btn-ghost">
              Reserve
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md bg-brand-surface/30"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="#E6EEF0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="#E6EEF0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-surface/80 border-t border-brand-surface/40">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#menu"
              className="block text-brand-ink"
              onClick={() => setOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block text-brand-ink"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#gallery"
              className="block text-brand-ink"
              onClick={() => setOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#reservations"
              className="block text-brand-ink"
              onClick={() => setOpen(false)}
            >
              Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
