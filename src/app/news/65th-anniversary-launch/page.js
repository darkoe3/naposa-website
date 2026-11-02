import Image from "next/image";
import Link from "next/link";
import { anniversaryPhotos } from "@/data/anniversary";

const title = "65th Anniversary Launch | NAPOSA";
const description = "View highlights from the launch of Nsaba Presbyterian Senior High School’s 65th Anniversary celebration and the unveiling of an alumni-supported open bath house.";
const articleUrl = "/news/65th-anniversary-launch";
const hero = anniversaryPhotos[0];

export const metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    siteName: "NAPOSA",
    type: "article",
    locale: "en_GH",
    images: [{ url: hero.src, width: hero.width, height: hero.height, alt: hero.alt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [hero.src] },
};

export default function AnniversaryLaunchPage() {
  return (
    <main>
      <article>
        <header className="bg-navy py-12 text-white md:py-20">
          <div className="section-shell">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-naposaGold">65th Anniversary</p>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Nsaba Presbyterian Senior High School Launches Its 65th Anniversary Celebration
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">
              School leadership, old students, invited guests and members of the Nsaba Presbyterian community came together to launch the school’s 65th Anniversary celebration.
            </p>
            <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height}
              sizes="(min-width: 1240px) 1208px, calc(100vw - 32px)" priority
              className="mt-8 h-auto w-full rounded-md object-contain" />
          </div>
        </header>
        <div className="section-shell py-12 md:py-16">
          <div className="max-w-3xl space-y-5 text-base leading-8 text-ink sm:text-lg">
            <p>The launch marked the beginning of activities commemorating 65 years of academic excellence, faith-based education and service. The gathering brought together members of the school community to celebrate its heritage and look forward to the anniversary programme.</p>
            <p>The programme also highlighted the continuing contribution of old students to the development of the school, including the presentation and unveiling of an open bath house provided through alumni support.</p>
          </div>
        </div>
        <section aria-labelledby="photo-story-heading" className="bg-cream py-12 md:py-16">
          <div className="section-shell">
            <h2 id="photo-story-heading" className="font-heading text-3xl font-bold text-navy md:text-5xl">Launch Photo Story</h2>
            <div className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {anniversaryPhotos.map((photo) => (
                <figure key={photo.src} className="min-w-0 overflow-hidden rounded-md border border-line bg-white motion-safe:transition-shadow [@media(hover:hover)]:hover:shadow-md">
                  <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
                    sizes="(min-width: 1240px) 386px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 32px)"
                    className="h-auto w-full object-contain" />
                  <figcaption className="p-4 text-sm leading-6 text-ink">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <Link href="/#news" className="mt-8 inline-flex min-h-11 items-center rounded-md px-3 py-2 font-bold text-royal underline underline-offset-4">Back to News &amp; Events</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
