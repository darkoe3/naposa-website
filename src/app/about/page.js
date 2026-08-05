import { Award, CalendarDays, HeartHandshake, Link2, Sparkles } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const aboutTitle = "About NAPOSA | Nsaba Presbyterian Old Students Association";
const aboutDescription =
  "Learn about NAPOSA and the history of Nsaba Presbyterian Senior High School, established in Agona Nsaba in 1962.";
const socialImageUrl = "/images/naposa/naposa-social-card.png";

const identities = [
  "Nsaba Presbyterian Training College",
  "Nsaba Presbyterian Secondary School",
  "Nsaba Presbyterian Senior High School",
];

const timeline = [
  {
    year: "1962",
    milestone: "Established as an all-male Teacher Training College",
  },
  {
    year: "1972",
    milestone: "Transitioned into a mixed-gender secondary school",
  },
  {
    year: "Today",
    milestone:
      "Nsaba Presbyterian Senior High School continues its academic, moral and faith-based mission",
  },
];

const values = [
  {
    name: "Connection",
    icon: Link2,
    description:
      "Strengthening lifelong relationships across year groups, professions and locations.",
  },
  {
    name: "Service",
    icon: HeartHandshake,
    description:
      "Bringing together alumni expertise and resources to support our alma mater.",
  },
  {
    name: "Legacy",
    icon: Sparkles,
    description:
      "Preserving our shared history while creating opportunities for future generations.",
  },
  {
    name: "Excellence",
    icon: Award,
    description:
      "Upholding the values, character and distinguished identity of Nsaba Presbyterian.",
  },
];

export const metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: "/about",
    siteName: "NAPOSA",
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "NAPOSA branded social sharing image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [socialImageUrl],
  },
};

export default function AboutPage() {
  const schoolJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.school,
    url: site.canonicalUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agona Nsaba",
      addressRegion: "Central Region",
      addressCountry: "GH",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schoolJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="navy-overlay absolute inset-0">
            <Image
              src="/images/naposa/school-campus.jpg"
              alt="Campus view at Nsaba Presbyterian Senior High School"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="section-shell relative z-10 flex min-h-[460px] items-center py-16 md:min-h-[540px] md:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-naposaGold">
                About NAPOSA
              </p>
              <h1 className="font-heading text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl">
                Connecting Every Generation of Nsaba Presbyterian Alumni.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
                NAPOSA unites past students from every stage of the
                institution&apos;s history, strengthening lifelong relationships
                and mobilising alumni support for the school and future
                generations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal">
                Who We Are
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-navy md:text-5xl">
                Rooted in a Shared Heritage.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                NAPOSA brings together past students of Nsaba Presbyterian
                Training College, Nsaba Presbyterian Secondary School and Nsaba
                Presbyterian Senior High School to sustain lifelong
                relationships, support the school and create meaningful
                opportunities for current and future generations.
              </p>
            </div>

            <div className="rounded-md border border-line bg-cream/50 p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-navy">
                Historical Institutional Identities
              </h3>
              <ol className="mt-5 grid gap-3">
                {identities.map((identity, index) => (
                  <li
                    key={identity}
                    className="flex gap-3 rounded-md border border-line bg-white p-4 text-sm font-bold leading-6 text-ink"
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-naposaGold text-xs font-extrabold text-navy"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span>{identity}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20 lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal">
                Our History
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-navy md:text-5xl">
                Our History
              </h2>
              <p className="mt-5 text-base leading-8 text-muted md:text-lg">
                Nsaba Presbyterian Senior High School, located in Agona Nsaba
                within the Central Region of Ghana, began in 1962 as an all-male
                Teacher Training College before transitioning into a
                mixed-gender secondary school in 1972. Rooted deeply in the
                mission and vision of the Presbyterian Church of Ghana, the
                institution goes beyond academics to shape students into
                disciplined, morally upright, and God-fearing leaders of
                integrity. By integrating spiritual guidance with a robust
                curriculum spanning General Arts, Business, General Science, and
                Home Economics, the school fosters critical thinking, effective
                communication, and strong relationship-building. This
                faith-based foundation drives its ongoing commitment to
                producing well-rounded citizens equipped to serve society with
                distinction.
              </p>
            </div>

            <div className="rounded-md border border-line bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-royal" size={24} aria-hidden="true" />
                <h3 className="text-lg font-extrabold text-navy">
                  Heritage Timeline
                </h3>
              </div>
              <ol className="mt-6 grid gap-4">
                {timeline.map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-2 border-l-2 border-naposaGold pl-4"
                  >
                    <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-naposaRed">
                      {item.year}
                    </p>
                    <p className="text-base font-semibold leading-7 text-ink">
                      {item.milestone}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal">
                Values and Purpose
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-navy md:text-5xl">
                Values and Purpose
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.name}
                    className="rounded-md border border-line bg-cream/50 p-5"
                  >
                    <Icon className="text-royal" size={24} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-extrabold text-navy">
                      {value.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
            <p className="mt-4 rounded-md border border-line bg-white px-4 py-3 text-sm text-muted">
              Value statements will be aligned with the official NAPOSA
              Constitution when supplied.
            </p>
          </div>
        </section>

        <section className="bg-navy py-16 text-white md:py-20 lg:py-24">
          <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
                Honour the Heritage. Help Shape the Future.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78 md:text-lg">
                Reconnect with the NAPOSA family and contribute to the
                continuing story of Nsaba Presbyterian Senior High School.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button href="/#membership" className="w-full sm:w-auto">
                Join NAPOSA
              </Button>
              <Button href="/#contact" variant="gold" className="w-full sm:w-auto">
                Contact NAPOSA
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
