export type Locale = "nl" | "en";

export interface PracticeArea {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarContent {
  brandName: string;
  brandTagline: string;
  links: ReadonlyArray<NavLink>;
  languageLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  callCtaLabel: string;
  whyChooseTitle: string;
  highlights: ReadonlyArray<string>;
}

export interface PracticeAreasContent {
  title: string;
  description: string;
  items: ReadonlyArray<PracticeArea>;
}

export interface AboutContent {
  title: string;
  description: string;
  testimonialTitle: string;
  testimonials: ReadonlyArray<Testimonial>;
}

export interface ContactContent {
  title: string;
  description: string;
  officeInfo: string;
  phoneLabel: string;
  emailLabel: string;
  phoneValue: string;
  emailValue: string;
  availabilityTitle: string;
  availabilityItems: ReadonlyArray<string>;
  responseNote: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact {
  phoneLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  emailLabel: string;
  emailValue: string;
  emailHref: string;
}

export interface FooterSocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface FooterContent {
  quickLinksTitle: string;
  quickLinks: ReadonlyArray<FooterLink>;
  legalLinksTitle: string;
  legalLinks: ReadonlyArray<FooterLink>;
  contactTitle: string;
  contact: FooterContact;
  socialTitle: string;
  socialLinks: ReadonlyArray<FooterSocialLink>;
  legalNote: string;
  copyright: string;
}

export interface LandingContent {
  navbar: NavbarContent;
  hero: HeroContent;
  practiceAreas: PracticeAreasContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
}
