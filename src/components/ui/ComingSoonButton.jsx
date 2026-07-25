export default function ComingSoonButton({
  children,
  className = "",
  ariaLabel,
  variant = "outline",
}) {
  const styles =
    variant === "outline"
      ? "border-line bg-white text-muted"
      : "border-line bg-cream text-muted";

  return (
    <button
      type="button"
      disabled
      aria-label={ariaLabel || `${children} coming soon`}
      className={`inline-flex min-h-11 cursor-not-allowed items-center justify-center whitespace-nowrap rounded-md border px-5 py-3 text-sm font-semibold ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="ml-2 rounded-full border border-line bg-cream px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
        Coming soon
      </span>
    </button>
  );
}
