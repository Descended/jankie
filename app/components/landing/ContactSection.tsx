import type { ContactContent } from "./types";

interface ContactSectionProps {
  content: ContactContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-2xl bg-main-800 p-8 text-main-50 lg:grid-cols-2 lg:p-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">{content.title}</h2>
          <p className="mt-4 text-main-100">{content.description}</p>
          <p className="mt-6 text-sm text-main-100">{content.officeInfo}</p>
        </div>

        <div className="rounded-xl border border-main-200/60 bg-white/10 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white">{content.availabilityTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-main-100">
            {content.availabilityItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-main-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+31622224070"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-main-800 transition hover:bg-main-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.24 1l-2.2 2.2Z" />
              </svg>
              <span>{content.phoneLabel}: {content.phoneValue}</span>
            </a>
            <a
              href="mailto:mr.soerin.jankie@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-main-100 bg-main-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-main-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 5.6 10-5.6V6a2 2 0 0 0-2-2Zm2 5.1-9.52 5.33a1 1 0 0 1-.96 0L2 9.1V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.1Z" />
              </svg>
              <span>{content.emailLabel}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-main-100/90">{content.responseNote}</p>
        </div>
      </div>
    </section>
  );
}
