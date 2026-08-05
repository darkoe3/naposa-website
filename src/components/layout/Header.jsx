"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/96 backdrop-blur">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 min-[1180px]:flex-none"
          onClick={closeMenu}
          aria-label="NAPOSA home"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line bg-white">
            <Image
              src={site.logo}
              alt="NAPOSA logo"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-wide text-navy sm:text-base">
              {site.acronym}
            </span>
            <span className="hidden max-w-[230px] truncate text-xs font-medium text-muted min-[1536px]:block">
              {site.name}
            </span>
            <span className="block text-xs font-semibold text-naposaRed">
              {site.motto}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 min-[1180px]:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-semibold text-ink transition hover:bg-cream hover:text-royal xl:px-2.5 2xl:px-3 2xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden min-[1180px]:block">
          <Button href="/#membership" className="px-4 py-2.5">
            Join NAPOSA
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy min-[1180px]:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-navy/55 min-[1180px]:hidden">
          <div
            id="mobile-menu"
            className="ml-auto flex h-dvh w-[min(88vw,380px)] flex-col bg-white shadow-soft"
          >
            <div className="flex min-h-20 items-center justify-between gap-4 border-b border-line px-5">
              <div className="flex items-center gap-3">
                <span className="relative h-11 w-11 overflow-hidden rounded-full border border-line">
                  <Image
                    src={site.logo}
                    alt="NAPOSA logo"
                    fill
                    sizes="44px"
                    className="object-contain p-1"
                  />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-navy">{site.acronym}</p>
                  <p className="text-xs font-semibold text-naposaRed">
                    {site.motto}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-base font-semibold text-ink hover:bg-cream hover:text-royal"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/#membership" className="mt-4 w-full" onClick={closeMenu}>
                Join NAPOSA
              </Button>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
