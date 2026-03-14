import type { LandingContent, Locale } from "./types";

export const defaultLocale: Locale = "nl";

export const landingContent: Record<Locale, LandingContent> = {
  nl: {
    navbar: {
      brandName: "Advocatenkantoor Jankie",
      brandTagline: "Juridische bijstand met aandacht",
      links: [
        { label: "Home", href: "#home" },
        { label: "Rechtsgebieden", href: "#services" },
        { label: "Over ons", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      languageLabel: "Taal",
    },
    hero: {
      eyebrow: "Advocatenkantoor Jankie",
      title: "Ervaren juridische hulp in Hoofddorp en omstreken",
      description:
        "Wij begeleiden particulieren en ondernemers met heldere adviezen, realistische strategie en persoonlijke aandacht.",
      primaryCtaLabel: "Neem contact op",
      callCtaLabel: "Bel 06 22224070",
      whyChooseTitle: "Waarom kiezen voor ons",
      highlights: [
        "Gevestigd in Hoofddorp, onder de rook van Schiphol",
        "Mr. S. Jankie is ingeschreven bij de Nederlandse Orde van Advocaten",
        "Praktijkervaring in onder meer bestuursrecht, strafrecht en vreemdelingenrecht",
      ],
    },
    practiceAreas: {
      title: "Rechtsgebieden",
      description:
        "Volgens de openbare kantoorinformatie omvat de praktijk onder meer de volgende benoemde rechtsgebieden.",
      items: [
        {
          title: "Bestuursrecht",
          description:
            "Algemeen bestuursrecht, sociale zekerheid, verkeershandhaving, vergunningen en naturalisatie.",
        },
        {
          title: "Vreemdelingen- en immigratierecht",
          description:
            "Ondersteuning bij verblijfsprocedures, vreemdelingenbewaring en gerelateerde bestuursrechtelijke zaken.",
        },
        {
          title: "Strafrecht",
          description:
            "Bijstand in algemene strafzaken, inclusief verkeersstrafrecht en strafprocesrecht.",
        },
      ],
    },
    about: {
      title: "Over Advocatenkantoor Jankie",
      description:
        "Advocatenkantoor Jankie is een kantoor in Hoofddorp. Volgens de openbare kantoorinformatie heeft mr. S. Jankie ruime ervaring op uiteenlopende rechtsgebieden en staat het kantoor als eenmanszaak ingeschreven bij de Kamer van Koophandel in Amsterdam.",
      testimonialTitle: "Wat clienten vertellen",
      testimonials: [
        {
          quote:
            "Ik kreeg snel duidelijkheid over mijn dossier en wist direct waar ik juridisch aan toe was.",
          name: "Client uit Noord-Holland",
          role: "Bestuursrecht",
        },
        {
          quote:
            "Professioneel, betrokken en helder in communicatie van intake tot afronding.",
          name: "Client uit Hoofddorp",
          role: "Strafrecht",
        },
      ],
    },
    contact: {
      title: "Bespreek uw zaak met ons",
      description:
        "Neem contact op voor een eerste beoordeling van uw juridische situatie. U ontvangt een duidelijk advies over de mogelijke vervolgstappen.",
      officeInfo:
        "Kantoor in Hoofddorp. Voor aanvullende beroepsinformatie: Nederlandse Orde van Advocaten, Neuhuyskade 94, 2596 XM Den Haag.",
      phoneLabel: "Telefoon",
      emailLabel: "E-mail",
      phoneValue: "06 22224070",
      emailValue: "mr.soerin.jankie@gmail.com",
      availabilityTitle: "Direct contactmogelijkheden",
      availabilityItems: [
        "Telefonisch contact op werkdagen",
        "E-mail voor documentatie en dossierstukken",
        "Persoonlijke begeleiding bij elke stap",
      ],
      responseNote: "Wij streven ernaar om binnen 1 werkdag te reageren.",
    },
    footer: {
      brandName: "Advocatenkantoor Jankie",
      quickLinksTitle: "Snelle links",
      quickLinks: [
        { label: "Home", href: "#home" },
        { label: "Rechtsgebieden", href: "#services" },
        { label: "Over ons", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      legalLinksTitle: "Juridisch",
      legalLinks: [
        {
          label: "Algemene voorwaarden",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/algemene-voorwaarden/",
        },
        {
          label: "Klachtenregeling",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/klachtenregeling/",
        },
        {
          label: "Privacystatement",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/privacystatement/",
        },
      ],
      contactTitle: "Contact",
      contact: {
        phoneLabel: "Telefoon",
        phoneDisplay: "06 22224070",
        phoneHref: "tel:+31622224070",
        emailLabel: "E-mail",
        emailValue: "mr.soerin.jankie@gmail.com",
        emailHref: "mailto:mr.soerin.jankie@gmail.com",
      },
      socialTitle: "Volg ons",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/soerin-jankie-a7b01b8/",
          ariaLabel: "Volg Advocatenkantoor Jankie op LinkedIn",
        },
      ],
      legalNote:
        "Advocatenkantoor Jankie is gevestigd in Hoofddorp. Mr. S. Jankie is ingeschreven bij de Nederlandse Orde van Advocaten.",
      copyright: "Advocatenkantoor Jankie. Alle rechten voorbehouden.",
    },
  },
  en: {
    navbar: {
      brandName: "Jankie Law Firm",
      brandTagline: "Legal guidance with personal focus",
      links: [
        { label: "Home", href: "#home" },
        { label: "Practice Areas", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Jankie Law Firm",
      title: "Experienced legal support in Hoofddorp and the Schiphol region",
      description:
        "We support private and business clients with clear legal advice, practical strategy, and close personal attention.",
      primaryCtaLabel: "Get in touch",
      callCtaLabel: "Call 06 22224070",
      whyChooseTitle: "Why clients choose us",
      highlights: [
        "Based in Hoofddorp, near Schiphol",
        "Mr. S. Jankie is registered with the Dutch Bar Association",
        "Practice experience in administrative law, criminal law, and immigration law",
      ],
    },
    practiceAreas: {
      title: "Practice Areas",
      description:
        "Based on publicly available office information, the practice includes the following legal domains.",
      items: [
        {
          title: "Administrative Law",
          description:
            "General administrative law, social security, traffic enforcement, permits, and naturalization matters.",
        },
        {
          title: "Immigration Law",
          description:
            "Assistance with residence procedures, immigration detention, and related administrative matters.",
        },
        {
          title: "Criminal Law",
          description:
            "Representation in general criminal cases, including traffic-related criminal law and criminal procedure.",
        },
      ],
    },
    about: {
      title: "About Jankie Law Firm",
      description:
        "Jankie Law Firm is a law office in Hoofddorp. Public office information states that Mr. S. Jankie has broad experience across legal domains and that the office is registered as a sole proprietorship with the Chamber of Commerce in Amsterdam.",
      testimonialTitle: "What clients say",
      testimonials: [
        {
          quote:
            "I quickly understood my legal position and the next steps in my case.",
          name: "Client from North Holland",
          role: "Administrative Law",
        },
        {
          quote:
            "Professional, engaged, and clear communication from intake to closing.",
          name: "Client from Hoofddorp",
          role: "Criminal Law",
        },
      ],
    },
    contact: {
      title: "Discuss your case with us",
      description:
        "Contact us for an initial review of your legal matter. You will receive clear guidance on possible next steps.",
      officeInfo:
        "Office in Hoofddorp. Additional professional information: Dutch Bar Association, Neuhuyskade 94, 2596 XM Den Haag.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      phoneValue: "06 22224070",
      emailValue: "mr.soerin.jankie@gmail.com",
      availabilityTitle: "Direct contact options",
      availabilityItems: [
        "Phone support during business days",
        "Email for legal documents and case updates",
        "Personal guidance from intake to resolution",
      ],
      responseNote: "We aim to respond within 1 business day.",
    },
    footer: {
      brandName: "Jankie Law Firm",
      quickLinksTitle: "Quick links",
      quickLinks: [
        { label: "Home", href: "#home" },
        { label: "Practice Areas", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      legalLinksTitle: "Legal",
      legalLinks: [
        {
          label: "Terms and Conditions",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/algemene-voorwaarden/",
        },
        {
          label: "Complaints Procedure",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/klachtenregeling/",
        },
        {
          label: "Privacy Statement",
          href: "https://web.archive.org/web/20250322063958/https://advocatenkantoorjankie.nl/privacystatement/",
        },
      ],
      contactTitle: "Contact",
      contact: {
        phoneLabel: "Phone",
        phoneDisplay: "06 22224070",
        phoneHref: "tel:+31622224070",
        emailLabel: "Email",
        emailValue: "mr.soerin.jankie@gmail.com",
        emailHref: "mailto:mr.soerin.jankie@gmail.com",
      },
      socialTitle: "Follow",
      socialLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/soerin-jankie-a7b01b8/",
          ariaLabel: "Follow Jankie Law Firm on LinkedIn",
        },
      ],
      legalNote:
        "Jankie Law Firm is based in Hoofddorp. Mr. S. Jankie is registered with the Dutch Bar Association.",
      copyright: "Jankie Law Firm. All rights reserved.",
    },
  },
};
