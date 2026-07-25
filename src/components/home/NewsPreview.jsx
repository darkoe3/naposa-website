import { CalendarDays } from "lucide-react";
import PlaceholderBadge from "@/components/ui/PlaceholderBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { newsItems } from "@/data/projects";

export default function NewsPreview() {
  return (
    <section id="news" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="News & Events"
          title="Stay Connected to NAPOSA."
          align="center"
        >
          Official announcements, homecoming activities, reunions, scholarships
          and volunteer opportunities will appear here.
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-md border border-line bg-white p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-cream text-royal">
                <CalendarDays size={22} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                {item.category}
              </p>
              <h3 className="mt-2 text-xl font-extrabold text-navy">{item.title}</h3>
              <div className="mt-4">
                <PlaceholderBadge>{item.description}</PlaceholderBadge>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
