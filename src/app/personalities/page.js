import Link from "next/link";
import PersonalityDirectory from "@/components/personalities/PersonalityDirectory";
import { personalities } from "@/data/personalities";

const title = "Featured Personalities | NAPOSA";
const description =
  "Celebrate the remarkable people of Nsaba Presbyterian Senior High School and honour the memories of those who shaped its community.";
const socialImage = "/images/naposa/naposa-social-card.png";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/personalities" },
  openGraph: {
    title,
    description,
    url: "/personalities",
    siteName: "NAPOSA",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "NAPOSA branded social sharing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function PersonalitiesPage() {
  return (
    <main>
      <header className="bg-navy py-12 text-white md:py-16">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="underline-offset-4 hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Personalities
              </li>
            </ol>
          </nav>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-naposaGold">
            Stories that stay with us
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Featured Personalities
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
            Celebrating the people whose service, friendship and spirit have
            shaped the Nsaba Presbyterian community across generations.
          </p>
        </div>
      </header>

      <section className="bg-cream py-10 md:py-14" aria-label="Personality profiles">
        <div className="section-shell">
          <PersonalityDirectory personalities={personalities} />
        </div>
      </section>
    </main>
  );
}
