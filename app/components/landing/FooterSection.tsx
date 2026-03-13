import type { FooterContent } from "./types";

interface FooterSectionProps {
  content: FooterContent;
}

export function FooterSection({ content }: FooterSectionProps) {
  return (
    <footer className="border-t border-red-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold tracking-tight text-red-900">Advocatenkantoor Jankie</h3>
          <p className="mt-3 text-sm leading-7 text-red-900/80">{content.legalNote}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-700">
            {content.quickLinksTitle}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-red-900/80">
            {content.quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-700">
            {content.legalLinksTitle}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-red-900/80">
            {content.legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-red-700">
            {content.contactTitle}
          </h4>
          <ul className="mt-3 space-y-3 text-sm text-red-900/80">
            <li className="flex flex-col items-start gap-1">
              <span className="font-semibold">{content.contact.phoneLabel}:</span>
              <a
                href={content.contact.phoneHref}
                className="inline-flex max-w-full items-center rounded-md border border-red-200 bg-red-50 px-2.5 py-1 font-semibold text-red-800 underline decoration-red-400 decoration-2 underline-offset-2 transition hover:-translate-y-0.5 hover:bg-red-100 hover:text-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                {content.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex flex-col items-start gap-1">
              <span className="font-semibold">{content.contact.emailLabel}:</span>
              <a
                href={content.contact.emailHref}
                className="inline-flex max-w-full break-all rounded-md border border-red-200 bg-red-50 px-2.5 py-1 font-semibold text-red-800 underline decoration-red-400 decoration-2 underline-offset-2 transition hover:-translate-y-0.5 hover:bg-red-100 hover:text-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                {content.contact.emailValue}
              </a>
            </li>
          </ul>

          <h5 className="mt-5 text-xs font-semibold uppercase tracking-wide text-red-700">
            {content.socialTitle}
          </h5>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {content.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-800 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6.94 6.5A1.44 1.44 0 1 1 4.06 6.5a1.44 1.44 0 0 1 2.88 0ZM4.5 8.5h2.9V19h-2.9V8.5Zm5.2 0h2.78v1.43h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.46V19h-2.9v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V19H9.7V8.5Z" />
                </svg>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-red-100 bg-red-50/60">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-red-800 sm:px-6 lg:px-8">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}
