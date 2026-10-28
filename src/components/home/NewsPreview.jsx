import { CalendarDays } from "lucide-react";
import Image from "next/image";
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
          Keep up with official announcements, school celebrations, homecoming
          activities, scholarships and volunteer opportunities.
        </SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {newsItems.map((item) => (
            item.flyer ? (
              <article key={item.title} className="min-w-0 rounded-md border border-line bg-white p-4 shadow-sm sm:p-6 md:col-span-2">
                <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
                  <div className="min-w-0">
                    <Image
                      src={item.flyer}
                      alt="Programme flyer for the launching of Nsaba Presbyterian Senior High School’s 65th Anniversary Celebration from 29 October to 1 November 2026"
                      width={1254}
                      height={1254}
                      sizes="(min-width: 1240px) 555px, (min-width: 1024px) calc((100vw - 112px) / 2), (min-width: 640px) calc(100vw - 82px), calc(100vw - 66px)"
                      className="h-auto w-full rounded-md border border-line object-contain"
                    />
                    <a
                      href={item.flyer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-bold text-royal underline underline-offset-4 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
                    >
                      View Full Programme<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                  <div className="min-w-0">
                    <p className="inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold text-navy">{item.category}</p>
                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 font-semibold text-royal">{item.organiser}</p>
                    <p className="mt-2 font-bold text-navy">{item.period}</p>
                    <p className="mt-4 leading-7 text-ink"><span className="font-bold">Theme: </span>{item.theme}</p>
                    <p className="mt-4 text-sm leading-6 text-ink">{item.description}</p>
                    <h4 className="mt-5 font-bold text-navy">Programme</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-ink">
                      {item.programme.map((entry) => (
                        <li key={entry.date}>
                          <time dateTime={entry.date} className="font-semibold">{entry.label}</time>
                          {" — "}{entry.activity}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 rounded-md bg-cream p-4 text-sm leading-6 text-navy">
                      <h4 className="font-bold">Anniversary launch — 31 October 2026</h4>
                      <p>{item.launchVenue}</p>
                      <p className="font-semibold">{item.launchTime}</p>
                    </div>
                    <p className="mt-4 text-sm font-bold text-royal">{item.hashtag}</p>
                  </div>
                </div>
              </article>
            ) : (
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
            )
          ))}
        </div>
      </div>
    </section>
  );
}
