import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section id="gallery" className="bg-cream py-16 md:py-20 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Campus, Heritage and Alumni Moments."
          >
            Supplied images are arranged in an editorial grid and can be
            replaced as official media becomes available.
          </SectionHeading>
          <Button href="#contact" variant="outline" className="shrink-0">
            View Full Gallery
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative min-h-64 overflow-hidden rounded-md border border-line bg-navy ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy/82 p-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-naposaGold">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-semibold">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
