"use client";

import { useEffect, useState } from "react";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { PracticeAreasSection } from "./PracticeAreasSection";
import { FooterSection } from "./FooterSection";
import { defaultLocale, landingContent } from "./content";
import type { Locale } from "./types";

const LOCALE_STORAGE_KEY = "landing-locale";

export function LawFirmLandingPage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (storedLocale === "nl" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  function handleLocaleChange(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  }

  const content = landingContent[locale];

  return (
    <main lang={locale} className="min-h-screen bg-white text-red-950">
      <Navbar content={content.navbar} locale={locale} onLocaleChange={handleLocaleChange} />
      <HeroSection content={content.hero} />
      <PracticeAreasSection content={content.practiceAreas} />
      <AboutSection content={content.about} />
      <ContactSection content={content.contact} />
      <FooterSection content={content.footer} />
    </main>
  );
}
