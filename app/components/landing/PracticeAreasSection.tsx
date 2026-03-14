import type { PracticeAreasContent } from "./types";

interface PracticeAreasSectionProps {
  content: PracticeAreasContent;
}

export function PracticeAreasSection({ content }: PracticeAreasSectionProps) {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-main-950">{content.title}</h2>
        <p className="mt-3 text-main-900/80">{content.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((area) => (
          <article
            key={area.title}
            className="rounded-xl border border-main-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-main-950">{area.title}</h3>
            <p className="mt-3 text-main-900/80">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
