"use client";

import { useEffect, useRef, useState } from "react";
import { CircleFlag } from "react-circle-flags";
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
            <span className="block text-base font-extrabold leading-tight tracking-tight text-red-900">
              {content.brandName}
            </span>
            <span className="block text-xs font-medium leading-tight text-red-700/90">{content.brandTagline}</span>
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
          <LanguageDropdown
            locale={locale}
            label={content.languageLabel}
            onLocaleChange={onLocaleChange}
            className="h-9 rounded-full border border-red-200 bg-white px-3 text-sm font-semibold text-red-900 shadow-sm transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          />
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
          <LanguageDropdown
            locale={locale}
            label={content.languageLabel}
            onLocaleChange={onLocaleChange}
            fullWidth
            className="mt-2 h-10 w-full rounded-lg border border-red-200 bg-red-50 px-3 text-sm font-semibold text-red-900 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          />
        </div>
      </div>
    </header>
  );
}

interface LanguageDropdownProps {
  locale: Locale;
  label: string;
  onLocaleChange: (locale: Locale) => void;
  className: string;
  fullWidth?: boolean;
}

const languageOptions: Array<{ value: Locale; label: string; countryCode: string }> = [
  { value: "nl", label: "Nederlands", countryCode: "nl" },
  { value: "en", label: "English", countryCode: "gb" },
];

const FLAG_SIZE = 12;

function LanguageDropdown({ locale, label, onLocaleChange, className, fullWidth = false }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activeLanguage = languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

  return (
    <div ref={dropdownRef} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <span className="sr-only">{label}</span>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className={`${className} inline-flex items-center justify-between gap-2 outline-none`}
      >
        <span className="inline-flex items-center gap-1">
          <CircleFlag
            countryCode={activeLanguage.countryCode}
            width={FLAG_SIZE}
            height={FLAG_SIZE}
            aria-hidden="true"
          />
          <span>{activeLanguage.label}</span>
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen ? (
        <div
          role="listbox"
          aria-label={label}
          className={`absolute z-50 mt-2 overflow-hidden rounded-xl border border-red-200 bg-white shadow-lg ${
            fullWidth ? "left-0 w-full" : "right-0 w-44"
          }`}
        >
          {languageOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={locale === option.value}
              onClick={() => {
                onLocaleChange(option.value);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-1 px-3 py-2.5 text-left text-sm font-semibold transition ${
                locale === option.value
                  ? "bg-red-100 text-red-900"
                  : "text-red-900 hover:bg-red-50"
              }`}
            >
              <CircleFlag
                countryCode={option.countryCode}
                width={FLAG_SIZE}
                height={FLAG_SIZE}
                aria-hidden="true"
              />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
