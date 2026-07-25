import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white">
              <Image
                src={site.logo}
                alt="NAPOSA logo"
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </span>
            <div>
              <p className="font-heading text-xl font-bold">{site.acronym}</p>
              <p className="text-sm font-semibold text-naposaGold">{site.motto}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/76">
            Connecting generations of Nsaba Presbyterian Senior High School
            alumni in Ghana and the diaspora.
          </p>
          <p className="mt-3 text-sm text-white/72">
            Agona Nsaba, Central Region, Ghana
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-naposaGold">
            Quick Links
          </h2>
          <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2" aria-label="Footer links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/78 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-naposaGold">
            Contact
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/72">
            Official contact and social-media information will be published
            soon.
          </p>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="section-shell flex flex-col gap-2 py-4 text-sm text-white/66 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {site.acronym}. All rights
            reserved.
          </p>
          <Link
            href={site.developerCredit.url}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Website developed by {site.developerCredit.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}
