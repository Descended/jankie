import type { PracticeAreasContent } from "./types";

interface PracticeAreasSectionProps {
  content: PracticeAreasContent;
}

const practiceAreaImages = [
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
] as const;

export function PracticeAreasSection({ content }: PracticeAreasSectionProps) {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-main-950">{content.title}</h2>
        <p className="mt-3 text-main-900/80">{content.description}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((area, index) => (
          <article
            key={area.title}
            className="overflow-hidden rounded-xl border border-main-100 bg-white shadow-sm"
          >
            <div
              className="h-36 bg-cover bg-center"
              style={{
                backgroundImage: `url('${practiceAreaImages[index % practiceAreaImages.length]}')`,
              }}
              role="img"
              aria-label={`${area.title} visual`}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-main-950">{area.title}</h3>
              <p className="mt-3 text-main-900/80">{area.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
