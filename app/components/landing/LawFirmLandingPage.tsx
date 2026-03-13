"use client";

import { useRouter } from "next/navigation";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { PracticeAreasSection } from "./PracticeAreasSection";
import { FooterSection } from "./FooterSection";
import { landingContent } from "./content";
import type { Locale } from "./types";

interface LawFirmLandingPageProps {
  locale: Locale;
}

export function LawFirmLandingPage({ locale }: LawFirmLandingPageProps) {
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    router.push(nextLocale === "en" ? "/en" : "/");
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
