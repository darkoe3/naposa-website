"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { anniversaryPhotos } from "@/data/anniversary";

const controlClass = "relative z-10 pointer-events-auto min-h-11 rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-4 focus-visible:!outline-naposaGold";

export default function AnniversarySlideshow({ slides = anniversaryPhotos } = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const safeSlides = Array.isArray(slides) ? slides.filter(Boolean) : [];
  const count = safeSlides.length;
  const normalizedIndex = count === 0 ? 0 : ((activeIndex % count) + count) % count;

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const updateVisibility = () => setIsDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setPrefersReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);
    return () => media.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    if (isPaused || isHovered || isFocusWithin || isDocumentHidden || prefersReducedMotion || count <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isHovered, isFocusWithin, isDocumentHidden, prefersReducedMotion, count]);

  if (!count) return null;

  const activeSlide = safeSlides[normalizedIndex] ?? safeSlides[0];
  const playing = !isPaused && !isHovered && !isFocusWithin && !isDocumentHidden && !prefersReducedMotion && count > 1;

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % count);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + count) % count);
  };

  const showSlide = (index) => {
    if (!count) return;
    setActiveIndex((index + count) % count);
  };

  function handleKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const actions = {
      ArrowLeft: showPrevious,
      ArrowRight: showNext,
      Home: () => showSlide(0),
      End: () => showSlide(count - 1),
    };
    if (!(event.key in actions)) return;
    event.preventDefault();
    actions[event.key]();
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="65th Anniversary launch photo slideshow"
      className="min-w-0 rounded-md bg-navy p-3 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          className={controlClass}
          aria-pressed={isPaused}
          onClick={() => setIsPaused((current) => !current)}
        >
          {isPaused ? "Resume slideshow" : "Pause slideshow"}
        </button>
        <span className="text-sm font-semibold text-white" aria-label={`Photograph ${normalizedIndex + 1} of ${count}`}>
          {normalizedIndex + 1} / {count}
        </span>
      </div>
      <figure
        role="group"
        aria-roledescription="slide"
        aria-label={`Photograph ${normalizedIndex + 1} of ${count}`}
        aria-live={playing ? "off" : "polite"}
        aria-atomic="true"
      >
        <div className="relative h-[260px] sm:h-[360px] lg:h-[320px]">
          <Image
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            sizes="(min-width: 1240px) 531px, (min-width: 1024px) calc((100vw - 160px) / 2), (min-width: 640px) calc(100vw - 106px), calc(100vw - 90px)"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-3 min-h-[120px] rounded-md bg-white p-3 text-sm leading-6 text-ink sm:min-h-[96px]">
          {activeSlide.caption}
        </figcaption>
      </figure>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <button type="button" aria-label="Previous photograph" className={controlClass} onClick={showPrevious}>
          Previous
        </button>
        <div className="order-last flex w-full flex-wrap justify-center gap-1" aria-label="Choose a photograph" role="group">
          {safeSlides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`View photograph ${slideIndex + 1}`}
              aria-current={slideIndex === normalizedIndex ? "true" : undefined}
              className="relative z-10 pointer-events-auto flex h-11 w-11 items-center justify-center rounded-md focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-naposaGold"
              onClick={() => showSlide(slideIndex)}
            >
              <span aria-hidden="true" className={`pointer-events-none h-3 w-3 rounded-full ${slideIndex === normalizedIndex ? "bg-naposaGold" : "bg-white/60"}`} />
            </button>
          ))}
        </div>
        <button type="button" aria-label="Next photograph" className={controlClass} onClick={showNext}>
          Next
        </button>
      </div>
    </div>
  );
}
