"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./PersonalityGallery.module.css";

export default function PersonalityGallery({ name, images, birthday = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const count = images.length;

  const showImage = (index) => {
    setActiveIndex((index + count) % count);
  };

  return (
    <div
      className="min-w-0 rounded-lg border border-line bg-white p-3 shadow-soft sm:p-4"
      role="region"
      aria-label={`${name} photo gallery`}
      aria-roledescription="carousel"
      onKeyDown={birthday ? (event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        const destinations = {
          ArrowLeft: activeIndex - 1,
          ArrowRight: activeIndex + 1,
          Home: 0,
          End: count - 1,
        };
        if (!(event.key in destinations)) return;
        event.preventDefault();
        showImage(destinations[event.key]);
      } : undefined}
    >
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-cream">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            loading={birthday ? (activeIndex === 0 ? "eager" : "lazy") : undefined}
            fetchPriority={birthday && activeIndex === 0 ? "high" : undefined}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 70vw, calc(100vw - 56px)"
            className={`object-contain transition-transform duration-500 motion-safe:hover:scale-[1.02]${birthday ? ` ${styles.image}` : ""}`}
          />
        </div>
        <figcaption className="sr-only">
          Photograph {activeIndex + 1} of {count}: {activeImage.alt}
        </figcaption>
      </figure>

      {count > 1 ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            className="min-h-11 rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
            onClick={() => showImage(activeIndex - 1)}
            aria-label="Previous photograph"
          >
            Previous
          </button>
          <div
            className="flex flex-wrap justify-center gap-1"
            role="group"
            aria-label="Choose a photograph"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naposaGold"
                onClick={() => showImage(index)}
                aria-label={`View photograph ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  aria-hidden="true"
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-naposaGold" : "bg-line"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="min-h-11 rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
            onClick={() => showImage(activeIndex + 1)}
            aria-label="Next photograph"
          >
            Next
          </button>
        </div>
      ) : null}
      <p className="mt-2 text-center text-xs font-semibold text-muted" aria-live="polite">
        {activeIndex + 1} of {count}
      </p>
    </div>
  );
}
