"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const filters = [
  { label: "All profiles", value: "all" },
  { label: "Birthday tributes", value: "birthday" },
  { label: "In memoriam", value: "memorial" },
];

export default function PersonalityDirectory({ personalities }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return personalities.filter((personality) => {
      const matchesFilter = filter === "all" || personality.type === filter;
      const searchableText = [
        personality.name,
        personality.title,
        personality.subtitle,
        personality.badge,
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [filter, personalities, query]);

  return (
    <>
      <div className="mt-9 grid gap-4 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-5">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-navy">
            Search personalities
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or profile"
            className="min-h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink placeholder:text-muted focus:border-royal focus:outline-none focus:ring-2 focus:ring-naposaGold/60"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter profiles">
          {filters.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
              className={`min-h-11 rounded-md px-4 py-2 text-sm font-bold transition ${
                filter === option.value
                  ? "bg-navy text-white"
                  : "border border-line bg-white text-navy hover:border-royal"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        {filteredProfiles.length}{" "}
        {filteredProfiles.length === 1 ? "profile" : "profiles"}
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProfiles.map((personality) => (
          <article
            key={personality.slug}
            className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
              personality.type === "birthday"
                ? "border-naposaGold/50"
                : "border-line"
            }`}
          >
            <Link
              href={`/personalities/${personality.slug}`}
              className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naposaGold"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  personality.type === "birthday" ? "bg-cream" : "bg-[#f3f2ef]"
                }`}
              >
                <Image
                  src={personality.images[0].src}
                  alt={personality.images[0].alt}
                  fill
                  sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, calc(100vw - 32px)"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${
                    personality.type === "birthday"
                      ? "bg-naposaGold text-navy"
                      : "bg-navy text-white"
                  }`}
                >
                  {personality.badge}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-royal">
                  {personality.type === "birthday"
                    ? "Celebration"
                    : "Remembering"}
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
                  {personality.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {personality.subtitle}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-royal">
                  Read profile <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}

        <article className="flex min-h-[360px] flex-col justify-center rounded-lg border border-dashed border-line bg-white/70 p-6 text-center sm:p-8">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream font-heading text-2xl font-bold text-royal">
            +
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold text-navy">
            More stories to come
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            This space is reserved for the remarkable people who have shaped
            our school community.
          </p>
          <span className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-royal">
            Future personalities
          </span>
        </article>
      </div>

      {filteredProfiles.length === 0 ? (
        <p className="mt-6 rounded-md bg-white p-5 text-center text-muted">
          No profiles match your search. Try another name or filter.
        </p>
      ) : null}
    </>
  );
}
