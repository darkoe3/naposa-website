"use client";

import { useState } from "react";

export default function ShareButtons({ title, url }) {
  const [status, setStatus] = useState("");
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("Link copied.");
    } catch {
      setStatus("Unable to copy the link. You can copy it from your browser address bar.");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Share this profile">
      <a
        className="inline-flex min-h-11 items-center rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Share ${title} on Facebook`}
      >
        Facebook
      </a>
      <a
        className="inline-flex min-h-11 items-center rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
        href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Share ${title} on WhatsApp`}
      >
        WhatsApp
      </a>
      <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
        onClick={copyLink}
      >
        Copy link
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
