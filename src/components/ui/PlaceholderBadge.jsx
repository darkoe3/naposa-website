export default function PlaceholderBadge({ children = "Placeholder" }) {
  return (
    <span className="inline-flex items-center rounded-full border border-naposaGold/50 bg-naposaGold/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-navy">
      {children}
    </span>
  );
}
