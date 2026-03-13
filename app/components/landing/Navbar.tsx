"use client";

import { useEffect, useState } from "react";
import type { Locale, NavbarContent } from "./types";

interface NavbarProps {
  content: NavbarContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Navbar({ content, locale, onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
      <div className="h-1 bg-linear-to-r from-red-700 via-red-500 to-red-700" aria-hidden="true" />
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white">
            AJ
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-red-900">
              {content.brandName}
            </span>
            <span className="block text-xs font-medium text-red-700">{content.brandTagline}</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-red-900 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-red-600 transition-transform duration-200 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
          <div className="inline-flex items-center rounded-full border border-red-200 bg-white p-1 text-xs font-semibold shadow-sm">
            <span className="px-2 text-red-700">{content.languageLabel}</span>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
                locale === "nl"
                  ? "bg-red-700 text-white"
                  : "text-red-800 hover:bg-red-50"
              }`}
              onClick={() => onLocaleChange("nl")}
              aria-label="Switch language to Dutch"
            >
              <FlagNlIcon className="h-3.5 w-5 rounded-[2px]" />
              <span>NL</span>
            </button>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition ${
                locale === "en"
                  ? "bg-red-700 text-white"
                  : "text-red-800 hover:bg-red-50"
              }`}
              onClick={() => onLocaleChange("en")}
              aria-label="Switch language to English"
            >
              <FlagUkIcon className="h-3.5 w-5 rounded-[2px]" />
              <span>EN</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-200 text-red-900 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-red-100 bg-white md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-200`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-2 px-4 py-4 sm:px-6">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-transparent px-3 py-3 text-base font-semibold text-red-900 transition hover:border-red-100 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2 text-sm font-semibold">
            <span className="text-red-700">{content.languageLabel}</span>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition ${
                locale === "nl"
                  ? "bg-red-700 text-white"
                  : "text-red-800 hover:bg-white"
              }`}
              onClick={() => onLocaleChange("nl")}
              aria-label="Switch language to Dutch"
            >
              <FlagNlIcon className="h-3.5 w-5 rounded-[2px]" />
              <span>NL</span>
            </button>
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition ${
                locale === "en"
                  ? "bg-red-700 text-white"
                  : "text-red-800 hover:bg-white"
              }`}
              onClick={() => onLocaleChange("en")}
              aria-label="Switch language to English"
            >
              <FlagUkIcon className="h-3.5 w-5 rounded-[2px]" />
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

interface FlagIconProps {
  className?: string;
}

function FlagNlIcon({ className = "h-3.5 w-5" }: FlagIconProps) {
  return (
    <svg viewBox="0 0 6 4" className={className} aria-hidden="true">
      <rect width="6" height="4" fill="#ffffff" />
      <rect width="6" height="1.333" y="0" fill="#ae1c28" />
      <rect width="6" height="1.333" y="2.667" fill="#21468b" />
    </svg>
  );
}

function FlagUkIcon({ className = "h-3.5 w-5" }: FlagIconProps) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true">
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#ffffff" strokeWidth="6" clipPath="url(#uk-clip)" />
      <path d="M0,0 60,30 M60,0 0,30" stroke="#c8102e" strokeWidth="4" clipPath="url(#uk-clip)" />
      <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  );
}
