import { UserRound } from "lucide-react";
import ComingSoonButton from "@/components/ui/ComingSoonButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { executives } from "@/data/executives";

function initials(name) {
  return name
    .split(" ")
    .filter((part) => !["Dr.", "Mr.", "Mrs", "Lady", "Rev."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ExecutiveCard({ executive, prominent = false }) {
  return (
    <article
      className={`rounded-md border border-line bg-white p-4 shadow-sm ${
        prominent ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div
        className={`flex items-center gap-4 ${prominent ? "sm:gap-5" : ""}`}
      >
        <div
          className={`flex shrink-0 items-center justify-center rounded-full border border-line bg-cream text-navy ${
            prominent ? "h-20 w-20 text-2xl" : "h-14 w-14 text-base"
          }`}
          aria-label={`Portrait placeholder for ${executive.fullName}`}
        >
          {initials(executive.fullName) || <UserRound size={24} aria-hidden="true" />}
        </div>
        <div>
          <h3 className="text-base font-extrabold leading-snug text-navy sm:text-lg">
            {executive.fullName}
          </h3>
          <p className="mt-1 text-sm font-bold text-royal">{executive.position}</p>
          {prominent ? (
            <p className="mt-3 text-sm leading-6 text-muted">
              Leading the national executive in advancing NAPOSA&apos;s vision,
              service and alumni engagement.
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function LeadershipPreview() {
  const [president, ...others] = executives;
  const preview = others.slice(0, 7);

  return (
    <section id="leadership" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="National Leadership"
            title="Stewardship for Every Generation."
          >
            Current NAPOSA executive records are structured for official
            portraits, profiles and contact details when supplied.
          </SectionHeading>
          <ComingSoonButton
            className="shrink-0"
            ariaLabel="View all executives page coming soon"
          >
            View All Executives
          </ComingSoonButton>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ExecutiveCard executive={president} prominent />
          {preview.map((executive) => (
            <ExecutiveCard key={executive.fullName} executive={executive} />
          ))}
        </div>
        <p className="mt-4 rounded-md border border-line bg-cream/55 px-4 py-3 text-sm text-muted">
          Official executive portraits and approved profiles will be added when
          supplied.
        </p>
      </div>
    </section>
  );
}
