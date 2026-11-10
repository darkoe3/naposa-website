import Link from "next/link";
import { notFound } from "next/navigation";
import BirthdayProfile from "@/components/personalities/BirthdayProfile";
import PersonalityGallery from "@/components/personalities/PersonalityGallery";
import ShareButtons from "@/components/personalities/ShareButtons";
import { personalities } from "@/data/personalities";
import { site } from "@/data/site";

function findPersonality(slug) {
  return personalities.find((personality) => personality.slug === slug);
}

export function generateStaticParams() {
  return personalities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const personality = findPersonality(slug);
  if (!personality) return {};

  return {
    title: `${personality.title} | NAPOSA`,
    description: personality.subtitle,
    alternates: { canonical: `/personalities/${personality.slug}` },
    openGraph: {
      title: `${personality.title} | NAPOSA`,
      description: personality.subtitle,
      url: `/personalities/${personality.slug}`,
      siteName: "NAPOSA",
      type: "article",
      images: [
        {
          url: personality.images[0].src,
          alt: personality.images[0].alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${personality.title} | NAPOSA`,
      description: personality.subtitle,
      images: [personality.images[0].src],
    },
  };
}

function MemorialContent({ personality }) {
  return (
    <div className="space-y-8">
      {personality.sections.map((section) => (
        <section key={section.heading} aria-labelledby={`section-${section.heading}`}>
          <h2
            id={`section-${section.heading}`}
            className="font-heading text-2xl font-bold text-navy sm:text-3xl"
          >
            {section.heading}
          </h2>
          <div className="mt-3 space-y-4 text-base leading-8 text-ink">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-ink marker:text-royal">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <section className="border-t border-line pt-6" aria-label="In remembrance">
        <div className="space-y-2 font-heading text-xl italic text-navy sm:text-2xl">
          {personality.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-muted">
          {personality.attribution}
        </p>
      </section>
    </div>
  );
}

export default async function PersonalityPage({ params }) {
  const { slug } = await params;
  const personality = findPersonality(slug);
  if (!personality) notFound();

  if (personality.type === "birthday") {
    return <BirthdayProfile personality={personality} />;
  }

  return (
    <main>
      <article>
        <header className="bg-navy py-8 text-white sm:py-10">
          <div className="section-shell">
            <nav aria-label="Breadcrumb" className="text-sm text-white/75">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link className="underline-offset-4 hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    className="underline-offset-4 hover:underline"
                    href="/personalities"
                  >
                    Personalities
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="max-w-[65vw] truncate text-white">
                  {personality.name}
                </li>
              </ol>
            </nav>
            <span className="mt-7 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
              {personality.badge}
            </span>
            <h1 className="mt-3 max-w-4xl font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {personality.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              {personality.subtitle}
            </p>
          </div>
        </header>

        <div className="bg-[#f7f7f5] py-8 md:py-12">
          <div className="section-shell">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
              <PersonalityGallery
                name={personality.name}
                images={personality.images}
              />
              <div className="min-w-0">
                <MemorialContent personality={personality} />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">
                  Share this remembrance
                </h2>
                <div className="mt-3">
                  <ShareButtons
                    title={personality.title}
                    url={`${site.canonicalUrl}/personalities/${personality.slug}`}
                  />
                </div>
              </div>
              <Link
                href="/personalities"
                className="inline-flex min-h-11 w-fit items-center rounded-md px-3 py-2 font-bold text-royal underline underline-offset-4 hover:text-navy"
              >
                Back to all personalities
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
