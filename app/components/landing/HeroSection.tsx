import type { HeroContent } from "./types";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="home" className="border-b border-main-100 bg-gradient-to-b from-white to-main-50/40 scroll-mt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-main-700">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-main-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="text-lg leading-8 text-main-900/80">{content.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-main-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-main-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-700"
            >
              {content.primaryCtaLabel}
            </a>
            <a
              href="tel:+31622224070"
              className="inline-flex items-center justify-center rounded-md border border-main-200 bg-white px-6 py-3 text-sm font-semibold text-main-900 transition hover:bg-main-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-700"
            >
              {content.callCtaLabel}
            </a>
          </div>
        </div>

        <aside className="w-full max-w-md space-y-4">
          <div
            className="h-44 rounded-xl border border-main-100 bg-cover bg-center shadow-sm"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80')",
            }}
            role="img"
            aria-label="Law books and scales in an office"
          />
          <div className="rounded-xl border border-main-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-main-950">{content.whyChooseTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-main-900/80">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="pt-0.5 text-main-500">
                    -
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
