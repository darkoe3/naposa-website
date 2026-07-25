export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  inverse = false,
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
            inverse ? "text-naposaGold" : "text-royal"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-bold leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            inverse ? "text-white/82" : "text-muted"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
