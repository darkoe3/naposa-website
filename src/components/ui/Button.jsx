import Link from "next/link";

const variants = {
  primary:
    "bg-naposaRed text-white border-naposaRed hover:bg-[#B9251B] hover:border-[#B9251B]",
  secondary:
    "bg-white text-navy border-white hover:bg-cream hover:border-cream",
  outline:
    "bg-transparent text-navy border-line hover:border-royal hover:text-royal",
  gold:
    "bg-naposaGold text-navy border-naposaGold hover:bg-[#C99A2D] hover:border-[#C99A2D]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md border px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
