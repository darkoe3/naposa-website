import { Globe2, Landmark, UsersRound, WalletCards } from "lucide-react";

const highlights = [
  { label: "Established", value: "1962", icon: Landmark },
  { label: "National executives", value: "11", icon: UsersRound },
  { label: "Annual dues", value: "GH₵1,000 per year group", icon: WalletCards },
  { label: "Community", value: "Alumni in Ghana and the diaspora", icon: Globe2 },
];

export default function AssociationHighlights() {
  return (
    <section aria-label="Association highlights" className="border-b border-line bg-white">
      <div className="section-shell grid gap-4 py-6 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-md border border-line bg-cream/45 p-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-extrabold leading-snug text-navy xl:text-[15px]">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
