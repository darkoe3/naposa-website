import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-navy text-white lg:min-h-[640px] 2xl:min-h-[calc(100svh-72px)]">
      <div className="navy-overlay absolute inset-0">
        <Image
          src="/images/naposa/alumni-gathering.jpg"
          alt="NAPOSA alumni and school community gathering"
          fill
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
          priority
        />
      </div>
      <div className="section-shell relative z-10 grid min-h-[620px] items-center gap-8 py-12 lg:min-h-[640px] lg:py-14 xl:grid-cols-[minmax(0,1fr)_320px] 2xl:min-h-[calc(100svh-72px)]">
        <div className="max-w-3xl reveal">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-naposaGold">
            Established 1962 · Agona Nsaba
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.02] sm:text-5xl xl:text-6xl 2xl:text-7xl">
            Honouring Our Heritage. Building Our Future.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 [overflow-wrap:anywhere] sm:text-lg">
            The official home of the Nsaba Presbyterian Old Students
            Association - connecting generations, supporting our alma mater and
            carrying forward the spirit of Osompa Ye.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#membership" className="w-full sm:w-auto">
              Join NAPOSA
            </Button>
            <Button href="#projects" variant="secondary" className="w-full sm:w-auto">
              Explore Our Impact
            </Button>
          </div>
        </div>

        <aside className="reveal hidden max-w-full rounded-md border border-white/20 bg-white/95 p-5 text-navy shadow-soft xl:block">
          <div className="flex min-w-0 items-center gap-4">
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line bg-white">
              <Image
                src={site.logo}
                alt="NAPOSA logo"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">
                {site.acronym}
              </p>
              <p className="mt-1 text-wrap font-heading text-xl font-bold leading-tight sm:text-2xl">
                One School. Every Generation.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
