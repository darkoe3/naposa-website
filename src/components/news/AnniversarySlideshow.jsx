"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { anniversaryPhotos } from "@/data/anniversary";

function subscribe(callback) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  document.addEventListener("visibilitychange", callback);
  return () => {
    media.removeEventListener("change", callback);
    document.removeEventListener("visibilitychange", callback);
  };
}
function autoplayAllowed() {
  return !document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
const serverSnapshot = () => false;
const controlClass = "min-h-11 rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-4 focus-visible:!outline-naposaGold";

export default function AnniversarySlideshow({ slides = anniversaryPhotos } = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const allowed = useSyncExternalStore(subscribe, autoplayAllowed, serverSnapshot);
  const playing = allowed && !hovered && !focused && !paused;
  const count = slides.length;
  const activeSlide = slides[activeIndex];

  const showNext = useCallback(() => {
    if (count > 0) {
      setActiveIndex((current) => (current + 1) % count);
    }
  }, [count]);

  const showPrevious = useCallback(() => {
    if (count > 0) {
      setActiveIndex((current) => (current - 1 + count) % count);
    }
  }, [count]);

  const showSlide = useCallback((index) => {
    if (index >= 0 && index < count) {
      setActiveIndex(index);
    }
  }, [count]);

  useEffect(() => {
    if (!playing || count < 2) return undefined;
    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [playing, showNext, count]);

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

  if (!activeSlide) {
    return (
      <div role="region" aria-roledescription="carousel" aria-label="65th Anniversary launch photo slideshow"
        className="min-w-0 rounded-md bg-navy p-3 text-sm text-white shadow-sm">
        No photographs are available.
      </div>
    );
  }

  return (
        <div role="region" aria-roledescription="carousel" aria-label="65th Anniversary launch photo slideshow"
          className="min-w-0 rounded-md bg-navy p-3 shadow-sm"
          onPointerEnter={(event) => { if (event.pointerType !== "touch") setHovered(true); }}
          onPointerLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
          onKeyDown={handleKeyDown}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <button type="button" className={controlClass} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
              {paused ? "Resume slideshow" : "Pause slideshow"}
            </button>
            <span className="text-sm font-semibold text-white" aria-label={`Photograph ${activeIndex + 1} of ${count}`}>{activeIndex + 1} / {count}</span>
          </div>
          <figure role="group" aria-roledescription="slide" aria-label={`Photograph ${activeIndex + 1} of ${count}`} aria-live={playing ? "off" : "polite"} aria-atomic="true">
            <div className="relative h-[260px] touch-pan-y sm:h-[360px] lg:h-[320px]"
              onTouchStart={(event) => {
                touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
              }}
              onTouchCancel={() => { touchStart.current = null; }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                if (!start || !event.changedTouches.length) return;
                const dx = event.changedTouches[0].clientX - start.x;
                const dy = event.changedTouches[0].clientY - start.y;
                if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                  if (dx < 0) showNext();
                  else showPrevious();
                }
              }}>
              <Image key={activeSlide.src} src={activeSlide.src} alt={activeSlide.alt} fill
                sizes="(min-width: 1240px) 531px, (min-width: 1024px) calc((100vw - 160px) / 2), (min-width: 640px) calc(100vw - 106px), calc(100vw - 90px)" className="object-contain" />
            </div>
            <figcaption className="mt-3 min-h-[120px] rounded-md bg-white p-3 text-sm leading-6 text-ink sm:min-h-[96px]">{activeSlide.caption}</figcaption>
          </figure>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <button type="button" aria-label="Previous photograph" className={controlClass} onClick={showPrevious}>Previous</button>
            <div className="order-last flex w-full flex-wrap justify-center gap-1" aria-label="Choose a photograph" role="group">
              {slides.map((slide, slideIndex) => (
                <button key={slide.src} type="button" aria-label={`View photograph ${slideIndex + 1}`} aria-current={slideIndex === activeIndex ? "true" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-md focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-naposaGold"
                  onClick={() => showSlide(slideIndex)}>
                  <span aria-hidden="true" className={`h-3 w-3 rounded-full ${slideIndex === activeIndex ? "bg-naposaGold" : "bg-white/60"}`} />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next photograph" className={controlClass} onClick={showNext}>Next</button>
          </div>
        </div>
  );
}
