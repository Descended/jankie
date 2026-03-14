import type { AboutContent } from "./types";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="border-y border-main-100 bg-main-50 scroll-mt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-main-950">
            {content.title}
          </h2>
          <p className="mt-4 leading-8 text-main-900/80">
            {content.description}
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="h-28 rounded-xl border border-main-100 bg-cover bg-center shadow-sm sm:h-32"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=80')",
              }}
              role="img"
              aria-label="Lawyer workspace with documents"
            />
            <div
              className="h-28 rounded-xl border border-main-100 bg-cover bg-center shadow-sm sm:h-32"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1000&q=80')",
              }}
              role="img"
              aria-label="Courtroom gavel"
            />
          </div>
          <div className="rounded-xl border border-main-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-main-950">
              {content.testimonialTitle}
            </h3>
            <div className="mt-4 space-y-5 text-main-900/80">
              {content.testimonials.map((testimonial) => (
                <figure key={testimonial.name}>
                  <blockquote className="italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <figcaption className="mt-2 text-sm font-medium not-italic text-main-950">
                    {testimonial.name}, {testimonial.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
